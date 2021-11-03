(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.DOMString = exports.DOM = void 0;
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

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("./lib/element");

var _theme = _interopRequireDefault(require("./theme/theme"));

var OceanWP = function OceanWP() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OceanWP);
  (0, _defineProperty2["default"])(this, "start", function () {
    _this.theme = new _theme["default"]();
  });
};

"use script";
window.oceanwp = new OceanWP();
oceanwp.start();

},{"./lib/element":3,"./theme/theme":29,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],3:[function(require,module,exports){
"use strict";

Element.prototype.oceanParents = function (selector) {
  var elements = [];
  var elem = this;
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};

},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = exports.visible = exports.slideUp = exports.slideToggle = exports.slideDown = exports.offset = exports.isSelectorValid = exports.isElement = exports.getSiblings = exports.fadeToggle = exports.fadeOut = exports.fadeIn = void 0;

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

},{"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/typeof":43}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var BlogMasonry = function BlogMasonry() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BlogMasonry);
  (0, _defineProperty2["default"])(this, "isotop", void 0);
  (0, _defineProperty2["default"])(this, "start", function () {
    var _DOM$blog$masonryGrid;

    (_DOM$blog$masonryGrid = _constants.DOM.blog.masonryGrids) === null || _DOM$blog$masonryGrid === void 0 ? void 0 : _DOM$blog$masonryGrid.forEach(function (blogMasonryGrid) {
      imagesLoaded(blogMasonryGrid, function (instance) {
        _this.isotop = new Isotope(blogMasonryGrid, {
          itemSelector: ".isotope-entry",
          transformsEnabled: true,
          isOriginLeft: _constants.options.isRTL ? false : true,
          transitionDuration: 0
        });
      });
    });
  });
  this.start();
};

exports["default"] = BlogMasonry;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _responsiveAutoHeight = _interopRequireDefault(require("responsive-auto-height"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _executed = /*#__PURE__*/new WeakMap();

var EqualHeightElements = function EqualHeightElements() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, EqualHeightElements);

  _classPrivateFieldInitSpec(this, _executed, {
    writable: true,
    value: false
  });

  (0, _defineProperty2["default"])(this, "start", function () {
    if (!!document.querySelector(".blog-equal-heights .blog-entry-inner")) {
      new _responsiveAutoHeight["default"](".blog-equal-heights .blog-entry-inner");
    }

    if (!!document.querySelector(".match-height-grid .match-height-content")) {
      new _responsiveAutoHeight["default"](".match-height-grid .match-height-content");
    }

    (0, _classPrivateFieldSet2["default"])(_this, _executed, true);
  });

  if (window.innerWidth > 768) {
    this.start();
  }

  window.addEventListener("resize", function (event) {
    if (window.innerWidth > 768 && !(0, _classPrivateFieldGet2["default"])(_this, _executed)) {
      _this.start();
    }
  });
};

var _default = EqualHeightElements;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40,"responsive-auto-height":55}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _lastWindowWidth = /*#__PURE__*/new WeakMap();

var _lastWindowHeight = /*#__PURE__*/new WeakMap();

var _footerPositionState = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowLoad = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _fixFooterAtMiddlePage = /*#__PURE__*/new WeakMap();

var _fixedFooter = /*#__PURE__*/new WeakMap();

var _parallaxFooter = /*#__PURE__*/new WeakMap();

var Footer = function Footer() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Footer);

  _classPrivateFieldInitSpec(this, _lastWindowWidth, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _lastWindowHeight, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _footerPositionState, {
    writable: true,
    value: null
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowWidth, window.innerWidth);
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowHeight, window.innerHeight);
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      window.addEventListener("load", (0, _classPrivateFieldGet2["default"])(_this, _onWindowLoad));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowLoad, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);

      if ((0, _classPrivateFieldGet2["default"])(_this, _lastWindowWidth) !== window.innerWidth || (0, _classPrivateFieldGet2["default"])(_this, _lastWindowHeight) !== window.innerHeight) {
        (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      }

      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _fixFooterAtMiddlePage, {
    writable: true,
    value: function value() {
      var _DOM$WPAdminbar$offse, _DOM$WPAdminbar, _DOM$footer$footerBar, _DOM$footer$footerBar2;

      var wpAdminbarHeight = (_DOM$WPAdminbar$offse = (_DOM$WPAdminbar = _constants.DOM.WPAdminbar) === null || _DOM$WPAdminbar === void 0 ? void 0 : _DOM$WPAdminbar.offsetHeight) !== null && _DOM$WPAdminbar$offse !== void 0 ? _DOM$WPAdminbar$offse : 0;
      var footerBarHeight = (_DOM$footer$footerBar = (_DOM$footer$footerBar2 = _constants.DOM.footer.footerBar) === null || _DOM$footer$footerBar2 === void 0 ? void 0 : _DOM$footer$footerBar2.offsetHeight) !== null && _DOM$footer$footerBar !== void 0 ? _DOM$footer$footerBar : 0;
      var htmlHeight = _constants.DOM.html.offsetHeight - wpAdminbarHeight;

      if (htmlHeight < window.innerHeight) {
        _constants.DOM.wrap.style.cssText = "\n                display: flex;\n                flex-direction: column;\n                min-height: calc(100vh - ".concat(wpAdminbarHeight, "px - ").concat(footerBarHeight, "px);\n            ");

        if (!!_constants.DOM.footer.calloutFooter) {
          _constants.DOM.footer.calloutFooter.style.marginTop = "auto";
        } else if (!!_constants.DOM.footer.siteFooter) {
          _constants.DOM.footer.siteFooter.style.marginTop = "auto";
        }

        (0, _classPrivateFieldSet2["default"])(_this, _footerPositionState, "changed");
      } else if ((0, _classPrivateFieldGet2["default"])(_this, _footerPositionState) === "changed") {
        _constants.DOM.wrap.style.cssText = "";

        if (!!_constants.DOM.footer.calloutFooter) {
          _constants.DOM.footer.calloutFooter.style.marginTop = null;
        } else {
          _constants.DOM.footer.siteFooter.style.marginTop = null;
        }

        (0, _classPrivateFieldSet2["default"])(_this, _footerPositionState, null);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _fixedFooter, {
    writable: true,
    value: function value() {
      if (!document.body.classList.contains("has-fixed-footer")) {
        return;
      }

      var offset = 0;

      if (!!_constants.DOM.WPAdminbar) {
        offset = _constants.DOM.WPAdminbar.offsetHeight;
      }

      _constants.DOM.main.style.minHeight = _constants.DOM.main.offsetHeight + (window.innerHeight - _constants.DOM.html.offsetHeight - offset) + "px";
    }
  });

  _classPrivateFieldInitSpec(this, _parallaxFooter, {
    writable: true,
    value: function value() {
      if (_constants.DOM.body.classList.contains("has-parallax-footer")) {
        setTimeout(function () {
          var _DOM$footer$parallax;

          var mainSectionMarginBottom = 0;
          mainSectionMarginBottom += (_DOM$footer$parallax = _constants.DOM.footer.parallax) === null || _DOM$footer$parallax === void 0 ? void 0 : _DOM$footer$parallax.offsetHeight;

          if (!!_constants.DOM.footer.calloutFooter) {
            _constants.DOM.footer.calloutFooter.style.bottom = "".concat(mainSectionMarginBottom, "px");
            mainSectionMarginBottom += _constants.DOM.footer.calloutFooter.offsetHeight;
          }

          _constants.DOM.main.style.marginBottom = "".concat(mainSectionMarginBottom, "px");
        }, 10);
      }
    }
  });

  if (!_constants.DOM.main) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = Footer;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _vertical = _interopRequireDefault(require("./header/vertical"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var Header = function Header() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Header);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.vertical = new _vertical["default"]();
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = Header;
exports["default"] = _default;

},{"./header/vertical":9,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var VerticalHeader = function VerticalHeader() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, VerticalHeader);

  _classPrivateFieldInitSpec(this, _menuItemsPlusIcon, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children:not(.btn) > a").forEach(function (menuLink) {
        menuLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex="0"></span>');
      });

      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsPlusIcon, _constants.options.verticalHeaderTarget == "link" ? _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children > a") : _constants.DOM.header.vertical.querySelectorAll(".dropdown-toggle"));
      new PerfectScrollbar(_constants.DOM.header.vertical, {
        wheelSpeed: 0.5,
        suppressScrollX: false,
        suppressScrollY: false
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemsPlusIcon).forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemPlusIconClick));
      });

      _constants.DOM.menu.vertical.toggleMenuBtn.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick));

      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemPlusIconClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.verticalHeaderTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"), 250);
        });
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onToggleMenuBtnClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();

      if (!_constants.DOM.body.classList.contains("vh-opened")) {
        _constants.DOM.body.classList.add("vh-opened");

        _constants.DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.add("is-active");
      } else {
        _constants.DOM.body.classList.remove("vh-opened");

        _constants.DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.remove("is-active");
      }

      _constants.DOM.menu.vertical.toggleMenuBtn.focus();
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$header$vertical;

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var navElements = (_DOM$header$vertical = _constants.DOM.header.vertical) === null || _DOM$header$vertical === void 0 ? void 0 : _DOM$header$vertical.querySelectorAll("a, span.dropdown-toggle, input, button");
      var navFirstElement = navElements ? navElements[0] : "";
      var navLastElement = navElements ? navElements[navElements.length - 1] : "";
      navLastElement.style.outline = "";

      if (_constants.DOM.body.classList.contains("vertical-header-style")) {
        if (!_constants.DOM.body.classList.contains("vh-closed")) {
          if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
            document.activeElement.click();
          }
        }

        if (!_constants.DOM.body.classList.contains("vh-opened")) {
          return;
        }
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick).call(_this, event);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle") && _constants.DOM.body.classList.contains("vh-closed")) {
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        navFirstElement.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.header.vertical) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = VerticalHeader;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _utils = require("../../lib/utils");

var _fullScreen = _interopRequireDefault(require("./menu/full-screen"));

