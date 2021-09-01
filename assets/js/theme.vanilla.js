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

var _responsiveAutoHeight = _interopRequireDefault(require("responsive-auto-height"));

var EqualHeightElements = function EqualHeightElements() {
  (0, _classCallCheck2["default"])(this, EqualHeightElements);
  (0, _defineProperty2["default"])(this, "start", function () {
    if (!!document.querySelector(".blog-equal-heights .blog-entry-inner")) {
      new _responsiveAutoHeight["default"](".blog-equal-heights .blog-entry-inner");
    }

    if (!!document.querySelector(".match-height-grid .match-height-content")) {
      new _responsiveAutoHeight["default"](".match-height-grid .match-height-content");
    }
  });
  this.start();
};

var _default = EqualHeightElements;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40,"responsive-auto-height":55}],7:[function(require,module,exports){
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

  _lastWindowWidth.set(this, {
    writable: true,
    value: void 0
  });

  _lastWindowHeight.set(this, {
    writable: true,
    value: void 0
  });

  _footerPositionState.set(this, {
    writable: true,
    value: null
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowWidth, window.innerWidth);
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowHeight, window.innerHeight);
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      window.addEventListener("load", (0, _classPrivateFieldGet2["default"])(_this, _onWindowLoad));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
    }
  });

  _onWindowLoad.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);

      if ((0, _classPrivateFieldGet2["default"])(_this, _lastWindowWidth) !== window.innerWidth || (0, _classPrivateFieldGet2["default"])(_this, _lastWindowHeight) !== window.innerHeight) {
        (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      }

      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _fixFooterAtMiddlePage.set(this, {
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

  _fixedFooter.set(this, {
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

  _parallaxFooter.set(this, {
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

var _start = /*#__PURE__*/new WeakMap();

var Header = function Header() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Header);

  _start.set(this, {
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

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var VerticalHeader = function VerticalHeader() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, VerticalHeader);

  _menuItemsPlusIcon.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
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

  _setupEventListeners.set(this, {
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

  _onMenuItemPlusIconClick.set(this, {
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

  _onToggleMenuBtnClick.set(this, {
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

  _onDocumentKeydown.set(this, {
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

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onNoClickMenuItemClick = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseenter = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseleave = /*#__PURE__*/new WeakMap();

var Menu = function Menu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Menu);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.fullScreen = new _fullScreen["default"]();
      _this.mega = new _mega["default"]();
    }
  });

  _setupEventListeners.set(this, {
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

  _onNoClickMenuItemClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  _onParentMenuItemMouseenter.set(this, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.add("sfHover");
      (0, _utils.fadeIn)(subMenu);
    }
  });

  _onParentMenuItemMouseleave.set(this, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.remove("sfHover");
      subMenu.style.pointerEvents = "none";
      (0, _utils.fadeOut)(subMenu, {
        callback: function callback() {
          subMenu.style.pointerEvents = null;
        }
      });
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

  _start.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.fullScreen.menu.querySelectorAll(".nav-arrow").forEach(function (plusBtn) {
        plusBtn.setAttribute("tabindex", 0);
      });
    }
  });

  _setupEventListeners.set(this, {
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

  _onToggleMenuBtnClick.set(this, {
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

  _onMenuLinkClick.set(this, {
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

  _onMenuHashtagLinkClick.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _openMenu.set(this, {
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

  _closeMenu.set(this, {
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

  _onDocumentKeydown.set(this, {
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

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _onTopbarMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _menuItemMouseEnter = /*#__PURE__*/new WeakMap();

var MegaMenu = function MegaMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MegaMenu);

  _start.set(this, {
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

  _setupEventListeners.set(this, {
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

  _onMenuItemMouseEnter.set(this, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.site.classList.contains("medium-header") ? document.querySelector("#site-navigation-wrap > .container") : document.querySelector("#site-header-inner");
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _onTopbarMenuItemMouseEnter.set(this, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.topbar;
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _menuItemMouseEnter.set(this, {
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

var _start = /*#__PURE__*/new WeakMap();

var MobileMenu = function MobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MobileMenu);

  _start.set(this, {
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

  _isMenuOpen.set(this, {
    writable: true,
    value: void 0
  });

  _menuItemsToggleIcon.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
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

  _setupEventListeners.set(this, {
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

  _onToggleMenuButtonClick.set(this, {
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

  _onMenuCloseClick.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl3, _DOM$mobileMenu$hambu3;

      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideUp)(_constants.DOM.mobileMenu.navWrapper, 250);
      (_DOM$mobileMenu$toggl3 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl3 === void 0 ? void 0 : _DOM$mobileMenu$toggl3.classList.remove("opened");
      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.classList.remove("is-active");
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }
    }
  });

  _onHamburgerClick.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
    }
  });

  _onMenuItemPlusIconClick.set(this, {
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

  _onDocumentKeydown.set(this, {
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

  _start.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$fullS, _DOM$mobileMenu$fullS2;

      (_DOM$mobileMenu$fullS = _constants.DOM.mobileMenu.fullScreen) === null || _DOM$mobileMenu$fullS === void 0 ? void 0 : (_DOM$mobileMenu$fullS2 = _DOM$mobileMenu$fullS.querySelectorAll(".menu-item-has-children > a")) === null || _DOM$mobileMenu$fullS2 === void 0 ? void 0 : _DOM$mobileMenu$fullS2.forEach(function (menuItemLink) {
        menuItemLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex=0></span>');
      });
    }
  });

  _setupEventListeners.set(this, {
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

  _onMenuButtonClick.set(this, {
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

  _onCloseIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _closeMenu.set(this, {
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

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _onDropownToggleIcon.set(this, {
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

  _onDocumentKeydown.set(this, {
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

  _isMenuOpen.set(this, {
    writable: true,
    value: void 0
  });

  _menuItemsPlusIcon.set(this, {
    writable: true,
    value: void 0
  });

  _sidebarToggleMenuBtn.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
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

  _startSidrPlugin.set(this, {
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
          var _DOM$mobileMenu$hambu;

          document.querySelector("a.sidr-class-toggle-sidr-close").focus();
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

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu3, _classPrivateFieldGet2, _classPrivateFieldGet3, _document$querySelect;

      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onHamburgerBtnClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onSidebarCloseMenuBtnClick));
      (_classPrivateFieldGet3 = (0, _classPrivateFieldGet4["default"])(_this, _menuItemsPlusIcon)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("touchend", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
      });
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "click", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "touchend", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (_document$querySelect = document.querySelectorAll("li.sidr-class-nav-no-click > a")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet4["default"])(_this, _onDocumentKeydown));
      window.addEventListener("resize", (0, _classPrivateFieldGet4["default"])(_this, _onWindowResize));
    }
  });

  _onHamburgerBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
    }
  });

  _onSidebarCloseMenuBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn).classList.remove("opened");
    }
  });

  _onMenuItemPlusIconClick.set(this, {
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

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }
    }
  });

  _onDocumentKeydown.set(this, {
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
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("sidr-class-dropdown-toggle")) {
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

  _closeSidr.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu4;

      sidr.close("sidr");
      (_DOM$mobileMenu$hambu4 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu4 === void 0 ? void 0 : _DOM$mobileMenu$hambu4.classList.remove("is-active");
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

var _utils = require("../../lib/utils");

var _infiniteScroll2 = _interopRequireDefault(require("infinite-scroll"));

var _infiniteScroll = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var OWInfiniteScroll = function OWInfiniteScroll() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWInfiniteScroll);

  _infiniteScroll.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
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

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("load", function (body, path, response) {
        var _this2 = this;

        var items = body.querySelectorAll(".item-entry");

        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeOut)(item);
          });
        }

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
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("append", function (body, path, items, response) {
        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeIn)(item);
          });
        }
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

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"infinite-scroll":49}],18:[function(require,module,exports){
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

  _addLightboxClass.set(this, {
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

  _imageFormats.set(this, {
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

var _targetElem = /*#__PURE__*/new WeakMap();

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

  _targetElem.set(this, {
    writable: true,
    value: void 0
  });

  _lastScrollTop.set(this, {
    writable: true,
    value: 0
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll('a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function (scrollItem) {
        scrollItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollItemClick));
      });
    }
  });

  _onScrollItemClick.set(this, {
    writable: true,
    value: function value(event) {
      var scrollItem = event.currentTarget;

      if (!scrollItem.classList.contains("omw-open-modal") && !scrollItem.closest(".omw-open-modal") && !scrollItem.classList.contains("opl-link") && !scrollItem.parentNode.classList.contains("opl-link") && !scrollItem.classList.contains("sidr-class-opl-link") && !scrollItem.parentNode.classList.contains("sidr-class-opl-link")) {
        var href = scrollItem.getAttribute("href");
        var id = href.substring(href.indexOf("#")).slice(1);

        if ((0, _utils.isSelectorValid)("#".concat(id))) {
          (0, _classPrivateFieldSet2["default"])(_this, _targetElem, document.querySelector("#".concat(id)));
        }

        if (id != "" && !!(0, _classPrivateFieldGet2["default"])(_this, _targetElem)) {
          event.preventDefault();
          event.stopPropagation();
          var scrollPosition = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });

          if (!!document.querySelector("#site-header-sticky-wrapper") && !!_constants.DOM.header.site && !_constants.DOM.header.site.classList.contains("top-header") && !_constants.DOM.header.site.classList.contains("medium-header") && !_constants.DOM.header.site.classList.contains("vertical-header")) {
            window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));
          }
        }
      }
    }
  });

  _getAdminBarHeight.set(this, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.WPAdminbar ? _constants.DOM.WPAdminbar.offsetHeight : 0;
    }
  });

  _getTopbarHeight.set(this, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.header.topbarWrapper && _constants.DOM.header.topbarWrapper.classList.contains("top-bar-sticky") ? _constants.DOM.header.topbarWrapper.offsetHeight : 0;
    }
  });

  _getStickyHeaderHeight.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      var stickyHeader = document.querySelector("#site-header-sticky-wrapper");

      if (!!stickyHeader) {
        var _DOM$header$site, _DOM$header$site2, _DOM$header$site3, _DOM$header$site4, _DOM$header$site$data, _DOM$header$site5;

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

      if (!_constants.DOM.header.site && !!((_document$querySelect = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect !== void 0 && _document$querySelect.firstElementChild.classList.contains("elementor-sticky"))) {
        var _document$querySelect2;

        return (_document$querySelect2 = document.querySelector(".elementor-section-wrap")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.firstElementChild.offsetHeight;
      }

      return 0;
    }
  });

  _fixMultiMenu.set(this, {
    writable: true,
    value: function value(event) {
      var fixedOffset = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

      if (window.pageYOffset.toFixed() === fixedOffset.toFixed()) {
        var _DOM$header$site6;

        window.removeEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));

        if (((_DOM$header$site6 = _constants.DOM.header.site) === null || _DOM$header$site6 === void 0 ? void 0 : _DOM$header$site6.offsetHeight) - 1 > (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this)) {
          var _DOM$header$site7;

          var scrollPosition = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - ((_DOM$header$site7 = _constants.DOM.header.site) === null || _DOM$header$site7 === void 0 ? void 0 : _DOM$header$site7.offsetHeight);

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

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowScroll = /*#__PURE__*/new WeakMap();

var _onScrollTopClick = /*#__PURE__*/new WeakMap();

var ScrollTop = function ScrollTop() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollTop);

  _start.set(this, {
    writable: true,
    value: function value() {}
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$scroll$scrollTop, _DOM$scroll$goTop, _DOM$scroll$goTopSlas;

      window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _onWindowScroll));
      (_DOM$scroll$scrollTop = _constants.DOM.scroll.scrollTop) === null || _DOM$scroll$scrollTop === void 0 ? void 0 : _DOM$scroll$scrollTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTop = _constants.DOM.scroll.goTop) === null || _DOM$scroll$goTop === void 0 ? void 0 : _DOM$scroll$goTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTopSlas = _constants.DOM.scroll.goTopSlash) === null || _DOM$scroll$goTopSlas === void 0 ? void 0 : _DOM$scroll$goTopSlas.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
    }
  });

  _onWindowScroll.set(this, {
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

  _onScrollTopClick.set(this, {
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

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onInputKeyup = /*#__PURE__*/new WeakMap();

var Search = function Search() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Search);
  (0, _defineProperty2["default"])(this, "mobileOverlayInput", void 0);

  _start.set(this, {
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

  _setupEventListeners.set(this, {
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

  _onInputKeyup.set(this, {
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

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$dropDown$;

        (_DOM$search$dropDown$ = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$ === void 0 ? void 0 : _DOM$search$dropDown$.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _onToggleSearchBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
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

    _onDocumentClick.set((0, _assertThisInitialized2["default"])(_this), {
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

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$headerRep, _DOM$search$headerRep2;

        (_DOM$search$headerRep = _constants.DOM.search.headerReplace.toggleSearchBtn) === null || _DOM$search$headerRep === void 0 ? void 0 : _DOM$search$headerRep.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$headerRep2 = _constants.DOM.search.headerReplace.closeBtn) === null || _DOM$search$headerRep2 === void 0 ? void 0 : _DOM$search$headerRep2.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _onToggleSearchBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
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

    _onCloseBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
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

    _onDocumentClick.set((0, _assertThisInitialized2["default"])(_this), {
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

    _hasTopHeader.set((0, _assertThisInitialized2["default"])(_this), {
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

    _elements.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: void 0
    });

    _setElements.set((0, _assertThisInitialized2["default"])(_this), {
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

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
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

    _toggleDropdownSearch.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.toggle("show");
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.toggle("active");

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.querySelector("form"), "input.field");
      }
    });

    _openOverlaySearch.set((0, _assertThisInitialized2["default"])(_this), {
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

    _closeOverlaySearch.set((0, _assertThisInitialized2["default"])(_this), {
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

    _onClickOverlaySearch.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("input").focus();
      }
    });

    _onClickDocument.set((0, _assertThisInitialized2["default"])(_this), {
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

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$overlay$t, _DOM$search$overlay$c;

        (_DOM$search$overlay$t = _constants.DOM.search.overlay.toggleSearchBtn) === null || _DOM$search$overlay$t === void 0 ? void 0 : _DOM$search$overlay$t.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$overlay$c = _constants.DOM.search.overlay.closeBtn) === null || _DOM$search$overlay$c === void 0 ? void 0 : _DOM$search$overlay$c.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
      }
    });

    _onToggleSearchBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
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

    _onCloseBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
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

  _select.set(this, {
    writable: true,
    value: void 0
  });

  _render.set(this, {
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

  _style.set(this, {
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

  _setupEventListenersItem.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMouseenter));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onMouseleave));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("change", _this.onChange);
    }
  });

  _onMouseenter.set(this, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.add("theme-selectHover");
    }
  });

  _onMouseleave.set(this, {
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

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.addEventListener("DOMContentLoaded", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
    }
  });

  _onDocumentReady.set(this, {
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

var _start = /*#__PURE__*/new WeakMap();

var Theme = function Theme() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Theme);

  _start.set(this, {
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

},{"./core":47,"fizzy-ui-utils":54}],47:[function(require,module,exports){
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

},{"ev-emitter":53,"fizzy-ui-utils":54}],48:[function(require,module,exports){
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

},{"./core":47,"fizzy-ui-utils":54}],49:[function(require,module,exports){
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

},{"./button":46,"./core":47,"./history":48,"./page-load":50,"./scroll-watch":51,"./status":52}],50:[function(require,module,exports){
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

},{"./core":47}],51:[function(require,module,exports){
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

},{"./core":47,"fizzy-ui-utils":54}],52:[function(require,module,exports){
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

},{"./core":47,"fizzy-ui-utils":54}],53:[function(require,module,exports){
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

},{}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvcGFnZS1sb2FkLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zY3JvbGwtd2F0Y2guanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3N0YXR1cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FMUztBQU1mLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FORztBQU9mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQVBFO0FBUWYsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBvcHRpb25zID0gb2NlYW53cExvY2FsaXplO1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTSA9IHtcclxuICAgIGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLFxyXG4gICAgYm9keTogZG9jdW1lbnQuYm9keSxcclxuICAgIFdQQWRtaW5iYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BhZG1pbmJhclwiKSxcclxuICAgIHdyYXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3JhcFwiKSxcclxuICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKSxcclxuICAgIHNlbGVjdFRhZ3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5jdXN0b21TZWxlY3RzKSxcclxuICAgIGZsb2F0aW5nQmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1mbG9hdGluZy1iYXJcIiksXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgICBzaXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnZlcnRpY2FsLWhlYWRlciAjc2l0ZS1oZWFkZXItaW5uZXJcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXJcIiksXHJcbiAgICAgICAgdG9wYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXJcIiksXHJcbiAgICAgICAgdG9wYmFyV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyLXdyYXBcIiksXHJcbiAgICAgICAgdG9wTGVmdFNpZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudG9wLWhlYWRlciAuaGVhZGVyLXRvcCAubGVmdFwiKSxcclxuICAgICAgICB0b3BSaWdodFNpZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudG9wLWhlYWRlciAuaGVhZGVyLXRvcCAucmlnaHRcIiksXHJcbiAgICB9LFxyXG4gICAgbWVudToge1xyXG4gICAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5oZWFkZXItcmVwbGFjZSAjc2l0ZS1uYXZpZ2F0aW9uXCIpLFxyXG4gICAgICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IHtcclxuICAgICAgICAgICAgbWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgI2Z1bGwtc2NyZWVuLW1lbnVcIiksXHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyIC5tZW51LWJhclwiKSxcclxuICAgICAgICAgICAgbG9nbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWxvZ28uaGFzLWZ1bGwtc2NyZWVuLWxvZ29cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZWdhOiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzaXRlLW5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgdG9wYmFyTWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvcC1iYXItbmF2IC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5hdXRvLW1lZ2EgLm1lZ2FtZW51XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEudmVydGljYWwtdG9nZ2xlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlTWVudToge1xyXG4gICAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZHJvcGRvd24gPiBuYXZcIiksXHJcbiAgICAgICAgbmF2V3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZHJvcGRvd25cIiksXHJcbiAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKSxcclxuICAgICAgICBoYW1idXJnZXJCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUgPiAuaGFtYnVyZ2VyXCIpLFxyXG4gICAgICAgIG1lbnVJdGVtc0hhc0NoaWxkcmVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1kcm9wZG93biAubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1mdWxsc2NyZWVuXCIpLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICAgIGZvcm1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybS5oZWFkZXItc2VhcmNoZm9ybVwiKSxcclxuICAgICAgICBkcm9wRG93bjoge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1kcm9wZG93bi10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1kcm9wZG93blwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlclJlcGxhY2U6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtaGVhZGVyLXJlcGxhY2UtdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2VcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLW92ZXJsYXktdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLW92ZXJsYXkgYS5zZWFyY2gtb3ZlcmxheS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLW92ZXJsYXlcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBzaXRlRm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3RlclwiKSxcclxuICAgICAgICBjYWxsb3V0Rm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1jYWxsb3V0LXdyYXBcIiksXHJcbiAgICAgICAgZm9vdGVyQmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1iYXJcIiksXHJcbiAgICAgICAgcGFyYWxsYXg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtZm9vdGVyXCIpLFxyXG4gICAgfSxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGwtdG9wXCIpLFxyXG4gICAgICAgIGdvVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjZ28tdG9wXCJdJyksXHJcbiAgICAgICAgZ29Ub3BTbGFzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lIGFbaHJlZj1cIi8jZ28tdG9wXCJdJyksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbFdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLXdyYXBcIiksXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIG1hc29ucnlHcmlkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLW1hc29ucnktZ3JpZFwiKSxcclxuICAgIH0sXHJcbiAgICBlZGQ6IHtcclxuICAgICAgICBjYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGQtbWVudS1pY29uXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgdG90YWxQcmljZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkbWVudWNhcnQtZGV0YWlscy50b3RhbFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdNb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgfSxcclxuICAgIHdvbzoge1xyXG4gICAgICAgIHJlc2V0VmFyaWF0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldF92YXJpYXRpb25zXCIpLFxyXG4gICAgICAgIHByb2R1Y3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3RcIiksXHJcbiAgICAgICAgYWxsUHJvZHVjdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHNcIiksXHJcbiAgICAgICAgY2F0ZWdvcmllczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b28tZHJvcGRvd24tY2F0IC5wcm9kdWN0LWNhdGVnb3JpZXNcIiksXHJcbiAgICAgICAgdmVydGljYWxUaHVtYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgdGh1bWJzVmVydGljYWxMYXlvdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgZ3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1ncmlkXCIpLFxyXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtbGlzdFwiKSxcclxuICAgICAgICBwcm9kdWN0VGFiczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtdGFic1wiKSxcclxuICAgICAgICBwcm9kdWN0Q2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLmNhcnRcIiksXHJcbiAgICAgICAgcHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtcmV2aWV3LWxpbmtcIiksXHJcbiAgICAgICAgcXVhbnRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpLFxyXG4gICAgICAgIGNoZWNrb3V0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ud29vY29tbWVyY2UtY2hlY2tvdXRcIiksXHJcbiAgICAgICAgY2hlY2tvdXRMb2dpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9sb2dpblwiKSxcclxuICAgICAgICBjaGVja291dENvdXBvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9jb3Vwb25cIiksXHJcbiAgICAgICAgY2hlY2tvdXRUaW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtY2hlY2tvdXQtdGltZWxpbmVcIiksXHJcbiAgICAgICAgY3VzdG9tZXJCaWxsaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9iaWxsaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgY3VzdG9tZXJTaGlwcGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfc2hpcHBpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBvcmRlclJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9yZXZpZXdcIiksXHJcbiAgICAgICAgb3JkZXJDaGVja291dFBheW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfY2hlY2tvdXRfcGF5bWVudFwiKSxcclxuICAgICAgICBwbGFjZU9yZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpLFxyXG4gICAgICAgIGZvcm1BY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fYWN0aW9uc1wiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWFjY291bnQtbGlua3NcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZUJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9sb2dpblwiKSxcclxuICAgICAgICBxdWFudGl0eUlucHV0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3OiB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTVN0cmluZyA9IHt9O1xyXG4iLCJpbXBvcnQgXCIuL2xpYi9lbGVtZW50XCI7XHJcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi90aGVtZS90aGVtZVwiO1xyXG5cclxuY2xhc3MgT2NlYW5XUCB7XHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4oXCJ1c2Ugc2NyaXB0XCIpO1xyXG5cclxud2luZG93Lm9jZWFud3AgPSBuZXcgT2NlYW5XUCgpO1xyXG5vY2VhbndwLnN0YXJ0KCk7XHJcbiIsIkVsZW1lbnQucHJvdG90eXBlLm9jZWFuUGFyZW50cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gW107XHJcbiAgICB2YXIgZWxlbSA9IHRoaXM7XHJcbiAgICB2YXIgaXNoYXZlc2VsZWN0b3IgPSBzZWxlY3RvciAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHdoaWxlICgoZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudCkgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzaGF2ZXNlbGVjdG9yIHx8IGVsZW0ubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVEb3duID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXk7XHJcblxyXG4gICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICAgIGxldCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpblwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVG9nZ2xlID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbikgOiBzbGlkZVVwKGVsZW1lbnQsIGR1cmF0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCwgX29wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICAgIGRpc3BsYXk6IG51bGwsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBfb3B0aW9ucyk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG9wdGlvbnMuZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYCR7b3B0aW9ucy5kdXJhdGlvbn1tcyBvcGFjaXR5IGVhc2VgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eTtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICEhb3B0aW9ucy5jYWxsYmFjayAmJiBvcHRpb25zLmNhbGxiYWNrKCk7XHJcbiAgICB9LCBvcHRpb25zLmR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVPdXQgPSAoZWxlbWVudCwgX29wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICAgIGRpc3BsYXk6IG51bGwsXHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBfb3B0aW9ucyk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG9wdGlvbnMuZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYCR7b3B0aW9ucy5kdXJhdGlvbn1tcyBvcGFjaXR5IGVhc2VgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eTtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICEhb3B0aW9ucy5jYWxsYmFjayAmJiBvcHRpb25zLmNhbGxiYWNrKCk7XHJcbiAgICB9LCBvcHRpb25zLmR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVUb2dnbGUgPSAoZWxlbWVudCwgb3B0aW9ucykgPT4ge1xyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIgPyBmYWRlSW4oZWxlbWVudCwgb3B0aW9ucykgOiBmYWRlT3V0KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc2libGUgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGUpID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSAobykgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcclxuICAgICAgICA6IG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0b3JWYWxpZCA9ICgoZHVtbXlFbGVtZW50KSA9PiAoc2VsZWN0b3IpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHVtbXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSk7XHJcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZ01hc29ucnkge1xuICAgIGlzb3RvcDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5ibG9nLm1hc29ucnlHcmlkcz8uZm9yRWFjaCgoYmxvZ01hc29ucnlHcmlkKSA9PiB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQoYmxvZ01hc29ucnlHcmlkLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzb3RvcCA9IG5ldyBJc290b3BlKGJsb2dNYXNvbnJ5R3JpZCwge1xuICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6IFwiLmlzb3RvcGUtZW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlzT3JpZ2luTGVmdDogb3B0aW9ucy5pc1JUTCA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG4iLCJpbXBvcnQgUmVzcG9uc2l2ZUF1dG9IZWlnaHQgZnJvbSBcInJlc3BvbnNpdmUtYXV0by1oZWlnaHRcIjtcclxuXHJcbmNsYXNzIEVxdWFsSGVpZ2h0RWxlbWVudHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1lcXVhbC1oZWlnaHRzIC5ibG9nLWVudHJ5LWlubmVyXCIpKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zaXZlQXV0b0hlaWdodChcIi5ibG9nLWVxdWFsLWhlaWdodHMgLmJsb2ctZW50cnktaW5uZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hdGNoLWhlaWdodC1ncmlkIC5tYXRjaC1oZWlnaHQtY29udGVudFwiKSkge1xyXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2l2ZUF1dG9IZWlnaHQoXCIubWF0Y2gtaGVpZ2h0LWdyaWQgLm1hdGNoLWhlaWdodC1jb250ZW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVxdWFsSGVpZ2h0RWxlbWVudHM7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgICAjbGFzdFdpbmRvd1dpZHRoO1xyXG4gICAgI2xhc3RXaW5kb3dIZWlnaHQ7XHJcbiAgICAjZm9vdGVyUG9zaXRpb25TdGF0ZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00ubWFpbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jbGFzdFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy4jbGFzdFdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuI29uV2luZG93TG9hZCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25XaW5kb3dMb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4jZml4Rm9vdGVyQXRNaWRkbGVQYWdlKCk7XHJcbiAgICAgICAgdGhpcy4jZml4ZWRGb290ZXIoKTtcclxuICAgICAgICB0aGlzLiNwYXJhbGxheEZvb3RlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNmaXhGb290ZXJBdE1pZGRsZVBhZ2UoKTtcclxuICAgICAgICBpZiAodGhpcy4jbGFzdFdpbmRvd1dpZHRoICE9PSB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLiNsYXN0V2luZG93SGVpZ2h0ICE9PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy4jZml4ZWRGb290ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jcGFyYWxsYXhGb290ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgI2ZpeEZvb3RlckF0TWlkZGxlUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3cEFkbWluYmFySGVpZ2h0ID0gRE9NLldQQWRtaW5iYXI/Lm9mZnNldEhlaWdodCA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGZvb3RlckJhckhlaWdodCA9IERPTS5mb290ZXIuZm9vdGVyQmFyPy5vZmZzZXRIZWlnaHQgPz8gMDtcclxuICAgICAgICBjb25zdCBodG1sSGVpZ2h0ID0gRE9NLmh0bWwub2Zmc2V0SGVpZ2h0IC0gd3BBZG1pbmJhckhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGh0bWxIZWlnaHQgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgRE9NLndyYXAuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICR7d3BBZG1pbmJhckhlaWdodH1weCAtICR7Zm9vdGVyQmFySGVpZ2h0fXB4KTtcclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIGlmICghIURPTS5mb290ZXIuY2FsbG91dEZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEhRE9NLmZvb3Rlci5zaXRlRm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLnNpdGVGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBcImNoYW5nZWRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPT09IFwiY2hhbmdlZFwiKSB7XHJcbiAgICAgICAgICAgIERPTS53cmFwLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuc2l0ZUZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNmb290ZXJQb3NpdGlvblN0YXRlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhlZEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLWZpeGVkLWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCEhRE9NLldQQWRtaW5iYXIpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gRE9NLldQQWRtaW5iYXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1haW4uc3R5bGUubWluSGVpZ2h0ID0gRE9NLm1haW4ub2Zmc2V0SGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAtIERPTS5odG1sLm9mZnNldEhlaWdodCAtIG9mZnNldCkgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNwYXJhbGxheEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXBhcmFsbGF4LWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFpblNlY3Rpb25NYXJnaW5Cb3R0b20gKz0gRE9NLmZvb3Rlci5wYXJhbGxheD8ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghIURPTS5mb290ZXIuY2FsbG91dEZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5ib3R0b20gPSBgJHttYWluU2VjdGlvbk1hcmdpbkJvdHRvbX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpblNlY3Rpb25NYXJnaW5Cb3R0b20gKz0gRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBET00ubWFpbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHttYWluU2VjdGlvbk1hcmdpbkJvdHRvbX1weGA7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCBWZXJ0aWNhbEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvdmVydGljYWxcIjtcclxuXHJcbmNsYXNzIEhlYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsID0gbmV3IFZlcnRpY2FsSGVhZGVyKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgVmVydGljYWxIZWFkZXIge1xyXG4gICAgI21lbnVJdGVtc1BsdXNJY29uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLmhlYWRlci52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLmhlYWRlci52ZXJ0aWNhbC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbjpub3QoLmJ0bikgPiBhXCIpLmZvckVhY2goKG1lbnVMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVMaW5rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD1cIjBcIj48L3NwYW4+Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPyBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxyXG4gICAgICAgICAgICAgICAgOiBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG5cclxuICAgICAgICBuZXcgUGVyZmVjdFNjcm9sbGJhcihET00uaGVhZGVyLnZlcnRpY2FsLCB7XHJcbiAgICAgICAgICAgIHdoZWVsU3BlZWQ6IDAuNSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxZOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmVydGljYWxIZWFkZXJUYXJnZXQgPT0gXCJsaW5rXCIgPyBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIiksIDI1MCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI29uVG9nZ2xlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmFkZChcInZoLW9wZW5lZFwiKTtcclxuICAgICAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aC1vcGVuZWRcIik7XHJcbiAgICAgICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4ucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4uZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAqL1xyXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xyXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLmhlYWRlci52ZXJ0aWNhbD8ucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzID8gbmF2RWxlbWVudHNbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHMgPyBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIG5hdkxhc3RFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWwtaGVhZGVyLXN0eWxlXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtY2xvc2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtb3BlbmVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlc2NLZXkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlbnRlcktleSAmJlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSAmJlxyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1jbG9zZWRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbmF2Rmlyc3RFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVydGljYWxIZWFkZXI7XHJcbiIsImltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IEZ1bGxTY3JlZW5NZW51IGZyb20gXCIuL21lbnUvZnVsbC1zY3JlZW5cIjtcclxuaW1wb3J0IE1lZ2FNZW51IGZyb20gXCIuL21lbnUvbWVnYVwiO1xyXG5cclxuY2xhc3MgTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuID0gbmV3IEZ1bGxTY3JlZW5NZW51KCk7XHJcbiAgICAgICAgdGhpcy5tZWdhID0gbmV3IE1lZ2FNZW51KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5uYXYtbm8tY2xpY2sgPiBhXCIpLmZvckVhY2goKG5vQ2xpY2tNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBub0NsaWNrTWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTm9DbGlja01lbnVJdGVtQ2xpY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidWwuc2YtbWVudVwiKS5mb3JFYWNoKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE1lbnVJdGVtcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpO1xyXG4gICAgICAgICAgICBwYXJlbnRNZW51SXRlbXMuZm9yRWFjaCgocGFyZW50TWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uUGFyZW50TWVudUl0ZW1Nb3VzZWVudGVyKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuI29uUGFyZW50TWVudUl0ZW1Nb3VzZWxlYXZlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk5vQ2xpY2tNZW51SXRlbUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uUGFyZW50TWVudUl0ZW1Nb3VzZWVudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBwYXJlbnRNZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XHJcblxyXG4gICAgICAgIHBhcmVudE1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJzZkhvdmVyXCIpO1xyXG4gICAgICAgIGZhZGVJbihzdWJNZW51KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uUGFyZW50TWVudUl0ZW1Nb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBwYXJlbnRNZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XHJcblxyXG4gICAgICAgIHBhcmVudE1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZkhvdmVyXCIpO1xyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICBmYWRlT3V0KHN1Yk1lbnUsIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUucG9pbnRlckV2ZW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQsIHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRnVsbFNjcmVlbk1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWFycm93XCIpLmZvckVhY2goKHBsdXNCdG4pID0+IHtcbiAgICAgICAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsID4gbGkuZHJvcGRvd24gPiBhID4gLnRleHQtd3JhcCA+IHNwYW4ubmF2LWFycm93LCAjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsID4gbGkuZHJvcGRvd24gPiBhW2hyZWY9XCIjXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUxpbmtDbGljayk7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25NZW51TGlua0NsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiBhLm1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SGFzaHRhZ0xpbmtDbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZU1lbnVCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRvZ2dsZU1lbnVCdG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmICghdG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJleGl0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNvcGVuTWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTWVudUxpbmtDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtTGluay5jbG9zZXN0KFwibGkuZHJvcGRvd25cIik7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XG5cbiAgICAgICAgaWYgKCEod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViTWVudSkuZGlzcGxheSA9PT0gXCJub25lXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25NZW51SGFzaHRhZ0xpbmtDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICB9O1xuXG4gICAgI29wZW5NZW51ID0gKCkgPT4ge1xuICAgICAgICBET00uaGVhZGVyLmZ1bGxTY3JlZW4uY2xhc3NMaXN0LmFkZChcIm5hdi1vcGVuXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubG9nbz8uY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZUluKERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudSk7XG5cbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuIC0gaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiArIFwicHhcIjtcbiAgICB9O1xuXG4gICAgI2Nsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmhlYWRlci5mdWxsU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJleGl0XCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLmxvZ28/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVPdXQoRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51KTtcblxuICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duXCIpLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsLnN1Yi1tZW51XCIpLmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvbiBpbiB0aGUgbWVudSBtb2RhbC5cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubWVudS5mdWxsU2NyZWVuLm1lbnU/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XG5cbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLm5hdi1hcnJvdywgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWFycm93XCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsU2NyZWVuTWVudTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgTWVnYU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5tZWdhLm1lbnVDb250ZW50cy5mb3JFYWNoKChtZW51Q29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51Q29udGVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1MZWZ0T2Zmc2V0ID0gb2Zmc2V0KG1lbnVJdGVtKS5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgbWVudUNvbnRlbnRXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVDb250ZW50KS53aWR0aCk7XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxNYXJnaW47XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUxlZnRPZmZzZXQgLSBtZW51Q29udGVudFdpZHRoIC8gMiA8IDApIHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSBtZW51SXRlbUxlZnRPZmZzZXQgLSAxMDtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gbWVudUNvbnRlbnRXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiA9IG1lbnVJdGVtLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlzUlRMKSB7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubGVmdCA9IGAtJHtob3Jpem9udGFsUG9zaXRpb259cHhgO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtob3Jpem9udGFsTWFyZ2lufXB4YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUucmlnaHQgPSBgLSR7aG9yaXpvbnRhbFBvc2l0aW9ufXB4YDtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5tYXJnaW5SaWdodCA9IGAke2hvcml6b250YWxNYXJnaW59cHhgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLVxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbUxlZnRPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luICtcbiAgICAgICAgICAgICAgICAgICAgbWVudUNvbnRlbnRXaWR0aCA8XG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnJpZ2h0ID0gYC0ke1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtIG1lbnVJdGVtTGVmdE9mZnNldCAtIG1lbnVJdGVtLm9mZnNldFdpZHRoIC0gMTBcbiAgICAgICAgICAgICAgICB9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51Lm1lZ2EubWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvbk1lbnVJdGVtTW91c2VFbnRlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRvcGJhciBtZW51IGl0ZW1zXG4gICAgICAgIERPTS5tZW51Lm1lZ2EudG9wYmFyTWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvblRvcGJhck1lbnVJdGVtTW91c2VFbnRlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjb25NZW51SXRlbU1vdXNlRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpXG4gICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1uYXZpZ2F0aW9uLXdyYXAgPiAuY29udGFpbmVyXCIpXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXItaW5uZXJcIik7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1Nb3VzZUVudGVyKHdyYXBwZXIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgI29uVG9wYmFyTWVudUl0ZW1Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBET00uaGVhZGVyLnRvcGJhcjtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbU1vdXNlRW50ZXIod3JhcHBlciwgZXZlbnQpO1xuICAgIH07XG5cbiAgICAjbWVudUl0ZW1Nb3VzZUVudGVyID0gKHdyYXBwZXIsIGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIubWVnYW1lbnVcIik7XG4gICAgICAgIGxldCBsZWZ0UG9zaXRpb24gPSBwYXJzZUludChvZmZzZXQobWVudUl0ZW0pLmxlZnQgLSBvZmZzZXQod3JhcHBlcikubGVmdCArIDEpO1xuXG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImJveGVkLWxheW91dFwiKSkge1xuICAgICAgICAgICAgbGVmdFBvc2l0aW9uID0gbGVmdFBvc2l0aW9uIC0gMzA7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50LnN0eWxlLmxlZnQgPSBgLSR7bGVmdFBvc2l0aW9ufXB4YDtcbiAgICAgICAgY29udGVudC5zdHlsZS53aWR0aCA9IGAke3dyYXBwZXIub2Zmc2V0V2lkdGh9cHhgO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZ2FNZW51O1xuIiwiaW1wb3J0IERyb3BEb3duTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9kcm9wLWRvd25cIjtcclxuaW1wb3J0IEZ1bGxTY3JlZW5Nb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L2Z1bGwtc2NyZWVuXCI7XHJcbmltcG9ydCBTaWRlYmFyTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9zaWRlYmFyXCI7XHJcblxyXG5jbGFzcyBNb2JpbGVNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd24gPSBuZXcgRHJvcERvd25Nb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuID0gbmV3IEZ1bGxTY3JlZW5Nb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gbmV3IFNpZGViYXJNb2JpbGVNZW51KCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XG5pbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzbGlkZVVwLCBzbGlkZURvd24sIHNsaWRlVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBEcm9wRG93bk1vYmlsZU1lbnUge1xuICAgICNpc01lbnVPcGVuO1xuICAgICNtZW51SXRlbXNUb2dnbGVJY29uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tbW9iaWxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubWVudUl0ZW1zSGFzQ2hpbGRyZW4/LmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImRyb3Bkb3duLXRvZ2dsZVwiO1xuICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcblxuICAgICAgICAgICAgbWVudUl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbXNUb2dnbGVJY29uID1cbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXG4gICAgICAgICAgICAgICAgPyBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcbiAgICAgICAgICAgICAgICA6IERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tdG9nZ2xlXCIpO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgXCIubW9iaWxlLW1lbnVcIiwgXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbCgnbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQ2xpY2spO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24/LmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgISFET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyICYmIHNsaWRlVG9nZ2xlKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDQwMCk7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUNsb3NlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgISFET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyICYmIHNsaWRlVXAoRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciwgMjUwKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jb25NZW51Q2xvc2VDbGljaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkhhbWJ1cmdlckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSAhdGhpcy4jaXNNZW51T3BlbjtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRoaXMuI2lzTWVudU9wZW4pO1xuICAgIH07XG5cbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIGlmICghbWVudUl0ZW0/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcblxuICAgICAgICAgICAgbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKT8uZm9yRWFjaCgob3Blbk1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgb3Blbk1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgc2xpZGVVcChvcGVuTWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5lZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XG5cbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bjtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tb2JpbGVNZW51Lm5hdj8ucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmICghIWNsb3NlSWNvbikge1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI29uTWVudUNsb3NlQ2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25Nb2JpbGVNZW51O1xuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc2xpZGVVcCwgc2xpZGVEb3duLCBmYWRlSW4sIGZhZGVPdXQsIHZpc2libGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEZ1bGxTY3JlZW5Nb2JpbGVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJmdWxsc2NyZWVuLW1vYmlsZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbj8ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKT8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PTA+PC9zcGFuPicpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBcIi5tb2JpbGUtbWVudVwiLCBcImNsaWNrXCIsIHRoaXMuI29uTWVudUJ1dHRvbkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSA+IHNwYW4uZHJvcGRvd24tdG9nZ2xlLCAjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFbaHJlZj1cIiNcIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRyb3Bvd25Ub2dnbGVJY29uKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbkRyb3Bvd25Ub2dnbGVJY29uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI21vYmlsZS1mdWxsc2NyZWVuIC5mcy1kcm9wZG93bi1tZW51IGxpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAjbW9iaWxlLWZ1bGxzY3JlZW4gI21vYmlsZS1uYXYgbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZnVsbHNjcmVlbiBhLmNsb3NlJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUljb25DbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvbk1lbnVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlSW4oRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbik7XG5cbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gLSBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiArIFwicHhcIjtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoXCJhLmNsb3NlXCIpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgfTtcblxuICAgICNjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4pKSB7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJleGl0XCIpO1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICBmYWRlT3V0KERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4pO1xuXG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkuZHJvcGRvd25cIikuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwuc3ViLW1lbnVcIikuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkRyb3Bvd25Ub2dnbGVJY29uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUl0ZW1MaW5rLmNsb3Nlc3QoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xuXG4gICAgICAgIGlmICghKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1Yk1lbnUpLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uIGluIHRoZSBtZW51IG1vZGFsLlxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XG5cbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5xdWVyeVNlbGVjdG9yKFwiYS5jbG9zZVwiKTtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW5cbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxTY3JlZW5Nb2JpbGVNZW51O1xuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU2lkZWJhck1vYmlsZU1lbnUge1xyXG4gICAgI2lzTWVudU9wZW47XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcbiAgICAjc2lkZWJhclRvZ2dsZU1lbnVCdG47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpZHJTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tb2JpbGVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiNzdGFydFNpZHJQbHVnaW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJzxzcGFuIGNsYXNzPVwic2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD0wPjwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNzdGFydFNpZHJQbHVnaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkci5uZXcoXCIubW9iaWxlLW1lbnVcIiwge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNpZHJcIixcclxuICAgICAgICAgICAgc291cmNlOiBvcHRpb25zLnNpZHJTb3VyY2UsXHJcbiAgICAgICAgICAgIHNpZGU6IG9wdGlvbnMuc2lkclNpZGUsXHJcbiAgICAgICAgICAgIGRpc3BsYWNlOiBvcHRpb25zLnNpZHJEaXNwbGFjZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcmVuYW1pbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHRpbWluZzogXCJlYXNlXCIsXHJcbiAgICAgICAgICAgIGJpbmQ6IFwiY2xpY2tcIixcclxuICAgICAgICAgICAgb25PcGVuKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnNpdGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgJzxkaXYgY2xhc3M9XCJvY2VhbndwLXNpZHItb3ZlcmxheVwiIHRhYmluZGV4PTA+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1zaWRyLW92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFkZUluKG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNpZHIuY2xvc2UoXCJzaWRyXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlID4gdWxcIikuZm9yRWFjaCgoc3ViTWVudUFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVBY3RpdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpLmZvckVhY2goKG1lbnVJdGVtQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVPdXQob3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkciBbY2xhc3MqPVwic2lkci1jbGFzcy1mYVwiXScpLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJzaWRyLWNsYXNzLWZhLio/XFxiL2csIFwiZmFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWljb25cIl0nKS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvbi5jbGFzc05hbWUucmVwbGFjZSgvXFxic2lkci1jbGFzcy1pY29uLS4qP1xcYi9nLCBcImljb24tXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNpZHItY2xhc3MtdG9nZ2xlLXNpZHItY2xvc2VcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQnRuQ2xpY2spO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TaWRlYmFyQ2xvc2VNZW51QnRuQ2xpY2spO1xyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbj8uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGVsZWdhdGUoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgICAgICcuc2lkci1jbGFzcy1kcm9wZG93bi1tZW51IGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAuc2lkci1jbGFzcy1tZW51LWl0ZW0gPiBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScsXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VTaWRyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZGVsZWdhdGUoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgICAgICcuc2lkci1jbGFzcy1kcm9wZG93bi1tZW51IGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAuc2lkci1jbGFzcy1tZW51LWl0ZW0gPiBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScsXHJcbiAgICAgICAgICAgIFwidG91Y2hlbmRcIixcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VTaWRyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLnNpZHItY2xhc3MtbmF2LW5vLWNsaWNrID4gYVwiKT8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25IYW1idXJnZXJCdG5DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSAhdGhpcy4jaXNNZW51T3BlbjtcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdGhpcy4jaXNNZW51T3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblNpZGViYXJDbG9zZU1lbnVCdG5DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cclxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCIgPyBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKT8uZm9yRWFjaCgob3Blbk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG47XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc2lkclwiKVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xyXG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNjbG9zZVNpZHIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck1vYmlsZU1lbnU7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwiaW5maW5pdGUtc2Nyb2xsXCI7XG5cbmNsYXNzIE9XSW5maW5pdGVTY3JvbGwge1xuICAgICNpbmZpbml0ZVNjcm9sbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoISFET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsTmF2ICYmICEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdi5xdWVyeVNlbGVjdG9yKFwiLm9sZGVyLXBvc3RzIGFcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsID0gbmV3IEluZmluaXRlU2Nyb2xsKERPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxXcmFwcGVyLCB7XG4gICAgICAgICAgICBwYXRoOiBcIi5vbGRlci1wb3N0cyBhXCIsXG4gICAgICAgICAgICBhcHBlbmQ6IFwiLml0ZW0tZW50cnlcIixcbiAgICAgICAgICAgIHN0YXR1czogXCIuc2Nyb2xsZXItc3RhdHVzXCIsXG4gICAgICAgICAgICBoaWRlTmF2OiBcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIsXG4gICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIHByZWZpbGw6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxUaHJlc2hvbGQ6IDUwMCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcImxvYWRcIiwgZnVuY3Rpb24gKGJvZHksIHBhdGgsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWVudHJ5XCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlT3V0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQoaXRlbXMsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBCbG9nIG1hc29ucnkgaXNvdG9wZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5ibG9nTWFzb25yeS5pc290b3AuYXBwZW5kZWQoaXRlbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeCBHYWxsZXJ5IHBvc3RzXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnktZm9ybWF0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmJsb2dNYXNvbnJ5Lmlzb3RvcC5sYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRXF1YWwgaGVpZ2h0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1tYXRjaGhlaWdodFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmVxdWFsSGVpZ2h0RWxlbWVudHMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHYWxsZXJ5IHBvc3RzIHNsaWRlclxuICAgICAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tY2Fyb3VzZWxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd1NsaWRlci5zdGFydCh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWZvcm1hdCwgLnByb2R1Y3QtZW50cnktc2xpZGVyXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd0xpZ2h0Ym94LmluaXRTaW5nbGVJbWFnZUxpZ2h0Ym94KCk7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5pbml0R2FsbGVyeUxpZ2h0Ym94KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRm9yY2UgdGhlIGltYWdlcyB0byBiZSBwYXJzZWQgdG8gZml4IFNhZmFyaSBpc3N1ZVxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpPy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vdXRlckhUTUwgPSBpbWcub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcImFwcGVuZFwiLCBmdW5jdGlvbiAoYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlSW4oaXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XSW5maW5pdGVTY3JvbGw7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XTGlnaHRib3gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jYWRkTGlnaHRib3hDbGFzcygpO1xuICAgICAgICB0aGlzLmluaXRTaW5nbGVJbWFnZUxpZ2h0Ym94KCk7XG4gICAgICAgIHRoaXMuaW5pdEdhbGxlcnlMaWdodGJveCgpO1xuICAgIH07XG5cbiAgICBpbml0U2luZ2xlSW1hZ2VMaWdodGJveCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vY2VhbndwLWxpZ2h0Ym94XCIpPy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeShcIi5vY2VhbndwLWxpZ2h0Ym94XCIpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiBcIm1mcC13aXRoLXpvb21cIixcblxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgICAgICBvcGVuZXI6IGZ1bmN0aW9uIChvcGVuZXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuZXJFbGVtZW50LmlzKFwiaW1nXCIpID8gb3BlbmVyRWxlbWVudCA6IG9wZW5lckVsZW1lbnQuZmluZChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluaXRHYWxsZXJ5TGlnaHRib3ggPSAoKSA9PiB7XG4gICAgICAgIGpRdWVyeShcIi53cC1ibG9jay1nYWxsZXJ5LCAuZ2FsbGVyeS1mb3JtYXQsIC5nYWxsZXJ5XCIpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6IFwiLmdhbGxlcnktbGlnaHRib3g6bm90KC5zbGljay1jbG9uZWQpXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBtYWluQ2xhc3M6IFwibWZwLWZhZGVcIixcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNhZGRMaWdodGJveENsYXNzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5IC5lbnRyeS1jb250ZW50IGEsIGJvZHkgLmVudHJ5IGEsIGJvZHkgYXJ0aWNsZSAuZ2FsbGVyeS1mb3JtYXQgYVwiKVxuICAgICAgICAgICAgPy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhbGluay5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRm9ybWF0cyA9IHRoaXMuI2ltYWdlRm9ybWF0cygpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VGb3JtYXRzTWFzayA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VGb3JtYXRzLmZvckVhY2goKGltYWdlRm9ybWF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUZvcm1hdHNNYXNrICs9IFN0cmluZyhsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikpLmluZGV4T2YoXCIuXCIgKyBpbWFnZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUZvcm1hdHNNYXNrID09PSAtMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5vLWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktaWNvblwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tdGh1bWJuYWlsXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9faW1hZ2VcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWxpbmsuY2xvc2VzdChcIi53cC1ibG9jay1nYWxsZXJ5XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFsaW5rLmdldEF0dHJpYnV0ZShcImRhdGEtZWxlbWVudG9yLW9wZW4tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcInlpdGhfbWFnbmlmaWVyX3RodW1ibmFpbFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2ctbGlua1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm9jZWFud3AtbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1pY29uXCIpIHx8ICEhbGluay5jbG9zZXN0KFwiLndwLWJsb2NrLWdhbGxlcnlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5LWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNpbWFnZUZvcm1hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbXCJibXBcIiwgXCJnaWZcIiwgXCJqcGVnXCIsIFwianBnXCIsIFwicG5nXCIsIFwidGlmZlwiLCBcInRpZlwiLCBcImpmaWZcIiwgXCJqcGVcIiwgXCJzdmdcIiwgXCJtcDRcIiwgXCJvZ2dcIiwgXCJ3ZWJtXCJdO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XTGlnaHRib3g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XU2xpZGVyIHtcbiAgICBmbGlja2l0eTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIikpID0+IHtcbiAgICAgICAgdGhpcy5mbGlja2l0eSA9IFtdO1xuXG4gICAgICAgIGVsZW1lbnRzPy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGlja2l0eSA9IG5ldyBGbGlja2l0eShlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLWVudHJ5LWltYWdlXCIpID8gZmFsc2UgOiA2MDAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJydGxcIikgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW46IHRydWUsXG4gICAgICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mbGlja2l0eS5wdXNoKGZsaWNraXR5KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dTbGlkZXI7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGlzU2VsZWN0b3JWYWxpZCwgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU2Nyb2xsRWZmZWN0IHtcclxuICAgICN0YXJnZXRFbGVtO1xyXG4gICAgI2xhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLXByb2R1Y3RcIikgJiYgIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxvY2FsLXNjcm9sbFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLmxvY2FsW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLmxvY2FsIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLm1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEuc2lkci1jbGFzcy1tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChzY3JvbGxJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbEl0ZW1DbGljayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25TY3JvbGxJdGVtQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbG9zZXN0KFwiLm9tdy1vcGVuLW1vZGFsXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1vcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3Mtb3BsLWxpbmtcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHNjcm9sbEl0ZW0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBocmVmLnN1YnN0cmluZyhocmVmLmluZGV4T2YoXCIjXCIpKS5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NlbGVjdG9yVmFsaWQoYCMke2lkfWApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiN0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpZCAhPSBcIlwiICYmICEhdGhpcy4jdGFyZ2V0RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRoaXMuI3RhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci1zdGlja3ktd3JhcHBlclwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICEhRE9NLmhlYWRlci5zaXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIilcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI2ZpeE11bHRpTWVudSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNnZXRBZG1pbkJhckhlaWdodCA9ICgpID0+ICghIURPTS5XUEFkbWluYmFyID8gRE9NLldQQWRtaW5iYXIub2Zmc2V0SGVpZ2h0IDogMCk7XHJcblxyXG4gICAgI2dldFRvcGJhckhlaWdodCA9ICgpID0+XHJcbiAgICAgICAgISFET00uaGVhZGVyLnRvcGJhcldyYXBwZXIgJiYgRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1iYXItc3RpY2t5XCIpXHJcbiAgICAgICAgICAgID8gRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgI2dldFN0aWNreUhlYWRlckhlaWdodCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGlja3lIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLXN0aWNreS13cmFwcGVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoISFzdGlja3lIZWFkZXIpIHtcclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN0aWNreUhlYWRlcikuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gRE9NLmhlYWRlci5zaXRlLnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWhlYWRlci13cmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG1lbnUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuLW1lbnVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBET00uaGVhZGVyLnNpdGUuZGF0YXNldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidXAtZWZmZWN0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXIuc2l0ZT8uZGF0YXNldC5oZWlnaHQgPz8gNTQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0aWNrLWFueXRoaW5nLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGljay1hbnl0aGluZy1oZWFkZXJcIikub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlICYmXHJcbiAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50b3Itc2VjdGlvbi13cmFwXCIpPy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50b3Itc3RpY2t5XCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRvci1zZWN0aW9uLXdyYXBcIik/LmZpcnN0RWxlbWVudENoaWxkLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICAjZml4TXVsdGlNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZml4ZWRPZmZzZXQgPVxyXG4gICAgICAgICAgICBvZmZzZXQodGhpcy4jdGFyZ2V0RWxlbSkudG9wIC1cclxuICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgIHRoaXMuI2dldFRvcGJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQudG9GaXhlZCgpID09PSBmaXhlZE9mZnNldC50b0ZpeGVkKCkpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jZml4TXVsdGlNZW51KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChET00uaGVhZGVyLnNpdGU/Lm9mZnNldEhlaWdodCAtIDEgPiB0aGlzLiNnZXRTdGlja3lIZWFkZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCh0aGlzLiN0YXJnZXRFbGVtKS50b3AgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldEFkbWluQmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldFRvcGJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICBET00uaGVhZGVyLnNpdGU/Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uaHRtbC5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogd2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy4jbGFzdFNjcm9sbFRvcCA/IFwic21vb3RoXCIgOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuI2xhc3RTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxFZmZlY3Q7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHt9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI29uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgRE9NLnNjcm9sbC5zY3JvbGxUb3A/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICAgICAgRE9NLnNjcm9sbC5nb1RvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wU2xhc2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93U2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLnNjcm9sbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShET00uc2Nyb2xsLnNjcm9sbFRvcCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBmYWRlSW4oRE9NLnNjcm9sbC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgZmFkZU91dChET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uU2Nyb2xsVG9wQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBzY3JvbGxUb3AucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IERyb3BEb3duU2VhcmNoIGZyb20gXCIuL3NlYXJjaC9kcm9wLWRvd25cIjtcclxuaW1wb3J0IEhlYWRlclJlcGxhY2VTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2hlYWRlci1yZXBsYWNlXCI7XHJcbmltcG9ydCBNb2JpbGVTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC9tb2JpbGUtc2VhcmNoLWljb25cIjtcclxuaW1wb3J0IE92ZXJsYXlTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL292ZXJsYXlcIjtcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBtb2JpbGVPdmVybGF5SW5wdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd24gPSBuZXcgRHJvcERvd25TZWFyY2goKTtcclxuICAgICAgICB0aGlzLmhlYWRlclJlcGxhY2UgPSBuZXcgSGVhZGVyUmVwbGFjZVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG5ldyBPdmVybGF5U2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVTZWFyY2hJY29uID0gbmV3IE1vYmlsZVNlYXJjaEljb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0LmNsb3Nlc3QoXCJmb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSW5wdXRLZXl1cCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBmb3JtID0gaW5wdXQuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJjbGFzcyBTZWFyY2hCYXNlIHtcbiAgICBmb2N1cyA9IChmb3JtLCBpbnB1dENsYXNzKSA9PiB7XG4gICAgICAgIGxldCBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGZvcm0pLnRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxMDAwO1xuXG4gICAgICAgIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSAhIWZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPyBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uIDogNjAwO1xuXG4gICAgICAgIGlmIChmb3JtVHJhbnNpdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoaW5wdXRDbGFzcykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFzZTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgRHJvcERvd25TZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRG9jdW1lbnRDbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgdG9nZ2xlU2VhcmNoQnRuLCBmb3JtIH0gPSBET00uc2VhcmNoLmRyb3BEb3duO1xuXG4gICAgICAgIHRvZ2dsZVNlYXJjaEJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29uRG9jdW1lbnRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBDb2xsYXBzIHNlYXJjaCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLmZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LnBhcmVudE5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blNlYXJjaDtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgSGVhZGVyUmVwbGFjZVNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJoZWFkZXJfcmVwbGFjZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5tYWluLnN0eWxlLm1pbldpZHRoID0gXCIzNzBweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgZm9ybS5zdHlsZS5tYXhXaWR0aCA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24gPiB1bC5kcm9wZG93bi1tZW51XCIpPy5vZmZzZXRXaWR0aCArIDYwICsgXCJweFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERPTS5tZW51Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIlwiO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZT8uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubmF2Py5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjaGFzVG9wSGVhZGVyID0gKCkgPT4gRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJSZXBsYWNlU2VhcmNoO1xuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgTW9iaWxlU2VhcmNoSWNvbiBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgICNlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNlbGVtZW50cyA9IHtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtZHJvcGRvd25cIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb24tb3ZlcmxheVwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2hDbG9zZUljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXkgLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxuICAgICAgICAgICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3RvZ2dsZURyb3Bkb3duU2VhcmNoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrRG9jdW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaEljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvcGVuT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoQ2xvc2VJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jY2xvc2VPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI3RvZ2dsZURyb3Bkb3duU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFwiaW5wdXQuZmllbGRcIik7XG4gICAgfTtcblxuICAgICNvcGVuT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZUluKHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHRoaXMuZm9jdXModGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5tb2JpbGUtc2VhcmNoLW92ZXJsYXktaW5wdXRcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZU91dCh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbkNsaWNrRG9jdW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNpY29uLXNlYXJjaGZvcm0tZHJvcGRvd24uc2hvd1wiKSkge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVTZWFyY2hJY29uO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBPdmVybGF5U2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLm92ZXJsYXkudG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VCdG5DbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4oZm9ybSk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KGZvcm0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5U2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IHtcclxuICAgICNzZWxlY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdCA9IHNlbGVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICBcImFmdGVyZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3QgJHt0aGlzLiNzZWxlY3QuY2xhc3NMaXN0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtc2VsZWN0SW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLiNzZWxlY3Qub3B0aW9uc1t0aGlzLiNzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJoYXNDdXN0b21TZWxlY3RcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzdHlsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc3R5bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuaGVpZ2h0ID0gXCIzNHB4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmZvbnRTaXplID0gXCIxM3B4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmFwcGVhcmFuY2UgPSBcIm1lbnVsaXN0LWJ1dHRvblwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3QubmV4dFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Nb3VzZWVudGVyKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25Nb3VzZWxlYXZlKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLm9uQ2hhbmdlKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLXNlbGVjdEhvdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy4jb25Eb2N1bWVudFJlYWR5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Eb2N1bWVudFJlYWR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5zdHlsZS53aWR0aCA9IHNlbGVjdC5uZXh0U2libGluZy5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZS1tZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgQmxvZ01hc29ucnkgZnJvbSBcIi4vY29tcG9uZW50cy9ibG9nLW1hc29ucnlcIjtcclxuaW1wb3J0IFNjcm9sbFRvcCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC10b3BcIjtcclxuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC1lZmZlY3RcIjtcclxuaW1wb3J0IEVxdWFsSGVpZ2h0RWxlbWVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9lcXVhbC1oZWlnaHQtZWxlbWVudHNcIjtcclxuaW1wb3J0IE9XSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1pbmZpbml0ZS1zY3JvbGxcIjtcclxuaW1wb3J0IE9XU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvb3ctc2xpZGVyXCI7XHJcbmltcG9ydCBPV0xpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvb3ctbGlnaHRib3hcIjtcclxuXHJcbmNsYXNzIFRoZW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICB0aGlzLmJsb2dNYXNvbnJ5ID0gbmV3IEJsb2dNYXNvbnJ5KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBuZXcgU2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZmZlY3QgPSBuZXcgU2Nyb2xsRWZmZWN0KCk7XHJcbiAgICAgICAgdGhpcy5lcXVhbEhlaWdodEVsZW1lbnRzID0gbmV3IEVxdWFsSGVpZ2h0RWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLm93TGlnaHRib3ggPSBuZXcgT1dMaWdodGJveCgpO1xyXG4gICAgICAgIHRoaXMub3dTbGlkZXIgPSBuZXcgT1dTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm93SW5maW5pdGVTY3JvbGwgPSBuZXcgT1dJbmZpbml0ZVNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7XHJcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JTZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG4iLCJ2YXIgY2xvc2VzdCA9IHJlcXVpcmUoJy4vY2xvc2VzdCcpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG4iLCIvLyBidXR0b25cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0ZVNjcm9sbEJ1dHRvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jbGFzcyBJbmZpbml0ZVNjcm9sbEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKCBlbGVtZW50LCBpbmZTY3JvbGwgKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmluZlNjcm9sbCA9IGluZlNjcm9sbDtcbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAncmVxdWVzdCcsIHRoaXMuZGlzYWJsZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdsb2FkJywgdGhpcy5lbmFibGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnZXJyb3InLCB0aGlzLmhpZGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnbGFzdCcsIHRoaXMuaGlkZS5iaW5kKCB0aGlzICkgKTtcbiAgfVxuXG4gIG9uQ2xpY2soIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pbmZTY3JvbGwubG9hZE5leHRQYWdlKCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5maW5pdGVTY3JvbGwgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cy5idXR0b24gPSBudWxsO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuYnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGxldCBidXR0b25FbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuYnV0dG9uICk7XG4gIGlmICggYnV0dG9uRWxlbSApIHtcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBJbmZpbml0ZVNjcm9sbEJ1dHRvbiggYnV0dG9uRWxlbSwgdGhpcyApO1xuICB9XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LmJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuYnV0dG9uICkgdGhpcy5idXR0b24uZGVzdHJveSgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLkJ1dHRvbiA9IEluZmluaXRlU2Nyb2xsQnV0dG9uO1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gY29yZVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkluZmluaXRlU2Nyb2xsID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgdXRpbHMgKSB7XG5cbmxldCBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIEluZmluaXRlU2Nyb2xsIGludGFuY2VzXG5sZXQgaW5zdGFuY2VzID0ge307XG5cbmZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBsZXQgcXVlcnlFbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG5cbiAgaWYgKCAhcXVlcnlFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgSW5maW5pdGVTY3JvbGw6ICcgKyAoIHF1ZXJ5RWxlbSB8fCBlbGVtZW50ICkgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudCA9IHF1ZXJ5RWxlbTtcbiAgLy8gZG8gbm90IGluaXRpYWxpemUgdHdpY2Ugb24gc2FtZSBlbGVtZW50XG4gIGlmICggZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgKSB7XG4gICAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VzWyBlbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCBdO1xuICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0geyAuLi5JbmZpbml0ZVNjcm9sbC5kZWZhdWx0cyB9O1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxuLy8gZGVmYXVsdHNcbkluZmluaXRlU2Nyb2xsLmRlZmF1bHRzID0ge1xuICAvLyBwYXRoOiBudWxsLFxuICAvLyBoaWRlTmF2OiBudWxsLFxuICAvLyBkZWJ1ZzogZmFsc2UsXG59O1xuXG4vLyBjcmVhdGUgJiBkZXN0cm95IG1ldGhvZHNcbkluZmluaXRlU2Nyb2xsLmNyZWF0ZSA9IHt9O1xuSW5maW5pdGVTY3JvbGwuZGVzdHJveSA9IHt9O1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxuT2JqZWN0LmFzc2lnbiggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xubGV0IEdVSUQgPSAwO1xuXG5wcm90by5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3JlYXRlIGNvcmVcbiAgLy8gYWRkIGlkIGZvciBJbmZpbml0ZVNjcm9sbC5kYXRhXG4gIGxldCBpZCA9IHRoaXMuZ3VpZCA9ICsrR1VJRDtcbiAgdGhpcy5lbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCA9IGlkOyAvLyBleHBhbmRvXG4gIGluc3RhbmNlc1sgaWQgXSA9IHRoaXM7IC8vIGFzc29jaWF0ZSB2aWEgaWRcbiAgLy8gcHJvcGVydGllc1xuICB0aGlzLnBhZ2VJbmRleCA9IDE7IC8vIGRlZmF1bHQgdG8gZmlyc3QgcGFnZVxuICB0aGlzLmxvYWRDb3VudCA9IDA7XG4gIHRoaXMudXBkYXRlR2V0UGF0aCgpO1xuICAvLyBiYWlsIGlmIGdldFBhdGggbm90IHNldCwgb3IgcmV0dXJucyBmYWxzZXkgIzc3NlxuICBsZXQgaGFzUGF0aCA9IHRoaXMuZ2V0UGF0aCAmJiB0aGlzLmdldFBhdGgoKTtcbiAgaWYgKCAhaGFzUGF0aCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdEaXNhYmxpbmcgSW5maW5pdGVTY3JvbGwnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy51cGRhdGVHZXRBYnNvbHV0ZVBhdGgoKTtcbiAgdGhpcy5sb2coICdpbml0aWFsaXplZCcsIFsgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSBdICk7XG4gIHRoaXMuY2FsbE9uSW5pdCgpO1xuICAvLyBjcmVhdGUgZmVhdHVyZXNcbiAgZm9yICggbGV0IG1ldGhvZCBpbiBJbmZpbml0ZVNjcm9sbC5jcmVhdGUgKSB7XG4gICAgSW5maW5pdGVTY3JvbGwuY3JlYXRlWyBtZXRob2QgXS5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8vIGNhbGwgb25Jbml0IG9wdGlvbiwgdXNlZCBmb3IgYmluZGluZyBldmVudHMgb24gaW5pdFxucHJvdG8uY2FsbE9uSW5pdCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb25Jbml0ID0gdGhpcy5vcHRpb25zLm9uSW5pdDtcbiAgaWYgKCBvbkluaXQgKSB7XG4gICAgb25Jbml0LmNhbGwoIHRoaXMsIHRoaXMgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIHRoaXMubG9nKCB0eXBlLCBhcmdzICk7XG4gIGxldCBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG4gIC8vIHRyaWdnZXIgalF1ZXJ5IGV2ZW50XG4gIGlmICggIWpRdWVyeSB8fCAhdGhpcy4kZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbmFtZXNwYWNlIGpRdWVyeSBldmVudFxuICB0eXBlICs9ICcuaW5maW5pdGVTY3JvbGwnO1xuICBsZXQgJGV2ZW50ID0gdHlwZTtcbiAgaWYgKCBldmVudCApIHtcbiAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXAgKi9cbiAgICBsZXQgalFFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICBqUUV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICRldmVudCA9IGpRRXZlbnQ7XG4gIH1cbiAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbn07XG5cbmxldCBsb2dnZXJzID0ge1xuICBpbml0aWFsaXplZDogKCBjbGFzc05hbWUgKSA9PiBgb24gJHtjbGFzc05hbWV9YCxcbiAgcmVxdWVzdDogKCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIGxvYWQ6ICggcmVzcG9uc2UsIHBhdGggKSA9PiBgJHtyZXNwb25zZS50aXRsZSB8fCAnJ30uIFVSTDogJHtwYXRofWAsXG4gIGVycm9yOiAoIGVycm9yLCBwYXRoICkgPT4gYCR7ZXJyb3J9LiBVUkw6ICR7cGF0aH1gLFxuICBhcHBlbmQ6ICggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkgPT4gYCR7aXRlbXMubGVuZ3RofSBpdGVtcy4gVVJMOiAke3BhdGh9YCxcbiAgbGFzdDogKCByZXNwb25zZSwgcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBoaXN0b3J5OiAoIHRpdGxlLCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIHBhZ2VJbmRleDogZnVuY3Rpb24oIGluZGV4LCBvcmlnaW4gKSB7XG4gICAgcmV0dXJuIGBjdXJyZW50IHBhZ2UgZGV0ZXJtaW5lZCB0byBiZTogJHtpbmRleH0gZnJvbSAke29yaWdpbn1gO1xuICB9LFxufTtcblxuLy8gbG9nIGV2ZW50c1xucHJvdG8ubG9nID0gZnVuY3Rpb24oIHR5cGUsIGFyZ3MgKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5kZWJ1ZyApIHJldHVybjtcblxuICBsZXQgbWVzc2FnZSA9IGBbSW5maW5pdGVTY3JvbGxdICR7dHlwZX1gO1xuICBsZXQgbG9nZ2VyID0gbG9nZ2Vyc1sgdHlwZSBdO1xuICBpZiAoIGxvZ2dlciApIG1lc3NhZ2UgKz0gJy4gJyArIGxvZ2dlci5hcHBseSggdGhpcywgYXJncyApO1xuICBjb25zb2xlLmxvZyggbWVzc2FnZSApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyB1c2VkIGFtb3VuZyBmZWF0dXJlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVNZWFzdXJlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB0aGlzLnRvcCA9IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG59O1xuXG5wcm90by51cGRhdGVTY3JvbGxlciA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZWxlbWVudFNjcm9sbCA9IHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsO1xuICBpZiAoICFlbGVtZW50U2Nyb2xsICkge1xuICAgIC8vIGRlZmF1bHQsIHVzZSB3aW5kb3dcbiAgICB0aGlzLnNjcm9sbGVyID0gd2luZG93O1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiB0cnVlLCBzZXQgdG8gZWxlbWVudCwgb3RoZXJ3aXNlIHVzZSBvcHRpb25cbiAgdGhpcy5zY3JvbGxlciA9IGVsZW1lbnRTY3JvbGwgPT09IHRydWUgPyB0aGlzLmVsZW1lbnQgOlxuICAgIHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudFNjcm9sbCApO1xuICBpZiAoICF0aGlzLnNjcm9sbGVyICkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgZWxlbWVudFNjcm9sbDogJHtlbGVtZW50U2Nyb2xsfWApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwYWdlIHBhdGggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlR2V0UGF0aCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb3B0UGF0aCA9IHRoaXMub3B0aW9ucy5wYXRoO1xuICBpZiAoICFvcHRQYXRoICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEluZmluaXRlU2Nyb2xsIHBhdGggb3B0aW9uIHJlcXVpcmVkLiBTZXQgYXM6ICR7b3B0UGF0aH1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZnVuY3Rpb25cbiAgbGV0IHR5cGUgPSB0eXBlb2Ygb3B0UGF0aDtcbiAgaWYgKCB0eXBlID09ICdmdW5jdGlvbicgKSB7XG4gICAgdGhpcy5nZXRQYXRoID0gb3B0UGF0aDtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdGVtcGxhdGUgc3RyaW5nOiAnL3BhZ2VzL3t7I319Lmh0bWwnXG4gIGxldCB0ZW1wbGF0ZU1hdGNoID0gdHlwZSA9PSAnc3RyaW5nJyAmJiBvcHRQYXRoLm1hdGNoKCd7eyN9fScpO1xuICBpZiAoIHRlbXBsYXRlTWF0Y2ggKSB7XG4gICAgdGhpcy51cGRhdGVHZXRQYXRoVGVtcGxhdGUoIG9wdFBhdGggKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2VsZWN0b3I6ICcubmV4dC1wYWdlLXNlbGVjdG9yJ1xuICB0aGlzLnVwZGF0ZUdldFBhdGhTZWxlY3Rvciggb3B0UGF0aCApO1xufTtcblxucHJvdG8udXBkYXRlR2V0UGF0aFRlbXBsYXRlID0gZnVuY3Rpb24oIG9wdFBhdGggKSB7XG4gIC8vIHNldCBnZXRQYXRoIHdpdGggdGVtcGxhdGUgc3RyaW5nXG4gIHRoaXMuZ2V0UGF0aCA9ICgpID0+IHtcbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5wYWdlSW5kZXggKyAxO1xuICAgIHJldHVybiBvcHRQYXRoLnJlcGxhY2UoICd7eyN9fScsIG5leHRJbmRleCApO1xuICB9O1xuICAvLyBnZXQgcGFnZUluZGV4IGZyb20gbG9jYXRpb25cbiAgLy8gY29udmVydCBwYXRoIG9wdGlvbiBpbnRvIHJlZ2V4IHRvIGxvb2sgZm9yIHBhdHRlcm4gaW4gbG9jYXRpb25cbiAgLy8gZXNjYXBlIHF1ZXJ5ICg/KSBpbiB1cmwsIGFsbG93cyBmb3IgcGFyc2luZyBHRVQgcGFyYW1ldGVyc1xuICBsZXQgcmVnZXhTdHJpbmcgPSBvcHRQYXRoXG4gICAgLnJlcGxhY2UoIC8oXFxcXFxcP3xcXD8pLywgJ1xcXFw/JyApXG4gICAgLnJlcGxhY2UoICd7eyN9fScsICcoXFxcXGRcXFxcZD9cXFxcZD8pJyApO1xuICBsZXQgdGVtcGxhdGVSZSA9IG5ldyBSZWdFeHAoIHJlZ2V4U3RyaW5nICk7XG4gIGxldCBtYXRjaCA9IGxvY2F0aW9uLmhyZWYubWF0Y2goIHRlbXBsYXRlUmUgKTtcblxuICBpZiAoIG1hdGNoICkge1xuICAgIHRoaXMucGFnZUluZGV4ID0gcGFyc2VJbnQoIG1hdGNoWzFdLCAxMCApO1xuICAgIHRoaXMubG9nKCAncGFnZUluZGV4JywgWyB0aGlzLnBhZ2VJbmRleCwgJ3RlbXBsYXRlIHN0cmluZycgXSApO1xuICB9XG59O1xuXG5sZXQgcGF0aFJlZ2V4ZXMgPSBbXG4gIC8vIFdvcmRQcmVzcyAmIFR1bWJsciAtIGV4YW1wbGUuY29tL3BhZ2UvMlxuICAvLyBKZWt5bGwgLSBleGFtcGxlLmNvbS9wYWdlMlxuICAvXiguKj9cXC8/cGFnZVxcLz8pKFxcZFxcZD9cXGQ/KSguKj8kKS8sXG4gIC8vIERydXBhbCAtIGV4YW1wbGUuY29tLz9wYWdlPTFcbiAgL14oLio/XFwvP1xcP3BhZ2U9KShcXGRcXGQ/XFxkPykoLio/JCkvLFxuICAvLyBjYXRjaCBhbGwsIGxhc3Qgb2NjdXJlbmNlIG9mIGEgbnVtYmVyXG4gIC8oLio/KShcXGRcXGQ/XFxkPykoPyEuKlxcZCkoLio/JCkvLFxuXTtcblxuLy8gdHJ5IG1hdGNoaW5nIGhyZWYgdG8gcGF0aFJlZ2V4ZXMgcGF0dGVybnNcbmxldCBnZXRQYXRoUGFydHMgPSBJbmZpbml0ZVNjcm9sbC5nZXRQYXRoUGFydHMgPSBmdW5jdGlvbiggaHJlZiApIHtcbiAgaWYgKCAhaHJlZiApIHJldHVybjtcbiAgZm9yICggbGV0IHJlZ2V4IG9mIHBhdGhSZWdleGVzICkge1xuICAgIGxldCBtYXRjaCA9IGhyZWYubWF0Y2goIHJlZ2V4ICk7XG4gICAgaWYgKCBtYXRjaCApIHtcbiAgICAgIGxldCBbICwgYmVnaW4sIGluZGV4LCBlbmQgXSA9IG1hdGNoO1xuICAgICAgcmV0dXJuIHsgYmVnaW4sIGluZGV4LCBlbmQgfTtcbiAgICB9XG4gIH1cbn07XG5cbnByb3RvLnVwZGF0ZUdldFBhdGhTZWxlY3RvciA9IGZ1bmN0aW9uKCBvcHRQYXRoICkge1xuICAvLyBwYXJzZSBocmVmIG9mIGxpbms6ICcubmV4dC1wYWdlLWxpbmsnXG4gIGxldCBocmVmRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wdFBhdGggKTtcbiAgaWYgKCAhaHJlZkVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvcihgQmFkIEluZmluaXRlU2Nyb2xsIHBhdGggb3B0aW9uLiBOZXh0IGxpbmsgbm90IGZvdW5kOiAke29wdFBhdGh9YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGhyZWYgPSBocmVmRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgbGV0IHBhdGhQYXJ0cyA9IGdldFBhdGhQYXJ0cyggaHJlZiApO1xuICBpZiAoICFwYXRoUGFydHMgKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW5maW5pdGVTY3JvbGwgdW5hYmxlIHRvIHBhcnNlIG5leHQgbGluayBocmVmOiAke2hyZWZ9YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgYmVnaW4sIGluZGV4LCBlbmQgfSA9IHBhdGhQYXJ0cztcbiAgdGhpcy5pc1BhdGhTZWxlY3RvciA9IHRydWU7IC8vIGZsYWcgZm9yIGNoZWNrTGFzdFBhZ2UoKVxuICB0aGlzLmdldFBhdGggPSAoKSA9PiBiZWdpbiArICggdGhpcy5wYWdlSW5kZXggKyAxICkgKyBlbmQ7XG4gIC8vIGdldCBwYWdlSW5kZXggZnJvbSBocmVmXG4gIHRoaXMucGFnZUluZGV4ID0gcGFyc2VJbnQoIGluZGV4LCAxMCApIC0gMTtcbiAgdGhpcy5sb2coICdwYWdlSW5kZXgnLCBbIHRoaXMucGFnZUluZGV4LCAnbmV4dCBsaW5rJyBdICk7XG59O1xuXG5wcm90by51cGRhdGVHZXRBYnNvbHV0ZVBhdGggPSBmdW5jdGlvbigpIHtcbiAgbGV0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgLy8gcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggaHR0cCBvciAvXG4gIGxldCBpc0Fic29sdXRlID0gcGF0aC5tYXRjaCggL15odHRwLyApIHx8IHBhdGgubWF0Y2goIC9eXFwvLyApO1xuICBpZiAoIGlzQWJzb2x1dGUgKSB7XG4gICAgdGhpcy5nZXRBYnNvbHV0ZVBhdGggPSB0aGlzLmdldFBhdGg7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgcGF0aG5hbWUgfSA9IGxvY2F0aW9uO1xuICAvLyBxdWVyeSBwYXJhbWV0ZXIgIzgyOS4gZXhhbXBsZS5jb20vP3BnPTJcbiAgbGV0IGlzUXVlcnkgPSBwYXRoLm1hdGNoKCAvXlxcPy8gKTtcbiAgLy8gL2Zvby9iYXIvaW5kZXguaHRtbCA9PiAvZm9vL2JhclxuICBsZXQgZGlyZWN0b3J5ID0gcGF0aG5hbWUuc3Vic3RyaW5nKCAwLCBwYXRobmFtZS5sYXN0SW5kZXhPZignLycpICk7XG4gIGxldCBwYXRoU3RhcnQgPSBpc1F1ZXJ5ID8gcGF0aG5hbWUgOiBkaXJlY3RvcnkgKyAnLyc7XG5cbiAgdGhpcy5nZXRBYnNvbHV0ZVBhdGggPSAoKSA9PiBwYXRoU3RhcnQgKyB0aGlzLmdldFBhdGgoKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBoaWRlIG5hdmlnYXRpb25cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5oaWRlTmF2ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBuYXYgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5oaWRlTmF2ICk7XG4gIGlmICggIW5hdiApIHJldHVybjtcblxuICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGhpcy5uYXYgPSBuYXY7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LmhpZGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm5hdiApIHRoaXMubmF2LnN0eWxlLmRpc3BsYXkgPSAnJztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlc3Ryb3kgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFsbE9mZigpOyAvLyByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAvLyBjYWxsIGRlc3Ryb3kgbWV0aG9kc1xuICBmb3IgKCBsZXQgbWV0aG9kIGluIEluZmluaXRlU2Nyb2xsLmRlc3Ryb3kgKSB7XG4gICAgSW5maW5pdGVTY3JvbGwuZGVzdHJveVsgbWV0aG9kIF0uY2FsbCggdGhpcyApO1xuICB9XG5cbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIHRoaXMuZ3VpZCBdO1xuICAvLyByZW1vdmUgalF1ZXJ5IGRhdGEuICM4MDdcbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCAnaW5maW5pdGVTY3JvbGwnICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBodHRwczovL3JlbXlzaGFycC5jb20vMjAxMC8wNy8yMS90aHJvdHRsaW5nLWZ1bmN0aW9uLWNhbGxzXG5JbmZpbml0ZVNjcm9sbC50aHJvdHRsZSA9IGZ1bmN0aW9uKCBmbiwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMjAwO1xuICBsZXQgbGFzdCwgdGltZW91dDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgfTtcbiAgICBpZiAoIGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaG9sZCApIHtcbiAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoIHRyaWdnZXIsIHRocmVzaG9sZCApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyKCk7XG4gICAgfVxuICB9O1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIGxldCBpZCA9IGVsZW0gJiYgZWxlbS5pbmZpbml0ZVNjcm9sbEdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG4vLyBzZXQgaW50ZXJuYWwgalF1ZXJ5LCBmb3IgV2VicGFjayArIGpRdWVyeSB2M1xuSW5maW5pdGVTY3JvbGwuc2V0SlF1ZXJ5ID0gZnVuY3Rpb24oIGpxcnkgKSB7XG4gIGpRdWVyeSA9IGpxcnk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG51dGlscy5odG1sSW5pdCggSW5maW5pdGVTY3JvbGwsICdpbmZpbml0ZS1zY3JvbGwnICk7XG5cbi8vIGFkZCBub29wIF9pbml0IG1ldGhvZCBmb3IgalF1ZXJ5IEJyaWRnZXQuICM3NjhcbnByb3RvLl9pbml0ID0gZnVuY3Rpb24oKSB7fTtcblxubGV0IHsgalF1ZXJ5QnJpZGdldCB9ID0gd2luZG93O1xuaWYgKCBqUXVlcnkgJiYgalF1ZXJ5QnJpZGdldCApIHtcbiAgalF1ZXJ5QnJpZGdldCggJ2luZmluaXRlU2Nyb2xsJywgSW5maW5pdGVTY3JvbGwsIGpRdWVyeSApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIGhpc3RvcnlcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIGhpc3Rvcnk6ICdyZXBsYWNlJyxcbiAgLy8gaGlzdG9yeVRpdGxlOiBmYWxzZSxcbn0gKTtcblxubGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbi8vIC0tLS0tIGNyZWF0ZS9kZXN0cm95IC0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5oaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5oaXN0b3J5ICkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGZvciBzYW1lIG9yaWdpblxuICBsaW5rLmhyZWYgPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICAvLyBNUyBFZGdlIGRvZXMgbm90IGhhdmUgb3JpZ2luIG9uIGxpbmtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTIyMzY0OTMvXG4gIGxldCBsaW5rT3JpZ2luID0gbGluay5vcmlnaW4gfHwgbGluay5wcm90b2NvbCArICcvLycgKyBsaW5rLmhvc3Q7XG4gIGxldCBpc1NhbWVPcmlnaW4gPSBsaW5rT3JpZ2luID09IGxvY2F0aW9uLm9yaWdpbjtcbiAgaWYgKCAhaXNTYW1lT3JpZ2luICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdbSW5maW5pdGVTY3JvbGxdIGNhbm5vdCBzZXQgaGlzdG9yeSB3aXRoIGRpZmZlcmVudCBvcmlnaW46ICcgK1xuICAgICAgYCR7bGluay5vcmlnaW59IG9uICR7bG9jYXRpb24ub3JpZ2lufSAuIEhpc3RvcnkgYmVoYXZpb3IgZGlzYWJsZWQuYCApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHR3byB3YXlzIHRvIGhhbmRsZSBjaGFuZ2luZyBoaXN0b3J5XG4gIGlmICggdGhpcy5vcHRpb25zLmFwcGVuZCApIHtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlBcHBlbmQoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlQYWdlTG9hZCgpO1xuICB9XG59O1xuXG5wcm90by5jcmVhdGVIaXN0b3J5QXBwZW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgLy8gYXJyYXkgb2Ygc2Nyb2xsIHBvc2l0aW9ucyBvZiBhcHBlbmRlZCBwYWdlc1xuICB0aGlzLnNjcm9sbFBhZ2VzID0gW1xuICAgIC8vIGZpcnN0IHBhZ2VcbiAgICB7XG4gICAgICB0b3A6IDAsXG4gICAgICBwYXRoOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLFxuICAgIH0sXG4gIF07XG4gIHRoaXMuc2Nyb2xsUGFnZSA9IHRoaXMuc2Nyb2xsUGFnZXNbMF07XG4gIC8vIGV2ZW50c1xuICB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyID0gdGhpcy5vblNjcm9sbEhpc3RvcnkuYmluZCggdGhpcyApO1xuICB0aGlzLnVubG9hZEhhbmRsZXIgPSB0aGlzLm9uVW5sb2FkLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5zY3JvbGxlci5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciApO1xuICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5vbkFwcGVuZEhpc3RvcnkgKTtcbiAgdGhpcy5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyggdHJ1ZSApO1xufTtcblxucHJvdG8uYmluZEhpc3RvcnlBcHBlbmRFdmVudHMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICBsZXQgYWRkUmVtb3ZlID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICB0aGlzLnNjcm9sbGVyWyBhZGRSZW1vdmUgXSggJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgKTtcbiAgd2luZG93WyBhZGRSZW1vdmUgXSggJ3VubG9hZCcsIHRoaXMudW5sb2FkSGFuZGxlciApO1xufTtcblxucHJvdG8uY3JlYXRlSGlzdG9yeVBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdsb2FkJywgdGhpcy5vblBhZ2VMb2FkSGlzdG9yeSApO1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5oaXN0b3J5ID1cbnByb3RvLmRlc3Ryb3lIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBpc0hpc3RvcnlBcHBlbmQgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeSAmJiB0aGlzLm9wdGlvbnMuYXBwZW5kO1xuICBpZiAoIGlzSGlzdG9yeUFwcGVuZCApIHtcbiAgICB0aGlzLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzKCBmYWxzZSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBhcHBlbmQgaGlzdG9yeSAtLS0tLSAvL1xuXG5wcm90by5vbkFwcGVuZEhpc3RvcnkgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkge1xuICAvLyBkbyBub3QgcHJvY2VlZCBpZiBubyBpdGVtcy4gIzc3OVxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXG4gIGxldCBmaXJzdEl0ZW0gPSBpdGVtc1swXTtcbiAgbGV0IGVsZW1TY3JvbGxZID0gdGhpcy5nZXRFbGVtZW50U2Nyb2xsWSggZmlyc3RJdGVtICk7XG4gIC8vIHJlc29sdmUgcGF0aFxuICBsaW5rLmhyZWYgPSBwYXRoO1xuICAvLyBhZGQgcGFnZSBkYXRhIHRvIGhhc2hcbiAgdGhpcy5zY3JvbGxQYWdlcy5wdXNoKHtcbiAgICB0b3A6IGVsZW1TY3JvbGxZLFxuICAgIHBhdGg6IGxpbmsuaHJlZixcbiAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0RWxlbWVudFNjcm9sbFkgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICByZXR1cm4gZWxlbS5vZmZzZXRUb3AgLSB0aGlzLnRvcDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG4gIH1cbn07XG5cbnByb3RvLm9uU2Nyb2xsSGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjeWNsZSB0aHJvdWdoIHBvc2l0aW9ucywgZmluZCBiaWdnZXN0IHdpdGhvdXQgZ29pbmcgb3ZlclxuICBsZXQgc2Nyb2xsUGFnZSA9IHRoaXMuZ2V0Q2xvc2VzdFNjcm9sbFBhZ2UoKTtcbiAgLy8gc2V0IGhpc3RvcnkgaWYgY2hhbmdlZFxuICBpZiAoIHNjcm9sbFBhZ2UgIT0gdGhpcy5zY3JvbGxQYWdlICkge1xuICAgIHRoaXMuc2Nyb2xsUGFnZSA9IHNjcm9sbFBhZ2U7XG4gICAgdGhpcy5zZXRIaXN0b3J5KCBzY3JvbGxQYWdlLnRpdGxlLCBzY3JvbGxQYWdlLnBhdGggKTtcbiAgfVxufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIEluZmluaXRlU2Nyb2xsLCAnb25TY3JvbGxIaXN0b3J5JywgMTUwICk7XG5cbnByb3RvLmdldENsb3Nlc3RTY3JvbGxQYWdlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzY3JvbGxWaWV3WTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICBzY3JvbGxWaWV3WSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQgLyAyO1xuICB9IGVsc2Uge1xuICAgIHNjcm9sbFZpZXdZID0gd2luZG93LnNjcm9sbFkgKyB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gIH1cblxuICBsZXQgc2Nyb2xsUGFnZTtcbiAgZm9yICggbGV0IHBhZ2Ugb2YgdGhpcy5zY3JvbGxQYWdlcyApIHtcbiAgICBpZiAoIHBhZ2UudG9wID49IHNjcm9sbFZpZXdZICkgYnJlYWs7XG5cbiAgICBzY3JvbGxQYWdlID0gcGFnZTtcbiAgfVxuICByZXR1cm4gc2Nyb2xsUGFnZTtcbn07XG5cbnByb3RvLnNldEhpc3RvcnkgPSBmdW5jdGlvbiggdGl0bGUsIHBhdGggKSB7XG4gIGxldCBvcHRIaXN0b3J5ID0gdGhpcy5vcHRpb25zLmhpc3Rvcnk7XG4gIGxldCBoaXN0b3J5TWV0aG9kID0gb3B0SGlzdG9yeSAmJiBoaXN0b3J5WyBvcHRIaXN0b3J5ICsgJ1N0YXRlJyBdO1xuICBpZiAoICFoaXN0b3J5TWV0aG9kICkgcmV0dXJuO1xuXG4gIGhpc3RvcnlbIG9wdEhpc3RvcnkgKyAnU3RhdGUnIF0oIG51bGwsIHRpdGxlLCBwYXRoICk7XG4gIGlmICggdGhpcy5vcHRpb25zLmhpc3RvcnlUaXRsZSApIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2hpc3RvcnknLCBudWxsLCBbIHRpdGxlLCBwYXRoIF0gKTtcbn07XG5cbi8vIHNjcm9sbCB0byB0b3AgdG8gcHJldmVudCBpbml0aWFsIHNjcm9sbC1yZXNldCBhZnRlciBwYWdlIHJlZnJlc2hcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYzMzkxNS8xODIxODNcbnByb3RvLm9uVW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zY3JvbGxQYWdlLnRvcCA9PT0gMCApIHJldHVybjtcblxuICAvLyBjYWxjdWxhdGUgd2hlcmUgc2Nyb2xsIHBvc2l0aW9uIHdvdWxkIGJlIG9uIHJlZnJlc2hcbiAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSAtIHRoaXMuc2Nyb2xsUGFnZS50b3AgKyB0aGlzLnRvcDtcbiAgLy8gZGlzYWJsZSBzY3JvbGwgZXZlbnQgYmVmb3JlIHNldHRpbmcgc2Nyb2xsICM2NzlcbiAgdGhpcy5kZXN0cm95SGlzdG9yeSgpO1xuICBzY3JvbGxUbyggMCwgc2Nyb2xsWSApO1xufTtcblxuLy8gLS0tLS0gbG9hZCBoaXN0b3J5IC0tLS0tIC8vXG5cbi8vIHVwZGF0ZSBVUkxcbnByb3RvLm9uUGFnZUxvYWRIaXN0b3J5ID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoICkge1xuICB0aGlzLnNldEhpc3RvcnkoIHJlc3BvbnNlLnRpdGxlLCBwYXRoICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8qIVxuICogSW5maW5pdGUgU2Nyb2xsIHY0LjAuMVxuICogQXV0b21hdGljYWxseSBhZGQgbmV4dCBwYWdlXG4gKlxuICogTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxuICogb3IgSW5maW5pdGUgU2Nyb2xsIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwczovL2luZmluaXRlLXNjcm9sbC5jb21cbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9wYWdlLWxvYWQnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9zY3JvbGwtd2F0Y2gnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9oaXN0b3J5JyksXG4gICAgICAgIHJlcXVpcmUoJy4vYnV0dG9uJyksXG4gICAgICAgIHJlcXVpcmUoJy4vc3RhdHVzJyksXG4gICAgKTtcbiAgfVxuXG59ICkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggSW5maW5pdGVTY3JvbGwgKSB7XG4gIHJldHVybiBJbmZpbml0ZVNjcm9sbDtcbn0gKTtcbiIsIi8vIHBhZ2UtbG9hZFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICAvLyBhcHBlbmQ6IGZhbHNlLFxuICBsb2FkT25TY3JvbGw6IHRydWUsXG4gIGNoZWNrTGFzdFBhZ2U6IHRydWUsXG4gIHJlc3BvbnNlQm9keTogJ3RleHQnLFxuICBkb21QYXJzZVJlc3BvbnNlOiB0cnVlLFxuICAvLyBwcmVmaWxsOiBmYWxzZSxcbiAgLy8gb3V0bGF5ZXI6IG51bGwsXG59ICk7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5wYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNhbkxvYWQgPSB0cnVlO1xuICB0aGlzLm9uKCAnc2Nyb2xsVGhyZXNob2xkJywgdGhpcy5vblNjcm9sbFRocmVzaG9sZExvYWQgKTtcbiAgdGhpcy5vbiggJ2xvYWQnLCB0aGlzLmNoZWNrTGFzdFBhZ2UgKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMub3V0bGF5ZXIgKSB7XG4gICAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMub25BcHBlbmRPdXRsYXllciApO1xuICB9XG59O1xuXG5wcm90by5vblNjcm9sbFRocmVzaG9sZExvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMubG9hZE9uU2Nyb2xsICkgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcbn07XG5cbmxldCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbnByb3RvLmxvYWROZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNMb2FkaW5nIHx8ICF0aGlzLmNhbkxvYWQgKSByZXR1cm47XG5cbiAgbGV0IHsgcmVzcG9uc2VCb2R5LCBkb21QYXJzZVJlc3BvbnNlLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcbiAgbGV0IHBhdGggPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIGlmICggdHlwZW9mIGZldGNoT3B0aW9ucyA9PSAnZnVuY3Rpb24nICkgZmV0Y2hPcHRpb25zID0gZmV0Y2hPcHRpb25zKCk7XG5cbiAgbGV0IGZldGNoUHJvbWlzZSA9IGZldGNoKCBwYXRoLCBmZXRjaE9wdGlvbnMgKVxuICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgaWYgKCAhcmVzcG9uc2Uub2sgKSB7XG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvciggcmVzcG9uc2Uuc3RhdHVzVGV4dCApO1xuICAgICAgICB0aGlzLm9uUGFnZUVycm9yKCBlcnJvciwgcGF0aCwgcmVzcG9uc2UgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2UgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlWyByZXNwb25zZUJvZHkgXSgpLnRoZW4oICggYm9keSApID0+IHtcbiAgICAgICAgbGV0IGNhbkRvbVBhcnNlID0gcmVzcG9uc2VCb2R5ID09ICd0ZXh0JyAmJiBkb21QYXJzZVJlc3BvbnNlO1xuICAgICAgICBpZiAoIGNhbkRvbVBhcnNlICkge1xuICAgICAgICAgIGJvZHkgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKCBib2R5LCAndGV4dC9odG1sJyApO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDIwNCApIHtcbiAgICAgICAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgICAgICAgIHJldHVybiB7IGJvZHksIHJlc3BvbnNlIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25QYWdlTG9hZCggYm9keSwgcGF0aCwgcmVzcG9uc2UgKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0gKVxuICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcbiAgICAgIHRoaXMub25QYWdlRXJyb3IoIGVycm9yLCBwYXRoICk7XG4gICAgfSApO1xuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3JlcXVlc3QnLCBudWxsLCBbIHBhdGgsIGZldGNoUHJvbWlzZSBdICk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZTtcbn07XG5cbnByb3RvLm9uUGFnZUxvYWQgPSBmdW5jdGlvbiggYm9keSwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIC8vIGRvbmUgbG9hZGluZyBpZiBub3QgYXBwZW5kaW5nXG4gIGlmICggIXRoaXMub3B0aW9ucy5hcHBlbmQgKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBhZ2VJbmRleCsrO1xuICB0aGlzLmxvYWRDb3VudCsrO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdsb2FkJywgbnVsbCwgWyBib2R5LCBwYXRoLCByZXNwb25zZSBdICk7XG4gIHJldHVybiB0aGlzLmFwcGVuZE5leHRQYWdlKCBib2R5LCBwYXRoLCByZXNwb25zZSApO1xufTtcblxucHJvdG8uYXBwZW5kTmV4dFBhZ2UgPSBmdW5jdGlvbiggYm9keSwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIGxldCB7IGFwcGVuZCwgcmVzcG9uc2VCb2R5LCBkb21QYXJzZVJlc3BvbnNlIH0gPSB0aGlzLm9wdGlvbnM7XG4gIC8vIGRvIG5vdCBhcHBlbmQganNvblxuICBsZXQgaXNEb2N1bWVudCA9IHJlc3BvbnNlQm9keSA9PSAndGV4dCcgJiYgZG9tUGFyc2VSZXNwb25zZTtcbiAgaWYgKCAhaXNEb2N1bWVudCB8fCAhYXBwZW5kICkgcmV0dXJuIHsgYm9keSwgcmVzcG9uc2UgfTtcblxuICBsZXQgaXRlbXMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoIGFwcGVuZCApO1xuICBsZXQgcHJvbWlzZVZhbHVlID0geyBib2R5LCByZXNwb25zZSwgaXRlbXMgfTtcbiAgLy8gbGFzdCBwYWdlIGhpdCBpZiBubyBpdGVtcy4gIzg0MFxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgcmV0dXJuIHByb21pc2VWYWx1ZTtcbiAgfVxuXG4gIGxldCBmcmFnbWVudCA9IGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICk7XG4gIGxldCBhcHBlbmRSZWFkeSA9ICgpID0+IHtcbiAgICB0aGlzLmFwcGVuZEl0ZW1zKCBpdGVtcywgZnJhZ21lbnQgKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2FwcGVuZCcsIG51bGwsIFsgYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlIF0gKTtcbiAgICByZXR1cm4gcHJvbWlzZVZhbHVlO1xuICB9O1xuXG4gIC8vIFRPRE8gYWRkIGhvb2sgZm9yIG9wdGlvbiB0byB0cmlnZ2VyIGFwcGVuZFJlYWR5XG4gIGlmICggdGhpcy5vcHRpb25zLm91dGxheWVyICkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZE91dGxheWVySXRlbXMoIGZyYWdtZW50LCBhcHBlbmRSZWFkeSApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcHBlbmRSZWFkeSgpO1xuICB9XG59O1xuXG5wcm90by5hcHBlbmRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgZnJhZ21lbnQgKSB7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSByZXR1cm47XG5cbiAgLy8gZ2V0IGZyYWdtZW50IGlmIG5vdCBwcm92aWRlZFxuICBmcmFnbWVudCA9IGZyYWdtZW50IHx8IGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICk7XG4gIHJlZnJlc2hTY3JpcHRzKCBmcmFnbWVudCApO1xuICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG59O1xuXG5mdW5jdGlvbiBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApIHtcbiAgLy8gYWRkIGl0ZW1zIHRvIGZyYWdtZW50XG4gIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgaWYgKCBpdGVtcyApIGZyYWdtZW50LmFwcGVuZCggLi4uaXRlbXMgKTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyByZXBsYWNlIDxzY3JpcHQ+cyB3aXRoIGNvcGllcyBzbyB0aGV5IGxvYWRcbi8vIDxzY3JpcHQ+cyBhZGRlZCBieSBJbmZpbml0ZVNjcm9sbCB3aWxsIG5vdCBsb2FkXG4vLyBzaW1pbGFyIHRvIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYxMDk5NVxuZnVuY3Rpb24gcmVmcmVzaFNjcmlwdHMoIGZyYWdtZW50ICkge1xuICBsZXQgc2NyaXB0cyA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICBmb3IgKCBsZXQgc2NyaXB0IG9mIHNjcmlwdHMgKSB7XG4gICAgbGV0IGZyZXNoU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgLy8gY29weSBhdHRyaWJ1dGVzXG4gICAgbGV0IGF0dHJzID0gc2NyaXB0LmF0dHJpYnV0ZXM7XG4gICAgZm9yICggbGV0IGF0dHIgb2YgYXR0cnMgKSB7XG4gICAgICBmcmVzaFNjcmlwdC5zZXRBdHRyaWJ1dGUoIGF0dHIubmFtZSwgYXR0ci52YWx1ZSApO1xuICAgIH1cbiAgICAvLyBjb3B5IGlubmVyIHNjcmlwdCBjb2RlLiAjNzE4LCAjNzgyXG4gICAgZnJlc2hTY3JpcHQuaW5uZXJIVE1MID0gc2NyaXB0LmlubmVySFRNTDtcbiAgICBzY3JpcHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoIGZyZXNoU2NyaXB0LCBzY3JpcHQgKTtcbiAgfVxufVxuXG4vLyAtLS0tLSBvdXRsYXllciAtLS0tLSAvL1xuXG5wcm90by5hcHBlbmRPdXRsYXllckl0ZW1zID0gZnVuY3Rpb24oIGZyYWdtZW50LCBhcHBlbmRSZWFkeSApIHtcbiAgbGV0IGltYWdlc0xvYWRlZCA9IEluZmluaXRlU2Nyb2xsLmltYWdlc0xvYWRlZCB8fCB3aW5kb3cuaW1hZ2VzTG9hZGVkO1xuICBpZiAoICFpbWFnZXNMb2FkZWQgKSB7XG4gICAgY29uc29sZS5lcnJvcignW0luZmluaXRlU2Nyb2xsXSBpbWFnZXNMb2FkZWQgcmVxdWlyZWQgZm9yIG91dGxheWVyIG9wdGlvbicpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFwcGVuZCBvbmNlIGltYWdlcyBsb2FkZWRcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiggcmVzb2x2ZSApIHtcbiAgICBpbWFnZXNMb2FkZWQoIGZyYWdtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBib2R5UmVzcG9uc2UgPSBhcHBlbmRSZWFkeSgpO1xuICAgICAgcmVzb2x2ZSggYm9keVJlc3BvbnNlICk7XG4gICAgfSApO1xuICB9ICk7XG59O1xuXG5wcm90by5vbkFwcGVuZE91dGxheWVyID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApIHtcbiAgdGhpcy5vcHRpb25zLm91dGxheWVyLmFwcGVuZGVkKCBpdGVtcyApO1xufTtcblxuLy8gLS0tLS0gY2hlY2tMYXN0UGFnZSAtLS0tLSAvL1xuXG4vLyBjaGVjayByZXNwb25zZSBmb3IgbmV4dCBlbGVtZW50XG5wcm90by5jaGVja0xhc3RQYWdlID0gZnVuY3Rpb24oIGJvZHksIHBhdGggKSB7XG4gIGxldCB7IGNoZWNrTGFzdFBhZ2UsIHBhdGg6IHBhdGhPcHQgfSA9IHRoaXMub3B0aW9ucztcbiAgaWYgKCAhY2hlY2tMYXN0UGFnZSApIHJldHVybjtcblxuICAvLyBpZiBwYXRoIGlzIGZ1bmN0aW9uLCBjaGVjayBpZiBuZXh0IHBhdGggaXMgdHJ1dGh5XG4gIGlmICggdHlwZW9mIHBhdGhPcHQgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBsZXQgbmV4dFBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICBpZiAoICFuZXh0UGF0aCApIHtcbiAgICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIC8vIGdldCBzZWxlY3RvciBmcm9tIGNoZWNrTGFzdFBhZ2Ugb3IgcGF0aCBvcHRpb25cbiAgbGV0IHNlbGVjdG9yO1xuICBpZiAoIHR5cGVvZiBjaGVja0xhc3RQYWdlID09ICdzdHJpbmcnICkge1xuICAgIHNlbGVjdG9yID0gY2hlY2tMYXN0UGFnZTtcbiAgfSBlbHNlIGlmICggdGhpcy5pc1BhdGhTZWxlY3RvciApIHtcbiAgICAvLyBwYXRoIG9wdGlvbiBpcyBzZWxlY3RvciBzdHJpbmdcbiAgICBzZWxlY3RvciA9IHBhdGhPcHQ7XG4gIH1cbiAgLy8gY2hlY2sgbGFzdCBwYWdlIGZvciBzZWxlY3RvclxuICAvLyBiYWlsIGlmIG5vIHNlbGVjdG9yIG9yIG5vdCBkb2N1bWVudCByZXNwb25zZVxuICBpZiAoICFzZWxlY3RvciB8fCAhYm9keS5xdWVyeVNlbGVjdG9yICkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGlmIHJlc3BvbnNlIGhhcyBzZWxlY3RvclxuICBsZXQgbmV4dEVsZW0gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICk7XG4gIGlmICggIW5leHRFbGVtICkgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbn07XG5cbnByb3RvLmxhc3RQYWdlUmVhY2hlZCA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoICkge1xuICB0aGlzLmNhbkxvYWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnbGFzdCcsIG51bGwsIFsgYm9keSwgcGF0aCBdICk7XG59O1xuXG4vLyAtLS0tLSBlcnJvciAtLS0tLSAvL1xuXG5wcm90by5vblBhZ2VFcnJvciA9IGZ1bmN0aW9uKCBlcnJvciwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIHRoaXMuY2FuTG9hZCA9IGZhbHNlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdlcnJvcicsIG51bGwsIFsgZXJyb3IsIHBhdGgsIHJlc3BvbnNlIF0gKTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJlZmlsbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUucHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucHJlZmlsbCApIHJldHVybjtcblxuICBsZXQgYXBwZW5kID0gdGhpcy5vcHRpb25zLmFwcGVuZDtcbiAgaWYgKCAhYXBwZW5kICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYGFwcGVuZCBvcHRpb24gcmVxdWlyZWQgZm9yIHByZWZpbGwuIFNldCBhcyA6JHthcHBlbmR9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgdGhpcy5pc1ByZWZpbGxpbmcgPSB0cnVlO1xuICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5wcmVmaWxsICk7XG4gIHRoaXMub25jZSggJ2Vycm9yJywgdGhpcy5zdG9wUHJlZmlsbCApO1xuICB0aGlzLm9uY2UoICdsYXN0JywgdGhpcy5zdG9wUHJlZmlsbCApO1xuICB0aGlzLnByZWZpbGwoKTtcbn07XG5cbnByb3RvLnByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGRpc3RhbmNlID0gdGhpcy5nZXRQcmVmaWxsRGlzdGFuY2UoKTtcbiAgdGhpcy5pc1ByZWZpbGxpbmcgPSBkaXN0YW5jZSA+PSAwO1xuICBpZiAoIHRoaXMuaXNQcmVmaWxsaW5nICkge1xuICAgIHRoaXMubG9nKCdwcmVmaWxsJyk7XG4gICAgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0b3BQcmVmaWxsKCk7XG4gIH1cbn07XG5cbnByb3RvLmdldFByZWZpbGxEaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBlbGVtZW50IHNjcm9sbFxuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodCAtIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG4gIC8vIHdpbmRvd1xuICByZXR1cm4gdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufTtcblxucHJvdG8uc3RvcFByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5sb2coJ3N0b3BQcmVmaWxsJyk7XG4gIHRoaXMub2ZmKCAnYXBwZW5kJywgdGhpcy5wcmVmaWxsICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIHNjcm9sbC13YXRjaFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICBzY3JvbGxUaHJlc2hvbGQ6IDQwMCxcbiAgLy8gZWxlbWVudFNjcm9sbDogbnVsbCxcbn0gKTtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIC8vIGV2ZW50c1xuICB0aGlzLnBhZ2VTY3JvbGxIYW5kbGVyID0gdGhpcy5vblBhZ2VTY3JvbGwuYmluZCggdGhpcyApO1xuICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB0aGlzLm9uUmVzaXplLmJpbmQoIHRoaXMgKTtcblxuICBsZXQgc2Nyb2xsVGhyZXNob2xkID0gdGhpcy5vcHRpb25zLnNjcm9sbFRocmVzaG9sZDtcbiAgbGV0IGlzRW5hYmxlID0gc2Nyb2xsVGhyZXNob2xkIHx8IHNjcm9sbFRocmVzaG9sZCA9PT0gMDtcbiAgaWYgKCBpc0VuYWJsZSApIHRoaXMuZW5hYmxlU2Nyb2xsV2F0Y2goKTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuc2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlU2Nyb2xsV2F0Y2goKTtcbn07XG5cbnByb3RvLmVuYWJsZVNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc1Njcm9sbFdhdGNoaW5nICkgcmV0dXJuO1xuXG4gIHRoaXMuaXNTY3JvbGxXYXRjaGluZyA9IHRydWU7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgLy8gVE9ETyBkaXNhYmxlIGFmdGVyIGVycm9yP1xuICB0aGlzLm9uKCAnbGFzdCcsIHRoaXMuZGlzYWJsZVNjcm9sbFdhdGNoICk7XG4gIHRoaXMuYmluZFNjcm9sbFdhdGNoRXZlbnRzKCB0cnVlICk7XG59O1xuXG5wcm90by5kaXNhYmxlU2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc1Njcm9sbFdhdGNoaW5nICkgcmV0dXJuO1xuXG4gIHRoaXMuYmluZFNjcm9sbFdhdGNoRXZlbnRzKCBmYWxzZSApO1xuICBkZWxldGUgdGhpcy5pc1Njcm9sbFdhdGNoaW5nO1xufTtcblxucHJvdG8uYmluZFNjcm9sbFdhdGNoRXZlbnRzID0gZnVuY3Rpb24oIGlzQmluZCApIHtcbiAgbGV0IGFkZFJlbW92ZSA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdGhpcy5zY3JvbGxlclsgYWRkUmVtb3ZlIF0oICdzY3JvbGwnLCB0aGlzLnBhZ2VTY3JvbGxIYW5kbGVyICk7XG4gIHdpbmRvd1sgYWRkUmVtb3ZlIF0oICdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIgKTtcbn07XG5cbnByb3RvLm9uUGFnZVNjcm9sbCA9IEluZmluaXRlU2Nyb2xsLnRocm90dGxlKCBmdW5jdGlvbigpIHtcbiAgbGV0IGRpc3RhbmNlID0gdGhpcy5nZXRCb3R0b21EaXN0YW5jZSgpO1xuICBpZiAoIGRpc3RhbmNlIDw9IHRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQgKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzY3JvbGxUaHJlc2hvbGQnKTtcbiAgfVxufSApO1xuXG5wcm90by5nZXRCb3R0b21EaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYm90dG9tLCBzY3JvbGxZO1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIGJvdHRvbSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIHNjcm9sbFkgPSB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgfVxuICByZXR1cm4gYm90dG9tIC0gc2Nyb2xsWTtcbn07XG5cbnByb3RvLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggSW5maW5pdGVTY3JvbGwsICdvblJlc2l6ZScsIDE1MCApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIHN0YXR1c1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuLy8gSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMuc3RhdHVzID0gbnVsbDtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHVzRWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLnN0YXR1cyApO1xuICBpZiAoICFzdGF0dXNFbGVtICkgcmV0dXJuO1xuXG4gIC8vIGVsZW1lbnRzXG4gIHRoaXMuc3RhdHVzRWxlbWVudCA9IHN0YXR1c0VsZW07XG4gIHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50cyA9IHtcbiAgICByZXF1ZXN0OiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtcmVxdWVzdCcpLFxuICAgIGVycm9yOiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtZXJyb3InKSxcbiAgICBsYXN0OiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtbGFzdCcpLFxuICB9O1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ3JlcXVlc3QnLCB0aGlzLnNob3dSZXF1ZXN0U3RhdHVzICk7XG4gIHRoaXMub24oICdlcnJvcicsIHRoaXMuc2hvd0Vycm9yU3RhdHVzICk7XG4gIHRoaXMub24oICdsYXN0JywgdGhpcy5zaG93TGFzdFN0YXR1cyApO1xuICB0aGlzLmJpbmRIaWRlU3RhdHVzKCdvbicpO1xufTtcblxucHJvdG8uYmluZEhpZGVTdGF0dXMgPSBmdW5jdGlvbiggYmluZE1ldGhvZCApIHtcbiAgbGV0IGhpZGVFdmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmQgPyAnYXBwZW5kJyA6ICdsb2FkJztcbiAgdGhpc1sgYmluZE1ldGhvZCBdKCBoaWRlRXZlbnQsIHRoaXMuaGlkZUFsbFN0YXR1cyApO1xufTtcblxucHJvdG8uc2hvd1JlcXVlc3RTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdyZXF1ZXN0Jyk7XG59O1xuXG5wcm90by5zaG93RXJyb3JTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdlcnJvcicpO1xufTtcblxucHJvdG8uc2hvd0xhc3RTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdsYXN0Jyk7XG4gIC8vIHByZXZlbnQgbGFzdCB0aGVuIGFwcGVuZCBldmVudCByYWNlIGNvbmRpdGlvbiBmcm9tIHNob3dpbmcgbGFzdCBzdGF0dXMgIzcwNlxuICB0aGlzLmJpbmRIaWRlU3RhdHVzKCdvZmYnKTtcbn07XG5cbnByb3RvLnNob3dTdGF0dXMgPSBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICBzaG93KCB0aGlzLnN0YXR1c0VsZW1lbnQgKTtcbiAgdGhpcy5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cygpO1xuICBsZXQgZXZlbnRFbGVtID0gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzWyBldmVudE5hbWUgXTtcbiAgc2hvdyggZXZlbnRFbGVtICk7XG59O1xuXG5wcm90by5oaWRlQWxsU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIGhpZGUoIHRoaXMuc3RhdHVzRWxlbWVudCApO1xuICB0aGlzLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzKCk7XG59O1xuXG5wcm90by5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKCBsZXQgdHlwZSBpbiB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHMgKSB7XG4gICAgbGV0IGV2ZW50RWxlbSA9IHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50c1sgdHlwZSBdO1xuICAgIGhpZGUoIGV2ZW50RWxlbSApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gaGlkZSggZWxlbSApIHtcbiAgc2V0RGlzcGxheSggZWxlbSwgJ25vbmUnICk7XG59XG5cbmZ1bmN0aW9uIHNob3coIGVsZW0gKSB7XG4gIHNldERpc3BsYXkoIGVsZW0sICdibG9jaycgKTtcbn1cblxuZnVuY3Rpb24gc2V0RGlzcGxheSggZWxlbSwgdmFsdWUgKSB7XG4gIGlmICggZWxlbSApIHtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8qKlxuICogRXZFbWl0dGVyIHYyLjAuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxubGV0IHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHJldHVybiB0aGlzO1xuXG4gIC8vIHNldCBldmVudHMgaGFzaFxuICBsZXQgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIGxldCBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoICFsaXN0ZW5lcnMuaW5jbHVkZXMoIGxpc3RlbmVyICkgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHJldHVybiB0aGlzO1xuXG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICBsZXQgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHJldHVybiB0aGlzO1xuXG4gIGxldCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCAwICk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIGxldCBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCBsZXQgbGlzdGVuZXIgb2YgbGlzdGVuZXJzICkge1xuICAgIGxldCBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSApICk7XG4iLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYzLjAuMFxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIGdsb2JhbCApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZ2xvYmFsLmZpenp5VUlVdGlscyA9IGZhY3RvcnkoIGdsb2JhbCApO1xuICB9XG5cbn0oIHRoaXMsIGZ1bmN0aW9uIGZhY3RvcnkoIGdsb2JhbCApIHtcblxubGV0IHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbiggYSwgYiApO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG51dGlscy5tYWtlQXJyYXkgPSBmdW5jdGlvbiggb2JqICkge1xuICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHJldHVybiBvYmo7XG5cbiAgLy8gcmV0dXJuIGVtcHR5IGFycmF5IGlmIHVuZGVmaW5lZCBvciBudWxsLiAjNlxuICBpZiAoIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCApIHJldHVybiBbXTtcblxuICBsZXQgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gIGlmICggaXNBcnJheUxpa2UgKSByZXR1cm4gWyAuLi5vYmogXTtcblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIGxldCBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHJldHVybiBlbGVtO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGxldCBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG5cbiAgcmV0dXJuIGVsZW1zXG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgLmZpbHRlciggKCBlbGVtICkgPT4gZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IClcbiAgICAucmVkdWNlKCAoIGZmRWxlbXMsIGVsZW0gKSA9PiB7XG4gICAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgICByZXR1cm4gZmZFbGVtcztcbiAgICAgIH1cbiAgICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICAgIGxldCBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICAgIGZmRWxlbXMgPSBmZkVsZW1zLmNvbmNhdCggLi4uY2hpbGRFbGVtcyApO1xuICAgICAgcmV0dXJuIGZmRWxlbXM7XG4gICAgfSwgW10gKTtcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMTAwO1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgbGV0IG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgbGV0IHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQoIHRoaXNbIHRpbWVvdXROYW1lIF0gKTtcblxuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBtZXRob2QuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggb25Eb2NSZWFkeSApIHtcbiAgbGV0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggb25Eb2NSZWFkeSApO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgb25Eb2NSZWFkeSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vYml0Lmx5LzNvWUx1c2NcbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSApLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5sZXQgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuXG4vLyBhbGxvdyB1c2VyIHRvIGluaXRpYWxpemUgY2xhc3NlcyB2aWEgW2RhdGEtbmFtZXNwYWNlXSBvciAuanMtbmFtZXNwYWNlIGNsYXNzXG4vLyBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuLy8gb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uc1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIGxldCBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgbGV0IGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICBsZXQgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGBbJHtkYXRhQXR0cn1dYCApO1xuICAgIGxldCBqUXVlcnkgPSBnbG9iYWwualF1ZXJ5O1xuXG4gICAgWyAuLi5kYXRhQXR0ckVsZW1zIF0uZm9yRWFjaCggKCBlbGVtICkgPT4ge1xuICAgICAgbGV0IGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YUF0dHIgKTtcbiAgICAgIGxldCBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXJyb3IgcGFyc2luZyAke2RhdGFBdHRyfSBvbiAke2VsZW0uY2xhc3NOYW1lfTogJHtlcnJvcn1gICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9ICk7XG5cbiAgfSApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSApICk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlc3BvbnNpdmVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXNwb25zaXZlQXV0b0hlaWdodChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2l2ZUF1dG9IZWlnaHQpO1xuXG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuZWxlbWVudHMgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ydW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLnJ1bigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlc3BvbnNpdmVBdXRvSGVpZ2h0LCBbe1xuICAgIGtleTogJ3JlY2FsYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYWtlR3JvdXBzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZUdyb3VwcyhlbGVtZW50cykge1xuICAgICAgdmFyIGdyb3VwID0gW107XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIH0pO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICB2YXIgaGVpZ2h0ID0gKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudHNbMF0pLnRvcDtcbiAgICAgIGdyb3VwWzBdID0gW107XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICgoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3AgIT09IGhlaWdodCkge1xuICAgICAgICAgIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnQpLnRvcDtcbiAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICBncm91cFtpZHhdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBbaWR4XS5wdXNoKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2F1dG9IZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRvSGVpZ2h0KGdyb3VwKSB7XG4gICAgICB2YXIgaGVpZ2h0cyA9IGdyb3VwLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgIHZhciBib3hTaXppbmcgPSBjb21wdXRlZFN0eWxlLmJveFNpemluZztcbiAgICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodCAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wKSAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShoZWlnaHRzKSk7XG4gICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3J1bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuXG4gICAgICB2YXIgZ3JvdXBzID0gdGhpcy5tYWtlR3JvdXBzKGVsZW1lbnRzKTtcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICBfdGhpczIuYXV0b0hlaWdodChncm91cCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVzcG9uc2l2ZUF1dG9IZWlnaHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbn07XG5cbnZhciBnZXRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn07XG5cbnZhciBnZXRPZmZzZXQgPSBleHBvcnRzLmdldE9mZnNldCA9IGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGxUb3AoKSxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBnZXRTY3JvbGxMZWZ0KClcbiAgfTtcbn07Il19