var _mega = _interopRequireDefault(require("./menu/mega"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onNoClickMenuItemClick = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseenter = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseleave = /*#__PURE__*/new WeakMap();

var Menu = function Menu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Menu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.fullScreen = new _fullScreen["default"]();
      _this.mega = new _mega["default"]();
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      document.querySelectorAll("li.nav-no-click > a").forEach(function (noClickMenuItem) {
        noClickMenuItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onNoClickMenuItemClick));
      });
      document.querySelectorAll("ul.sf-menu").forEach(function (menu) {
        var parentMenuItems = menu.querySelectorAll(".menu-item-has-children");
        parentMenuItems.forEach(function (parentMenuItem) {
          parentMenuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseenter));
          parentMenuItem.addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseleave));
        });
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onNoClickMenuItemClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  _classPrivateFieldInitSpec(this, _onParentMenuItemMouseenter, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      parentMenuItem.classList.add("sfHover");
    }
  });

  _classPrivateFieldInitSpec(this, _onParentMenuItemMouseleave, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      parentMenuItem.classList.remove("sfHover");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Menu;
exports["default"] = _default;

},{"../../lib/utils":4,"./menu/full-screen":11,"./menu/mega":12,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],11:[function(require,module,exports){
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

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onMenuLinkClick = /*#__PURE__*/new WeakMap();

var _onMenuHashtagLinkClick = /*#__PURE__*/new WeakMap();

var _openMenu = /*#__PURE__*/new WeakMap();

var _closeMenu = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var FullScreenMenu = function FullScreenMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FullScreenMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.fullScreen.menu.querySelectorAll(".nav-arrow").forEach(function (plusBtn) {
        plusBtn.setAttribute("tabindex", 0);
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      _constants.DOM.menu.fullScreen.toggleMenuBtn.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick));

      (_document$querySelect = document.querySelectorAll('#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuLinkClick));
        menuItemLink.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onMenuLinkClick));
      });
      document.querySelectorAll('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuHashtagLinkClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onToggleMenuBtnClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var toggleMenuBtn = event.currentTarget;

      if (!toggleMenuBtn.classList.contains("exit")) {
        (0, _classPrivateFieldGet2["default"])(_this, _openMenu).call(_this);
      } else {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuLinkClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemLink = event.currentTarget;
      var menuItem = menuItemLink.closest("li.dropdown");
      var subMenu = menuItem.querySelector("ul.sub-menu");

      if (!(window.getComputedStyle(subMenu).display === "none")) {
        menuItem.classList.remove("open-sub");
        (0, _utils.slideUp)(subMenu, 250);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 250);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuHashtagLinkClick, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _openMenu, {
    writable: true,
    value: function value() {
      var _DOM$menu$fullScreen$;

      _constants.DOM.header.fullScreen.classList.add("nav-open");

      _constants.DOM.menu.fullScreen.toggleMenuBtn.classList.add("exit");

      (_DOM$menu$fullScreen$ = _constants.DOM.menu.fullScreen.logo) === null || _DOM$menu$fullScreen$ === void 0 ? void 0 : _DOM$menu$fullScreen$.classList.add("opened");

      _constants.DOM.menu.fullScreen.menu.classList.add("active");

      (0, _utils.fadeIn)(_constants.DOM.menu.fullScreen.menu);
      var htmlWidthBeforeOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var htmlWidthAfterOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = htmlWidthBeforeOverflowHidden - htmlWidthAfterOverflowHidden + "px";
    }
  });

  _classPrivateFieldInitSpec(this, _closeMenu, {
    writable: true,
    value: function value() {
      var _DOM$menu$fullScreen$2;

      _constants.DOM.header.fullScreen.classList.remove("nav-open");

      _constants.DOM.menu.fullScreen.toggleMenuBtn.classList.remove("exit");

      (_DOM$menu$fullScreen$2 = _constants.DOM.menu.fullScreen.logo) === null || _DOM$menu$fullScreen$2 === void 0 ? void 0 : _DOM$menu$fullScreen$2.classList.remove("opened");

      _constants.DOM.menu.fullScreen.menu.classList.remove("active");

      (0, _utils.fadeOut)(_constants.DOM.menu.fullScreen.menu);
      _constants.DOM.html.style.overflow = "";
      _constants.DOM.html.style.marginRight = "";
      document.querySelectorAll("#full-screen-menu #site-navigation ul > li.dropdown").forEach(function (menuItem) {
        menuItem.classList.remove("open-sub");
      });
      document.querySelectorAll("#full-screen-menu #site-navigation ul.sub-menu").forEach(function (subMenu) {
        (0, _utils.slideUp)(subMenu, 250);
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$menu$fullScreen$3;

      if (!((_DOM$menu$fullScreen$3 = _constants.DOM.menu.fullScreen.menu) !== null && _DOM$menu$fullScreen$3 !== void 0 && _DOM$menu$fullScreen$3.classList.contains("active"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = _constants.DOM.menu.fullScreen.toggleMenuBtn;

      var navElements = _constants.DOM.menu.fullScreen.menu.querySelector("nav").querySelectorAll("a, span.nav-arrow, input, button");

      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("nav-arrow")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.menu.fullScreen.toggleMenuBtn) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = FullScreenMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],12:[function(require,module,exports){
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

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _onTopbarMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _menuItemMouseEnter = /*#__PURE__*/new WeakMap();

var MegaMenu = function MegaMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MegaMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.mega.menuContents.forEach(function (menuContent) {
        var menuItem = menuContent.parentNode;
        var menuItemLeftOffset = (0, _utils.offset)(menuItem).left;
        var menuContentWidth = parseInt(window.getComputedStyle(menuContent).width);
        var horizontalPosition;
        var horizontalMargin;

        if (menuItemLeftOffset - menuContentWidth / 2 < 0) {
          horizontalPosition = menuItemLeftOffset - 10;
          horizontalMargin = 0;
        } else {
          horizontalPosition = menuContentWidth / 2;
          horizontalMargin = menuItem.offsetWidth / 2;
        }

        if (!_constants.options.isRTL) {
          menuContent.style.left = "-".concat(horizontalPosition, "px");
          menuContent.style.marginLeft = "".concat(horizontalMargin, "px");
        } else {
          menuContent.style.right = "-".concat(horizontalPosition, "px");
          menuContent.style.marginRight = "".concat(horizontalMargin, "px");
        }

        if (window.innerWidth - menuItemLeftOffset - horizontalPosition + horizontalMargin + menuContentWidth < 0) {
          menuContent.style.left = "auto";
          menuContent.style.right = "-".concat(window.innerWidth - menuItemLeftOffset - menuItem.offsetWidth - 10, "px");
        }
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.mega.menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemMouseEnter));
      }); // Topbar menu items


      _constants.DOM.menu.mega.topbarMenuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onTopbarMenuItemMouseEnter));
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemMouseEnter, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.site.classList.contains("medium-header") ? document.querySelector("#site-navigation-wrap > .container") : document.querySelector("#site-header-inner");
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _classPrivateFieldInitSpec(this, _onTopbarMenuItemMouseEnter, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.topbar;
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _classPrivateFieldInitSpec(this, _menuItemMouseEnter, {
    writable: true,
    value: function value(wrapper, event) {
      var menuItem = event.currentTarget;
      var content = menuItem.querySelector(".megamenu");
      var leftPosition = parseInt((0, _utils.offset)(menuItem).left - (0, _utils.offset)(wrapper).left + 1);

      if (!content) {
        return;
      }

      if (_constants.DOM.body.classList.contains("boxed-layout")) {
        leftPosition = leftPosition - 30;
      }

      content.style.left = "-".concat(leftPosition, "px");
      content.style.width = "".concat(wrapper.offsetWidth, "px");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = MegaMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _dropDown = _interopRequireDefault(require("./mobile-menu/drop-down"));

var _fullScreen = _interopRequireDefault(require("./mobile-menu/full-screen"));

var _sidebar = _interopRequireDefault(require("./mobile-menu/sidebar"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var MobileMenu = function MobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MobileMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.dropDown = new _dropDown["default"]();
      _this.fullScreen = new _fullScreen["default"]();
      _this.sidebar = new _sidebar["default"]();
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = MobileMenu;
exports["default"] = _default;

},{"./mobile-menu/drop-down":14,"./mobile-menu/full-screen":15,"./mobile-menu/sidebar":16,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet3 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _isMenuOpen = /*#__PURE__*/new WeakMap();

var _menuItemsToggleIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleMenuButtonClick = /*#__PURE__*/new WeakMap();

var _onMenuCloseClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onHamburgerClick = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var DropDownMobileMenu = function DropDownMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, DropDownMobileMenu);

  _classPrivateFieldInitSpec(this, _isMenuOpen, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _menuItemsToggleIcon, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$menuI, _DOM$mobileMenu$navWr, _DOM$mobileMenu$navWr2;

      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, false);
      (_DOM$mobileMenu$menuI = _constants.DOM.mobileMenu.menuItemsHasChildren) === null || _DOM$mobileMenu$menuI === void 0 ? void 0 : _DOM$mobileMenu$menuI.forEach(function (menuItem) {
        var span = document.createElement("span");
        span.className = "dropdown-toggle";
        span.setAttribute("tabindex", 0);
        menuItem.getElementsByTagName("a")[0].appendChild(span);
      });
      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsToggleIcon, _constants.options.sidrDropdownTarget == "link" ? (_DOM$mobileMenu$navWr = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr === void 0 ? void 0 : _DOM$mobileMenu$navWr.querySelectorAll("li.menu-item-has-children > a") : (_DOM$mobileMenu$navWr2 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr2 === void 0 ? void 0 : _DOM$mobileMenu$navWr2.querySelectorAll(".dropdown-toggle"));
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$navWr3, _DOM$mobileMenu$navWr4, _DOM$mobileMenu$hambu, _classPrivateFieldGet2;

      (0, _delegate["default"])(document.body, ".mobile-menu", "click", (0, _classPrivateFieldGet3["default"])(_this, _onToggleMenuButtonClick));
      (_DOM$mobileMenu$navWr3 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr3 === void 0 ? void 0 : _DOM$mobileMenu$navWr3.querySelectorAll('li a[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick));
      });
      document.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick));
      (_DOM$mobileMenu$navWr4 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr4 === void 0 ? void 0 : _DOM$mobileMenu$navWr4.addEventListener("click", function (event) {
        event.stopPropagation();
      });
      window.addEventListener("resize", (0, _classPrivateFieldGet3["default"])(_this, _onWindowResize));
      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onHamburgerClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet3["default"])(_this, _menuItemsToggleIcon)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuItemPlusIconClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet3["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onToggleMenuButtonClick, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl, _DOM$mobileMenu$hambu2, _DOM$mobileMenu$toggl2;

      event.preventDefault();
      event.stopPropagation();
      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideToggle)(_constants.DOM.mobileMenu.navWrapper, 400);
      (_DOM$mobileMenu$toggl = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl === void 0 ? void 0 : _DOM$mobileMenu$toggl.classList.toggle("opened");
      (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.toggle("is-active");
      (_DOM$mobileMenu$toggl2 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl2 === void 0 ? void 0 : _DOM$mobileMenu$toggl2.focus();
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuCloseClick, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl3, _DOM$mobileMenu$hambu3;

      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideUp)(_constants.DOM.mobileMenu.navWrapper, 250);
      (_DOM$mobileMenu$toggl3 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl3 === void 0 ? void 0 : _DOM$mobileMenu$toggl3.classList.remove("opened");
      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.classList.remove("is-active");
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onHamburgerClick, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemPlusIconClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"));
        });
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl4, _DOM$mobileMenu$nav;

      if (!((_DOM$mobileMenu$toggl4 = _constants.DOM.mobileMenu.toggleMenuBtn) !== null && _DOM$mobileMenu$toggl4 !== void 0 && _DOM$mobileMenu$toggl4.classList.contains("opened"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = _constants.DOM.mobileMenu.toggleMenuBtn;
      var navElements = (_DOM$mobileMenu$nav = _constants.DOM.mobileMenu.nav) === null || _DOM$mobileMenu$nav === void 0 ? void 0 : _DOM$mobileMenu$nav.querySelectorAll("a, span.dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];

      if (!!closeIcon) {
        closeIcon.style.outline = "";
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("dropdown-mobile")) {
    return;
  }

  (0, _classPrivateFieldGet3["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet3["default"])(this, _setupEventListeners).call(this);
};

var _default = DropDownMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"delegate":45}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuButtonClick = /*#__PURE__*/new WeakMap();

var _onCloseIconClick = /*#__PURE__*/new WeakMap();

var _closeMenu = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onDropownToggleIcon = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var FullScreenMobileMenu = function FullScreenMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FullScreenMobileMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$fullS, _DOM$mobileMenu$fullS2;

      (_DOM$mobileMenu$fullS = _constants.DOM.mobileMenu.fullScreen) === null || _DOM$mobileMenu$fullS === void 0 ? void 0 : (_DOM$mobileMenu$fullS2 = _DOM$mobileMenu$fullS.querySelectorAll(".menu-item-has-children > a")) === null || _DOM$mobileMenu$fullS2 === void 0 ? void 0 : _DOM$mobileMenu$fullS2.forEach(function (menuItemLink) {
        menuItemLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex=0></span>');
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
      (0, _delegate["default"])(document.body, ".mobile-menu", "click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuButtonClick));
      document.querySelectorAll('#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onDropownToggleIcon));
        menuItemLink.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onDropownToggleIcon));
      });
      document.querySelectorAll('#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onCloseIconClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuButtonClick, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$hambu;

      event.preventDefault();
      event.stopPropagation();

      _constants.DOM.mobileMenu.toggleMenuBtn.classList.add("exit");

      _constants.DOM.mobileMenu.fullScreen.classList.add("active");

      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.classList.add("is-active");
      (0, _utils.fadeIn)(_constants.DOM.mobileMenu.fullScreen);
      var htmlWidthBeforeOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var htmlWidthAfterOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

      _constants.DOM.mobileMenu.fullScreen.querySelector("a.close").focus();
    }
  });

  _classPrivateFieldInitSpec(this, _onCloseIconClick, {
    writable: true,
    value: function value(event) {
      if (event.currentTarget.getAttribute("href").substring(0, 1) === "#") {
        event.preventDefault();
      }

      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _closeMenu, {
    writable: true,
    value: function value() {
      if ((0, _utils.visible)(_constants.DOM.mobileMenu.fullScreen)) {
        var _DOM$mobileMenu$hambu2;

        _constants.DOM.mobileMenu.toggleMenuBtn.classList.remove("exit");

        _constants.DOM.mobileMenu.fullScreen.classList.remove("active");

        (0, _utils.fadeOut)(_constants.DOM.mobileMenu.fullScreen);
        _constants.DOM.html.style.overflow = "";
        _constants.DOM.html.style.marginRight = "";
        document.querySelectorAll("#mobile-fullscreen nav ul > li.dropdown").forEach(function (menuItem) {
          menuItem.classList.remove("open-sub");
        });
        document.querySelectorAll("#mobile-fullscreen nav ul.sub-menu").forEach(function (subMenu) {
          (0, _utils.slideUp)(subMenu, 250);
        });
        (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.remove("is-active");
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDropownToggleIcon, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemLink = event.currentTarget;
      var menuItem = menuItemLink.closest("li.menu-item-has-children");
      var subMenu = menuItem.querySelector("ul.sub-menu");

      if (!(window.getComputedStyle(subMenu).display === "none")) {
        menuItem.classList.remove("open-sub");
        (0, _utils.slideUp)(subMenu, 250);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 250);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$fullS3;

      if (!((_DOM$mobileMenu$fullS3 = _constants.DOM.mobileMenu.fullScreen) !== null && _DOM$mobileMenu$fullS3 !== void 0 && _DOM$mobileMenu$fullS3.classList.contains("active"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;

      var closeIcon = _constants.DOM.mobileMenu.fullScreen.querySelector("a.close");

      var navElements = _constants.DOM.mobileMenu.fullScreen.querySelector("nav").querySelectorAll("a, span.dropdown-toggle, input, button");

      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("fullscreen-mobile")) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = FullScreenMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40,"delegate":45}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet4 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _isMenuOpen = /*#__PURE__*/new WeakMap();

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _sidebarToggleMenuBtn = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _startSidrPlugin = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onHamburgerBtnClick = /*#__PURE__*/new WeakMap();

var _onSidebarCloseMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var _closeSidr = /*#__PURE__*/new WeakMap();

var SidebarMobileMenu = function SidebarMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, SidebarMobileMenu);

  _classPrivateFieldInitSpec(this, _isMenuOpen, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _menuItemsPlusIcon, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _sidebarToggleMenuBtn, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, false);
      (0, _classPrivateFieldGet4["default"])(_this, _startSidrPlugin).call(_this);

      if (!document.querySelector(".sidr-class-dropdown-toggle")) {
        document.querySelectorAll(".sidr-class-menu-item-has-children > a").forEach(function (menuItemLink) {
          menuItemLink.insertAdjacentHTML("beforeend", '<span class="sidr-class-dropdown-toggle" tabindex=0></span>');
        });
      }

      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsPlusIcon, _constants.options.sidrDropdownTarget == "link" ? document.querySelectorAll("li.sidr-class-menu-item-has-children > a") : document.querySelectorAll(".sidr-class-dropdown-toggle"));
    }
  });

  _classPrivateFieldInitSpec(this, _startSidrPlugin, {
    writable: true,
    value: function value() {
      sidr["new"](".mobile-menu", {
        name: "sidr",
        source: _constants.options.sidrSource,
        side: _constants.options.sidrSide,
        displace: _constants.options.sidrDisplace,
        speed: 300,
        renaming: true,
        timing: "ease",
        bind: "click",
        onOpen: function onOpen() {
          var _document$querySelect, _DOM$mobileMenu$hambu;

          (_document$querySelect = document.querySelector("a.sidr-class-toggle-sidr-close")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.focus();
          (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.classList.add("is-active");

          _constants.DOM.header.site.insertAdjacentHTML("afterend", '<div class="oceanwp-sidr-overlay" tabindex=0></div>');

          var overlay = document.querySelector(".oceanwp-sidr-overlay");
          (0, _utils.fadeIn)(overlay);
          overlay.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            sidr.close("sidr");
          });
        },
        onClose: function onClose() {
          var _DOM$mobileMenu$hambu2;

          (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.remove("is-active");
          document.querySelectorAll(".sidr-class-menu-item-has-children.active > ul").forEach(function (subMenuActive) {
            subMenuActive.style.display = "none";
          });
          document.querySelectorAll(".sidr-class-menu-item-has-children.active").forEach(function (menuItemActive) {
            menuItemActive.classList.remove("active");
          });
          var overlay = document.querySelector(".oceanwp-sidr-overlay");
          (0, _utils.fadeOut)(overlay);
          setTimeout(function () {
            overlay.remove();
          });
        }
      });
      document.querySelectorAll('#sidr [class*="sidr-class-fa"]').forEach(function (icon) {
        icon.className = icon.className.replace(/\bsidr-class-fa.*?\b/g, "fa");
      });
      document.querySelectorAll('#sidr [class*="sidr-class-icon"]').forEach(function (icon) {
        icon.className = icon.className.replace(/\bsidr-class-icon-.*?\b/g, "icon-");
      });
      (0, _classPrivateFieldSet2["default"])(_this, _sidebarToggleMenuBtn, document.querySelector("a.sidr-class-toggle-sidr-close"));
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu3, _classPrivateFieldGet2, _classPrivateFieldGet3, _document$querySelect2;

      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onHamburgerBtnClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onSidebarCloseMenuBtnClick));
      (_classPrivateFieldGet3 = (0, _classPrivateFieldGet4["default"])(_this, _menuItemsPlusIcon)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("touchend", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
      });
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "click", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "touchend", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (_document$querySelect2 = document.querySelectorAll("li.sidr-class-nav-no-click > a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet4["default"])(_this, _onDocumentKeydown));
      window.addEventListener("resize", (0, _classPrivateFieldGet4["default"])(_this, _onWindowResize));
    }
  });

  _classPrivateFieldInitSpec(this, _onHamburgerBtnClick, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
    }
  });

  _classPrivateFieldInitSpec(this, _onSidebarCloseMenuBtnClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn).classList.remove("opened");
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemPlusIconClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".sidr-class-menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"));
        });
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      if (!_constants.DOM.body.classList.contains("sidr-open")) {
        return;
      }

      event.stopPropagation();
      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn);
      var navElements = document.querySelector("#sidr").querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];

      if (closeIcon) {
        closeIcon.style.outline = "";

        if (!shiftKey && tabKey && navLastElement === document.activeElement) {
          event.preventDefault();
          closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
          closeIcon.focus();
        }

        if (shiftKey && tabKey && navFirstElement === document.activeElement) {
          event.preventDefault();
          closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
          closeIcon.focus();
        }
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("sidr-class-dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  _classPrivateFieldInitSpec(this, _closeSidr, {
    writable: true,
    value: function value() {
      setTimeout(function () {
        var _DOM$mobileMenu$hambu4;

        sidr.close("sidr");
        (_DOM$mobileMenu$hambu4 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu4 === void 0 ? void 0 : _DOM$mobileMenu$hambu4.classList.remove("is-active");
      }, 50);
    }
  });

  if (typeof _constants.options.sidrSource !== "undefined" && _constants.DOM.body.classList.contains("sidebar-mobile")) {
    (0, _classPrivateFieldGet4["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet4["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = SidebarMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"delegate":45}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _infiniteScroll2 = _interopRequireDefault(require("infinite-scroll"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _infiniteScroll = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var OWInfiniteScroll = function OWInfiniteScroll() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWInfiniteScroll);

  _classPrivateFieldInitSpec(this, _infiniteScroll, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _infiniteScroll, new _infiniteScroll2["default"](_constants.DOM.scroll.infiniteScrollWrapper, {
        path: ".older-posts a",
        append: ".item-entry",
        status: ".scroller-status",
        hideNav: ".infinite-scroll-nav",
        history: false,
        prefill: true,
        scrollThreshold: 500
      }));
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("load", function (body, path, response) {
        var _this2 = this;

        var items = body.querySelectorAll(".item-entry");
        imagesLoaded(items, function () {
          // Blog masonry isotope
          if (_this2.element.classList.contains("blog-masonry-grid")) {
            oceanwp.theme.blogMasonry.isotop.appended(items); // Fix Gallery posts

            if (!!_this2.element.querySelector(".gallery-format")) {
              setTimeout(function () {
                oceanwp.theme.blogMasonry.isotop.layout();
              }, 600 + 1);
            }
          } // Equal height elements


          if (!_constants.DOM.body.classList.contains("no-matchheight")) {
            oceanwp.theme.equalHeightElements.start();
          } // Gallery posts slider


          if (!_constants.DOM.body.classList.contains("no-carousel")) {
            oceanwp.theme.owSlider.start(_this2.element.querySelectorAll(".gallery-format, .product-entry-slider"));
          }

          if (!document.body.classList.contains("no-lightbox")) {
            oceanwp.theme.owLightbox.initSingleImageLightbox();
            oceanwp.theme.owLightbox.initGalleryLightbox();
          } // Force the images to be parsed to fix Safari issue


          items.forEach(function (item) {
            var _item$querySelectorAl;

            (_item$querySelectorAl = item.querySelectorAll("img")) === null || _item$querySelectorAl === void 0 ? void 0 : _item$querySelectorAl.forEach(function (img) {
              img.outerHTML = img.outerHTML;
            });
          });
        });
      });
    }
  });

  if (!!_constants.DOM.scroll.infiniteScrollNav && !!_constants.DOM.scroll.infiniteScrollNav.querySelector(".older-posts a")) {
    (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = OWInfiniteScroll;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"infinite-scroll":51}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _addLightboxClass = /*#__PURE__*/new WeakMap();

var _imageFormats = /*#__PURE__*/new WeakMap();

var OWLightbox = function OWLightbox() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWLightbox);
  (0, _defineProperty2["default"])(this, "start", function () {
    if (_constants.DOM.body.classList.contains("no-lightbox")) {
      return;
    }

    (0, _classPrivateFieldGet2["default"])(_this, _addLightboxClass).call(_this);

    _this.initSingleImageLightbox();

    _this.initGalleryLightbox();
  });
  (0, _defineProperty2["default"])(this, "initSingleImageLightbox", function () {
    var _document$querySelect;

    (_document$querySelect = document.querySelectorAll(".oceanwp-lightbox")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    });
    jQuery(".oceanwp-lightbox").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function opener(openerElement) {
          return openerElement.is("img") ? openerElement : openerElement.find("img");
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "initGalleryLightbox", function () {
    jQuery(".wp-block-gallery, .gallery-format, .gallery").magnificPopup({
      delegate: ".gallery-lightbox:not(.slick-cloned)",
      type: "image",
      mainClass: "mfp-fade",
      gallery: {
        enabled: true
      }
    });
  });

  _classPrivateFieldInitSpec(this, _addLightboxClass, {
    writable: true,
    value: function value() {
      var _document$querySelect2;

      (_document$querySelect2 = document.querySelectorAll("body .entry-content a, body .entry a, body article .gallery-format a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (link) {
        if (!!link.querySelector("img")) {
          var imageFormats = (0, _classPrivateFieldGet2["default"])(_this, _imageFormats).call(_this);
          var imageFormatsMask = 0;
          imageFormats.forEach(function (imageFormat) {
            imageFormatsMask += String(link.getAttribute("href")).indexOf("." + imageFormat);
          });

          if (imageFormatsMask === -13) {
            link.classList.add("no-lightbox");
          }

          if (!(link.classList.contains("no-lightbox") || link.classList.contains("gallery-lightbox") || link.parentNode.classList.contains("gallery-icon") || link.classList.contains("woo-lightbox") || link.classList.contains("woo-thumbnail") || link.parentNode.classList.contains("woocommerce-product-gallery__image") || !!link.closest(".wp-block-gallery") || !!link.getAttribute("data-elementor-open-lightbox") || link.classList.contains("yith_magnifier_thumbnail") || link.classList.contains("gg-link"))) {
            link.classList.add("oceanwp-lightbox");
          }

          if (!link.classList.contains("no-lightbox")) {
            if (link.parentNode.classList.contains("gallery-icon") || !!link.closest(".wp-block-gallery")) {
              link.classList.add("gallery-lightbox");
            }
          }
        }
      });
    }
  });

  _classPrivateFieldInitSpec(this, _imageFormats, {
    writable: true,
    value: function value() {
      return ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"];
    }
  });

  this.start();
};

var _default = OWLightbox;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var OWSlider = function OWSlider() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWSlider);
  (0, _defineProperty2["default"])(this, "flickity", void 0);
  (0, _defineProperty2["default"])(this, "start", function () {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelectorAll(".gallery-format, .product-entry-slider");
    _this.flickity = [];
    elements === null || elements === void 0 ? void 0 : elements.forEach(function (element) {
      var flickity = new Flickity(element, {
        autoPlay: element.classList.contains("woo-entry-image") ? false : 6000,
        rightToLeft: _constants.DOM.body.classList.contains("rtl") ? true : false,
        imagesLoaded: true,
        // contain: true,
        pageDots: false,
        on: {
          ready: function ready() {
            element.style.opacity = 1;
            element.style.visibility = "visible";
            element.style.height = "auto";
          }
        }
      });

      _this.flickity.push(flickity);
    });
  });
  this.start();
};

var _default = OWSlider;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _lastScrollTop = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onScrollItemClick = /*#__PURE__*/new WeakMap();

var _getAdminBarHeight = /*#__PURE__*/new WeakMap();

var _getTopbarHeight = /*#__PURE__*/new WeakMap();

var _getStickyHeaderHeight = /*#__PURE__*/new WeakMap();

var _fixMultiMenu = /*#__PURE__*/new WeakMap();

var ScrollEffect = function ScrollEffect() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollEffect);

  _classPrivateFieldInitSpec(this, _lastScrollTop, {
    writable: true,
    value: 0
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      document.querySelectorAll('a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function (scrollItem) {
        scrollItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollItemClick));
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onScrollItemClick, {
    writable: true,
    value: function value(event) {
      var scrollItem = event.currentTarget;

      if (scrollItem.classList.contains("elementor-item-anchor") && scrollItem.classList.contains("has-submenu")) {
        return;
      }

      if (!scrollItem.classList.contains("omw-open-modal") && !scrollItem.closest(".omw-open-modal") && !scrollItem.classList.contains("oew-modal-button") && !scrollItem.closest(".oew-modal-button") && !scrollItem.classList.contains("opl-link") && !scrollItem.parentNode.classList.contains("opl-link") && !scrollItem.classList.contains("sidr-class-opl-link") && !scrollItem.parentNode.classList.contains("sidr-class-opl-link") && !scrollItem.classList.contains("acomment-reply") && !scrollItem.classList.contains("htb-nav-link")) {
        var href = scrollItem.getAttribute("href");
        var id = href.substring(href.indexOf("#")).slice(1);
        var targetElem = null;

        if ((0, _utils.isSelectorValid)("#".concat(id))) {
          targetElem = document.querySelector("#".concat(id));
        }

        if (id != "" && !!targetElem) {
          var _document$querySelect, _document$querySelect2;

          event.preventDefault();
          event.stopPropagation();
          var scrollPosition = (0, _utils.offset)(targetElem).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

          if (!((_document$querySelect = document.querySelector("#site-header-sticky-wrapper")) !== null && _document$querySelect !== void 0 && _document$querySelect.classList.contains("is-sticky")) && (!!document.querySelector("#site-header-sticky-wrapper") || !!document.querySelector("#stick-anything-header") || !!((_document$querySelect2 = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect2 !== void 0 && _document$querySelect2.firstElementChild.classList.contains("elementor-sticky"))) && !!_constants.DOM.header.site && !_constants.DOM.header.site.classList.contains("top-header") && !_constants.DOM.header.site.classList.contains("medium-header") && !_constants.DOM.header.site.classList.contains("vertical-header")) {
            window.addEventListener("scroll", function (e) {
              return (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu).call(_this, e, targetElem);
            });
          }

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });
        }
      }
    }
  });

  _classPrivateFieldInitSpec(this, _getAdminBarHeight, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.WPAdminbar ? _constants.DOM.WPAdminbar.offsetHeight : 0;
    }
  });

  _classPrivateFieldInitSpec(this, _getTopbarHeight, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.header.topbarWrapper && _constants.DOM.header.topbarWrapper.classList.contains("top-bar-sticky") ? _constants.DOM.header.topbarWrapper.offsetHeight : 0;
    }
  });

  _classPrivateFieldInitSpec(this, _getStickyHeaderHeight, {
    writable: true,
    value: function value() {
      var _document$querySelect3;

      var startPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var stickyHeader = document.querySelector("#site-header-sticky-wrapper");

      if (!!stickyHeader) {
        var _DOM$header$site, _DOM$header$site2, _DOM$header$site3, _DOM$header$site4, _DOM$header$site$data, _DOM$header$site5;

        if (stickyHeader.classList.contains("is-sticky") && !startPosition) {
          return _constants.DOM.header.site.offsetHeight;
        }

        if ((_DOM$header$site = _constants.DOM.header.site) !== null && _DOM$header$site !== void 0 && _DOM$header$site.classList.contains("top-header")) {
          return Number.parseInt(getComputedStyle(stickyHeader).height);
        }

        if ((_DOM$header$site2 = _constants.DOM.header.site) !== null && _DOM$header$site2 !== void 0 && _DOM$header$site2.classList.contains("medium-header")) {
          var height = 0;

          var menu = _constants.DOM.header.site.querySelector(".bottom-header-wrap");

          if (menu.classList.contains("fixed-scroll")) {
            height = menu.offsetHeight;
          } else if (_constants.DOM.header.site.classList.contains("hidden-menu")) {
            height = _constants.DOM.header.site.dataset.height;
          } else {
            height = _constants.DOM.header.site.offsetHeight;
          }

          return height;
        }

        if ((_DOM$header$site3 = _constants.DOM.header.site) !== null && _DOM$header$site3 !== void 0 && _DOM$header$site3.classList.contains("fixed-header")) {
          return _constants.DOM.header.site.offsetHeight;
        }

        if ((_DOM$header$site4 = _constants.DOM.header.site) !== null && _DOM$header$site4 !== void 0 && _DOM$header$site4.classList.contains("up-effect")) {
          return 0;
        }

        return (_DOM$header$site$data = (_DOM$header$site5 = _constants.DOM.header.site) === null || _DOM$header$site5 === void 0 ? void 0 : _DOM$header$site5.dataset.height) !== null && _DOM$header$site$data !== void 0 ? _DOM$header$site$data : 54;
      }

      if (!!document.querySelector("#stick-anything-header")) {
        return document.querySelector("#stick-anything-header").offsetHeight;
      }

      if (!_constants.DOM.header.site && !!((_document$querySelect3 = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect3 !== void 0 && _document$querySelect3.firstElementChild.classList.contains("elementor-sticky"))) {
        var _document$querySelect4;

        return (_document$querySelect4 = document.querySelector(".elementor-section-wrap")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.firstElementChild.offsetHeight;
      }

      return 0;
    }
  });

  _classPrivateFieldInitSpec(this, _fixMultiMenu, {
    writable: true,
    value: function value(event, targetElem) {
      var fixedOffset = (0, _utils.offset)(targetElem).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this, true);

      if (window.pageYOffset.toFixed() === fixedOffset.toFixed()) {
        var _DOM$header$site6;

        window.removeEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));

        if (((_DOM$header$site6 = _constants.DOM.header.site) === null || _DOM$header$site6 === void 0 ? void 0 : _DOM$header$site6.offsetHeight) - 1 > (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this, true)) {
          var _DOM$header$site7;

          var scrollPosition = (0, _utils.offset)(targetElem).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - ((_DOM$header$site7 = _constants.DOM.header.site) === null || _DOM$header$site7 === void 0 ? void 0 : _DOM$header$site7.offsetHeight);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: window.pageYOffset > (0, _classPrivateFieldGet2["default"])(_this, _lastScrollTop) ? "smooth" : "auto"
          });

          (0, _classPrivateFieldSet2["default"])(_this, _lastScrollTop, window.pageYOffset);
        }
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("single-product") && !_constants.DOM.body.classList.contains("no-local-scroll")) {
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = ScrollEffect;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowScroll = /*#__PURE__*/new WeakMap();

var _onScrollTopClick = /*#__PURE__*/new WeakMap();

var ScrollTop = function ScrollTop() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollTop);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {}
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _DOM$scroll$scrollTop, _DOM$scroll$goTop, _DOM$scroll$goTopSlas;

      window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _onWindowScroll));
      (_DOM$scroll$scrollTop = _constants.DOM.scroll.scrollTop) === null || _DOM$scroll$scrollTop === void 0 ? void 0 : _DOM$scroll$scrollTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTop = _constants.DOM.scroll.goTop) === null || _DOM$scroll$goTop === void 0 ? void 0 : _DOM$scroll$goTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTopSlas = _constants.DOM.scroll.goTopSlash) === null || _DOM$scroll$goTopSlas === void 0 ? void 0 : _DOM$scroll$goTopSlas.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowScroll, {
    writable: true,
    value: function value(event) {
      if (!_constants.DOM.scroll.scrollTop) {
        return;
      }

      if (window.pageYOffset > 100) {
        if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display === "none") {
          (0, _utils.fadeIn)(_constants.DOM.scroll.scrollTop);
        }
      } else if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display !== "none") {
        (0, _utils.fadeOut)(_constants.DOM.scroll.scrollTop);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onScrollTopClick, {
    writable: true,
    value: function value(event) {
      var _scrollTop$parentNode;

      event.preventDefault();
      var scrollTop = event.currentTarget;

      _constants.DOM.html.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      (_scrollTop$parentNode = scrollTop.parentNode) === null || _scrollTop$parentNode === void 0 ? void 0 : _scrollTop$parentNode.classList.remove("sfHover");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = ScrollTop;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _dropDown = _interopRequireDefault(require("./search/drop-down"));

var _headerReplace = _interopRequireDefault(require("./search/header-replace"));

var _mobileSearchIcon = _interopRequireDefault(require("./search/mobile-search-icon"));

var _overlay = _interopRequireDefault(require("./search/overlay"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onInputKeyup = /*#__PURE__*/new WeakMap();

var Search = function Search() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Search);
  (0, _defineProperty2["default"])(this, "mobileOverlayInput", void 0);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      var _this$mobileOverlayIn;

      _this.dropDown = new _dropDown["default"]();
      _this.headerReplace = new _headerReplace["default"]();
      _this.overlay = new _overlay["default"]();
      _this.mobileSearchIcon = new _mobileSearchIcon["default"]();
      _this.mobileOverlayInput = document.querySelector(".mobile-search-overlay-input");

      _constants.DOM.search.forms.forEach(function (form) {
        var _form$querySelector;

        if ((_form$querySelector = form.querySelector("input")) !== null && _form$querySelector !== void 0 && _form$querySelector.value) {
          form.classList.add("search-filled");
        }
      });

      if (!!((_this$mobileOverlayIn = _this.mobileOverlayInput) !== null && _this$mobileOverlayIn !== void 0 && _this$mobileOverlayIn.value)) {
        _this.mobileOverlayInput.closest("form").classList.add("search-filled");
      }
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _this$mobileOverlayIn2, _this$mobileOverlayIn3;

      _constants.DOM.search.forms.forEach(function (form) {
        var _form$querySelector2, _form$querySelector3;

        (_form$querySelector2 = form.querySelector("input")) === null || _form$querySelector2 === void 0 ? void 0 : _form$querySelector2.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
        (_form$querySelector3 = form.querySelector("input")) === null || _form$querySelector3 === void 0 ? void 0 : _form$querySelector3.addEventListener("blur", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
      });

      (_this$mobileOverlayIn2 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn2 === void 0 ? void 0 : _this$mobileOverlayIn2.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
      (_this$mobileOverlayIn3 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn3 === void 0 ? void 0 : _this$mobileOverlayIn3.addEventListener("blur", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
    }
  });

  _classPrivateFieldInitSpec(this, _onInputKeyup, {
    writable: true,
    value: function value(event) {
      var input = event.currentTarget;
      var form = input.closest("form");

      if (input.value) {
        form.classList.add("search-filled");
      } else {
        form.classList.remove("search-filled");
      }
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Search;
exports["default"] = _default;

},{"../../constants":1,"./search/drop-down":24,"./search/header-replace":25,"./search/mobile-search-icon":26,"./search/overlay":27,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var SearchBase = function SearchBase() {
  (0, _classCallCheck2["default"])(this, SearchBase);
  (0, _defineProperty2["default"])(this, "focus", function (form, inputClass) {
    var formTransitionDuration = parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) * 1000;
    formTransitionDuration = !!formTransitionDuration ? formTransitionDuration : 600;

    if (formTransitionDuration) {
      setTimeout(function () {
        form.querySelector(inputClass).focus();
      }, formTransitionDuration);
    }
  });
};

var _default = SearchBase;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var DropDownSearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(DropDownSearch, _SearchBase);

  var _super = _createSuper(DropDownSearch);

  function DropDownSearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, DropDownSearch);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        var _DOM$search$dropDown$;

        (_DOM$search$dropDown$ = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$ === void 0 ? void 0 : _DOM$search$dropDown$.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var _DOM$search$dropDown = _constants.DOM.search.dropDown,
            toggleSearchBtn = _DOM$search$dropDown.toggleSearchBtn,
            form = _DOM$search$dropDown.form;
        toggleSearchBtn.parentNode.classList.toggle("active");
        form.classList.toggle("show");

        _this.focus(form, "input.field");
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onDocumentClick, {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-dropdown.show")) {
          var _DOM$search$dropDown$2, _DOM$search$dropDown$3, _DOM$search$dropDown$4;

          (_DOM$search$dropDown$2 = _constants.DOM.search.dropDown.form) === null || _DOM$search$dropDown$2 === void 0 ? void 0 : _DOM$search$dropDown$2.classList.remove("show");
          (_DOM$search$dropDown$3 = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$3 === void 0 ? void 0 : (_DOM$search$dropDown$4 = _DOM$search$dropDown$3.parentNode) === null || _DOM$search$dropDown$4 === void 0 ? void 0 : _DOM$search$dropDown$4.classList.remove("active");
        }
      }
    });

    if (_constants.options.menuSearchStyle !== "drop_down") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return DropDownSearch;
}(_base["default"]);

var _default = DropDownSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var _hasTopHeader = /*#__PURE__*/new WeakMap();

var HeaderReplaceSearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(HeaderReplaceSearch, _SearchBase);

  var _super = _createSuper(HeaderReplaceSearch);

  function HeaderReplaceSearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, HeaderReplaceSearch);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        var _DOM$search$headerRep, _DOM$search$headerRep2;

        (_DOM$search$headerRep = _constants.DOM.search.headerReplace.toggleSearchBtn) === null || _DOM$search$headerRep === void 0 ? void 0 : _DOM$search$headerRep.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$headerRep2 = _constants.DOM.search.headerReplace.closeBtn) === null || _DOM$search$headerRep2 === void 0 ? void 0 : _DOM$search$headerRep2.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.toggle("show");

        if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
          _constants.DOM.header.topLeftSide.classList.toggle("hide");

          _constants.DOM.header.topRightSide.classList.toggle("hide");
        } else {
          var _document$querySelect;

          if (!_constants.DOM.menu.nav.classList.contains("hide")) {
            _constants.DOM.menu.main.style.minWidth = "370px";
          }

          _constants.DOM.menu.nav.classList.toggle("hide");

          form.style.maxWidth = ((_document$querySelect = document.querySelector("#site-navigation > ul.dropdown-menu")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.offsetWidth) + 60 + "px";
        }

        _this.focus(form, 'input[type="search"]');
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.remove("show");

        if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
          _constants.DOM.header.topLeftSide.classList.remove("hide");

          _constants.DOM.header.topRightSide.classList.remove("hide");
        } else {
          _constants.DOM.menu.nav.classList.remove("hide");

          setTimeout(function () {
            _constants.DOM.menu.main.style.minWidth = "";
          }, 250);
        }
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onDocumentClick, {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-header-replace.show")) {
          var _DOM$search$headerRep3, _DOM$search$headerRep4;

          (_DOM$search$headerRep3 = _constants.DOM.search.headerReplace) === null || _DOM$search$headerRep3 === void 0 ? void 0 : (_DOM$search$headerRep4 = _DOM$search$headerRep3.form) === null || _DOM$search$headerRep4 === void 0 ? void 0 : _DOM$search$headerRep4.classList.remove("show");

          if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
            var _DOM$header$topLeftSi, _DOM$header$topRightS;

            (_DOM$header$topLeftSi = _constants.DOM.header.topLeftSide) === null || _DOM$header$topLeftSi === void 0 ? void 0 : _DOM$header$topLeftSi.classList.remove("hide");
            (_DOM$header$topRightS = _constants.DOM.header.topRightSide) === null || _DOM$header$topRightS === void 0 ? void 0 : _DOM$header$topRightS.classList.remove("hide");
          } else {
            var _DOM$menu$nav;

            (_DOM$menu$nav = _constants.DOM.menu.nav) === null || _DOM$menu$nav === void 0 ? void 0 : _DOM$menu$nav.classList.remove("hide");
          }
        }
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _hasTopHeader, {
      writable: true,
      value: function value() {
        var _DOM$header$site;

        return (_DOM$header$site = _constants.DOM.header.site) === null || _DOM$header$site === void 0 ? void 0 : _DOM$header$site.classList.contains("top-header");
      }
    });

    if (_constants.options.menuSearchStyle !== "header_replace") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return HeaderReplaceSearch;
}(_base["default"]);

var _default = HeaderReplaceSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet6 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _elements = /*#__PURE__*/new WeakMap();

var _setElements = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _toggleDropdownSearch = /*#__PURE__*/new WeakMap();

var _openOverlaySearch = /*#__PURE__*/new WeakMap();

var _closeOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickDocument = /*#__PURE__*/new WeakMap();

var MobileSearchIcon = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(MobileSearchIcon, _SearchBase);

  var _super = _createSuper(MobileSearchIcon);

  function MobileSearchIcon() {
    var _this;

    (0, _classCallCheck2["default"])(this, MobileSearchIcon);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setElements, {
      writable: true,
      value: function value() {
        (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _elements, {
          dropdownSearchIcon: document.querySelector(".search-icon-dropdown"),
          dropdownSearchForm: document.querySelector(".search-style-dropdown"),
          overlaySearch: document.querySelector(".search-style-overlay"),
          overlaySearchIcon: document.querySelector(".search-icon-overlay"),
          overlaySearchCloseIcon: document.querySelector(".search-style-overlay .search-overlay-close"),
          html: document.querySelector("html")
        });
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        if (_constants.options.mobileMenuSearchStyle === "drop_down") {
          var _classPrivateFieldGet2;

          (_classPrivateFieldGet2 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _toggleDropdownSearch));
          document.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _onClickDocument));
        } else if (_constants.options.mobileMenuSearchStyle === "overlay") {
          var _classPrivateFieldGet3, _classPrivateFieldGet4, _classPrivateFieldGet5;

          (_classPrivateFieldGet3 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearchIcon) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _openOverlaySearch));
          (_classPrivateFieldGet4 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearchCloseIcon) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _closeOverlaySearch));
          (_classPrivateFieldGet5 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _onClickOverlaySearch));
        }
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _toggleDropdownSearch, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.toggle("show");
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.toggle("active");

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.querySelector("form"), "input.field");
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _openOverlaySearch, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.classList.add("active");
        (0, _utils.fadeIn)((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch);

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("form"), "input.mobile-search-overlay-input");

        setTimeout(function () {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).html.style.overflow = "hidden";
        }, 400);
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _closeOverlaySearch, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.classList.remove("active");
        (0, _utils.fadeOut)((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch);
        setTimeout(function () {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).html.style.overflow = "visible";
        }, 400);
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onClickOverlaySearch, {
      writable: true,
      value: function value(event) {
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("input").focus();
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onClickDocument, {
      writable: true,
      value: function value(event) {
        if (!event.target.closest("#icon-searchform-dropdown.show")) {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.remove("active");
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.remove("show");
        }
      }
    });

    if (_constants.options.mobileMenuSearchStyle === "disabled") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _setElements).call((0, _assertThisInitialized2["default"])(_this));
    (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return MobileSearchIcon;
}(_base["default"]);

var _default = MobileSearchIcon;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var OverlaySearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(OverlaySearch, _SearchBase);

  var _super = _createSuper(OverlaySearch);

  function OverlaySearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, OverlaySearch);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        var _DOM$search$overlay$t, _DOM$search$overlay$c;

        (_DOM$search$overlay$t = _constants.DOM.search.overlay.toggleSearchBtn) === null || _DOM$search$overlay$t === void 0 ? void 0 : _DOM$search$overlay$t.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$overlay$c = _constants.DOM.search.overlay.closeBtn) === null || _DOM$search$overlay$c === void 0 ? void 0 : _DOM$search$overlay$c.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.overlay.form;
        form.classList.add("active");
        (0, _utils.fadeIn)(form);

        _this.focus(form, 'input[type="search"]');

        setTimeout(function () {
          _constants.DOM.html.style.overflow = "hidden";
        }, 400);
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.overlay.form;
        form.classList.remove("active");
        (0, _utils.fadeOut)(form);
        setTimeout(function () {
          _constants.DOM.html.style.overflow = "visible";
        }, 400);
      }
    });

    if (_constants.options.menuSearchStyle !== "overlay") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return OverlaySearch;
}(_base["default"]);

var _default = OverlaySearch;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _select = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var _style = /*#__PURE__*/new WeakMap();

var _setupEventListenersItem = /*#__PURE__*/new WeakMap();

var _onMouseenter = /*#__PURE__*/new WeakMap();

var _onMouseleave = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onDocumentReady = /*#__PURE__*/new WeakMap();

var Select = function Select() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Select);

  _classPrivateFieldInitSpec(this, _select, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      _constants.DOM.selectTags.forEach(function (select) {
        (0, _classPrivateFieldSet2["default"])(_this, _select, select);
        (0, _classPrivateFieldGet2["default"])(_this, _select).insertAdjacentHTML("afterend", "<span class=\"theme-select ".concat((0, _classPrivateFieldGet2["default"])(_this, _select).classList, "\">\n                    <span class=\"theme-selectInner\">\n                        ").concat((0, _classPrivateFieldGet2["default"])(_this, _select).options[(0, _classPrivateFieldGet2["default"])(_this, _select).selectedIndex].text, "\n                    </span>\n                </span>"));
        (0, _classPrivateFieldGet2["default"])(_this, _select).classList.add("hasCustomSelect");
        (0, _classPrivateFieldGet2["default"])(_this, _style).call(_this);
        (0, _classPrivateFieldGet2["default"])(_this, _setupEventListenersItem).call(_this);
      });
    }
  });

  _classPrivateFieldInitSpec(this, _style, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.opacity = 0;
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.position = "absolute";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.height = "34px";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.fontSize = "13px";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.appearance = "menulist-button";
      (0, _classPrivateFieldGet2["default"])(_this, _select).nextSibling.style.display = "inline-block";
      (0, _classPrivateFieldGet2["default"])(_this, _select).nextSibling.firstElementChild.style.display = "inline-block";
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListenersItem, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMouseenter));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onMouseleave));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("change", _this.onChange);
    }
  });

  _classPrivateFieldInitSpec(this, _onMouseenter, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.add("theme-selectHover");
    }
  });

  _classPrivateFieldInitSpec(this, _onMouseleave, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.remove("theme-selectHover");
    }
  });

  (0, _defineProperty2["default"])(this, "onChange", function (event) {
    var select = event.currentTarget;
    select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      document.addEventListener("DOMContentLoaded", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentReady, {
    writable: true,
    value: function value(event) {
      _constants.DOM.selectTags.forEach(function (select) {
        select.style.width = select.nextSibling.offsetWidth + "px";
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _render).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = Select;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _select = _interopRequireDefault(require("./components/select"));

var _header = _interopRequireDefault(require("./components/header"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _mobileMenu = _interopRequireDefault(require("./components/mobile-menu"));

var _search = _interopRequireDefault(require("./components/search"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _blogMasonry = _interopRequireDefault(require("./components/blog-masonry"));

var _scrollTop = _interopRequireDefault(require("./components/scroll-top"));

var _scrollEffect = _interopRequireDefault(require("./components/scroll-effect"));

var _equalHeightElements = _interopRequireDefault(require("./components/equal-height-elements"));

var _owInfiniteScroll = _interopRequireDefault(require("./components/ow-infinite-scroll"));

var _owSlider = _interopRequireDefault(require("./components/ow-slider"));

var _owLightbox = _interopRequireDefault(require("./components/ow-lightbox"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var Theme = function Theme() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Theme);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.select = new _select["default"]();
      _this.header = new _header["default"]();
      _this.menu = new _menu["default"]();
      _this.mobileMenu = new _mobileMenu["default"]();
      _this.search = new _search["default"]();
      _this.footer = new _footer["default"]();
      _this.blogMasonry = new _blogMasonry["default"]();
      _this.scrollTop = new _scrollTop["default"]();
      _this.scrollEffect = new _scrollEffect["default"]();
      _this.equalHeightElements = new _equalHeightElements["default"]();
      _this.owLightbox = new _owLightbox["default"]();
      _this.owSlider = new _owSlider["default"]();
      document.addEventListener("DOMContentLoaded", function () {
        _this.owInfiniteScroll = new _owInfiniteScroll["default"]();
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = Theme;
exports["default"] = _default;

},{"./components/blog-masonry":5,"./components/equal-height-elements":6,"./components/footer":7,"./components/header":8,"./components/menu":10,"./components/mobile-menu":13,"./components/ow-infinite-scroll":17,"./components/ow-lightbox":18,"./components/ow-slider":19,"./components/scroll-effect":20,"./components/scroll-top":21,"./components/search":22,"./components/select":28,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],30:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],31:[function(require,module,exports){
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],34:[function(require,module,exports){
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],35:[function(require,module,exports){
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":31,"./classExtractFieldDescriptor.js":34}],36:[function(require,module,exports){
var classApplyDescriptorSet = require("./classApplyDescriptorSet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorSet.js":32,"./classExtractFieldDescriptor.js":34}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],39:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":42}],40:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],41:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":30,"@babel/runtime/helpers/typeof":43}],42:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
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

},{"./closest":44}],46:[function(require,module,exports){
/**
 * EvEmitter v2.0.0
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );

},{}],47:[function(require,module,exports){
/**
 * Fizzy UI utils v3.0.0
 * MIT license
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( global );
  } else {
    // browser global
    global.fizzyUIUtils = factory( global );
  }

}( this, function factory( global ) {

let utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  return Object.assign( a, b );
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) return [];

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  let index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( elem.matches( selector ) ) return elem;
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );

  return elems
    // check that elem is an actual element
    .filter( ( elem ) => elem instanceof HTMLElement )
    .reduce( ( ffElems, elem ) => {
      // add elem if no selector
      if ( !selector ) {
        ffElems.push( elem );
        return ffElems;
      }
      // filter & find items if we have a selector
      // filter
      if ( elem.matches( selector ) ) {
        ffElems.push( elem );
      }
      // find children
      let childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      ffElems = ffElems.concat( ...childElems );
      return ffElems;
    }, [] );
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  let method = _class.prototype[ methodName ];
  let timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    clearTimeout( this[ timeoutName ] );

    let args = arguments;
    this[ timeoutName ] = setTimeout( () => {
      method.apply( this, args );
      delete this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( onDocReady ) {
  let readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( onDocReady );
  } else {
    document.addEventListener( 'DOMContentLoaded', onDocReady );
  }
};

// ----- htmlInit ----- //

// http://bit.ly/3oYLusc
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  } ).toLowerCase();
};

let console = global.console;

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    let dashedNamespace = utils.toDashed( namespace );
    let dataAttr = 'data-' + dashedNamespace;
    let dataAttrElems = document.querySelectorAll( `[${dataAttr}]` );
    let jQuery = global.jQuery;

    [ ...dataAttrElems ].forEach( ( elem ) => {
      let attr = elem.getAttribute( dataAttr );
      let options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( `Error parsing ${dataAttr} on ${elem.className}: ${error}` );
        }
        return;
      }
      // initialize
      let instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    } );

  } );
};

// -----  ----- //

return utils;

} ) );

},{}],48:[function(require,module,exports){
// button
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

// -------------------------- InfiniteScrollButton -------------------------- //

class InfiniteScrollButton {
  constructor( element, infScroll ) {
    this.element = element;
    this.infScroll = infScroll;
    // events
    this.clickHandler = this.onClick.bind( this );
    this.element.addEventListener( 'click', this.clickHandler );
    infScroll.on( 'request', this.disable.bind( this ) );
    infScroll.on( 'load', this.enable.bind( this ) );
    infScroll.on( 'error', this.hide.bind( this ) );
    infScroll.on( 'last', this.hide.bind( this ) );
  }

  onClick( event ) {
    event.preventDefault();
    this.infScroll.loadNextPage();
  }

  enable() {
    this.element.removeAttribute('disabled');
  }

  disable() {
    this.element.disabled = 'disabled';
  }

  hide() {
    this.element.style.display = 'none';
  }

  destroy() {
    this.element.removeEventListener( 'click', this.clickHandler );
  }

}

// -------------------------- InfiniteScroll methods -------------------------- //

// InfiniteScroll.defaults.button = null;

InfiniteScroll.create.button = function() {
  let buttonElem = utils.getQueryElement( this.options.button );
  if ( buttonElem ) {
    this.button = new InfiniteScrollButton( buttonElem, this );
  }
};

InfiniteScroll.destroy.button = function() {
  if ( this.button ) this.button.destroy();
};

// --------------------------  -------------------------- //

InfiniteScroll.Button = InfiniteScrollButton;

return InfiniteScroll;

} ) );

},{"./core":49,"fizzy-ui-utils":47}],49:[function(require,module,exports){
// core
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('ev-emitter'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    window.InfiniteScroll = factory(
        window,
        window.EvEmitter,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, EvEmitter, utils ) {

let jQuery = window.jQuery;
// internal store of all InfiniteScroll intances
let instances = {};

function InfiniteScroll( element, options ) {
  let queryElem = utils.getQueryElement( element );

  if ( !queryElem ) {
    console.error( 'Bad element for InfiniteScroll: ' + ( queryElem || element ) );
    return;
  }
  element = queryElem;
  // do not initialize twice on same element
  if ( element.infiniteScrollGUID ) {
    let instance = instances[ element.infiniteScrollGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = { ...InfiniteScroll.defaults };
  this.option( options );
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  this.create();
}

// defaults
InfiniteScroll.defaults = {
  // path: null,
  // hideNav: null,
  // debug: false,
};

// create & destroy methods
InfiniteScroll.create = {};
InfiniteScroll.destroy = {};

let proto = InfiniteScroll.prototype;
// inherit EvEmitter
Object.assign( proto, EvEmitter.prototype );

// --------------------------  -------------------------- //

// globally unique identifiers
let GUID = 0;

proto.create = function() {
  // create core
  // add id for InfiniteScroll.data
  let id = this.guid = ++GUID;
  this.element.infiniteScrollGUID = id; // expando
  instances[ id ] = this; // associate via id
  // properties
  this.pageIndex = 1; // default to first page
  this.loadCount = 0;
  this.updateGetPath();
  // bail if getPath not set, or returns falsey #776
  let hasPath = this.getPath && this.getPath();
  if ( !hasPath ) {
    console.error('Disabling InfiniteScroll');
    return;
  }
  this.updateGetAbsolutePath();
  this.log( 'initialized', [ this.element.className ] );
  this.callOnInit();
  // create features
  for ( let method in InfiniteScroll.create ) {
    InfiniteScroll.create[ method ].call( this );
  }
};

proto.option = function( opts ) {
  Object.assign( this.options, opts );
};

// call onInit option, used for binding events on init
proto.callOnInit = function() {
  let onInit = this.options.onInit;
  if ( onInit ) {
    onInit.call( this, this );
  }
};

// ----- events ----- //

proto.dispatchEvent = function( type, event, args ) {
  this.log( type, args );
  let emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );
  // trigger jQuery event
  if ( !jQuery || !this.$element ) {
    return;
  }
  // namespace jQuery event
  type += '.infiniteScroll';
  let $event = type;
  if ( event ) {
    // create jQuery event
    /* eslint-disable-next-line new-cap */
    let jQEvent = jQuery.Event( event );
    jQEvent.type = type;
    $event = jQEvent;
  }
  this.$element.trigger( $event, args );
};

let loggers = {
  initialized: ( className ) => `on ${className}`,
  request: ( path ) => `URL: ${path}`,
  load: ( response, path ) => `${response.title || ''}. URL: ${path}`,
  error: ( error, path ) => `${error}. URL: ${path}`,
  append: ( response, path, items ) => `${items.length} items. URL: ${path}`,
  last: ( response, path ) => `URL: ${path}`,
  history: ( title, path ) => `URL: ${path}`,
  pageIndex: function( index, origin ) {
    return `current page determined to be: ${index} from ${origin}`;
  },
};

// log events
proto.log = function( type, args ) {
  if ( !this.options.debug ) return;

  let message = `[InfiniteScroll] ${type}`;
  let logger = loggers[ type ];
  if ( logger ) message += '. ' + logger.apply( this, args );
  console.log( message );
};

// -------------------------- methods used amoung features -------------------------- //

proto.updateMeasurements = function() {
  this.windowHeight = window.innerHeight;
  let rect = this.element.getBoundingClientRect();
  this.top = rect.top + window.scrollY;
};

proto.updateScroller = function() {
  let elementScroll = this.options.elementScroll;
  if ( !elementScroll ) {
    // default, use window
    this.scroller = window;
    return;
  }
  // if true, set to element, otherwise use option
  this.scroller = elementScroll === true ? this.element :
    utils.getQueryElement( elementScroll );
  if ( !this.scroller ) {
    throw new Error(`Unable to find elementScroll: ${elementScroll}`);
  }
};

// -------------------------- page path -------------------------- //

proto.updateGetPath = function() {
  let optPath = this.options.path;
  if ( !optPath ) {
    console.error(`InfiniteScroll path option required. Set as: ${optPath}`);
    return;
  }
  // function
  let type = typeof optPath;
  if ( type == 'function' ) {
    this.getPath = optPath;
    return;
  }
  // template string: '/pages/{{#}}.html'
  let templateMatch = type == 'string' && optPath.match('{{#}}');
  if ( templateMatch ) {
    this.updateGetPathTemplate( optPath );
    return;
  }
  // selector: '.next-page-selector'
  this.updateGetPathSelector( optPath );
};

proto.updateGetPathTemplate = function( optPath ) {
  // set getPath with template string
  this.getPath = () => {
    let nextIndex = this.pageIndex + 1;
    return optPath.replace( '{{#}}', nextIndex );
  };
  // get pageIndex from location
  // convert path option into regex to look for pattern in location
  // escape query (?) in url, allows for parsing GET parameters
  let regexString = optPath
    .replace( /(\\\?|\?)/, '\\?' )
    .replace( '{{#}}', '(\\d\\d?\\d?)' );
  let templateRe = new RegExp( regexString );
  let match = location.href.match( templateRe );

  if ( match ) {
    this.pageIndex = parseInt( match[1], 10 );
    this.log( 'pageIndex', [ this.pageIndex, 'template string' ] );
  }
};

let pathRegexes = [
  // WordPress & Tumblr - example.com/page/2
  // Jekyll - example.com/page2
  /^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,
  // Drupal - example.com/?page=1
  /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,
  // catch all, last occurence of a number
  /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/,
];

// try matching href to pathRegexes patterns
let getPathParts = InfiniteScroll.getPathParts = function( href ) {
  if ( !href ) return;
  for ( let regex of pathRegexes ) {
    let match = href.match( regex );
    if ( match ) {
      let [ , begin, index, end ] = match;
      return { begin, index, end };
    }
  }
};

proto.updateGetPathSelector = function( optPath ) {
  // parse href of link: '.next-page-link'
  let hrefElem = document.querySelector( optPath );
  if ( !hrefElem ) {
    console.error(`Bad InfiniteScroll path option. Next link not found: ${optPath}`);
    return;
  }

  let href = hrefElem.getAttribute('href');
  let pathParts = getPathParts( href );
  if ( !pathParts ) {
    console.error(`InfiniteScroll unable to parse next link href: ${href}`);
    return;
  }

  let { begin, index, end } = pathParts;
  this.isPathSelector = true; // flag for checkLastPage()
  this.getPath = () => begin + ( this.pageIndex + 1 ) + end;
  // get pageIndex from href
  this.pageIndex = parseInt( index, 10 ) - 1;
  this.log( 'pageIndex', [ this.pageIndex, 'next link' ] );
};

proto.updateGetAbsolutePath = function() {
  let path = this.getPath();
  // path doesn't start with http or /
  let isAbsolute = path.match( /^http/ ) || path.match( /^\// );
  if ( isAbsolute ) {
    this.getAbsolutePath = this.getPath;
    return;
  }

  let { pathname } = location;
  // query parameter #829. example.com/?pg=2
  let isQuery = path.match( /^\?/ );
  // /foo/bar/index.html => /foo/bar
  let directory = pathname.substring( 0, pathname.lastIndexOf('/') );
  let pathStart = isQuery ? pathname : directory + '/';

  this.getAbsolutePath = () => pathStart + this.getPath();
};

// -------------------------- nav -------------------------- //

// hide navigation
InfiniteScroll.create.hideNav = function() {
  let nav = utils.getQueryElement( this.options.hideNav );
  if ( !nav ) return;

  nav.style.display = 'none';
  this.nav = nav;
};

InfiniteScroll.destroy.hideNav = function() {
  if ( this.nav ) this.nav.style.display = '';
};

// -------------------------- destroy -------------------------- //

proto.destroy = function() {
  this.allOff(); // remove all event listeners
  // call destroy methods
  for ( let method in InfiniteScroll.destroy ) {
    InfiniteScroll.destroy[ method ].call( this );
  }

  delete this.element.infiniteScrollGUID;
  delete instances[ this.guid ];
  // remove jQuery data. #807
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'infiniteScroll' );
  }
};

// -------------------------- utilities -------------------------- //

// https://remysharp.com/2010/07/21/throttling-function-calls
InfiniteScroll.throttle = function( fn, threshold ) {
  threshold = threshold || 200;
  let last, timeout;

  return function() {
    let now = +new Date();
    let args = arguments;
    let trigger = () => {
      last = now;
      fn.apply( this, args );
    };
    if ( last && now < last + threshold ) {
      // hold on to it
      clearTimeout( timeout );
      timeout = setTimeout( trigger, threshold );
    } else {
      trigger();
    }
  };
};

InfiniteScroll.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  let id = elem && elem.infiniteScrollGUID;
  return id && instances[ id ];
};

// set internal jQuery, for Webpack + jQuery v3
InfiniteScroll.setJQuery = function( jqry ) {
  jQuery = jqry;
};

// -------------------------- setup -------------------------- //

utils.htmlInit( InfiniteScroll, 'infinite-scroll' );

// add noop _init method for jQuery Bridget. #768
proto._init = function() {};

let { jQueryBridget } = window;
if ( jQuery && jQueryBridget ) {
  jQueryBridget( 'infiniteScroll', InfiniteScroll, jQuery );
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"ev-emitter":46,"fizzy-ui-utils":47}],50:[function(require,module,exports){
// history
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  history: 'replace',
  // historyTitle: false,
} );

let link = document.createElement('a');

// ----- create/destroy ----- //

InfiniteScroll.create.history = function() {
  if ( !this.options.history ) return;

  // check for same origin
  link.href = this.getAbsolutePath();
  // MS Edge does not have origin on link
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12236493/
  let linkOrigin = link.origin || link.protocol + '//' + link.host;
  let isSameOrigin = linkOrigin == location.origin;
  if ( !isSameOrigin ) {
    console.error( '[InfiniteScroll] cannot set history with different origin: ' +
      `${link.origin} on ${location.origin} . History behavior disabled.` );
    return;
  }

  // two ways to handle changing history
  if ( this.options.append ) {
    this.createHistoryAppend();
  } else {
    this.createHistoryPageLoad();
  }
};

proto.createHistoryAppend = function() {
  this.updateMeasurements();
  this.updateScroller();
  // array of scroll positions of appended pages
  this.scrollPages = [
    // first page
    {
      top: 0,
      path: location.href,
      title: document.title,
    },
  ];
  this.scrollPage = this.scrollPages[0];
  // events
  this.scrollHistoryHandler = this.onScrollHistory.bind( this );
  this.unloadHandler = this.onUnload.bind( this );
  this.scroller.addEventListener( 'scroll', this.scrollHistoryHandler );
  this.on( 'append', this.onAppendHistory );
  this.bindHistoryAppendEvents( true );
};

proto.bindHistoryAppendEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.scrollHistoryHandler );
  window[ addRemove ]( 'unload', this.unloadHandler );
};

proto.createHistoryPageLoad = function() {
  this.on( 'load', this.onPageLoadHistory );
};

InfiniteScroll.destroy.history =
proto.destroyHistory = function() {
  let isHistoryAppend = this.options.history && this.options.append;
  if ( isHistoryAppend ) {
    this.bindHistoryAppendEvents( false );
  }
};

// ----- append history ----- //

proto.onAppendHistory = function( response, path, items ) {
  // do not proceed if no items. #779
  if ( !items || !items.length ) return;

  let firstItem = items[0];
  let elemScrollY = this.getElementScrollY( firstItem );
  // resolve path
  link.href = path;
  // add page data to hash
  this.scrollPages.push({
    top: elemScrollY,
    path: link.href,
    title: response.title,
  });
};

proto.getElementScrollY = function( elem ) {
  if ( this.options.elementScroll ) {
    return elem.offsetTop - this.top;
  } else {
    let rect = elem.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
};

proto.onScrollHistory = function() {
  // cycle through positions, find biggest without going over
  let scrollPage = this.getClosestScrollPage();
  // set history if changed
  if ( scrollPage != this.scrollPage ) {
    this.scrollPage = scrollPage;
    this.setHistory( scrollPage.title, scrollPage.path );
  }
};

utils.debounceMethod( InfiniteScroll, 'onScrollHistory', 150 );

proto.getClosestScrollPage = function() {
  let scrollViewY;
  if ( this.options.elementScroll ) {
    scrollViewY = this.scroller.scrollTop + this.scroller.clientHeight / 2;
  } else {
    scrollViewY = window.scrollY + this.windowHeight / 2;
  }

  let scrollPage;
  for ( let page of this.scrollPages ) {
    if ( page.top >= scrollViewY ) break;

    scrollPage = page;
  }
  return scrollPage;
};

proto.setHistory = function( title, path ) {
  let optHistory = this.options.history;
  let historyMethod = optHistory && history[ optHistory + 'State' ];
  if ( !historyMethod ) return;

  history[ optHistory + 'State' ]( null, title, path );
  if ( this.options.historyTitle ) document.title = title;
  this.dispatchEvent( 'history', null, [ title, path ] );
};

// scroll to top to prevent initial scroll-reset after page refresh
// https://stackoverflow.com/a/18633915/182183
proto.onUnload = function() {
  if ( this.scrollPage.top === 0 ) return;

  // calculate where scroll position would be on refresh
  let scrollY = window.scrollY - this.scrollPage.top + this.top;
  // disable scroll event before setting scroll #679
  this.destroyHistory();
  scrollTo( 0, scrollY );
};

// ----- load history ----- //

// update URL
proto.onPageLoadHistory = function( response, path ) {
  this.setHistory( response.title, path );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":49,"fizzy-ui-utils":47}],51:[function(require,module,exports){
/*!
 * Infinite Scroll v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        require('./core'),
        require('./page-load'),
        require('./scroll-watch'),
        require('./history'),
        require('./button'),
        require('./status'),
    );
  }

} )( window, function factory( InfiniteScroll ) {
  return InfiniteScroll;
} );

},{"./button":48,"./core":49,"./history":50,"./page-load":52,"./scroll-watch":53,"./status":54}],52:[function(require,module,exports){
// page-load
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
    );
  }

}( window, function factory( window, InfiniteScroll ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  // append: false,
  loadOnScroll: true,
  checkLastPage: true,
  responseBody: 'text',
  domParseResponse: true,
  // prefill: false,
  // outlayer: null,
} );

InfiniteScroll.create.pageLoad = function() {
  this.canLoad = true;
  this.on( 'scrollThreshold', this.onScrollThresholdLoad );
  this.on( 'load', this.checkLastPage );
  if ( this.options.outlayer ) {
    this.on( 'append', this.onAppendOutlayer );
  }
};

proto.onScrollThresholdLoad = function() {
  if ( this.options.loadOnScroll ) this.loadNextPage();
};

let domParser = new DOMParser();

proto.loadNextPage = function() {
  if ( this.isLoading || !this.canLoad ) return;

  let { responseBody, domParseResponse, fetchOptions } = this.options;
  let path = this.getAbsolutePath();
  this.isLoading = true;
  if ( typeof fetchOptions == 'function' ) fetchOptions = fetchOptions();

  let fetchPromise = fetch( path, fetchOptions )
    .then( ( response ) => {
      if ( !response.ok ) {
        let error = new Error( response.statusText );
        this.onPageError( error, path, response );
        return { response };
      }

      return response[ responseBody ]().then( ( body ) => {
        let canDomParse = responseBody == 'text' && domParseResponse;
        if ( canDomParse ) {
          body = domParser.parseFromString( body, 'text/html' );
        }
        if ( response.status == 204 ) {
          this.lastPageReached( body, path );
          return { body, response };
        } else {
          return this.onPageLoad( body, path, response );
        }
      } );
    } )
    .catch( ( error ) => {
      this.onPageError( error, path );
    } );

  this.dispatchEvent( 'request', null, [ path, fetchPromise ] );

  return fetchPromise;
};

proto.onPageLoad = function( body, path, response ) {
  // done loading if not appending
  if ( !this.options.append ) {
    this.isLoading = false;
  }
  this.pageIndex++;
  this.loadCount++;
  this.dispatchEvent( 'load', null, [ body, path, response ] );
  return this.appendNextPage( body, path, response );
};

proto.appendNextPage = function( body, path, response ) {
  let { append, responseBody, domParseResponse } = this.options;
  // do not append json
  let isDocument = responseBody == 'text' && domParseResponse;
  if ( !isDocument || !append ) return { body, response };

  let items = body.querySelectorAll( append );
  let promiseValue = { body, response, items };
  // last page hit if no items. #840
  if ( !items || !items.length ) {
    this.lastPageReached( body, path );
    return promiseValue;
  }

  let fragment = getItemsFragment( items );
  let appendReady = () => {
    this.appendItems( items, fragment );
    this.isLoading = false;
    this.dispatchEvent( 'append', null, [ body, path, items, response ] );
    return promiseValue;
  };

  // TODO add hook for option to trigger appendReady
  if ( this.options.outlayer ) {
    return this.appendOutlayerItems( fragment, appendReady );
  } else {
    return appendReady();
  }
};

proto.appendItems = function( items, fragment ) {
  if ( !items || !items.length ) return;

  // get fragment if not provided
  fragment = fragment || getItemsFragment( items );
  refreshScripts( fragment );
  this.element.appendChild( fragment );
};

function getItemsFragment( items ) {
  // add items to fragment
  let fragment = document.createDocumentFragment();
  if ( items ) fragment.append( ...items );
  return fragment;
}

// replace <script>s with copies so they load
// <script>s added by InfiniteScroll will not load
// similar to https://stackoverflow.com/questions/610995
function refreshScripts( fragment ) {
  let scripts = fragment.querySelectorAll('script');
  for ( let script of scripts ) {
    let freshScript = document.createElement('script');
    // copy attributes
    let attrs = script.attributes;
    for ( let attr of attrs ) {
      freshScript.setAttribute( attr.name, attr.value );
    }
    // copy inner script code. #718, #782
    freshScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild( freshScript, script );
  }
}

// ----- outlayer ----- //

proto.appendOutlayerItems = function( fragment, appendReady ) {
  let imagesLoaded = InfiniteScroll.imagesLoaded || window.imagesLoaded;
  if ( !imagesLoaded ) {
    console.error('[InfiniteScroll] imagesLoaded required for outlayer option');
    this.isLoading = false;
    return;
  }
  // append once images loaded
  return new Promise( function( resolve ) {
    imagesLoaded( fragment, function() {
      let bodyResponse = appendReady();
      resolve( bodyResponse );
    } );
  } );
};

proto.onAppendOutlayer = function( response, path, items ) {
  this.options.outlayer.appended( items );
};

// ----- checkLastPage ----- //

// check response for next element
proto.checkLastPage = function( body, path ) {
  let { checkLastPage, path: pathOpt } = this.options;
  if ( !checkLastPage ) return;

  // if path is function, check if next path is truthy
  if ( typeof pathOpt == 'function' ) {
    let nextPath = this.getPath();
    if ( !nextPath ) {
      this.lastPageReached( body, path );
      return;
    }
  }
  // get selector from checkLastPage or path option
  let selector;
  if ( typeof checkLastPage == 'string' ) {
    selector = checkLastPage;
  } else if ( this.isPathSelector ) {
    // path option is selector string
    selector = pathOpt;
  }
  // check last page for selector
  // bail if no selector or not document response
  if ( !selector || !body.querySelector ) return;

  // check if response has selector
  let nextElem = body.querySelector( selector );
  if ( !nextElem ) this.lastPageReached( body, path );
};

proto.lastPageReached = function( body, path ) {
  this.canLoad = false;
  this.dispatchEvent( 'last', null, [ body, path ] );
};

// ----- error ----- //

proto.onPageError = function( error, path, response ) {
  this.isLoading = false;
  this.canLoad = false;
  this.dispatchEvent( 'error', null, [ error, path, response ] );
  return error;
};

// -------------------------- prefill -------------------------- //

InfiniteScroll.create.prefill = function() {
  if ( !this.options.prefill ) return;

  let append = this.options.append;
  if ( !append ) {
    console.error(`append option required for prefill. Set as :${append}`);
    return;
  }
  this.updateMeasurements();
  this.updateScroller();
  this.isPrefilling = true;
  this.on( 'append', this.prefill );
  this.once( 'error', this.stopPrefill );
  this.once( 'last', this.stopPrefill );
  this.prefill();
};

proto.prefill = function() {
  let distance = this.getPrefillDistance();
  this.isPrefilling = distance >= 0;
  if ( this.isPrefilling ) {
    this.log('prefill');
    this.loadNextPage();
  } else {
    this.stopPrefill();
  }
};

proto.getPrefillDistance = function() {
  // element scroll
  if ( this.options.elementScroll ) {
    return this.scroller.clientHeight - this.scroller.scrollHeight;
  }
  // window
  return this.windowHeight - this.element.clientHeight;
};

proto.stopPrefill = function() {
  this.log('stopPrefill');
  this.off( 'append', this.prefill );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":49}],53:[function(require,module,exports){
// scroll-watch
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// default options
Object.assign( InfiniteScroll.defaults, {
  scrollThreshold: 400,
  // elementScroll: null,
} );

InfiniteScroll.create.scrollWatch = function() {
  // events
  this.pageScrollHandler = this.onPageScroll.bind( this );
  this.resizeHandler = this.onResize.bind( this );

  let scrollThreshold = this.options.scrollThreshold;
  let isEnable = scrollThreshold || scrollThreshold === 0;
  if ( isEnable ) this.enableScrollWatch();
};

InfiniteScroll.destroy.scrollWatch = function() {
  this.disableScrollWatch();
};

proto.enableScrollWatch = function() {
  if ( this.isScrollWatching ) return;

  this.isScrollWatching = true;
  this.updateMeasurements();
  this.updateScroller();
  // TODO disable after error?
  this.on( 'last', this.disableScrollWatch );
  this.bindScrollWatchEvents( true );
};

proto.disableScrollWatch = function() {
  if ( !this.isScrollWatching ) return;

  this.bindScrollWatchEvents( false );
  delete this.isScrollWatching;
};

proto.bindScrollWatchEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.pageScrollHandler );
  window[ addRemove ]( 'resize', this.resizeHandler );
};

proto.onPageScroll = InfiniteScroll.throttle( function() {
  let distance = this.getBottomDistance();
  if ( distance <= this.options.scrollThreshold ) {
    this.dispatchEvent('scrollThreshold');
  }
} );

proto.getBottomDistance = function() {
  let bottom, scrollY;
  if ( this.options.elementScroll ) {
    bottom = this.scroller.scrollHeight;
    scrollY = this.scroller.scrollTop + this.scroller.clientHeight;
  } else {
    bottom = this.top + this.element.clientHeight;
    scrollY = window.scrollY + this.windowHeight;
  }
  return bottom - scrollY;
};

proto.onResize = function() {
  this.updateMeasurements();
};

utils.debounceMethod( InfiniteScroll, 'onResize', 150 );

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":49,"fizzy-ui-utils":47}],54:[function(require,module,exports){
// status
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// InfiniteScroll.defaults.status = null;

InfiniteScroll.create.status = function() {
  let statusElem = utils.getQueryElement( this.options.status );
  if ( !statusElem ) return;

  // elements
  this.statusElement = statusElem;
  this.statusEventElements = {
    request: statusElem.querySelector('.infinite-scroll-request'),
    error: statusElem.querySelector('.infinite-scroll-error'),
    last: statusElem.querySelector('.infinite-scroll-last'),
  };
  // events
  this.on( 'request', this.showRequestStatus );
  this.on( 'error', this.showErrorStatus );
  this.on( 'last', this.showLastStatus );
  this.bindHideStatus('on');
};

proto.bindHideStatus = function( bindMethod ) {
  let hideEvent = this.options.append ? 'append' : 'load';
  this[ bindMethod ]( hideEvent, this.hideAllStatus );
};

proto.showRequestStatus = function() {
  this.showStatus('request');
};

proto.showErrorStatus = function() {
  this.showStatus('error');
};

proto.showLastStatus = function() {
  this.showStatus('last');
  // prevent last then append event race condition from showing last status #706
  this.bindHideStatus('off');
};

proto.showStatus = function( eventName ) {
  show( this.statusElement );
  this.hideStatusEventElements();
  let eventElem = this.statusEventElements[ eventName ];
  show( eventElem );
};

proto.hideAllStatus = function() {
  hide( this.statusElement );
  this.hideStatusEventElements();
};

proto.hideStatusEventElements = function() {
  for ( let type in this.statusEventElements ) {
    let eventElem = this.statusEventElements[ type ];
    hide( eventElem );
  }
};

// --------------------------  -------------------------- //

function hide( elem ) {
  setDisplay( elem, 'none' );
}

function show( elem ) {
  setDisplay( elem, 'block' );
}

function setDisplay( elem, value ) {
  if ( elem ) {
    elem.style.display = value;
  }
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":49,"fizzy-ui-utils":47}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsiveAutoHeight = function () {
  function ResponsiveAutoHeight(selector, options) {
    var _this = this;

    _classCallCheck(this, ResponsiveAutoHeight);

    this.selector = selector;
    this.elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    this.options = options;
    window.addEventListener('resize', function () {
      _this.run();
    });
    this.run();
  }

  _createClass(ResponsiveAutoHeight, [{
    key: 'recalc',
    value: function recalc() {
      this.elements = document.querySelectorAll(this.selector);
      this.run();
    }
  }, {
    key: 'makeGroups',
    value: function makeGroups(elements) {
      var group = [];
      [].forEach.call(elements, function (element) {
        element.style.height = '1px';
        element.style.overflow = 'hidden';
      });
      var idx = 0;
      var height = (0, _util.getOffset)(elements[0]).top;
      group[0] = [];
      [].forEach.call(elements, function (element) {
        if ((0, _util.getOffset)(element).top !== height) {
          height = (0, _util.getOffset)(element).top;
          idx += 1;
          group[idx] = [];
        }
        group[idx].push(element);
      });
      [].forEach.call(elements, function (element) {
        element.style.height = '';
        element.style.overflow = '';
      });
      return group;
    }
  }, {
    key: 'autoHeight',
    value: function autoHeight(group) {
      var heights = group.map(function (element) {
        var computedStyle = getComputedStyle(element);
        var boxSizing = computedStyle.boxSizing;
        if (boxSizing === 'border-box') {
          return element.offsetHeight;
        }
        return element.offsetHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
      });
      var maxHeight = Math.max.apply(Math, _toConsumableArray(heights));
      group.forEach(function (element) {
        element.style.height = maxHeight + 'px';
      });
    }
  }, {
    key: 'run',
    value: function run() {
      var _this2 = this;

      var elements = this.elements;

      var groups = this.makeGroups(elements);
      groups.forEach(function (group) {
        _this2.autoHeight(group);
      });
    }
  }]);

  return ResponsiveAutoHeight;
}();

exports.default = ResponsiveAutoHeight;
module.exports = exports['default'];
},{"./util":56}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

var getScrollLeft = function getScrollLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

var getOffset = exports.getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + getScrollTop(),
    left: rect.left + getScrollLeft()
  };
};
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3BhZ2UtbG9hZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvc2Nyb2xsLXdhdGNoLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvcmVzcG9uc2l2ZS1hdXRvLWhlaWdodC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVzcG9uc2l2ZS1hdXRvLWhlaWdodC9saWIvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sT0FBTyxHQUFHLGVBQWhCOztBQUVBLElBQU0sR0FBRyxHQUFHO0FBQ2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEUztBQUVmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUZBO0FBR2YsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FIRztBQUlmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBSlM7QUFLZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUxTO0FBTWYsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQU8sQ0FBQyxhQUFsQyxDQU5HO0FBT2YsRUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBUEU7QUFRZixFQUFBLE1BQU0sRUFBRTtBQUNKLElBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBREY7QUFFSixJQUFBLFFBQVEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpREFBdkIsQ0FGTjtBQUdKLElBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlDQUF2QixDQUhSO0FBSUosSUFBQSxNQUFNLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FKSjtBQUtKLElBQUEsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBTFg7QUFNSixJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QiwyQ0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICB3cmFwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgc2l0ZUZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIiksXHJcbiAgICAgICAgY2FsbG91dEZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItY2FsbG91dC13cmFwXCIpLFxyXG4gICAgICAgIGZvb3RlckJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItYmFyXCIpLFxyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiaW1wb3J0IFwiLi9saWIvZWxlbWVudFwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4vdGhlbWUvdGhlbWVcIjtcclxuXHJcbmNsYXNzIE9jZWFuV1Age1xyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuKFwidXNlIHNjcmlwdFwiKTtcclxuXHJcbndpbmRvdy5vY2VhbndwID0gbmV3IE9jZWFuV1AoKTtcclxub2NlYW53cC5zdGFydCgpO1xyXG4iLCJFbGVtZW50LnByb3RvdHlwZS5vY2VhblBhcmVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xyXG4gICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgdmFyIGlzaGF2ZXNlbGVjdG9yID0gc2VsZWN0b3IgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQpICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc2hhdmVzZWxlY3RvciB8fCBlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50cztcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW5cIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLWJvdHRvbVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVRvZ2dsZSA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIgPyBzbGlkZURvd24oZWxlbWVudCwgZHVyYXRpb24pIDogc2xpZGVVcChlbGVtZW50LCBkdXJhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsIF9vcHRpb25zID0ge30pID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAhIW9wdGlvbnMuY2FsbGJhY2sgJiYgb3B0aW9ucy5jYWxsYmFjaygpO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlT3V0ID0gKGVsZW1lbnQsIF9vcHRpb25zID0ge30pID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAhIW9wdGlvbnMuY2FsbGJhY2sgJiYgb3B0aW9ucy5jYWxsYmFjaygpO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlVG9nZ2xlID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiID8gZmFkZUluKGVsZW1lbnQsIG9wdGlvbnMpIDogZmFkZU91dChlbGVtZW50LCBvcHRpb25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gISEoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IChlKSA9PiB7XHJcbiAgICAvLyBmb3IgY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBbXTtcclxuXHJcbiAgICAvLyBpZiBubyBwYXJlbnQsIHJldHVybiBubyBzaWJsaW5nXHJcbiAgICBpZiAoIWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJzdCBjaGlsZCBvZiB0aGUgcGFyZW50IG5vZGVcclxuICAgIGxldCBzaWJsaW5nID0gZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgd2hpbGUgKHNpYmxpbmcpIHtcclxuICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2libGluZ3M7XHJcbn07XHJcblxyXG4vLyBSZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gZWxlbWVudFxyXG5leHBvcnQgY29uc3QgaXNFbGVtZW50ID0gKG8pID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1NlbGVjdG9yVmFsaWQgPSAoKGR1bW15RWxlbWVudCkgPT4gKHNlbGVjdG9yKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR1bW15RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59KShkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dNYXNvbnJ5IHtcbiAgICBpc290b3A7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00uYmxvZy5tYXNvbnJ5R3JpZHM/LmZvckVhY2goKGJsb2dNYXNvbnJ5R3JpZCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGJsb2dNYXNvbnJ5R3JpZCwgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc290b3AgPSBuZXcgSXNvdG9wZShibG9nTWFzb25yeUdyaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5pc290b3BlLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IG9wdGlvbnMuaXNSVEwgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IFJlc3BvbnNpdmVBdXRvSGVpZ2h0IGZyb20gXCJyZXNwb25zaXZlLWF1dG8taGVpZ2h0XCI7XHJcblxyXG5jbGFzcyBFcXVhbEhlaWdodEVsZW1lbnRzIHtcclxuICAgICNleGVjdXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4ICYmICF0aGlzLiNleGVjdXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWVxdWFsLWhlaWdodHMgLmJsb2ctZW50cnktaW5uZXJcIikpIHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF0Y2gtaGVpZ2h0LWdyaWQgLm1hdGNoLWhlaWdodC1jb250ZW50XCIpKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zaXZlQXV0b0hlaWdodChcIi5tYXRjaC1oZWlnaHQtZ3JpZCAubWF0Y2gtaGVpZ2h0LWNvbnRlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNleGVjdXRlZCA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVhbEhlaWdodEVsZW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gICAgI2xhc3RXaW5kb3dXaWR0aDtcclxuICAgICNsYXN0V2luZG93SGVpZ2h0O1xyXG4gICAgI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLm1haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLiNvbldpbmRvd0xvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93TG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2ZpeEZvb3RlckF0TWlkZGxlUGFnZSgpO1xyXG4gICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy4jcGFyYWxsYXhGb290ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4jZml4Rm9vdGVyQXRNaWRkbGVQYWdlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuI2xhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy4jbGFzdFdpbmRvd0hlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhGb290ZXJBdE1pZGRsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3BBZG1pbmJhckhlaWdodCA9IERPTS5XUEFkbWluYmFyPy5vZmZzZXRIZWlnaHQgPz8gMDtcclxuICAgICAgICBjb25zdCBmb290ZXJCYXJIZWlnaHQgPSBET00uZm9vdGVyLmZvb3RlckJhcj8ub2Zmc2V0SGVpZ2h0ID8/IDA7XHJcbiAgICAgICAgY29uc3QgaHRtbEhlaWdodCA9IERPTS5odG1sLm9mZnNldEhlaWdodCAtIHdwQWRtaW5iYXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChodG1sSGVpZ2h0IDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIERPTS53cmFwLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAke3dwQWRtaW5iYXJIZWlnaHR9cHggLSAke2Zvb3RlckJhckhlaWdodH1weCk7XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFET00uZm9vdGVyLmNhbGxvdXRGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghIURPTS5mb290ZXIuc2l0ZUZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5zaXRlRm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNmb290ZXJQb3NpdGlvblN0YXRlID0gXCJjaGFuZ2VkXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLiNmb290ZXJQb3NpdGlvblN0YXRlID09PSBcImNoYW5nZWRcIikge1xyXG4gICAgICAgICAgICBET00ud3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghIURPTS5mb290ZXIuY2FsbG91dEZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLnNpdGVGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjZml4ZWRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1maXhlZC1mb290ZXJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIGlmICghIURPTS5XUEFkbWluYmFyKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERPTS5tYWluLnN0eWxlLm1pbkhlaWdodCA9IERPTS5tYWluLm9mZnNldEhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBET00uaHRtbC5vZmZzZXRIZWlnaHQgLSBvZmZzZXQpICsgXCJweFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAjcGFyYWxsYXhGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1wYXJhbGxheC1mb290ZXJcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFpblNlY3Rpb25NYXJnaW5Cb3R0b20gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIG1haW5TZWN0aW9uTWFyZ2luQm90dG9tICs9IERPTS5mb290ZXIucGFyYWxsYXg/Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISFET00uZm9vdGVyLmNhbGxvdXRGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIuc3R5bGUuYm90dG9tID0gYCR7bWFpblNlY3Rpb25NYXJnaW5Cb3R0b219cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5TZWN0aW9uTWFyZ2luQm90dG9tICs9IERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLm1haW4uc3R5bGUubWFyZ2luQm90dG9tID0gYCR7bWFpblNlY3Rpb25NYXJnaW5Cb3R0b219cHhgO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgVmVydGljYWxIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL3ZlcnRpY2FsXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbEhlYWRlcigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFZlcnRpY2FsSGVhZGVyIHtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5oZWFkZXIudmVydGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW46bm90KC5idG4pID4gYVwiKS5mb3JFYWNoKChtZW51TGluaykgPT4ge1xyXG4gICAgICAgICAgICBtZW51TGluay5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9XCIwXCI+PC9zcGFuPicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmVydGljYWxIZWFkZXJUYXJnZXQgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgID8gRE9NLmhlYWRlci52ZXJ0aWNhbC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcclxuICAgICAgICAgICAgICAgIDogRE9NLmhlYWRlci52ZXJ0aWNhbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuXHJcbiAgICAgICAgbmV3IFBlcmZlY3RTY3JvbGxiYXIoRE9NLmhlYWRlci52ZXJ0aWNhbCwge1xyXG4gICAgICAgICAgICB3aGVlbFNwZWVkOiAwLjUsXHJcbiAgICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uLmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnZlcnRpY2FsSGVhZGVyVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmICghbWVudUl0ZW0/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpPy5mb3JFYWNoKChvcGVuTWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIG9wZW5NZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVVcChvcGVuTWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsXCIpLCAyNTApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNvblRvZ2dsZU1lbnVCdG5DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtb3BlbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ2aC1vcGVuZWRcIik7XHJcbiAgICAgICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4ucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIikuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcclxuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcclxuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5oZWFkZXIudmVydGljYWw/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzID8gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV0gOiBcIlwiO1xyXG5cclxuICAgICAgICBuYXZMYXN0RWxlbWVudC5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlci1zdHlsZVwiKSkge1xyXG4gICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXNjS2V5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZW50ZXJLZXkgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikgJiZcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtY2xvc2VkXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5hdkZpcnN0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xyXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTWVudSBmcm9tIFwiLi9tZW51L2Z1bGwtc2NyZWVuXCI7XHJcbmltcG9ydCBNZWdhTWVudSBmcm9tIFwiLi9tZW51L21lZ2FcIjtcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTWVudSgpO1xyXG4gICAgICAgIHRoaXMubWVnYSA9IG5ldyBNZWdhTWVudSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubmF2LW5vLWNsaWNrID4gYVwiKS5mb3JFYWNoKChub0NsaWNrTWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbm9DbGlja01lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk5vQ2xpY2tNZW51SXRlbUNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLnNmLW1lbnVcIikuZm9yRWFjaCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKTtcclxuICAgICAgICAgICAgcGFyZW50TWVudUl0ZW1zLmZvckVhY2goKHBhcmVudE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VlbnRlcik7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VsZWF2ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ob0NsaWNrTWVudUl0ZW1DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblBhcmVudE1lbnVJdGVtTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudE1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwic2ZIb3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uUGFyZW50TWVudUl0ZW1Nb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIHBhcmVudE1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZkhvdmVyXCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEZ1bGxTY3JlZW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hcnJvd1wiKS5mb3JFYWNoKChwbHVzQnRuKSA9PiB7XG4gICAgICAgICAgICBwbHVzQnRuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYSA+IC50ZXh0LXdyYXAgPiBzcGFuLm5hdi1hcnJvdywgI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUxpbmtDbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUhhc2h0YWdMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVNZW51QnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoIXRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhpdFwiKSkge1xuICAgICAgICAgICAgdGhpcy4jb3Blbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xuXG4gICAgICAgIGlmICghKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1Yk1lbnUpLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTWVudUhhc2h0YWdMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgfTtcblxuICAgICNvcGVuTWVudSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmhlYWRlci5mdWxsU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLmxvZ28/LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG4gICAgfTtcblxuICAgICNjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlT3V0KERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudSk7XG5cbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93blwiKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51Py5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bjtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5uYXYtYXJyb3csIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1hcnJvd1wiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1lbnU7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIE1lZ2FNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51Q29udGVudHMuZm9yRWFjaCgobWVudUNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUNvbnRlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtTGVmdE9mZnNldCA9IG9mZnNldChtZW51SXRlbSkubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250ZW50V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51Q29udGVudCkud2lkdGgpO1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsTWFyZ2luO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUNvbnRlbnRXaWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gMTA7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVDb250ZW50V2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSBtZW51SXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5pc1JUTCkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBgLSR7aG9yaXpvbnRhbFBvc2l0aW9ufXB4YDtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnJpZ2h0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtob3Jpem9udGFsTWFyZ2lufXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1MZWZ0T2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiArXG4gICAgICAgICAgICAgICAgICAgIG1lbnVDb250ZW50V2lkdGggPFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSBtZW51SXRlbUxlZnRPZmZzZXQgLSBtZW51SXRlbS5vZmZzZXRXaWR0aCAtIDEwXG4gICAgICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5tZWdhLm1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25NZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb3BiYXIgbWVudSBpdGVtc1xuICAgICAgICBET00ubWVudS5tZWdhLnRvcGJhck1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKVxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbi13cmFwID4gLmNvbnRhaW5lclwiKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLWlubmVyXCIpO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNvblRvcGJhck1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci50b3BiYXI7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1Nb3VzZUVudGVyKHdyYXBwZXIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgI21lbnVJdGVtTW91c2VFbnRlciA9ICh3cmFwcGVyLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwiLm1lZ2FtZW51XCIpO1xuICAgICAgICBsZXQgbGVmdFBvc2l0aW9uID0gcGFyc2VJbnQob2Zmc2V0KG1lbnVJdGVtKS5sZWZ0IC0gb2Zmc2V0KHdyYXBwZXIpLmxlZnQgKyAxKTtcblxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJib3hlZC1sYXlvdXRcIikpIHtcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvbiAtIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2xlZnRQb3NpdGlvbn1weGA7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUud2lkdGggPSBgJHt3cmFwcGVyLm9mZnNldFdpZHRofXB4YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWdhTWVudTtcbiIsImltcG9ydCBEcm9wRG93bk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZHJvcC1kb3duXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgU2lkZWJhck1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvc2lkZWJhclwiO1xyXG5cclxuY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duID0gbmV3IERyb3BEb3duTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhciA9IG5ldyBTaWRlYmFyTW9iaWxlTWVudSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcclxuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc2xpZGVVcCwgc2xpZGVEb3duLCBzbGlkZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRHJvcERvd25Nb2JpbGVNZW51IHtcbiAgICAjaXNNZW51T3BlbjtcbiAgICAjbWVudUl0ZW1zVG9nZ2xlSWNvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLW1vYmlsZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm1lbnVJdGVtc0hhc0NoaWxkcmVuPy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkcm9wZG93bi10b2dnbGVcIjtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zVG9nZ2xlSWNvbiA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIlxuICAgICAgICAgICAgICAgID8gRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXG4gICAgICAgICAgICAgICAgOiBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIFwiLm1vYmlsZS1tZW51XCIsIFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnV0dG9uQ2xpY2spO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUNsb3NlQ2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkhhbWJ1cmdlckNsaWNrKTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbXNUb2dnbGVJY29uPy5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlTWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciAmJiBzbGlkZVRvZ2dsZShET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyLCA0MDApO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbk1lbnVDbG9zZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciAmJiBzbGlkZVVwKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDI1MCk7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcbiAgICAgICAgICAgIHRoaXMuI29uTWVudUNsb3NlQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25IYW1idXJnZXJDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5NZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5uYXY/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoISFjbG9zZUljb24pIHtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duTW9iaWxlTWVudTtcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNsaWRlVXAsIHNsaWRlRG93biwgZmFkZUluLCBmYWRlT3V0LCB2aXNpYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTW9iaWxlTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnVsbHNjcmVlbi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIik/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD0wPjwvc3Bhbj4nKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgXCIubW9iaWxlLW1lbnVcIiwgXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEgPiBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhW2hyZWY9XCIjXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ecm9wb3duVG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25Ecm9wb3duVG9nZ2xlSWNvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNtb2JpbGUtZnVsbHNjcmVlbiAuZnMtZHJvcGRvd24tbWVudSBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuICNtb2JpbGUtbmF2IGxpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAjbW9iaWxlLWZ1bGxzY3JlZW4gYS5jbG9zZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VJY29uQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25NZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZUluKERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4pO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuIC0gaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5xdWVyeVNlbGVjdG9yKFwiYS5jbG9zZVwiKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUljb25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cmluZygwLCAxKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbikpIHtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGZhZGVPdXQoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbik7XG5cbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5kcm9wZG93blwiKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRHJvcG93blRvZ2dsZUljb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XG5cbiAgICAgICAgaWYgKCEod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViTWVudSkuZGlzcGxheSA9PT0gXCJub25lXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoXCJhLmNsb3NlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlblxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XHJcbmltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTaWRlYmFyTW9iaWxlTWVudSB7XHJcbiAgICAjaXNNZW51T3BlbjtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuICAgICNzaWRlYmFyVG9nZ2xlTWVudUJ0bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnNpZHJTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tb2JpbGVcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiNzdGFydFNpZHJQbHVnaW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChtZW51SXRlbUxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICAgIFwibGkuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI3N0YXJ0U2lkclBsdWdpbiA9ICgpID0+IHtcclxuICAgICAgICBzaWRyLm5ldyhcIi5tb2JpbGUtbWVudVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2lkclwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc2lkclNvdXJjZSxcclxuICAgICAgICAgICAgc2lkZTogb3B0aW9ucy5zaWRyU2lkZSxcclxuICAgICAgICAgICAgZGlzcGxhY2U6IG9wdGlvbnMuc2lkckRpc3BsYWNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICByZW5hbWluZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGltaW5nOiBcImVhc2VcIixcclxuICAgICAgICAgICAgYmluZDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICBvbk9wZW4oKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYS5zaWRyLWNsYXNzLXRvZ2dsZS1zaWRyLWNsb3NlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPy5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnNpdGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWZ0ZXJlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm9jZWFud3Atc2lkci1vdmVybGF5XCIgdGFiaW5kZXg9MD48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVJbihvdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlID4gdWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChzdWJNZW51QWN0aXZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViTWVudUFjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKG1lbnVJdGVtQWN0aXZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLXNpZHItb3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWRlT3V0KG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWZhXCJdJylcclxuICAgICAgICAgICAgLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb24uY2xhc3NOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgL1xcYnNpZHItY2xhc3MtZmEuKj9cXGIvZyxcclxuICAgICAgICAgICAgICAgICAgICBcImZhXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnI3NpZHIgW2NsYXNzKj1cInNpZHItY2xhc3MtaWNvblwiXScpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC9cXGJzaWRyLWNsYXNzLWljb24tLio/XFxiL2csXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uLVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI29uSGFtYnVyZ2VyQnRuQ2xpY2tcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24/LmZvckVhY2gobWVudUl0ZW1QbHVzSWNvbiA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwidG91Y2hlbmRcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcInRvdWNoZW5kXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1uYXYtbm8tY2xpY2sgPiBhXCIpXHJcbiAgICAgICAgICAgID8uZm9yRWFjaChtZW51SXRlbUxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSGFtYnVyZ2VyQnRuQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICA/LmZvckVhY2gob3Blbk1lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25XaW5kb3dSZXNpemUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItb3BlblwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xyXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3NpZHJcIilcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICBcImEsIHNwYW4uc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICBpZiAoY2xvc2VJY29uKSB7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFzaGlmdEtleSAmJlxyXG4gICAgICAgICAgICAgICAgdGFiS2V5ICYmXHJcbiAgICAgICAgICAgICAgICBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcclxuICAgICAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaGlmdEtleSAmJlxyXG4gICAgICAgICAgICAgICAgdGFiS2V5ICYmXHJcbiAgICAgICAgICAgICAgICBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZW50ZXJLZXkgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjY2xvc2VTaWRyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaWRyLmNsb3NlKFwic2lkclwiKTtcclxuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcImluZmluaXRlLXNjcm9sbFwiO1xuXG5jbGFzcyBPV0luZmluaXRlU2Nyb2xsIHtcbiAgICAjaW5maW5pdGVTY3JvbGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsTmF2ICYmXG4gICAgICAgICAgICAhIURPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxOYXYucXVlcnlTZWxlY3RvcihcIi5vbGRlci1wb3N0cyBhXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwgPSBuZXcgSW5maW5pdGVTY3JvbGwoXG4gICAgICAgICAgICBET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsV3JhcHBlcixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi5vbGRlci1wb3N0cyBhXCIsXG4gICAgICAgICAgICAgICAgYXBwZW5kOiBcIi5pdGVtLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIi5zY3JvbGxlci1zdGF0dXNcIixcbiAgICAgICAgICAgICAgICBoaWRlTmF2OiBcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIsXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJlZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUaHJlc2hvbGQ6IDUwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoYm9keSwgcGF0aCwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tZW50cnlcIik7XG5cbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChpdGVtcywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEJsb2cgbWFzb25yeSBpc290b3BlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmJsb2dNYXNvbnJ5Lmlzb3RvcC5hcHBlbmRlZChpdGVtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRml4IEdhbGxlcnkgcG9zdHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuYmxvZ01hc29ucnkuaXNvdG9wLmxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNjAwICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFcXVhbCBoZWlnaHQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLW1hdGNoaGVpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuZXF1YWxIZWlnaHRFbGVtZW50cy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEdhbGxlcnkgcG9zdHMgc2xpZGVyXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1jYXJvdXNlbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93U2xpZGVyLnN0YXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZ2FsbGVyeS1mb3JtYXQsIC5wcm9kdWN0LWVudHJ5LXNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5pbml0U2luZ2xlSW1hZ2VMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93TGlnaHRib3guaW5pdEdhbGxlcnlMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBpbWFnZXMgdG8gYmUgcGFyc2VkIHRvIGZpeCBTYWZhcmkgaXNzdWVcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik/LmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vdXRlckhUTUwgPSBpbWcub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV0luZmluaXRlU2Nyb2xsO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBPV0xpZ2h0Ym94IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2FkZExpZ2h0Ym94Q2xhc3MoKTtcbiAgICAgICAgdGhpcy5pbml0U2luZ2xlSW1hZ2VMaWdodGJveCgpO1xuICAgICAgICB0aGlzLmluaXRHYWxsZXJ5TGlnaHRib3goKTtcbiAgICB9O1xuXG4gICAgaW5pdFNpbmdsZUltYWdlTGlnaHRib3ggPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoXCIub2NlYW53cC1saWdodGJveFwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIG1haW5DbGFzczogXCJtZnAtd2l0aC16b29tXCIsXG5cbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICAgICAgb3BlbmVyOiBmdW5jdGlvbiAob3BlbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BlbmVyRWxlbWVudC5pcyhcImltZ1wiKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbml0R2FsbGVyeUxpZ2h0Ym94ID0gKCkgPT4ge1xuICAgICAgICBqUXVlcnkoXCIud3AtYmxvY2stZ2FsbGVyeSwgLmdhbGxlcnktZm9ybWF0LCAuZ2FsbGVyeVwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiBcIi5nYWxsZXJ5LWxpZ2h0Ym94Om5vdCguc2xpY2stY2xvbmVkKVwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiBcIm1mcC1mYWRlXCIsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjYWRkTGlnaHRib3hDbGFzcyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSAuZW50cnktY29udGVudCBhLCBib2R5IC5lbnRyeSBhLCBib2R5IGFydGljbGUgLmdhbGxlcnktZm9ybWF0IGFcIilcbiAgICAgICAgICAgID8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIWxpbmsucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUZvcm1hdHMgPSB0aGlzLiNpbWFnZUZvcm1hdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlRm9ybWF0c01hc2sgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0cy5mb3JFYWNoKChpbWFnZUZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VGb3JtYXRzTWFzayArPSBTdHJpbmcobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKS5pbmRleE9mKFwiLlwiICsgaW1hZ2VGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VGb3JtYXRzTWFzayA9PT0gLTEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJuby1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIndvby1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLXRodW1ibmFpbFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX2ltYWdlXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFsaW5rLmNsb3Nlc3QoXCIud3AtYmxvY2stZ2FsbGVyeVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhbGluay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVsZW1lbnRvci1vcGVuLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ5aXRoX21hZ25pZmllcl90aHVtYm5haWxcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImdnLWxpbmtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJvY2VhbndwLWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktaWNvblwiKSB8fCAhIWxpbmsuY2xvc2VzdChcIi53cC1ibG9jay1nYWxsZXJ5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeS1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjaW1hZ2VGb3JtYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gW1wiYm1wXCIsIFwiZ2lmXCIsIFwianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcInRpZmZcIiwgXCJ0aWZcIiwgXCJqZmlmXCIsIFwianBlXCIsIFwic3ZnXCIsIFwibXA0XCIsIFwib2dnXCIsIFwid2VibVwiXTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV0xpZ2h0Ym94O1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBPV1NsaWRlciB7XG4gICAgZmxpY2tpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWZvcm1hdCwgLnByb2R1Y3QtZW50cnktc2xpZGVyXCIpKSA9PiB7XG4gICAgICAgIHRoaXMuZmxpY2tpdHkgPSBbXTtcblxuICAgICAgICBlbGVtZW50cz8uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxpY2tpdHkgPSBuZXcgRmxpY2tpdHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndvby1lbnRyeS1pbWFnZVwiKSA/IGZhbHNlIDogNjAwMCxcbiAgICAgICAgICAgICAgICByaWdodFRvTGVmdDogRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicnRsXCIpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBjb250YWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmxpY2tpdHkucHVzaChmbGlja2l0eSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XU2xpZGVyO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpc1NlbGVjdG9yVmFsaWQsIG9mZnNldCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFNjcm9sbEVmZmVjdCB7XHJcbiAgICAjbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLXByb2R1Y3RcIikgJiZcclxuICAgICAgICAgICAgIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxvY2FsLXNjcm9sbFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLmxvY2FsW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLmxvY2FsIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLm1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEuc2lkci1jbGFzcy1tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHNjcm9sbEl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxJdGVtQ2xpY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2Nyb2xsSXRlbUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWxlbWVudG9yLWl0ZW0tYW5jaG9yXCIpICYmXHJcbiAgICAgICAgICAgIHNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXN1Ym1lbnVcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbG9zZXN0KFwiLm9tdy1vcGVuLW1vZGFsXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9ldy1tb2RhbC1idXR0b25cIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xvc2VzdChcIi5vZXctbW9kYWwtYnV0dG9uXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1vcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3Mtb3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWNvbW1lbnQtcmVwbHlcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHRiLW5hdi1saW5rXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBzY3JvbGxJdGVtLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKFwiI1wiKSkuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NlbGVjdG9yVmFsaWQoYCMke2lkfWApKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpZCAhPSBcIlwiICYmICEhdGFyZ2V0RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXItc3RpY2t5LXdyYXBwZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPy5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zdGlja3lcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLXN0aWNreS13cmFwcGVyXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGljay1hbnl0aGluZy1oZWFkZXJcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgISFkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudG9yLXNlY3Rpb24td3JhcFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50b3Itc3RpY2t5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgISFET00uaGVhZGVyLnNpdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNmaXhNdWx0aU1lbnUoZSwgdGFyZ2V0RWxlbSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNnZXRBZG1pbkJhckhlaWdodCA9ICgpID0+XHJcbiAgICAgICAgISFET00uV1BBZG1pbmJhciA/IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodCA6IDA7XHJcblxyXG4gICAgI2dldFRvcGJhckhlaWdodCA9ICgpID0+XHJcbiAgICAgICAgISFET00uaGVhZGVyLnRvcGJhcldyYXBwZXIgJiZcclxuICAgICAgICBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWJhci1zdGlja3lcIilcclxuICAgICAgICAgICAgPyBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIDogMDtcclxuXHJcbiAgICAjZ2V0U3RpY2t5SGVhZGVySGVpZ2h0ID0gKHN0YXJ0UG9zaXRpb24gPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0aWNreUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwiI3NpdGUtaGVhZGVyLXN0aWNreS13cmFwcGVyXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoISFzdGlja3lIZWFkZXIpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImlzLXN0aWNreVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIXN0YXJ0UG9zaXRpb25cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN0aWNreUhlYWRlcikuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gRE9NLmhlYWRlci5zaXRlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuYm90dG9tLWhlYWRlci13cmFwXCJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWVudS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbWVudVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5kYXRhc2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1oZWFkZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET00uaGVhZGVyLnNpdGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cC1lZmZlY3RcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlPy5kYXRhc2V0LmhlaWdodCA/PyA1NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RpY2stYW55dGhpbmctaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0aWNrLWFueXRoaW5nLWhlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZSAmJlxyXG4gICAgICAgICAgICAhIWRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50b3Itc2VjdGlvbi13cmFwXCIpXHJcbiAgICAgICAgICAgICAgICA/LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRvci1zdGlja3lcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudG9yLXNlY3Rpb24td3JhcFwiKVxyXG4gICAgICAgICAgICAgICAgPy5maXJzdEVsZW1lbnRDaGlsZC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcblxyXG4gICAgI2ZpeE11bHRpTWVudSA9IChldmVudCwgdGFyZ2V0RWxlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpeGVkT2Zmc2V0ID1cclxuICAgICAgICAgICAgb2Zmc2V0KHRhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgIHRoaXMuI2dldEFkbWluQmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICB0aGlzLiNnZXRUb3BiYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCh0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldC50b0ZpeGVkKCkgPT09IGZpeGVkT2Zmc2V0LnRvRml4ZWQoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLiNmaXhNdWx0aU1lbnUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci5zaXRlPy5vZmZzZXRIZWlnaHQgLSAxID5cclxuICAgICAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCh0cnVlKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQodGFyZ2V0RWxlbSkudG9wIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRBZG1pbkJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRUb3BiYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NLmhlYWRlci5zaXRlPy5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IHRoaXMuI2xhc3RTY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzbW9vdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuI2xhc3RTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxFZmZlY3Q7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHt9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI29uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgRE9NLnNjcm9sbC5zY3JvbGxUb3A/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICAgICAgRE9NLnNjcm9sbC5nb1RvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wU2xhc2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93U2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLnNjcm9sbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShET00uc2Nyb2xsLnNjcm9sbFRvcCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBmYWRlSW4oRE9NLnNjcm9sbC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgZmFkZU91dChET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uU2Nyb2xsVG9wQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBzY3JvbGxUb3AucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IERyb3BEb3duU2VhcmNoIGZyb20gXCIuL3NlYXJjaC9kcm9wLWRvd25cIjtcclxuaW1wb3J0IEhlYWRlclJlcGxhY2VTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2hlYWRlci1yZXBsYWNlXCI7XHJcbmltcG9ydCBNb2JpbGVTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC9tb2JpbGUtc2VhcmNoLWljb25cIjtcclxuaW1wb3J0IE92ZXJsYXlTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL292ZXJsYXlcIjtcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBtb2JpbGVPdmVybGF5SW5wdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd24gPSBuZXcgRHJvcERvd25TZWFyY2goKTtcclxuICAgICAgICB0aGlzLmhlYWRlclJlcGxhY2UgPSBuZXcgSGVhZGVyUmVwbGFjZVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG5ldyBPdmVybGF5U2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVTZWFyY2hJY29uID0gbmV3IE1vYmlsZVNlYXJjaEljb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0LmNsb3Nlc3QoXCJmb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSW5wdXRLZXl1cCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBmb3JtID0gaW5wdXQuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJjbGFzcyBTZWFyY2hCYXNlIHtcbiAgICBmb2N1cyA9IChmb3JtLCBpbnB1dENsYXNzKSA9PiB7XG4gICAgICAgIGxldCBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGZvcm0pLnRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxMDAwO1xuXG4gICAgICAgIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSAhIWZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPyBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uIDogNjAwO1xuXG4gICAgICAgIGlmIChmb3JtVHJhbnNpdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoaW5wdXRDbGFzcykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFzZTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgRHJvcERvd25TZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRG9jdW1lbnRDbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgdG9nZ2xlU2VhcmNoQnRuLCBmb3JtIH0gPSBET00uc2VhcmNoLmRyb3BEb3duO1xuXG4gICAgICAgIHRvZ2dsZVNlYXJjaEJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29uRG9jdW1lbnRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBDb2xsYXBzIHNlYXJjaCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLmZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LnBhcmVudE5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blNlYXJjaDtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgSGVhZGVyUmVwbGFjZVNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJoZWFkZXJfcmVwbGFjZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5tYWluLnN0eWxlLm1pbldpZHRoID0gXCIzNzBweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgZm9ybS5zdHlsZS5tYXhXaWR0aCA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24gPiB1bC5kcm9wZG93bi1tZW51XCIpPy5vZmZzZXRXaWR0aCArIDYwICsgXCJweFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERPTS5tZW51Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIlwiO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZT8uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubmF2Py5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjaGFzVG9wSGVhZGVyID0gKCkgPT4gRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJSZXBsYWNlU2VhcmNoO1xuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgTW9iaWxlU2VhcmNoSWNvbiBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgICNlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNlbGVtZW50cyA9IHtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtZHJvcGRvd25cIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb24tb3ZlcmxheVwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2hDbG9zZUljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXkgLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxuICAgICAgICAgICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3RvZ2dsZURyb3Bkb3duU2VhcmNoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrRG9jdW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaEljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvcGVuT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoQ2xvc2VJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jY2xvc2VPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI3RvZ2dsZURyb3Bkb3duU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFwiaW5wdXQuZmllbGRcIik7XG4gICAgfTtcblxuICAgICNvcGVuT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZUluKHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHRoaXMuZm9jdXModGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5tb2JpbGUtc2VhcmNoLW92ZXJsYXktaW5wdXRcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZU91dCh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbkNsaWNrRG9jdW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNpY29uLXNlYXJjaGZvcm0tZHJvcGRvd24uc2hvd1wiKSkge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVTZWFyY2hJY29uO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBPdmVybGF5U2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLm92ZXJsYXkudG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VCdG5DbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4oZm9ybSk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KGZvcm0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5U2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IHtcclxuICAgICNzZWxlY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdCA9IHNlbGVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICBcImFmdGVyZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3QgJHt0aGlzLiNzZWxlY3QuY2xhc3NMaXN0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtc2VsZWN0SW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLiNzZWxlY3Qub3B0aW9uc1t0aGlzLiNzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJoYXNDdXN0b21TZWxlY3RcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzdHlsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc3R5bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuaGVpZ2h0ID0gXCIzNHB4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmZvbnRTaXplID0gXCIxM3B4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmFwcGVhcmFuY2UgPSBcIm1lbnVsaXN0LWJ1dHRvblwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3QubmV4dFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Nb3VzZWVudGVyKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25Nb3VzZWxlYXZlKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLm9uQ2hhbmdlKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLXNlbGVjdEhvdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy4jb25Eb2N1bWVudFJlYWR5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Eb2N1bWVudFJlYWR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5zdHlsZS53aWR0aCA9IHNlbGVjdC5uZXh0U2libGluZy5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZS1tZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgQmxvZ01hc29ucnkgZnJvbSBcIi4vY29tcG9uZW50cy9ibG9nLW1hc29ucnlcIjtcclxuaW1wb3J0IFNjcm9sbFRvcCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC10b3BcIjtcclxuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC1lZmZlY3RcIjtcclxuaW1wb3J0IEVxdWFsSGVpZ2h0RWxlbWVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9lcXVhbC1oZWlnaHQtZWxlbWVudHNcIjtcclxuaW1wb3J0IE9XSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1pbmZpbml0ZS1zY3JvbGxcIjtcclxuaW1wb3J0IE9XU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvb3ctc2xpZGVyXCI7XHJcbmltcG9ydCBPV0xpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvb3ctbGlnaHRib3hcIjtcclxuXHJcbmNsYXNzIFRoZW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICB0aGlzLmJsb2dNYXNvbnJ5ID0gbmV3IEJsb2dNYXNvbnJ5KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBuZXcgU2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZmZlY3QgPSBuZXcgU2Nyb2xsRWZmZWN0KCk7XHJcbiAgICAgICAgdGhpcy5lcXVhbEhlaWdodEVsZW1lbnRzID0gbmV3IEVxdWFsSGVpZ2h0RWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLm93TGlnaHRib3ggPSBuZXcgT1dMaWdodGJveCgpO1xyXG4gICAgICAgIHRoaXMub3dTbGlkZXIgPSBuZXcgT1dTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm93SW5maW5pdGVTY3JvbGwgPSBuZXcgT1dJbmZpbml0ZVNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7XHJcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JTZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuIiwidmFyIGNsb3Nlc3QgPSByZXF1aXJlKCcuL2Nsb3Nlc3QnKTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjIuMC4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG5sZXQgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIGxldCBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgbGV0IGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggIWxpc3RlbmVycy5pbmNsdWRlcyggbGlzdGVuZXIgKSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIGxldCBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICBsZXQgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgbGV0IGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoIDAgKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIGxldCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMgKSB7XG4gICAgbGV0IGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59ICkgKTtcbiIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjMuMC4wXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggZ2xvYmFsICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBnbG9iYWwuZml6enlVSVV0aWxzID0gZmFjdG9yeSggZ2xvYmFsICk7XG4gIH1cblxufSggdGhpcywgZnVuY3Rpb24gZmFjdG9yeSggZ2xvYmFsICkge1xuXG5sZXQgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBhLCBiICk7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkgcmV0dXJuIG9iajtcblxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIFtdO1xuXG4gIGxldCBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgaWYgKCBpc0FycmF5TGlrZSApIHJldHVybiBbIC4uLm9iaiBdO1xuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgbGV0IGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkgcmV0dXJuIGVsZW07XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgbGV0IG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcblxuICByZXR1cm4gZWxlbXNcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICAuZmlsdGVyKCAoIGVsZW0gKSA9PiBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKVxuICAgIC5yZWR1Y2UoICggZmZFbGVtcywgZWxlbSApID0+IHtcbiAgICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICAgIHJldHVybiBmZkVsZW1zO1xuICAgICAgfVxuICAgICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSB7XG4gICAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgfVxuICAgICAgLy8gZmluZCBjaGlsZHJlblxuICAgICAgbGV0IGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgICAgZmZFbGVtcyA9IGZmRWxlbXMuY29uY2F0KCAuLi5jaGlsZEVsZW1zICk7XG4gICAgICByZXR1cm4gZmZFbGVtcztcbiAgICB9LCBbXSApO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICBsZXQgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICBsZXQgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCggdGhpc1sgdGltZW91dE5hbWUgXSApO1xuXG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIG1ldGhvZC5hcHBseSggdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBvbkRvY1JlYWR5ICkge1xuICBsZXQgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIGlmICggcmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHJlYWR5U3RhdGUgPT0gJ2ludGVyYWN0aXZlJyApIHtcbiAgICAvLyBkbyBhc3luYyB0byBhbGxvdyBmb3Igb3RoZXIgc2NyaXB0cyB0byBydW4uIG1ldGFmaXp6eS9mbGlja2l0eSM0NDFcbiAgICBzZXRUaW1lb3V0KCBvbkRvY1JlYWR5ICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBvbkRvY1JlYWR5ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9iaXQubHkvM29ZTHVzY1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9ICkudG9Mb3dlckNhc2UoKTtcbn07XG5cbmxldCBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG5cbi8vIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3Ncbi8vIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4vLyBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICB1dGlscy5kb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICBsZXQgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlO1xuICAgIGxldCBkYXRhQXR0ckVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggYFske2RhdGFBdHRyfV1gICk7XG4gICAgbGV0IGpRdWVyeSA9IGdsb2JhbC5qUXVlcnk7XG5cbiAgICBbIC4uLmRhdGFBdHRyRWxlbXMgXS5mb3JFYWNoKCAoIGVsZW0gKSA9PiB7XG4gICAgICBsZXQgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApO1xuICAgICAgbGV0IG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFcnJvciBwYXJzaW5nICR7ZGF0YUF0dHJ9IG9uICR7ZWxlbS5jbGFzc05hbWV9OiAke2Vycm9yfWAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0gKTtcblxuICB9ICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59ICkgKTtcbiIsIi8vIGJ1dHRvblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRlU2Nyb2xsQnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmNsYXNzIEluZmluaXRlU2Nyb2xsQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoIGVsZW1lbnQsIGluZlNjcm9sbCApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaW5mU2Nyb2xsID0gaW5mU2Nyb2xsO1xuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIgKTtcbiAgICBpbmZTY3JvbGwub24oICdyZXF1ZXN0JywgdGhpcy5kaXNhYmxlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2xvYWQnLCB0aGlzLmVuYWJsZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdlcnJvcicsIHRoaXMuaGlkZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdsYXN0JywgdGhpcy5oaWRlLmJpbmQoIHRoaXMgKSApO1xuICB9XG5cbiAgb25DbGljayggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmluZlNjcm9sbC5sb2FkTmV4dFBhZ2UoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyICk7XG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0ZVNjcm9sbCBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLmJ1dHRvbiA9IG51bGw7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5idXR0b24gPSBmdW5jdGlvbigpIHtcbiAgbGV0IGJ1dHRvbkVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5idXR0b24gKTtcbiAgaWYgKCBidXR0b25FbGVtICkge1xuICAgIHRoaXMuYnV0dG9uID0gbmV3IEluZmluaXRlU2Nyb2xsQnV0dG9uKCBidXR0b25FbGVtLCB0aGlzICk7XG4gIH1cbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuYnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5idXR0b24gKSB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuQnV0dG9uID0gSW5maW5pdGVTY3JvbGxCdXR0b247XG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBjb3JlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCB1dGlscyApIHtcblxubGV0IGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgSW5maW5pdGVTY3JvbGwgaW50YW5jZXNcbmxldCBpbnN0YW5jZXMgPSB7fTtcblxuZnVuY3Rpb24gSW5maW5pdGVTY3JvbGwoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIGxldCBxdWVyeUVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcblxuICBpZiAoICFxdWVyeUVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciBJbmZpbml0ZVNjcm9sbDogJyArICggcXVlcnlFbGVtIHx8IGVsZW1lbnQgKSApO1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50ID0gcXVlcnlFbGVtO1xuICAvLyBkbyBub3QgaW5pdGlhbGl6ZSB0d2ljZSBvbiBzYW1lIGVsZW1lbnRcbiAgaWYgKCBlbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCApIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZXNbIGVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEIF07XG4gICAgaW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB7IC4uLkluZmluaXRlU2Nyb2xsLmRlZmF1bHRzIH07XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG4vLyBkZWZhdWx0c1xuSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMgPSB7XG4gIC8vIHBhdGg6IG51bGwsXG4gIC8vIGhpZGVOYXY6IG51bGwsXG4gIC8vIGRlYnVnOiBmYWxzZSxcbn07XG5cbi8vIGNyZWF0ZSAmIGRlc3Ryb3kgbWV0aG9kc1xuSW5maW5pdGVTY3JvbGwuY3JlYXRlID0ge307XG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95ID0ge307XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZFbWl0dGVyXG5PYmplY3QuYXNzaWduKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG5sZXQgR1VJRCA9IDA7XG5cbnByb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjcmVhdGUgY29yZVxuICAvLyBhZGQgaWQgZm9yIEluZmluaXRlU2Nyb2xsLmRhdGFcbiAgbGV0IGlkID0gdGhpcy5ndWlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuICAvLyBwcm9wZXJ0aWVzXG4gIHRoaXMucGFnZUluZGV4ID0gMTsgLy8gZGVmYXVsdCB0byBmaXJzdCBwYWdlXG4gIHRoaXMubG9hZENvdW50ID0gMDtcbiAgdGhpcy51cGRhdGVHZXRQYXRoKCk7XG4gIC8vIGJhaWwgaWYgZ2V0UGF0aCBub3Qgc2V0LCBvciByZXR1cm5zIGZhbHNleSAjNzc2XG4gIGxldCBoYXNQYXRoID0gdGhpcy5nZXRQYXRoICYmIHRoaXMuZ2V0UGF0aCgpO1xuICBpZiAoICFoYXNQYXRoICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Rpc2FibGluZyBJbmZpbml0ZVNjcm9sbCcpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVwZGF0ZUdldEFic29sdXRlUGF0aCgpO1xuICB0aGlzLmxvZyggJ2luaXRpYWxpemVkJywgWyB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lIF0gKTtcbiAgdGhpcy5jYWxsT25Jbml0KCk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlc1xuICBmb3IgKCBsZXQgbWV0aG9kIGluIEluZmluaXRlU2Nyb2xsLmNyZWF0ZSApIHtcbiAgICBJbmZpbml0ZVNjcm9sbC5jcmVhdGVbIG1ldGhvZCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxufTtcblxucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIE9iamVjdC5hc3NpZ24oIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxuLy8gY2FsbCBvbkluaXQgb3B0aW9uLCB1c2VkIGZvciBiaW5kaW5nIGV2ZW50cyBvbiBpbml0XG5wcm90by5jYWxsT25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvbkluaXQgPSB0aGlzLm9wdGlvbnMub25Jbml0O1xuICBpZiAoIG9uSW5pdCApIHtcbiAgICBvbkluaXQuY2FsbCggdGhpcywgdGhpcyApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgdGhpcy5sb2coIHR5cGUsIGFyZ3MgKTtcbiAgbGV0IGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcbiAgLy8gdHJpZ2dlciBqUXVlcnkgZXZlbnRcbiAgaWYgKCAhalF1ZXJ5IHx8ICF0aGlzLiRlbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBuYW1lc3BhY2UgalF1ZXJ5IGV2ZW50XG4gIHR5cGUgKz0gJy5pbmZpbml0ZVNjcm9sbCc7XG4gIGxldCAkZXZlbnQgPSB0eXBlO1xuICBpZiAoIGV2ZW50ICkge1xuICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcCAqL1xuICAgIGxldCBqUUV2ZW50ID0galF1ZXJ5LkV2ZW50KCBldmVudCApO1xuICAgIGpRRXZlbnQudHlwZSA9IHR5cGU7XG4gICAgJGV2ZW50ID0galFFdmVudDtcbiAgfVxuICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xufTtcblxubGV0IGxvZ2dlcnMgPSB7XG4gIGluaXRpYWxpemVkOiAoIGNsYXNzTmFtZSApID0+IGBvbiAke2NsYXNzTmFtZX1gLFxuICByZXF1ZXN0OiAoIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgbG9hZDogKCByZXNwb25zZSwgcGF0aCApID0+IGAke3Jlc3BvbnNlLnRpdGxlIHx8ICcnfS4gVVJMOiAke3BhdGh9YCxcbiAgZXJyb3I6ICggZXJyb3IsIHBhdGggKSA9PiBgJHtlcnJvcn0uIFVSTDogJHtwYXRofWAsXG4gIGFwcGVuZDogKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSA9PiBgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zLiBVUkw6ICR7cGF0aH1gLFxuICBsYXN0OiAoIHJlc3BvbnNlLCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIGhpc3Rvcnk6ICggdGl0bGUsIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgcGFnZUluZGV4OiBmdW5jdGlvbiggaW5kZXgsIG9yaWdpbiApIHtcbiAgICByZXR1cm4gYGN1cnJlbnQgcGFnZSBkZXRlcm1pbmVkIHRvIGJlOiAke2luZGV4fSBmcm9tICR7b3JpZ2lufWA7XG4gIH0sXG59O1xuXG4vLyBsb2cgZXZlbnRzXG5wcm90by5sb2cgPSBmdW5jdGlvbiggdHlwZSwgYXJncyApIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmRlYnVnICkgcmV0dXJuO1xuXG4gIGxldCBtZXNzYWdlID0gYFtJbmZpbml0ZVNjcm9sbF0gJHt0eXBlfWA7XG4gIGxldCBsb2dnZXIgPSBsb2dnZXJzWyB0eXBlIF07XG4gIGlmICggbG9nZ2VyICkgbWVzc2FnZSArPSAnLiAnICsgbG9nZ2VyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIGNvbnNvbGUubG9nKCBtZXNzYWdlICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIHVzZWQgYW1vdW5nIGZlYXR1cmVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnVwZGF0ZU1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHRoaXMudG9wID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbn07XG5cbnByb3RvLnVwZGF0ZVNjcm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gIGxldCBlbGVtZW50U2Nyb2xsID0gdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGw7XG4gIGlmICggIWVsZW1lbnRTY3JvbGwgKSB7XG4gICAgLy8gZGVmYXVsdCwgdXNlIHdpbmRvd1xuICAgIHRoaXMuc2Nyb2xsZXIgPSB3aW5kb3c7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHRydWUsIHNldCB0byBlbGVtZW50LCBvdGhlcndpc2UgdXNlIG9wdGlvblxuICB0aGlzLnNjcm9sbGVyID0gZWxlbWVudFNjcm9sbCA9PT0gdHJ1ZSA/IHRoaXMuZWxlbWVudCA6XG4gICAgdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50U2Nyb2xsICk7XG4gIGlmICggIXRoaXMuc2Nyb2xsZXIgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBlbGVtZW50U2Nyb2xsOiAke2VsZW1lbnRTY3JvbGx9YCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBhZ2UgcGF0aCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVHZXRQYXRoID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvcHRQYXRoID0gdGhpcy5vcHRpb25zLnBhdGg7XG4gIGlmICggIW9wdFBhdGggKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW5maW5pdGVTY3JvbGwgcGF0aCBvcHRpb24gcmVxdWlyZWQuIFNldCBhczogJHtvcHRQYXRofWApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBmdW5jdGlvblxuICBsZXQgdHlwZSA9IHR5cGVvZiBvcHRQYXRoO1xuICBpZiAoIHR5cGUgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICB0aGlzLmdldFBhdGggPSBvcHRQYXRoO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB0ZW1wbGF0ZSBzdHJpbmc6ICcvcGFnZXMve3sjfX0uaHRtbCdcbiAgbGV0IHRlbXBsYXRlTWF0Y2ggPSB0eXBlID09ICdzdHJpbmcnICYmIG9wdFBhdGgubWF0Y2goJ3t7I319Jyk7XG4gIGlmICggdGVtcGxhdGVNYXRjaCApIHtcbiAgICB0aGlzLnVwZGF0ZUdldFBhdGhUZW1wbGF0ZSggb3B0UGF0aCApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZWxlY3RvcjogJy5uZXh0LXBhZ2Utc2VsZWN0b3InXG4gIHRoaXMudXBkYXRlR2V0UGF0aFNlbGVjdG9yKCBvcHRQYXRoICk7XG59O1xuXG5wcm90by51cGRhdGVHZXRQYXRoVGVtcGxhdGUgPSBmdW5jdGlvbiggb3B0UGF0aCApIHtcbiAgLy8gc2V0IGdldFBhdGggd2l0aCB0ZW1wbGF0ZSBzdHJpbmdcbiAgdGhpcy5nZXRQYXRoID0gKCkgPT4ge1xuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnBhZ2VJbmRleCArIDE7XG4gICAgcmV0dXJuIG9wdFBhdGgucmVwbGFjZSggJ3t7I319JywgbmV4dEluZGV4ICk7XG4gIH07XG4gIC8vIGdldCBwYWdlSW5kZXggZnJvbSBsb2NhdGlvblxuICAvLyBjb252ZXJ0IHBhdGggb3B0aW9uIGludG8gcmVnZXggdG8gbG9vayBmb3IgcGF0dGVybiBpbiBsb2NhdGlvblxuICAvLyBlc2NhcGUgcXVlcnkgKD8pIGluIHVybCwgYWxsb3dzIGZvciBwYXJzaW5nIEdFVCBwYXJhbWV0ZXJzXG4gIGxldCByZWdleFN0cmluZyA9IG9wdFBhdGhcbiAgICAucmVwbGFjZSggLyhcXFxcXFw/fFxcPykvLCAnXFxcXD8nIClcbiAgICAucmVwbGFjZSggJ3t7I319JywgJyhcXFxcZFxcXFxkP1xcXFxkPyknICk7XG4gIGxldCB0ZW1wbGF0ZVJlID0gbmV3IFJlZ0V4cCggcmVnZXhTdHJpbmcgKTtcbiAgbGV0IG1hdGNoID0gbG9jYXRpb24uaHJlZi5tYXRjaCggdGVtcGxhdGVSZSApO1xuXG4gIGlmICggbWF0Y2ggKSB7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwYXJzZUludCggbWF0Y2hbMV0sIDEwICk7XG4gICAgdGhpcy5sb2coICdwYWdlSW5kZXgnLCBbIHRoaXMucGFnZUluZGV4LCAndGVtcGxhdGUgc3RyaW5nJyBdICk7XG4gIH1cbn07XG5cbmxldCBwYXRoUmVnZXhlcyA9IFtcbiAgLy8gV29yZFByZXNzICYgVHVtYmxyIC0gZXhhbXBsZS5jb20vcGFnZS8yXG4gIC8vIEpla3lsbCAtIGV4YW1wbGUuY29tL3BhZ2UyXG4gIC9eKC4qP1xcLz9wYWdlXFwvPykoXFxkXFxkP1xcZD8pKC4qPyQpLyxcbiAgLy8gRHJ1cGFsIC0gZXhhbXBsZS5jb20vP3BhZ2U9MVxuICAvXiguKj9cXC8/XFw/cGFnZT0pKFxcZFxcZD9cXGQ/KSguKj8kKS8sXG4gIC8vIGNhdGNoIGFsbCwgbGFzdCBvY2N1cmVuY2Ugb2YgYSBudW1iZXJcbiAgLyguKj8pKFxcZFxcZD9cXGQ/KSg/IS4qXFxkKSguKj8kKS8sXG5dO1xuXG4vLyB0cnkgbWF0Y2hpbmcgaHJlZiB0byBwYXRoUmVnZXhlcyBwYXR0ZXJuc1xubGV0IGdldFBhdGhQYXJ0cyA9IEluZmluaXRlU2Nyb2xsLmdldFBhdGhQYXJ0cyA9IGZ1bmN0aW9uKCBocmVmICkge1xuICBpZiAoICFocmVmICkgcmV0dXJuO1xuICBmb3IgKCBsZXQgcmVnZXggb2YgcGF0aFJlZ2V4ZXMgKSB7XG4gICAgbGV0IG1hdGNoID0gaHJlZi5tYXRjaCggcmVnZXggKTtcbiAgICBpZiAoIG1hdGNoICkge1xuICAgICAgbGV0IFsgLCBiZWdpbiwgaW5kZXgsIGVuZCBdID0gbWF0Y2g7XG4gICAgICByZXR1cm4geyBiZWdpbiwgaW5kZXgsIGVuZCB9O1xuICAgIH1cbiAgfVxufTtcblxucHJvdG8udXBkYXRlR2V0UGF0aFNlbGVjdG9yID0gZnVuY3Rpb24oIG9wdFBhdGggKSB7XG4gIC8vIHBhcnNlIGhyZWYgb2YgbGluazogJy5uZXh0LXBhZ2UtbGluaydcbiAgbGV0IGhyZWZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggb3B0UGF0aCApO1xuICBpZiAoICFocmVmRWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKGBCYWQgSW5maW5pdGVTY3JvbGwgcGF0aCBvcHRpb24uIE5leHQgbGluayBub3QgZm91bmQ6ICR7b3B0UGF0aH1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaHJlZiA9IGhyZWZFbGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBsZXQgcGF0aFBhcnRzID0gZ2V0UGF0aFBhcnRzKCBocmVmICk7XG4gIGlmICggIXBhdGhQYXJ0cyApIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbmZpbml0ZVNjcm9sbCB1bmFibGUgdG8gcGFyc2UgbmV4dCBsaW5rIGhyZWY6ICR7aHJlZn1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBiZWdpbiwgaW5kZXgsIGVuZCB9ID0gcGF0aFBhcnRzO1xuICB0aGlzLmlzUGF0aFNlbGVjdG9yID0gdHJ1ZTsgLy8gZmxhZyBmb3IgY2hlY2tMYXN0UGFnZSgpXG4gIHRoaXMuZ2V0UGF0aCA9ICgpID0+IGJlZ2luICsgKCB0aGlzLnBhZ2VJbmRleCArIDEgKSArIGVuZDtcbiAgLy8gZ2V0IHBhZ2VJbmRleCBmcm9tIGhyZWZcbiAgdGhpcy5wYWdlSW5kZXggPSBwYXJzZUludCggaW5kZXgsIDEwICkgLSAxO1xuICB0aGlzLmxvZyggJ3BhZ2VJbmRleCcsIFsgdGhpcy5wYWdlSW5kZXgsICduZXh0IGxpbmsnIF0gKTtcbn07XG5cbnByb3RvLnVwZGF0ZUdldEFic29sdXRlUGF0aCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAvLyBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCBodHRwIG9yIC9cbiAgbGV0IGlzQWJzb2x1dGUgPSBwYXRoLm1hdGNoKCAvXmh0dHAvICkgfHwgcGF0aC5tYXRjaCggL15cXC8vICk7XG4gIGlmICggaXNBYnNvbHV0ZSApIHtcbiAgICB0aGlzLmdldEFic29sdXRlUGF0aCA9IHRoaXMuZ2V0UGF0aDtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBwYXRobmFtZSB9ID0gbG9jYXRpb247XG4gIC8vIHF1ZXJ5IHBhcmFtZXRlciAjODI5LiBleGFtcGxlLmNvbS8/cGc9MlxuICBsZXQgaXNRdWVyeSA9IHBhdGgubWF0Y2goIC9eXFw/LyApO1xuICAvLyAvZm9vL2Jhci9pbmRleC5odG1sID0+IC9mb28vYmFyXG4gIGxldCBkaXJlY3RvcnkgPSBwYXRobmFtZS5zdWJzdHJpbmcoIDAsIHBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKTtcbiAgbGV0IHBhdGhTdGFydCA9IGlzUXVlcnkgPyBwYXRobmFtZSA6IGRpcmVjdG9yeSArICcvJztcblxuICB0aGlzLmdldEFic29sdXRlUGF0aCA9ICgpID0+IHBhdGhTdGFydCArIHRoaXMuZ2V0UGF0aCgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmF2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGhpZGUgbmF2aWdhdGlvblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmhpZGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG5hdiA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLmhpZGVOYXYgKTtcbiAgaWYgKCAhbmF2ICkgcmV0dXJuO1xuXG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0aGlzLm5hdiA9IG5hdjtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuaGlkZU5hdiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMubmF2ICkgdGhpcy5uYXYuc3R5bGUuZGlzcGxheSA9ICcnO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVzdHJveSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYWxsT2ZmKCk7IC8vIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gIC8vIGNhbGwgZGVzdHJveSBtZXRob2RzXG4gIGZvciAoIGxldCBtZXRob2QgaW4gSW5maW5pdGVTY3JvbGwuZGVzdHJveSApIHtcbiAgICBJbmZpbml0ZVNjcm9sbC5kZXN0cm95WyBtZXRob2QgXS5jYWxsKCB0aGlzICk7XG4gIH1cblxuICBkZWxldGUgdGhpcy5lbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgdGhpcy5ndWlkIF07XG4gIC8vIHJlbW92ZSBqUXVlcnkgZGF0YS4gIzgwN1xuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsICdpbmZpbml0ZVNjcm9sbCcgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGh0dHBzOi8vcmVteXNoYXJwLmNvbS8yMDEwLzA3LzIxL3Rocm90dGxpbmctZnVuY3Rpb24tY2FsbHNcbkluZmluaXRlU2Nyb2xsLnRocm90dGxlID0gZnVuY3Rpb24oIGZuLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAyMDA7XG4gIGxldCBsYXN0LCB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICB9O1xuICAgIGlmICggbGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNob2xkICkge1xuICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCggdHJpZ2dlciwgdGhyZXNob2xkICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXIoKTtcbiAgICB9XG4gIH07XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kYXRhID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW0gKTtcbiAgbGV0IGlkID0gZWxlbSAmJiBlbGVtLmluZmluaXRlU2Nyb2xsR1VJRDtcbiAgcmV0dXJuIGlkICYmIGluc3RhbmNlc1sgaWQgXTtcbn07XG5cbi8vIHNldCBpbnRlcm5hbCBqUXVlcnksIGZvciBXZWJwYWNrICsgalF1ZXJ5IHYzXG5JbmZpbml0ZVNjcm9sbC5zZXRKUXVlcnkgPSBmdW5jdGlvbigganFyeSApIHtcbiAgalF1ZXJ5ID0ganFyeTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmh0bWxJbml0KCBJbmZpbml0ZVNjcm9sbCwgJ2luZmluaXRlLXNjcm9sbCcgKTtcblxuLy8gYWRkIG5vb3AgX2luaXQgbWV0aG9kIGZvciBqUXVlcnkgQnJpZGdldC4gIzc2OFxucHJvdG8uX2luaXQgPSBmdW5jdGlvbigpIHt9O1xuXG5sZXQgeyBqUXVlcnlCcmlkZ2V0IH0gPSB3aW5kb3c7XG5pZiAoIGpRdWVyeSAmJiBqUXVlcnlCcmlkZ2V0ICkge1xuICBqUXVlcnlCcmlkZ2V0KCAnaW5maW5pdGVTY3JvbGwnLCBJbmZpbml0ZVNjcm9sbCwgalF1ZXJ5ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gaGlzdG9yeVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgaGlzdG9yeTogJ3JlcGxhY2UnLFxuICAvLyBoaXN0b3J5VGl0bGU6IGZhbHNlLFxufSApO1xuXG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuLy8gLS0tLS0gY3JlYXRlL2Rlc3Ryb3kgLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmhpc3RvcnkgKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgZm9yIHNhbWUgb3JpZ2luXG4gIGxpbmsuaHJlZiA9IHRoaXMuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gIC8vIE1TIEVkZ2UgZG9lcyBub3QgaGF2ZSBvcmlnaW4gb24gbGlua1xuICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjIzNjQ5My9cbiAgbGV0IGxpbmtPcmlnaW4gPSBsaW5rLm9yaWdpbiB8fCBsaW5rLnByb3RvY29sICsgJy8vJyArIGxpbmsuaG9zdDtcbiAgbGV0IGlzU2FtZU9yaWdpbiA9IGxpbmtPcmlnaW4gPT0gbG9jYXRpb24ub3JpZ2luO1xuICBpZiAoICFpc1NhbWVPcmlnaW4gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ1tJbmZpbml0ZVNjcm9sbF0gY2Fubm90IHNldCBoaXN0b3J5IHdpdGggZGlmZmVyZW50IG9yaWdpbjogJyArXG4gICAgICBgJHtsaW5rLm9yaWdpbn0gb24gJHtsb2NhdGlvbi5vcmlnaW59IC4gSGlzdG9yeSBiZWhhdmlvciBkaXNhYmxlZC5gICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdHdvIHdheXMgdG8gaGFuZGxlIGNoYW5naW5nIGhpc3RvcnlcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYXBwZW5kICkge1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeUFwcGVuZCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeVBhZ2VMb2FkKCk7XG4gIH1cbn07XG5cbnByb3RvLmNyZWF0ZUhpc3RvcnlBcHBlbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICAvLyBhcnJheSBvZiBzY3JvbGwgcG9zaXRpb25zIG9mIGFwcGVuZGVkIHBhZ2VzXG4gIHRoaXMuc2Nyb2xsUGFnZXMgPSBbXG4gICAgLy8gZmlyc3QgcGFnZVxuICAgIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHBhdGg6IGxvY2F0aW9uLmhyZWYsXG4gICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgfSxcbiAgXTtcbiAgdGhpcy5zY3JvbGxQYWdlID0gdGhpcy5zY3JvbGxQYWdlc1swXTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgPSB0aGlzLm9uU2Nyb2xsSGlzdG9yeS5iaW5kKCB0aGlzICk7XG4gIHRoaXMudW5sb2FkSGFuZGxlciA9IHRoaXMub25VbmxvYWQuYmluZCggdGhpcyApO1xuICB0aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyICk7XG4gIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLm9uQXBwZW5kSGlzdG9yeSApO1xuICB0aGlzLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzKCB0cnVlICk7XG59O1xuXG5wcm90by5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyA9IGZ1bmN0aW9uKCBpc0JpbmQgKSB7XG4gIGxldCBhZGRSZW1vdmUgPSBpc0JpbmQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHRoaXMuc2Nyb2xsZXJbIGFkZFJlbW92ZSBdKCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciApO1xuICB3aW5kb3dbIGFkZFJlbW92ZSBdKCAndW5sb2FkJywgdGhpcy51bmxvYWRIYW5kbGVyICk7XG59O1xuXG5wcm90by5jcmVhdGVIaXN0b3J5UGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vbiggJ2xvYWQnLCB0aGlzLm9uUGFnZUxvYWRIaXN0b3J5ICk7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95Lmhpc3RvcnkgPVxucHJvdG8uZGVzdHJveUhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGlzSGlzdG9yeUFwcGVuZCA9IHRoaXMub3B0aW9ucy5oaXN0b3J5ICYmIHRoaXMub3B0aW9ucy5hcHBlbmQ7XG4gIGlmICggaXNIaXN0b3J5QXBwZW5kICkge1xuICAgIHRoaXMuYmluZEhpc3RvcnlBcHBlbmRFdmVudHMoIGZhbHNlICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGFwcGVuZCBoaXN0b3J5IC0tLS0tIC8vXG5cbnByb3RvLm9uQXBwZW5kSGlzdG9yeSA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSB7XG4gIC8vIGRvIG5vdCBwcm9jZWVkIGlmIG5vIGl0ZW1zLiAjNzc5XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSByZXR1cm47XG5cbiAgbGV0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xuICBsZXQgZWxlbVNjcm9sbFkgPSB0aGlzLmdldEVsZW1lbnRTY3JvbGxZKCBmaXJzdEl0ZW0gKTtcbiAgLy8gcmVzb2x2ZSBwYXRoXG4gIGxpbmsuaHJlZiA9IHBhdGg7XG4gIC8vIGFkZCBwYWdlIGRhdGEgdG8gaGFzaFxuICB0aGlzLnNjcm9sbFBhZ2VzLnB1c2goe1xuICAgIHRvcDogZWxlbVNjcm9sbFksXG4gICAgcGF0aDogbGluay5ocmVmLFxuICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgfSk7XG59O1xuXG5wcm90by5nZXRFbGVtZW50U2Nyb2xsWSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHJldHVybiBlbGVtLm9mZnNldFRvcCAtIHRoaXMudG9wO1xuICB9IGVsc2Uge1xuICAgIGxldCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgfVxufTtcblxucHJvdG8ub25TY3JvbGxIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGN5Y2xlIHRocm91Z2ggcG9zaXRpb25zLCBmaW5kIGJpZ2dlc3Qgd2l0aG91dCBnb2luZyBvdmVyXG4gIGxldCBzY3JvbGxQYWdlID0gdGhpcy5nZXRDbG9zZXN0U2Nyb2xsUGFnZSgpO1xuICAvLyBzZXQgaGlzdG9yeSBpZiBjaGFuZ2VkXG4gIGlmICggc2Nyb2xsUGFnZSAhPSB0aGlzLnNjcm9sbFBhZ2UgKSB7XG4gICAgdGhpcy5zY3JvbGxQYWdlID0gc2Nyb2xsUGFnZTtcbiAgICB0aGlzLnNldEhpc3RvcnkoIHNjcm9sbFBhZ2UudGl0bGUsIHNjcm9sbFBhZ2UucGF0aCApO1xuICB9XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggSW5maW5pdGVTY3JvbGwsICdvblNjcm9sbEhpc3RvcnknLCAxNTAgKTtcblxucHJvdG8uZ2V0Q2xvc2VzdFNjcm9sbFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNjcm9sbFZpZXdZO1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHNjcm9sbFZpZXdZID0gdGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodCAvIDI7XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsVmlld1kgPSB3aW5kb3cuc2Nyb2xsWSArIHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgfVxuXG4gIGxldCBzY3JvbGxQYWdlO1xuICBmb3IgKCBsZXQgcGFnZSBvZiB0aGlzLnNjcm9sbFBhZ2VzICkge1xuICAgIGlmICggcGFnZS50b3AgPj0gc2Nyb2xsVmlld1kgKSBicmVhaztcblxuICAgIHNjcm9sbFBhZ2UgPSBwYWdlO1xuICB9XG4gIHJldHVybiBzY3JvbGxQYWdlO1xufTtcblxucHJvdG8uc2V0SGlzdG9yeSA9IGZ1bmN0aW9uKCB0aXRsZSwgcGF0aCApIHtcbiAgbGV0IG9wdEhpc3RvcnkgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeTtcbiAgbGV0IGhpc3RvcnlNZXRob2QgPSBvcHRIaXN0b3J5ICYmIGhpc3RvcnlbIG9wdEhpc3RvcnkgKyAnU3RhdGUnIF07XG4gIGlmICggIWhpc3RvcnlNZXRob2QgKSByZXR1cm47XG5cbiAgaGlzdG9yeVsgb3B0SGlzdG9yeSArICdTdGF0ZScgXSggbnVsbCwgdGl0bGUsIHBhdGggKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuaGlzdG9yeVRpdGxlICkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnaGlzdG9yeScsIG51bGwsIFsgdGl0bGUsIHBhdGggXSApO1xufTtcblxuLy8gc2Nyb2xsIHRvIHRvcCB0byBwcmV2ZW50IGluaXRpYWwgc2Nyb2xsLXJlc2V0IGFmdGVyIHBhZ2UgcmVmcmVzaFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjMzOTE1LzE4MjE4M1xucHJvdG8ub25VbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnNjcm9sbFBhZ2UudG9wID09PSAwICkgcmV0dXJuO1xuXG4gIC8vIGNhbGN1bGF0ZSB3aGVyZSBzY3JvbGwgcG9zaXRpb24gd291bGQgYmUgb24gcmVmcmVzaFxuICBsZXQgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5zY3JvbGxQYWdlLnRvcCArIHRoaXMudG9wO1xuICAvLyBkaXNhYmxlIHNjcm9sbCBldmVudCBiZWZvcmUgc2V0dGluZyBzY3JvbGwgIzY3OVxuICB0aGlzLmRlc3Ryb3lIaXN0b3J5KCk7XG4gIHNjcm9sbFRvKCAwLCBzY3JvbGxZICk7XG59O1xuXG4vLyAtLS0tLSBsb2FkIGhpc3RvcnkgLS0tLS0gLy9cblxuLy8gdXBkYXRlIFVSTFxucHJvdG8ub25QYWdlTG9hZEhpc3RvcnkgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGggKSB7XG4gIHRoaXMuc2V0SGlzdG9yeSggcmVzcG9uc2UudGl0bGUsIHBhdGggKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLyohXG4gKiBJbmZpbml0ZSBTY3JvbGwgdjQuMC4xXG4gKiBBdXRvbWF0aWNhbGx5IGFkZCBuZXh0IHBhZ2VcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBJbmZpbml0ZSBTY3JvbGwgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHBzOi8vaW5maW5pdGUtc2Nyb2xsLmNvbVxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCcuL3BhZ2UtbG9hZCcpLFxuICAgICAgICByZXF1aXJlKCcuL3Njcm9sbC13YXRjaCcpLFxuICAgICAgICByZXF1aXJlKCcuL2hpc3RvcnknKSxcbiAgICAgICAgcmVxdWlyZSgnLi9idXR0b24nKSxcbiAgICAgICAgcmVxdWlyZSgnLi9zdGF0dXMnKSxcbiAgICApO1xuICB9XG5cbn0gKSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBJbmZpbml0ZVNjcm9sbCApIHtcbiAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xufSApO1xuIiwiLy8gcGFnZS1sb2FkXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIC8vIGFwcGVuZDogZmFsc2UsXG4gIGxvYWRPblNjcm9sbDogdHJ1ZSxcbiAgY2hlY2tMYXN0UGFnZTogdHJ1ZSxcbiAgcmVzcG9uc2VCb2R5OiAndGV4dCcsXG4gIGRvbVBhcnNlUmVzcG9uc2U6IHRydWUsXG4gIC8vIHByZWZpbGw6IGZhbHNlLFxuICAvLyBvdXRsYXllcjogbnVsbCxcbn0gKTtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2FuTG9hZCA9IHRydWU7XG4gIHRoaXMub24oICdzY3JvbGxUaHJlc2hvbGQnLCB0aGlzLm9uU2Nyb2xsVGhyZXNob2xkTG9hZCApO1xuICB0aGlzLm9uKCAnbG9hZCcsIHRoaXMuY2hlY2tMYXN0UGFnZSApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5vdXRsYXllciApIHtcbiAgICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5vbkFwcGVuZE91dGxheWVyICk7XG4gIH1cbn07XG5cbnByb3RvLm9uU2Nyb2xsVGhyZXNob2xkTG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5sb2FkT25TY3JvbGwgKSB0aGlzLmxvYWROZXh0UGFnZSgpO1xufTtcblxubGV0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxucHJvdG8ubG9hZE5leHRQYWdlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0xvYWRpbmcgfHwgIXRoaXMuY2FuTG9hZCApIHJldHVybjtcblxuICBsZXQgeyByZXNwb25zZUJvZHksIGRvbVBhcnNlUmVzcG9uc2UsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuICBsZXQgcGF0aCA9IHRoaXMuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgaWYgKCB0eXBlb2YgZmV0Y2hPcHRpb25zID09ICdmdW5jdGlvbicgKSBmZXRjaE9wdGlvbnMgPSBmZXRjaE9wdGlvbnMoKTtcblxuICBsZXQgZmV0Y2hQcm9taXNlID0gZmV0Y2goIHBhdGgsIGZldGNoT3B0aW9ucyApXG4gICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XG4gICAgICBpZiAoICFyZXNwb25zZS5vayApIHtcbiAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCByZXNwb25zZS5zdGF0dXNUZXh0ICk7XG4gICAgICAgIHRoaXMub25QYWdlRXJyb3IoIGVycm9yLCBwYXRoLCByZXNwb25zZSApO1xuICAgICAgICByZXR1cm4geyByZXNwb25zZSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VbIHJlc3BvbnNlQm9keSBdKCkudGhlbiggKCBib2R5ICkgPT4ge1xuICAgICAgICBsZXQgY2FuRG9tUGFyc2UgPSByZXNwb25zZUJvZHkgPT0gJ3RleHQnICYmIGRvbVBhcnNlUmVzcG9uc2U7XG4gICAgICAgIGlmICggY2FuRG9tUGFyc2UgKSB7XG4gICAgICAgICAgYm9keSA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoIGJvZHksICd0ZXh0L2h0bWwnICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMjA0ICkge1xuICAgICAgICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgICAgICAgcmV0dXJuIHsgYm9keSwgcmVzcG9uc2UgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vblBhZ2VMb2FkKCBib2R5LCBwYXRoLCByZXNwb25zZSApO1xuICAgICAgICB9XG4gICAgICB9ICk7XG4gICAgfSApXG4gICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xuICAgICAgdGhpcy5vblBhZ2VFcnJvciggZXJyb3IsIHBhdGggKTtcbiAgICB9ICk7XG5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncmVxdWVzdCcsIG51bGwsIFsgcGF0aCwgZmV0Y2hQcm9taXNlIF0gKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlO1xufTtcblxucHJvdG8ub25QYWdlTG9hZCA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoLCByZXNwb25zZSApIHtcbiAgLy8gZG9uZSBsb2FkaW5nIGlmIG5vdCBhcHBlbmRpbmdcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmFwcGVuZCApIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIHRoaXMucGFnZUluZGV4Kys7XG4gIHRoaXMubG9hZENvdW50Kys7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2xvYWQnLCBudWxsLCBbIGJvZHksIHBhdGgsIHJlc3BvbnNlIF0gKTtcbiAgcmV0dXJuIHRoaXMuYXBwZW5kTmV4dFBhZ2UoIGJvZHksIHBhdGgsIHJlc3BvbnNlICk7XG59O1xuXG5wcm90by5hcHBlbmROZXh0UGFnZSA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoLCByZXNwb25zZSApIHtcbiAgbGV0IHsgYXBwZW5kLCByZXNwb25zZUJvZHksIGRvbVBhcnNlUmVzcG9uc2UgfSA9IHRoaXMub3B0aW9ucztcbiAgLy8gZG8gbm90IGFwcGVuZCBqc29uXG4gIGxldCBpc0RvY3VtZW50ID0gcmVzcG9uc2VCb2R5ID09ICd0ZXh0JyAmJiBkb21QYXJzZVJlc3BvbnNlO1xuICBpZiAoICFpc0RvY3VtZW50IHx8ICFhcHBlbmQgKSByZXR1cm4geyBib2R5LCByZXNwb25zZSB9O1xuXG4gIGxldCBpdGVtcyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbCggYXBwZW5kICk7XG4gIGxldCBwcm9taXNlVmFsdWUgPSB7IGJvZHksIHJlc3BvbnNlLCBpdGVtcyB9O1xuICAvLyBsYXN0IHBhZ2UgaGl0IGlmIG5vIGl0ZW1zLiAjODQwXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICByZXR1cm4gcHJvbWlzZVZhbHVlO1xuICB9XG5cbiAgbGV0IGZyYWdtZW50ID0gZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKTtcbiAgbGV0IGFwcGVuZFJlYWR5ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwZW5kSXRlbXMoIGl0ZW1zLCBmcmFnbWVudCApO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnYXBwZW5kJywgbnVsbCwgWyBib2R5LCBwYXRoLCBpdGVtcywgcmVzcG9uc2UgXSApO1xuICAgIHJldHVybiBwcm9taXNlVmFsdWU7XG4gIH07XG5cbiAgLy8gVE9ETyBhZGQgaG9vayBmb3Igb3B0aW9uIHRvIHRyaWdnZXIgYXBwZW5kUmVhZHlcbiAgaWYgKCB0aGlzLm9wdGlvbnMub3V0bGF5ZXIgKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kT3V0bGF5ZXJJdGVtcyggZnJhZ21lbnQsIGFwcGVuZFJlYWR5ICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFwcGVuZFJlYWR5KCk7XG4gIH1cbn07XG5cbnByb3RvLmFwcGVuZEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBmcmFnbWVudCApIHtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHJldHVybjtcblxuICAvLyBnZXQgZnJhZ21lbnQgaWYgbm90IHByb3ZpZGVkXG4gIGZyYWdtZW50ID0gZnJhZ21lbnQgfHwgZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKTtcbiAgcmVmcmVzaFNjcmlwdHMoIGZyYWdtZW50ICk7XG4gIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbn07XG5cbmZ1bmN0aW9uIGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICkge1xuICAvLyBhZGQgaXRlbXMgdG8gZnJhZ21lbnRcbiAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBpZiAoIGl0ZW1zICkgZnJhZ21lbnQuYXBwZW5kKCAuLi5pdGVtcyApO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8vIHJlcGxhY2UgPHNjcmlwdD5zIHdpdGggY29waWVzIHNvIHRoZXkgbG9hZFxuLy8gPHNjcmlwdD5zIGFkZGVkIGJ5IEluZmluaXRlU2Nyb2xsIHdpbGwgbm90IGxvYWRcbi8vIHNpbWlsYXIgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjEwOTk1XG5mdW5jdGlvbiByZWZyZXNoU2NyaXB0cyggZnJhZ21lbnQgKSB7XG4gIGxldCBzY3JpcHRzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gIGZvciAoIGxldCBzY3JpcHQgb2Ygc2NyaXB0cyApIHtcbiAgICBsZXQgZnJlc2hTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAvLyBjb3B5IGF0dHJpYnV0ZXNcbiAgICBsZXQgYXR0cnMgPSBzY3JpcHQuYXR0cmlidXRlcztcbiAgICBmb3IgKCBsZXQgYXR0ciBvZiBhdHRycyApIHtcbiAgICAgIGZyZXNoU2NyaXB0LnNldEF0dHJpYnV0ZSggYXR0ci5uYW1lLCBhdHRyLnZhbHVlICk7XG4gICAgfVxuICAgIC8vIGNvcHkgaW5uZXIgc2NyaXB0IGNvZGUuICM3MTgsICM3ODJcbiAgICBmcmVzaFNjcmlwdC5pbm5lckhUTUwgPSBzY3JpcHQuaW5uZXJIVE1MO1xuICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCggZnJlc2hTY3JpcHQsIHNjcmlwdCApO1xuICB9XG59XG5cbi8vIC0tLS0tIG91dGxheWVyIC0tLS0tIC8vXG5cbnByb3RvLmFwcGVuZE91dGxheWVySXRlbXMgPSBmdW5jdGlvbiggZnJhZ21lbnQsIGFwcGVuZFJlYWR5ICkge1xuICBsZXQgaW1hZ2VzTG9hZGVkID0gSW5maW5pdGVTY3JvbGwuaW1hZ2VzTG9hZGVkIHx8IHdpbmRvdy5pbWFnZXNMb2FkZWQ7XG4gIGlmICggIWltYWdlc0xvYWRlZCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdbSW5maW5pdGVTY3JvbGxdIGltYWdlc0xvYWRlZCByZXF1aXJlZCBmb3Igb3V0bGF5ZXIgb3B0aW9uJyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYXBwZW5kIG9uY2UgaW1hZ2VzIGxvYWRlZFxuICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKCByZXNvbHZlICkge1xuICAgIGltYWdlc0xvYWRlZCggZnJhZ21lbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGJvZHlSZXNwb25zZSA9IGFwcGVuZFJlYWR5KCk7XG4gICAgICByZXNvbHZlKCBib2R5UmVzcG9uc2UgKTtcbiAgICB9ICk7XG4gIH0gKTtcbn07XG5cbnByb3RvLm9uQXBwZW5kT3V0bGF5ZXIgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkge1xuICB0aGlzLm9wdGlvbnMub3V0bGF5ZXIuYXBwZW5kZWQoIGl0ZW1zICk7XG59O1xuXG4vLyAtLS0tLSBjaGVja0xhc3RQYWdlIC0tLS0tIC8vXG5cbi8vIGNoZWNrIHJlc3BvbnNlIGZvciBuZXh0IGVsZW1lbnRcbnByb3RvLmNoZWNrTGFzdFBhZ2UgPSBmdW5jdGlvbiggYm9keSwgcGF0aCApIHtcbiAgbGV0IHsgY2hlY2tMYXN0UGFnZSwgcGF0aDogcGF0aE9wdCB9ID0gdGhpcy5vcHRpb25zO1xuICBpZiAoICFjaGVja0xhc3RQYWdlICkgcmV0dXJuO1xuXG4gIC8vIGlmIHBhdGggaXMgZnVuY3Rpb24sIGNoZWNrIGlmIG5leHQgcGF0aCBpcyB0cnV0aHlcbiAgaWYgKCB0eXBlb2YgcGF0aE9wdCA9PSAnZnVuY3Rpb24nICkge1xuICAgIGxldCBuZXh0UGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgIGlmICggIW5leHRQYXRoICkge1xuICAgICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdG9yIGZyb20gY2hlY2tMYXN0UGFnZSBvciBwYXRoIG9wdGlvblxuICBsZXQgc2VsZWN0b3I7XG4gIGlmICggdHlwZW9mIGNoZWNrTGFzdFBhZ2UgPT0gJ3N0cmluZycgKSB7XG4gICAgc2VsZWN0b3IgPSBjaGVja0xhc3RQYWdlO1xuICB9IGVsc2UgaWYgKCB0aGlzLmlzUGF0aFNlbGVjdG9yICkge1xuICAgIC8vIHBhdGggb3B0aW9uIGlzIHNlbGVjdG9yIHN0cmluZ1xuICAgIHNlbGVjdG9yID0gcGF0aE9wdDtcbiAgfVxuICAvLyBjaGVjayBsYXN0IHBhZ2UgZm9yIHNlbGVjdG9yXG4gIC8vIGJhaWwgaWYgbm8gc2VsZWN0b3Igb3Igbm90IGRvY3VtZW50IHJlc3BvbnNlXG4gIGlmICggIXNlbGVjdG9yIHx8ICFib2R5LnF1ZXJ5U2VsZWN0b3IgKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgaWYgcmVzcG9uc2UgaGFzIHNlbGVjdG9yXG4gIGxldCBuZXh0RWxlbSA9IGJvZHkucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcbiAgaWYgKCAhbmV4dEVsZW0gKSB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xufTtcblxucHJvdG8ubGFzdFBhZ2VSZWFjaGVkID0gZnVuY3Rpb24oIGJvZHksIHBhdGggKSB7XG4gIHRoaXMuY2FuTG9hZCA9IGZhbHNlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdsYXN0JywgbnVsbCwgWyBib2R5LCBwYXRoIF0gKTtcbn07XG5cbi8vIC0tLS0tIGVycm9yIC0tLS0tIC8vXG5cbnByb3RvLm9uUGFnZUVycm9yID0gZnVuY3Rpb24oIGVycm9yLCBwYXRoLCByZXNwb25zZSApIHtcbiAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2Vycm9yJywgbnVsbCwgWyBlcnJvciwgcGF0aCwgcmVzcG9uc2UgXSApO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcmVmaWxsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5wcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5wcmVmaWxsICkgcmV0dXJuO1xuXG4gIGxldCBhcHBlbmQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kO1xuICBpZiAoICFhcHBlbmQgKSB7XG4gICAgY29uc29sZS5lcnJvcihgYXBwZW5kIG9wdGlvbiByZXF1aXJlZCBmb3IgcHJlZmlsbC4gU2V0IGFzIDoke2FwcGVuZH1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICB0aGlzLmlzUHJlZmlsbGluZyA9IHRydWU7XG4gIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLnByZWZpbGwgKTtcbiAgdGhpcy5vbmNlKCAnZXJyb3InLCB0aGlzLnN0b3BQcmVmaWxsICk7XG4gIHRoaXMub25jZSggJ2xhc3QnLCB0aGlzLnN0b3BQcmVmaWxsICk7XG4gIHRoaXMucHJlZmlsbCgpO1xufTtcblxucHJvdG8ucHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZGlzdGFuY2UgPSB0aGlzLmdldFByZWZpbGxEaXN0YW5jZSgpO1xuICB0aGlzLmlzUHJlZmlsbGluZyA9IGRpc3RhbmNlID49IDA7XG4gIGlmICggdGhpcy5pc1ByZWZpbGxpbmcgKSB7XG4gICAgdGhpcy5sb2coJ3ByZWZpbGwnKTtcbiAgICB0aGlzLmxvYWROZXh0UGFnZSgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RvcFByZWZpbGwoKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0UHJlZmlsbERpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGVsZW1lbnQgc2Nyb2xsXG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC0gdGhpcy5zY3JvbGxlci5zY3JvbGxIZWlnaHQ7XG4gIH1cbiAgLy8gd2luZG93XG4gIHJldHVybiB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59O1xuXG5wcm90by5zdG9wUHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmxvZygnc3RvcFByZWZpbGwnKTtcbiAgdGhpcy5vZmYoICdhcHBlbmQnLCB0aGlzLnByZWZpbGwgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gc2Nyb2xsLXdhdGNoXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG4vLyBkZWZhdWx0IG9wdGlvbnNcbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIHNjcm9sbFRocmVzaG9sZDogNDAwLFxuICAvLyBlbGVtZW50U2Nyb2xsOiBudWxsLFxufSApO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuc2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgLy8gZXZlbnRzXG4gIHRoaXMucGFnZVNjcm9sbEhhbmRsZXIgPSB0aGlzLm9uUGFnZVNjcm9sbC5iaW5kKCB0aGlzICk7XG4gIHRoaXMucmVzaXplSGFuZGxlciA9IHRoaXMub25SZXNpemUuYmluZCggdGhpcyApO1xuXG4gIGxldCBzY3JvbGxUaHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMuc2Nyb2xsVGhyZXNob2xkO1xuICBsZXQgaXNFbmFibGUgPSBzY3JvbGxUaHJlc2hvbGQgfHwgc2Nyb2xsVGhyZXNob2xkID09PSAwO1xuICBpZiAoIGlzRW5hYmxlICkgdGhpcy5lbmFibGVTY3JvbGxXYXRjaCgpO1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5zY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVTY3JvbGxXYXRjaCgpO1xufTtcblxucHJvdG8uZW5hYmxlU2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgKSByZXR1cm47XG5cbiAgdGhpcy5pc1Njcm9sbFdhdGNoaW5nID0gdHJ1ZTtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICAvLyBUT0RPIGRpc2FibGUgYWZ0ZXIgZXJyb3I/XG4gIHRoaXMub24oICdsYXN0JywgdGhpcy5kaXNhYmxlU2Nyb2xsV2F0Y2ggKTtcbiAgdGhpcy5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMoIHRydWUgKTtcbn07XG5cbnByb3RvLmRpc2FibGVTY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgKSByZXR1cm47XG5cbiAgdGhpcy5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMoIGZhbHNlICk7XG4gIGRlbGV0ZSB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmc7XG59O1xuXG5wcm90by5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICBsZXQgYWRkUmVtb3ZlID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICB0aGlzLnNjcm9sbGVyWyBhZGRSZW1vdmUgXSggJ3Njcm9sbCcsIHRoaXMucGFnZVNjcm9sbEhhbmRsZXIgKTtcbiAgd2luZG93WyBhZGRSZW1vdmUgXSggJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciApO1xufTtcblxucHJvdG8ub25QYWdlU2Nyb2xsID0gSW5maW5pdGVTY3JvbGwudGhyb3R0bGUoIGZ1bmN0aW9uKCkge1xuICBsZXQgZGlzdGFuY2UgPSB0aGlzLmdldEJvdHRvbURpc3RhbmNlKCk7XG4gIGlmICggZGlzdGFuY2UgPD0gdGhpcy5vcHRpb25zLnNjcm9sbFRocmVzaG9sZCApIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3Njcm9sbFRocmVzaG9sZCcpO1xuICB9XG59ICk7XG5cbnByb3RvLmdldEJvdHRvbURpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBib3R0b20sIHNjcm9sbFk7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgYm90dG9tID0gdGhpcy5zY3JvbGxlci5zY3JvbGxIZWlnaHQ7XG4gICAgc2Nyb2xsWSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSArIHRoaXMud2luZG93SGVpZ2h0O1xuICB9XG4gIHJldHVybiBib3R0b20gLSBzY3JvbGxZO1xufTtcblxucHJvdG8ub25SZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBJbmZpbml0ZVNjcm9sbCwgJ29uUmVzaXplJywgMTUwICk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gc3RhdHVzXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG4vLyBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cy5zdGF0dXMgPSBudWxsO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuc3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0dXNFbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuc3RhdHVzICk7XG4gIGlmICggIXN0YXR1c0VsZW0gKSByZXR1cm47XG5cbiAgLy8gZWxlbWVudHNcbiAgdGhpcy5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbTtcbiAgdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzID0ge1xuICAgIHJlcXVlc3Q6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1yZXF1ZXN0JyksXG4gICAgZXJyb3I6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1lcnJvcicpLFxuICAgIGxhc3Q6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1sYXN0JyksXG4gIH07XG4gIC8vIGV2ZW50c1xuICB0aGlzLm9uKCAncmVxdWVzdCcsIHRoaXMuc2hvd1JlcXVlc3RTdGF0dXMgKTtcbiAgdGhpcy5vbiggJ2Vycm9yJywgdGhpcy5zaG93RXJyb3JTdGF0dXMgKTtcbiAgdGhpcy5vbiggJ2xhc3QnLCB0aGlzLnNob3dMYXN0U3RhdHVzICk7XG4gIHRoaXMuYmluZEhpZGVTdGF0dXMoJ29uJyk7XG59O1xuXG5wcm90by5iaW5kSGlkZVN0YXR1cyA9IGZ1bmN0aW9uKCBiaW5kTWV0aG9kICkge1xuICBsZXQgaGlkZUV2ZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZCA/ICdhcHBlbmQnIDogJ2xvYWQnO1xuICB0aGlzWyBiaW5kTWV0aG9kIF0oIGhpZGVFdmVudCwgdGhpcy5oaWRlQWxsU3RhdHVzICk7XG59O1xuXG5wcm90by5zaG93UmVxdWVzdFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ3JlcXVlc3QnKTtcbn07XG5cbnByb3RvLnNob3dFcnJvclN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ2Vycm9yJyk7XG59O1xuXG5wcm90by5zaG93TGFzdFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ2xhc3QnKTtcbiAgLy8gcHJldmVudCBsYXN0IHRoZW4gYXBwZW5kIGV2ZW50IHJhY2UgY29uZGl0aW9uIGZyb20gc2hvd2luZyBsYXN0IHN0YXR1cyAjNzA2XG4gIHRoaXMuYmluZEhpZGVTdGF0dXMoJ29mZicpO1xufTtcblxucHJvdG8uc2hvd1N0YXR1cyA9IGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gIHNob3coIHRoaXMuc3RhdHVzRWxlbWVudCApO1xuICB0aGlzLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzKCk7XG4gIGxldCBldmVudEVsZW0gPSB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHNbIGV2ZW50TmFtZSBdO1xuICBzaG93KCBldmVudEVsZW0gKTtcbn07XG5cbnByb3RvLmhpZGVBbGxTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgaGlkZSggdGhpcy5zdGF0dXNFbGVtZW50ICk7XG4gIHRoaXMuaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMoKTtcbn07XG5cbnByb3RvLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIGZvciAoIGxldCB0eXBlIGluIHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50cyApIHtcbiAgICBsZXQgZXZlbnRFbGVtID0gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzWyB0eXBlIF07XG4gICAgaGlkZSggZXZlbnRFbGVtICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBoaWRlKCBlbGVtICkge1xuICBzZXREaXNwbGF5KCBlbGVtLCAnbm9uZScgKTtcbn1cblxuZnVuY3Rpb24gc2hvdyggZWxlbSApIHtcbiAgc2V0RGlzcGxheSggZWxlbSwgJ2Jsb2NrJyApO1xufVxuXG5mdW5jdGlvbiBzZXREaXNwbGF5KCBlbGVtLCB2YWx1ZSApIHtcbiAgaWYgKCBlbGVtICkge1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNwb25zaXZlQXV0b0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVzcG9uc2l2ZUF1dG9IZWlnaHQoc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVBdXRvSGVpZ2h0KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucnVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNwb25zaXZlQXV0b0hlaWdodCwgW3tcbiAgICBrZXk6ICdyZWNhbGMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFrZUdyb3VwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VHcm91cHMoZWxlbWVudHMpIHtcbiAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9KTtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnRzWzBdKS50b3A7XG4gICAgICBncm91cFswXSA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudCkudG9wICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICBoZWlnaHQgPSAoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3A7XG4gICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgZ3JvdXBbaWR4XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwW2lkeF0ucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhdXRvSGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b0hlaWdodChncm91cCkge1xuICAgICAgdmFyIGhlaWdodHMgPSBncm91cC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gY29tcHV0ZWRTdHlsZS5ib3hTaXppbmc7XG4gICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCkgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoaGVpZ2h0cykpO1xuICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdydW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcblxuICAgICAgdmFyIGdyb3VwcyA9IHRoaXMubWFrZUdyb3VwcyhlbGVtZW50cyk7XG4gICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgX3RoaXMyLmF1dG9IZWlnaHQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNwb25zaXZlQXV0b0hlaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG52YXIgZ2V0U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG59O1xuXG52YXIgZ2V0T2Zmc2V0ID0gZXhwb3J0cy5nZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsVG9wKCksXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZ2V0U2Nyb2xsTGVmdCgpXG4gIH07XG59OyJdfQ==
