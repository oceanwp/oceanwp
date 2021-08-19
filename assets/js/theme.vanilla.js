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
        } else {
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
        (0, _utils.slideDown)(subMenu, 200);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 200);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"), 200);
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
      (0, _utils.fadeOut)(subMenu);
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
        (0, _utils.slideUp)(subMenu, 200);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 200);
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
        (0, _utils.slideUp)(subMenu, 200);
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
      console.log("some");
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

      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideUp)(_constants.DOM.mobileMenu.navWrapper, 200);
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
        (0, _utils.slideDown)(subMenu, 200);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 200);
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
          (0, _utils.slideUp)(subMenu, 200);
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
        (0, _utils.slideUp)(subMenu, 200);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 200);
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
        (0, _utils.slideDown)(subMenu, 200);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 200);
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

          if (_this2.element.querySelector(".gallery-format")) {
            oceanwp.theme.owLightbox.initPhotoSwipeFromDOM(".gallery-format");
          } // Gallery posts lightbox


          items.forEach(function (item) {
            var _item$querySelectorAl;

            // Post image lightbox
            (_item$querySelectorAl = item.querySelectorAll("a.oceanwp-lightbox")) === null || _item$querySelectorAl === void 0 ? void 0 : _item$querySelectorAl.forEach(function (link) {
              link.querySelector("img").addEventListener("click", oceanwp.theme.owLightbox.openLightbox);
            });
          }); // Force the images to be parsed to fix Safari issue

          items.forEach(function (item) {
            var _item$querySelectorAl2;

            (_item$querySelectorAl2 = item.querySelectorAll("img")) === null || _item$querySelectorAl2 === void 0 ? void 0 : _item$querySelectorAl2.forEach(function (img) {
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

var _init = /*#__PURE__*/new WeakMap();

var _addLightboxClass = /*#__PURE__*/new WeakMap();

var _imageFormats = /*#__PURE__*/new WeakMap();

var _addPhotoSwipeToDOM = /*#__PURE__*/new WeakMap();

var OWLightbox = function OWLightbox() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWLightbox);
  (0, _defineProperty2["default"])(this, "start", function () {
    if (_constants.DOM.body.classList.contains("no-lightbox")) {
      return;
    }

    (0, _classPrivateFieldGet2["default"])(_this, _addLightboxClass).call(_this);
    (0, _classPrivateFieldGet2["default"])(_this, _addPhotoSwipeToDOM).call(_this);
    (0, _classPrivateFieldGet2["default"])(_this, _init).call(_this);
  });

  _init.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      // Post gallery
      if (!!document.querySelector(".gallery-format")) {
        _this.initPhotoSwipeFromDOM(".gallery-format");
      } // Gutenberg Block Gallery


      if (!!document.querySelector(".wp-block-gallery")) {
        _this.initPhotoSwipeFromDOM(document.querySelectorAll(".wp-block-gallery"));
      } // Class Editor Gallery


      if (!!document.querySelector(".gallery")) {
        _this.initPhotoSwipeFromDOM(document.querySelectorAll(".gallery"));
      } // Image lightbox


      (_document$querySelect = document.querySelectorAll("a.oceanwp-lightbox")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
        link.querySelector("img").addEventListener("click", _this.openLightbox);
      });
    }
  });

  (0, _defineProperty2["default"])(this, "openLightbox", function (event) {
    var _Number$parseInt, _Number$parseInt2;

    event.preventDefault();
    event.stopPropagation();
    var pswpElement = document.querySelectorAll(".pswp")[0];
    var link = event.target.parentNode;
    var src = link.getAttribute("href");
    var width = (_Number$parseInt = Number.parseInt(link.dataset.width)) !== null && _Number$parseInt !== void 0 ? _Number$parseInt : 1024;
    var height = (_Number$parseInt2 = Number.parseInt(link.dataset.width)) !== null && _Number$parseInt2 !== void 0 ? _Number$parseInt2 : 768;
    var imageLightbox = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, [{
      src: src,
      w: width,
      h: height
    }], {
      bgOpacity: 0.85,
      showHideOpacity: true,
      showAnimationDuration: 0,
      hideAnimationDuration: 500
    });
    imageLightbox.init();
  });

  _addLightboxClass.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect2;

      (_document$querySelect2 = document.querySelectorAll("body .entry-content a, body .entry a, body article .gallery-format a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (link, index, array) {
        if (!!link.querySelector("img")) {
          var imageFormats = (0, _classPrivateFieldGet2["default"])(_this, _imageFormats).call(_this);
          var imageFormatsMask = 0;
          imageFormats.forEach(function (imageFormat) {
            imageFormatsMask += String(link.getAttribute("href")).indexOf("." + imageFormat);
          });

          if (imageFormatsMask === -13) {
            link.classList.add("no-lightbox");
          }

          var checkClassList = function checkClassList() {
            if (!(link.classList.contains("no-lightbox") || link.classList.contains("gallery-lightbox") || link.parentNode.classList.contains("gallery-icon") || link.classList.contains("woo-lightbox") || link.classList.contains("woo-thumbnail") || link.parentNode.classList.contains("woocommerce-product-gallery__image") || !!link.closest(".wp-block-gallery") || link.getAttribute("data-elementor-open-lightbox") || link.classList.contains("yith_magnifier_thumbnail") || link.classList.contains("gg-link"))) {
              link.classList.add("oceanwp-lightbox");
            }

            if (!link.classList.contains("no-lightbox")) {
              if (link.parentNode.classList.contains("gallery-icon") || !!link.closest(".wp-block-gallery")) {
                link.classList.add("gallery-lightbox");
              }
            }
          };

          if (!!link.dataset.width && !!link.dataset.height) {
            checkClassList();
          } else {
            var img = new Image();

            img.onload = function () {
              link.setAttribute("data-width", this.naturalWidth);
              link.setAttribute("data-height", this.naturalHeight);
              checkClassList();
            };

            img.src = link.getAttribute("href");
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

  _addPhotoSwipeToDOM.set(this, {
    writable: true,
    value: function value() {
      if (!!document.querySelector(".pswp")) {
        return;
      }

      _constants.DOM.body.insertAdjacentHTML("beforeend", "<!-- Root element of PhotoSwipe. Must have class pswp. -->\n            <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n                <!-- Background of PhotoSwipe. \n                    It's a separate element as animating opacity is faster than rgba(). -->\n                <div class=\"pswp__bg\"></div>\n\n                <!-- Slides wrapper with overflow:hidden. -->\n                <div class=\"pswp__scroll-wrap\">\n                    <!-- Container that holds slides. \n                        PhotoSwipe keeps only 3 of them in the DOM to save memory.\n                        Don't modify these 3 pswp__item elements, data is added later on. -->\n                    <div class=\"pswp__container\">\n                        <div class=\"pswp__item\"></div>\n                        <div class=\"pswp__item\"></div>\n                        <div class=\"pswp__item\"></div>\n                    </div>\n\n                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n                    <div class=\"pswp__ui pswp__ui--hidden\">\n                        <div class=\"pswp__top-bar\">\n                            <!--  Controls are self-explanatory. Order can be changed. -->\n                            <div class=\"pswp__counter\"></div>\n\n                            <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n                            <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n                            <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n                            <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n\n                            <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n                            <!-- element will get class pswp__preloader--active when preloader is running -->\n                            <div class=\"pswp__preloader\">\n                                <div class=\"pswp__preloader__icn\">\n                                <div class=\"pswp__preloader__cut\">\n                                    <div class=\"pswp__preloader__donut\"></div>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                            <div class=\"pswp__share-tooltip\"></div> \n                        </div>\n\n                        <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n                        </button>\n\n                        <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n                        </button>\n\n                        <div class=\"pswp__caption\">\n                            <div class=\"pswp__caption__center\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>");
    }
  });

  (0, _defineProperty2["default"])(this, "initPhotoSwipeFromDOM", function (gallerySelector) {
    // trigger when user click on image
    var onImageClick = function onImageClick(event) {
      var clickedImage = event.target;
      var clickedGalleryLink = closest(clickedImage, function (el) {
        return el.tagName && el.tagName.toUpperCase() === "A" && el.classList.contains("gallery-lightbox");
      });

      if (!clickedGalleryLink) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      var gallery = clickedGalleryLink.closest("[data-pswp-uid]");
      var galleryLinks = gallery.querySelectorAll("a.gallery-lightbox");

      for (var index = 0; index < galleryLinks.length; index++) {
        if (galleryLinks[index] == clickedGalleryLink) {
          openPhotoSwipe(index, gallery, true);
          break;
        }
      }
    };

    var openPhotoSwipe = function openPhotoSwipe(index, gallery, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll(".pswp")[0];
      var photoSwipeItems = getPhotoSwipeItems(gallery); // define options (if needed)

      var options = {
        // define gallery index (for URL)
        galleryUID: gallery.getAttribute("data-pswp-uid"),
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = photoSwipeItems[index].el.getElementsByTagName("img")[0]; // find thumbnail

          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        }
      }; // PhotoSwipe opened from URL

      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var _index = 0; _index < photoSwipItems.length; _index++) {
            if (photoSwipeItems[_index].pid == _index) {
              options.index = _index;
              break;
            }
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      } // exit if index not found


      if (isNaN(options.index)) {
        return;
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0;
        options.hideAnimationDuration = 500;
      }

      options.bgOpacity = 0.85;
      options.showHideOpacity = true; // Pass data to PhotoSwipe and initialize it

      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, photoSwipeItems, options);
      gallery.init();
    }; // parse slide data (url, title, size ...) from DOM elements


    var getPhotoSwipeItems = function getPhotoSwipeItems(gallery) {
      var galleryLinks = gallery.querySelectorAll("a.gallery-lightbox");
      var items = [];
      galleryLinks.forEach(function (galleryLink) {
        var _Number$parseInt3, _Number$parseInt4;

        var src = galleryLink.getAttribute("href");
        var width = (_Number$parseInt3 = Number.parseInt(galleryLink.dataset.width)) !== null && _Number$parseInt3 !== void 0 ? _Number$parseInt3 : 1024;
        var height = (_Number$parseInt4 = Number.parseInt(galleryLink.dataset.height)) !== null && _Number$parseInt4 !== void 0 ? _Number$parseInt4 : 768; // create slide object

        var item = {
          src: src,
          w: width,
          h: height
        };

        if (!!galleryLink.querySelector("img")) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = galleryLink.querySelector("img").getAttribute("src");
        }

        item.el = galleryLink; // save link to element for getThumbBoundsFn

        items.push(item);
      });
      return items;
    }; // find nearest parent element


    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    }; // parse picture index and gallery index from URL (#&pid=1&gid=2)


    var photoswipeParseHash = function photoswipeParseHash() {
      var hash = window.location.hash.substring(1);
      var params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split("&");

      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }

        var pair = vars[i].split("=");

        if (pair.length < 2) {
          continue;
        }

        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      return params;
    }; // loop through all gallery elements and bind events


    var galleryElements = NodeList.prototype.isPrototypeOf(gallerySelector) ? gallerySelector : document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute("data-pswp-uid", i + 1);
      galleryElements[i].onclick = onImageClick;
    } // Parse URL and open gallery if it contains #&pid=3&gid=1


    var hashData = photoswipeParseHash();

    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
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

        if ((0, _utils.isSelectorValid)(id)) {
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

          if (!!_constants.DOM.header.site && !_constants.DOM.header.site.classList.contains("top-header") && !_constants.DOM.header.site.classList.contains("medium-header") && !_constants.DOM.header.site.classList.contains("custom-header") && !_constants.DOM.header.site.classList.contains("vertical-header")) {
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
      var stickyHeader = document.querySelector("#site-header-sticky-wrapper");

      if (!_constants.DOM.header.site) {
        return 0;
      }

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

        if (!_constants.DOM.header.site && !!document.querySelector(".elementor-sticky")) {
          return 100;
        }

        return (_DOM$header$site$data = (_DOM$header$site5 = _constants.DOM.header.site) === null || _DOM$header$site5 === void 0 ? void 0 : _DOM$header$site5.dataset.height) !== null && _DOM$header$site$data !== void 0 ? _DOM$header$site$data : 54;
      }

      if (!!document.querySelector(".elementor-sticky")) {
        return 80;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvcGFnZS1sb2FkLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zY3JvbGwtd2F0Y2guanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3N0YXR1cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FMUztBQU1mLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FORztBQU9mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQVBFO0FBUWYsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1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O0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICB3cmFwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgc2l0ZUZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIiksXHJcbiAgICAgICAgY2FsbG91dEZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItY2FsbG91dC13cmFwXCIpLFxyXG4gICAgICAgIGZvb3RlckJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItYmFyXCIpLFxyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiaW1wb3J0IFwiLi9saWIvZWxlbWVudFwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4vdGhlbWUvdGhlbWVcIjtcclxuXHJcbmNsYXNzIE9jZWFuV1Age1xyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuKFwidXNlIHNjcmlwdFwiKTtcclxuXHJcbndpbmRvdy5vY2VhbndwID0gbmV3IE9jZWFuV1AoKTtcclxub2NlYW53cC5zdGFydCgpO1xyXG4iLCJFbGVtZW50LnByb3RvdHlwZS5vY2VhblBhcmVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xyXG4gICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgdmFyIGlzaGF2ZXNlbGVjdG9yID0gc2VsZWN0b3IgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQpICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc2hhdmVzZWxlY3RvciB8fCBlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50cztcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW5cIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLWJvdHRvbVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVRvZ2dsZSA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIgPyBzbGlkZURvd24oZWxlbWVudCwgZHVyYXRpb24pIDogc2xpZGVVcChlbGVtZW50LCBkdXJhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsIF9vcHRpb25zID0ge30pID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAhIW9wdGlvbnMuY2FsbGJhY2sgJiYgb3B0aW9ucy5jYWxsYmFjaygpO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlT3V0ID0gKGVsZW1lbnQsIF9vcHRpb25zID0ge30pID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAhIW9wdGlvbnMuY2FsbGJhY2sgJiYgb3B0aW9ucy5jYWxsYmFjaygpO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlVG9nZ2xlID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiID8gZmFkZUluKGVsZW1lbnQsIG9wdGlvbnMpIDogZmFkZU91dChlbGVtZW50LCBvcHRpb25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gISEoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IChlKSA9PiB7XHJcbiAgICAvLyBmb3IgY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBbXTtcclxuXHJcbiAgICAvLyBpZiBubyBwYXJlbnQsIHJldHVybiBubyBzaWJsaW5nXHJcbiAgICBpZiAoIWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJzdCBjaGlsZCBvZiB0aGUgcGFyZW50IG5vZGVcclxuICAgIGxldCBzaWJsaW5nID0gZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgd2hpbGUgKHNpYmxpbmcpIHtcclxuICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2libGluZ3M7XHJcbn07XHJcblxyXG4vLyBSZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gZWxlbWVudFxyXG5leHBvcnQgY29uc3QgaXNFbGVtZW50ID0gKG8pID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1NlbGVjdG9yVmFsaWQgPSAoKGR1bW15RWxlbWVudCkgPT4gKHNlbGVjdG9yKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR1bW15RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59KShkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dNYXNvbnJ5IHtcbiAgICBpc290b3A7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00uYmxvZy5tYXNvbnJ5R3JpZHM/LmZvckVhY2goKGJsb2dNYXNvbnJ5R3JpZCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGJsb2dNYXNvbnJ5R3JpZCwgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc290b3AgPSBuZXcgSXNvdG9wZShibG9nTWFzb25yeUdyaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5pc290b3BlLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IG9wdGlvbnMuaXNSVEwgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IFJlc3BvbnNpdmVBdXRvSGVpZ2h0IGZyb20gXCJyZXNwb25zaXZlLWF1dG8taGVpZ2h0XCI7XHJcblxyXG5jbGFzcyBFcXVhbEhlaWdodEVsZW1lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKSkge1xyXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2l2ZUF1dG9IZWlnaHQoXCIuYmxvZy1lcXVhbC1oZWlnaHRzIC5ibG9nLWVudHJ5LWlubmVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXRjaC1oZWlnaHQtZ3JpZCAubWF0Y2gtaGVpZ2h0LWNvbnRlbnRcIikpIHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KFwiLm1hdGNoLWhlaWdodC1ncmlkIC5tYXRjaC1oZWlnaHQtY29udGVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVhbEhlaWdodEVsZW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gICAgI2xhc3RXaW5kb3dXaWR0aDtcclxuICAgICNsYXN0V2luZG93SGVpZ2h0O1xyXG4gICAgI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLm1haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLiNvbldpbmRvd0xvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93TG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2ZpeEZvb3RlckF0TWlkZGxlUGFnZSgpO1xyXG4gICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy4jcGFyYWxsYXhGb290ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4jZml4Rm9vdGVyQXRNaWRkbGVQYWdlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuI2xhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy4jbGFzdFdpbmRvd0hlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhGb290ZXJBdE1pZGRsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3BBZG1pbmJhckhlaWdodCA9IERPTS5XUEFkbWluYmFyPy5vZmZzZXRIZWlnaHQgPz8gMDtcclxuICAgICAgICBjb25zdCBmb290ZXJCYXJIZWlnaHQgPSBET00uZm9vdGVyLmZvb3RlckJhcj8ub2Zmc2V0SGVpZ2h0ID8/IDA7XHJcbiAgICAgICAgY29uc3QgaHRtbEhlaWdodCA9IERPTS5odG1sLm9mZnNldEhlaWdodCAtIHdwQWRtaW5iYXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChodG1sSGVpZ2h0IDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIERPTS53cmFwLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAke3dwQWRtaW5iYXJIZWlnaHR9cHggLSAke2Zvb3RlckJhckhlaWdodH1weCk7XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFET00uZm9vdGVyLmNhbGxvdXRGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuc2l0ZUZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9IFwiY2hhbmdlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9PT0gXCJjaGFuZ2VkXCIpIHtcclxuICAgICAgICAgICAgRE9NLndyYXAuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFET00uZm9vdGVyLmNhbGxvdXRGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5zaXRlRm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2ZpeGVkRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXMtZml4ZWQtZm9vdGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoISFET00uV1BBZG1pbmJhcikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBET00uV1BBZG1pbmJhci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ubWFpbi5zdHlsZS5taW5IZWlnaHQgPSBET00ubWFpbi5vZmZzZXRIZWlnaHQgKyAod2luZG93LmlubmVySGVpZ2h0IC0gRE9NLmh0bWwub2Zmc2V0SGVpZ2h0IC0gb2Zmc2V0KSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgI3BhcmFsbGF4Rm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXMtcGFyYWxsYXgtZm9vdGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1haW5TZWN0aW9uTWFyZ2luQm90dG9tID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSArPSBET00uZm9vdGVyLnBhcmFsbGF4Py5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLnN0eWxlLmJvdHRvbSA9IGAke21haW5TZWN0aW9uTWFyZ2luQm90dG9tfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSArPSBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tYWluLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAke21haW5TZWN0aW9uTWFyZ2luQm90dG9tfXB4YDtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFZlcnRpY2FsSGVhZGVyIGZyb20gXCIuL2hlYWRlci92ZXJ0aWNhbFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmVydGljYWwgPSBuZXcgVmVydGljYWxIZWFkZXIoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBWZXJ0aWNhbEhlYWRlciB7XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00uaGVhZGVyLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuOm5vdCguYnRuKSA+IGFcIikuZm9yRWFjaCgobWVudUxpbmspID0+IHtcclxuICAgICAgICAgICAgbWVudUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PVwiMFwiPjwvc3Bhbj4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnZlcnRpY2FsSGVhZGVyVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICA6IERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi10b2dnbGVcIik7XHJcblxyXG4gICAgICAgIG5ldyBQZXJmZWN0U2Nyb2xsYmFyKERPTS5oZWFkZXIudmVydGljYWwsIHtcclxuICAgICAgICAgICAgd2hlZWxTcGVlZDogMC41LFxyXG4gICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbi5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKT8uZm9yRWFjaCgob3Blbk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSwgMjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuYWRkKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInZoLW9wZW5lZFwiKTtcclxuICAgICAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00uaGVhZGVyLnZlcnRpY2FsPy5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHMgPyBuYXZFbGVtZW50c1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdIDogXCJcIjtcclxuXHJcbiAgICAgICAgbmF2TGFzdEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXItc3R5bGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1jbG9zZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVudGVyS2V5ICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpICYmXHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuYXZGaXJzdEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1lbnUgZnJvbSBcIi4vbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgTWVnYU1lbnUgZnJvbSBcIi4vbWVudS9tZWdhXCI7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1lbnUoKTtcclxuICAgICAgICB0aGlzLm1lZ2EgPSBuZXcgTWVnYU1lbnUoKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLm5hdi1uby1jbGljayA+IGFcIikuZm9yRWFjaCgobm9DbGlja01lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG5vQ2xpY2tNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ob0NsaWNrTWVudUl0ZW1DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5zZi1tZW51XCIpLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XHJcbiAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtcy5mb3JFYWNoKChwYXJlbnRNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTm9DbGlja01lbnVJdGVtQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcInNmSG92ZXJcIik7XHJcbiAgICAgICAgZmFkZUluKHN1Yk1lbnUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XHJcbiAgICAgICAgZmFkZU91dChzdWJNZW51KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYXJyb3dcIikuZm9yRWFjaCgocGx1c0J0bikgPT4ge1xuICAgICAgICAgICAgcGx1c0J0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93biA+IGEgPiAudGV4dC13cmFwID4gc3Bhbi5uYXYtYXJyb3csICNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93biA+IGFbaHJlZj1cIiNcIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51TGlua0NsaWNrKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIGEubWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVIYXNodGFnTGlua0NsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlTWVudUJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgaWYgKCF0b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImV4aXRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI29wZW5NZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25NZW51TGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUl0ZW1MaW5rLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcblxuICAgICAgICBpZiAoISh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJNZW51KS5kaXNwbGF5ID09PSBcIm5vbmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVIYXNodGFnTGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjb3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlSW4oRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51KTtcblxuICAgICAgICBjb25zdCBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gLSBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBET00uaGVhZGVyLmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubG9nbz8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZU91dChET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93blwiKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwuc3ViLW1lbnVcIikuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uIGluIHRoZSBtZW51IG1vZGFsLlxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5tZW51LmZ1bGxTY3JlZW4ubWVudT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubWVudS5mdWxsU2NyZWVuLm1lbnVcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4ubmF2LWFycm93LCBpbnB1dCwgYnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtYXJyb3dcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxTY3JlZW5NZW51O1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBNZWdhTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51Lm1lZ2EubWVudUNvbnRlbnRzLmZvckVhY2goKG1lbnVDb250ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVDb250ZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUxlZnRPZmZzZXQgPSBvZmZzZXQobWVudUl0ZW0pLmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBtZW51Q29udGVudFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUNvbnRlbnQpLndpZHRoKTtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsUG9zaXRpb247XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbE1hcmdpbjtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtTGVmdE9mZnNldCAtIG1lbnVDb250ZW50V2lkdGggLyAyIDwgMCkge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVJdGVtTGVmdE9mZnNldCAtIDEwO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSBtZW51Q29udGVudFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luID0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaXNSVEwpIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IGAke2hvcml6b250YWxNYXJnaW59cHhgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtob3Jpem9udGFsUG9zaXRpb259cHhgO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtTGVmdE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gK1xuICAgICAgICAgICAgICAgICAgICBtZW51Q29udGVudFdpZHRoIDxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUucmlnaHQgPSBgLSR7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggLSAxMFxuICAgICAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uTWVudUl0ZW1Nb3VzZUVudGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG9wYmFyIG1lbnUgaXRlbXNcbiAgICAgICAgRE9NLm1lbnUubWVnYS50b3BiYXJNZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uVG9wYmFyTWVudUl0ZW1Nb3VzZUVudGVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNvbk1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIilcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24td3JhcCA+IC5jb250YWluZXJcIilcbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci1pbm5lclwiKTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbU1vdXNlRW50ZXIod3JhcHBlciwgZXZlbnQpO1xuICAgIH07XG5cbiAgICAjb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IERPTS5oZWFkZXIudG9wYmFyO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNtZW51SXRlbU1vdXNlRW50ZXIgPSAod3JhcHBlciwgZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcIi5tZWdhbWVudVwiKTtcbiAgICAgICAgbGV0IGxlZnRQb3NpdGlvbiA9IHBhcnNlSW50KG9mZnNldChtZW51SXRlbSkubGVmdCAtIG9mZnNldCh3cmFwcGVyKS5sZWZ0ICsgMSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm94ZWQtbGF5b3V0XCIpKSB7XG4gICAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBsZWZ0UG9zaXRpb24gLSAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdCA9IGAtJHtsZWZ0UG9zaXRpb259cHhgO1xuICAgICAgICBjb250ZW50LnN0eWxlLndpZHRoID0gYCR7d3JhcHBlci5vZmZzZXRXaWR0aH1weGA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVnYU1lbnU7XG4iLCJpbXBvcnQgRHJvcERvd25Nb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L2Ryb3AtZG93blwiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZnVsbC1zY3JlZW5cIjtcclxuaW1wb3J0IFNpZGViYXJNb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L3NpZGViYXJcIjtcclxuXHJcbmNsYXNzIE1vYmlsZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93biA9IG5ldyBEcm9wRG93bk1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNpZGViYXIgPSBuZXcgU2lkZWJhck1vYmlsZU1lbnUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XHJcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcbmltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNsaWRlVXAsIHNsaWRlRG93biwgc2xpZGVUb2dnbGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIERyb3BEb3duTW9iaWxlTWVudSB7XG4gICAgI2lzTWVudU9wZW47XG4gICAgI21lbnVJdGVtc1RvZ2dsZUljb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSBmYWxzZTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5tZW51SXRlbXNIYXNDaGlsZHJlbj8uZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiZHJvcGRvd24tdG9nZ2xlXCI7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24gPVxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcbiAgICAgICAgICAgICAgICA/IERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxuICAgICAgICAgICAgICAgIDogRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi10b2dnbGVcIik7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBcIi5tb2JpbGUtbWVudVwiLCBcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ1dHRvbkNsaWNrKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKCdsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUNsb3NlQ2xpY2spO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25IYW1idXJnZXJDbGljayk7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zVG9nZ2xlSWNvbj8uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZU1lbnVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzb21lXCIpO1xuXG4gICAgICAgICEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciAmJiBzbGlkZVRvZ2dsZShET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyLCA0MDApO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbk1lbnVDbG9zZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciAmJiBzbGlkZVVwKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDIwMCk7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcbiAgICAgICAgICAgIHRoaXMuI29uTWVudUNsb3NlQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25IYW1idXJnZXJDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5NZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5uYXY/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoISFjbG9zZUljb24pIHtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duTW9iaWxlTWVudTtcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNsaWRlVXAsIHNsaWRlRG93biwgZmFkZUluLCBmYWRlT3V0LCB2aXNpYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTW9iaWxlTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnVsbHNjcmVlbi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIik/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD0wPjwvc3Bhbj4nKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgXCIubW9iaWxlLW1lbnVcIiwgXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEgPiBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhW2hyZWY9XCIjXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ecm9wb3duVG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25Ecm9wb3duVG9nZ2xlSWNvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNtb2JpbGUtZnVsbHNjcmVlbiAuZnMtZHJvcGRvd24tbWVudSBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuICNtb2JpbGUtbmF2IGxpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAjbW9iaWxlLWZ1bGxzY3JlZW4gYS5jbG9zZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VJY29uQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25NZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZUluKERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4pO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuIC0gaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5xdWVyeVNlbGVjdG9yKFwiYS5jbG9zZVwiKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUljb25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZShET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKSkge1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgZmFkZU91dChET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLmRyb3Bkb3duXCIpLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsLnN1Yi1tZW51XCIpLmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Ecm9wb3duVG9nZ2xlSWNvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtTGluay5jbG9zZXN0KFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcblxuICAgICAgICBpZiAoISh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJNZW51KS5kaXNwbGF5ID09PSBcIm5vbmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvbiBpbiB0aGUgbWVudSBtb2RhbC5cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsU2NyZWVuTW9iaWxlTWVudTtcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcclxuaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQsIHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFNpZGViYXJNb2JpbGVNZW51IHtcclxuICAgICNpc01lbnVPcGVuO1xyXG4gICAgI21lbnVJdGVtc1BsdXNJY29uO1xyXG4gICAgI3NpZGViYXJUb2dnbGVNZW51QnRuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaWRyU291cmNlICE9PSBcInVuZGVmaW5lZFwiICYmIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItbW9iaWxlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnRTaWRyUGx1Z2luKCk7XHJcblxyXG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIikuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc3RhcnRTaWRyUGx1Z2luID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZHIubmV3KFwiLm1vYmlsZS1tZW51XCIsIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzaWRyXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogb3B0aW9ucy5zaWRyU291cmNlLFxyXG4gICAgICAgICAgICBzaWRlOiBvcHRpb25zLnNpZHJTaWRlLFxyXG4gICAgICAgICAgICBkaXNwbGFjZTogb3B0aW9ucy5zaWRyRGlzcGxhY2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgIHJlbmFtaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB0aW1pbmc6IFwiZWFzZVwiLFxyXG4gICAgICAgICAgICBiaW5kOiBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIG9uT3BlbigpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNpZHItY2xhc3MtdG9nZ2xlLXNpZHItY2xvc2VcIikuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci5zaXRlLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsICc8ZGl2IGNsYXNzPVwib2NlYW53cC1zaWRyLW92ZXJsYXlcIiB0YWJpbmRleD0wPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVJbihvdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaWRyLmNsb3NlKFwic2lkclwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZSA+IHVsXCIpLmZvckVhY2goKHN1Yk1lbnVBY3RpdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJNZW51QWN0aXZlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKS5mb3JFYWNoKChtZW51SXRlbUFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLXNpZHItb3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWRlT3V0KG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZHIgW2NsYXNzKj1cInNpZHItY2xhc3MtZmFcIl0nKS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvbi5jbGFzc05hbWUucmVwbGFjZSgvXFxic2lkci1jbGFzcy1mYS4qP1xcYi9nLCBcImZhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkciBbY2xhc3MqPVwic2lkci1jbGFzcy1pY29uXCJdJykuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb24uY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnNpZHItY2xhc3MtaWNvbi0uKj9cXGIvZywgXCJpY29uLVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zaWRyLWNsYXNzLXRvZ2dsZS1zaWRyLWNsb3NlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkhhbWJ1cmdlckJ0bkNsaWNrKTtcclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24/LmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcInRvdWNoZW5kXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zaWRyLWNsYXNzLW5hdi1uby1jbGljayA+IGFcIik/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSGFtYnVyZ2VyQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRoaXMuI2lzTWVudU9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25TaWRlYmFyQ2xvc2VNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmICghbWVudUl0ZW0/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItb3BlblwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xyXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3NpZHJcIilcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChlc2NLZXkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcclxuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcclxuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjY2xvc2VTaWRyID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZHIuY2xvc2UoXCJzaWRyXCIpO1xyXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcImluZmluaXRlLXNjcm9sbFwiO1xuXG5jbGFzcyBPV0luZmluaXRlU2Nyb2xsIHtcbiAgICAjaW5maW5pdGVTY3JvbGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdiAmJiAhIURPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxOYXYucXVlcnlTZWxlY3RvcihcIi5vbGRlci1wb3N0cyBhXCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbCA9IG5ldyBJbmZpbml0ZVNjcm9sbChET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsV3JhcHBlciwge1xuICAgICAgICAgICAgcGF0aDogXCIub2xkZXItcG9zdHMgYVwiLFxuICAgICAgICAgICAgYXBwZW5kOiBcIi5pdGVtLWVudHJ5XCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwiLnNjcm9sbGVyLXN0YXR1c1wiLFxuICAgICAgICAgICAgaGlkZU5hdjogXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiLFxuICAgICAgICAgICAgaGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBwcmVmaWxsOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsVGhyZXNob2xkOiA1MDAsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwub24oXCJsb2FkXCIsIGZ1bmN0aW9uIChib2R5LCBwYXRoLCByZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1lbnRyeVwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmFkZU91dChpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGl0ZW1zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQmxvZyBtYXNvbnJ5IGlzb3RvcGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuYmxvZ01hc29ucnkuaXNvdG9wLmFwcGVuZGVkKGl0ZW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGaXggR2FsbGVyeSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWZvcm1hdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5ibG9nTWFzb25yeS5pc290b3AubGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDAgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVxdWFsIGhlaWdodCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbWF0Y2hoZWlnaHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5lcXVhbEhlaWdodEVsZW1lbnRzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gR2FsbGVyeSBwb3N0cyBzbGlkZXJcbiAgICAgICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWNhcm91c2VsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dTbGlkZXIuc3RhcnQodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeS1mb3JtYXQsIC5wcm9kdWN0LWVudHJ5LXNsaWRlclwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnktZm9ybWF0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5pbml0UGhvdG9Td2lwZUZyb21ET00oXCIuZ2FsbGVyeS1mb3JtYXRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gR2FsbGVyeSBwb3N0cyBsaWdodGJveFxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUG9zdCBpbWFnZSBsaWdodGJveFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLm9jZWFud3AtbGlnaHRib3hcIik/LmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucXVlcnlTZWxlY3RvcihcImltZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb2NlYW53cC50aGVtZS5vd0xpZ2h0Ym94Lm9wZW5MaWdodGJveCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yY2UgdGhlIGltYWdlcyB0byBiZSBwYXJzZWQgdG8gZml4IFNhZmFyaSBpc3N1ZVxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpPy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vdXRlckhUTUwgPSBpbWcub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcImFwcGVuZFwiLCBmdW5jdGlvbiAoYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlSW4oaXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XSW5maW5pdGVTY3JvbGw7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XTGlnaHRib3gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jYWRkTGlnaHRib3hDbGFzcygpO1xuICAgICAgICB0aGlzLiNhZGRQaG90b1N3aXBlVG9ET00oKTtcbiAgICAgICAgdGhpcy4jaW5pdCgpO1xuICAgIH07XG5cbiAgICAjaW5pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gUG9zdCBnYWxsZXJ5XG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBob3RvU3dpcGVGcm9tRE9NKFwiLmdhbGxlcnktZm9ybWF0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR3V0ZW5iZXJnIEJsb2NrIEdhbGxlcnlcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cC1ibG9jay1nYWxsZXJ5XCIpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRQaG90b1N3aXBlRnJvbURPTShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndwLWJsb2NrLWdhbGxlcnlcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xhc3MgRWRpdG9yIEdhbGxlcnlcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5XCIpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRQaG90b1N3aXBlRnJvbURPTShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnlcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW1hZ2UgbGlnaHRib3hcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImEub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3BlbkxpZ2h0Ym94KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9wZW5MaWdodGJveCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBwc3dwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHN3cFwiKVswXTtcbiAgICAgICAgY29uc3QgbGluayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzcmMgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyLnBhcnNlSW50KGxpbmsuZGF0YXNldC53aWR0aCkgPz8gMTAyNDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gTnVtYmVyLnBhcnNlSW50KGxpbmsuZGF0YXNldC53aWR0aCkgPz8gNzY4O1xuXG4gICAgICAgIGNvbnN0IGltYWdlTGlnaHRib3ggPSBuZXcgUGhvdG9Td2lwZShcbiAgICAgICAgICAgIHBzd3BFbGVtZW50LFxuICAgICAgICAgICAgUGhvdG9Td2lwZVVJX0RlZmF1bHQsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICAgICAgICAgICAgdzogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGg6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZ09wYWNpdHk6IDAuODUsXG4gICAgICAgICAgICAgICAgc2hvd0hpZGVPcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dBbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICBoaWRlQW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpbWFnZUxpZ2h0Ym94LmluaXQoKTtcbiAgICB9O1xuXG4gICAgI2FkZExpZ2h0Ym94Q2xhc3MgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImJvZHkgLmVudHJ5LWNvbnRlbnQgYSwgYm9keSAuZW50cnkgYSwgYm9keSBhcnRpY2xlIC5nYWxsZXJ5LWZvcm1hdCBhXCIpXG4gICAgICAgICAgICA/LmZvckVhY2goKGxpbmssIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIWxpbmsucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUZvcm1hdHMgPSB0aGlzLiNpbWFnZUZvcm1hdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlRm9ybWF0c01hc2sgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0cy5mb3JFYWNoKChpbWFnZUZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VGb3JtYXRzTWFzayArPSBTdHJpbmcobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKS5pbmRleE9mKFwiLlwiICsgaW1hZ2VGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VGb3JtYXRzTWFzayA9PT0gLTEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJuby1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQ2xhc3NMaXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tdGh1bWJuYWlsXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX2ltYWdlXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhbGluay5jbG9zZXN0KFwiLndwLWJsb2NrLWdhbGxlcnlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVsZW1lbnRvci1vcGVuLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwieWl0aF9tYWduaWZpZXJfdGh1bWJuYWlsXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2ctbGlua1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm9jZWFud3AtbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1pY29uXCIpIHx8ICEhbGluay5jbG9zZXN0KFwiLndwLWJsb2NrLWdhbGxlcnlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeS1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhbGluay5kYXRhc2V0LndpZHRoICYmICEhbGluay5kYXRhc2V0LmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tDbGFzc0xpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCB0aGlzLm5hdHVyYWxXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhlaWdodFwiLCB0aGlzLm5hdHVyYWxIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tDbGFzc0xpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2ltYWdlRm9ybWF0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcImJtcFwiLCBcImdpZlwiLCBcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJ0aWZmXCIsIFwidGlmXCIsIFwiamZpZlwiLCBcImpwZVwiLCBcInN2Z1wiLCBcIm1wNFwiLCBcIm9nZ1wiLCBcIndlYm1cIl07XG4gICAgfTtcblxuICAgICNhZGRQaG90b1N3aXBlVG9ET00gPSAoKSA9PiB7XG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHN3cFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NLmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICAgIGA8IS0tIFJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlLiBNdXN0IGhhdmUgY2xhc3MgcHN3cC4gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBCYWNrZ3JvdW5kIG9mIFBob3RvU3dpcGUuIFxuICAgICAgICAgICAgICAgICAgICBJdCdzIGEgc2VwYXJhdGUgZWxlbWVudCBhcyBhbmltYXRpbmcgb3BhY2l0eSBpcyBmYXN0ZXIgdGhhbiByZ2JhKCkuIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19iZ1wiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBTbGlkZXMgd3JhcHBlciB3aXRoIG92ZXJmbG93OmhpZGRlbi4gLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3Njcm9sbC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGFpbmVyIHRoYXQgaG9sZHMgc2xpZGVzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvU3dpcGUga2VlcHMgb25seSAzIG9mIHRoZW0gaW4gdGhlIERPTSB0byBzYXZlIG1lbW9yeS5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IG1vZGlmeSB0aGVzZSAzIHBzd3BfX2l0ZW0gZWxlbWVudHMsIGRhdGEgaXMgYWRkZWQgbGF0ZXIgb24uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmYXVsdCAoUGhvdG9Td2lwZVVJX0RlZmF1bHQpIGludGVyZmFjZSBvbiB0b3Agb2Ygc2xpZGluZyBhcmVhLiBDYW4gYmUgY2hhbmdlZC4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX191aSBwc3dwX191aS0taGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdG9wLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIENvbnRyb2xzIGFyZSBzZWxmLWV4cGxhbmF0b3J5LiBPcmRlciBjYW4gYmUgY2hhbmdlZC4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NvdW50ZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwiQ2xvc2UgKEVzYylcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tc2hhcmVcIiB0aXRsZT1cIlNoYXJlXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWZzXCIgdGl0bGU9XCJUb2dnbGUgZnVsbHNjcmVlblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS16b29tXCIgdGl0bGU9XCJab29tIGluL291dFwiPjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcmVsb2FkZXIgZGVtbyBodHRwczovL2NvZGVwZW4uaW8vZGltc2VtZW5vdi9wZW4veXlCV29SIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gZWxlbWVudCB3aWxsIGdldCBjbGFzcyBwc3dwX19wcmVsb2FkZXItLWFjdGl2ZSB3aGVuIHByZWxvYWRlciBpcyBydW5uaW5nIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9faWNuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2N1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fZG9udXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zaGFyZS1tb2RhbCBwc3dwX19zaGFyZS1tb2RhbC0taGlkZGVuIHBzd3BfX3NpbmdsZS10YXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtdG9vbHRpcFwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnRcIiB0aXRsZT1cIlByZXZpb3VzIChhcnJvdyBsZWZ0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHRcIiB0aXRsZT1cIk5leHQgKGFycm93IHJpZ2h0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25fX2NlbnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBpbml0UGhvdG9Td2lwZUZyb21ET00gPSAoZ2FsbGVyeVNlbGVjdG9yKSA9PiB7XG4gICAgICAgIC8vIHRyaWdnZXIgd2hlbiB1c2VyIGNsaWNrIG9uIGltYWdlXG4gICAgICAgIGNvbnN0IG9uSW1hZ2VDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEltYWdlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAgICBjb25zdCBjbGlja2VkR2FsbGVyeUxpbmsgPSBjbG9zZXN0KGNsaWNrZWRJbWFnZSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIkFcIiAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghY2xpY2tlZEdhbGxlcnlMaW5rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdhbGxlcnkgPSBjbGlja2VkR2FsbGVyeUxpbmsuY2xvc2VzdChcIltkYXRhLXBzd3AtdWlkXVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdhbGxlcnlMaW5rcyA9IGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbChcImEuZ2FsbGVyeS1saWdodGJveFwiKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbGxlcnlMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FsbGVyeUxpbmtzW2luZGV4XSA9PSBjbGlja2VkR2FsbGVyeUxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlblBob3RvU3dpcGUoaW5kZXgsIGdhbGxlcnksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3BlblBob3RvU3dpcGUgPSBmdW5jdGlvbiAoaW5kZXgsIGdhbGxlcnksIGRpc2FibGVBbmltYXRpb24sIGZyb21VUkwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBzd3BFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wc3dwXCIpWzBdO1xuICAgICAgICAgICAgY29uc3QgcGhvdG9Td2lwZUl0ZW1zID0gZ2V0UGhvdG9Td2lwZUl0ZW1zKGdhbGxlcnkpO1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgb3B0aW9ucyAoaWYgbmVlZGVkKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAvLyBkZWZpbmUgZ2FsbGVyeSBpbmRleCAoZm9yIFVSTClcbiAgICAgICAgICAgICAgICBnYWxsZXJ5VUlEOiBnYWxsZXJ5LmdldEF0dHJpYnV0ZShcImRhdGEtcHN3cC11aWRcIiksXG5cbiAgICAgICAgICAgICAgICBnZXRUaHVtYkJvdW5kc0ZuOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIE9wdGlvbnMgLT4gZ2V0VGh1bWJCb3VuZHNGbiBzZWN0aW9uIG9mIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBwaG90b1N3aXBlSXRlbXNbaW5kZXhdLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdOyAvLyBmaW5kIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdlWVNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gdGh1bWJuYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHJlY3QubGVmdCwgeTogcmVjdC50b3AgKyBwYWdlWVNjcm9sbCwgdzogcmVjdC53aWR0aCB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBQaG90b1N3aXBlIG9wZW5lZCBmcm9tIFVSTFxuICAgICAgICAgICAgaWYgKGZyb21VUkwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5nYWxsZXJ5UElEcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSByZWFsIGluZGV4IHdoZW4gY3VzdG9tIFBJRHMgYXJlIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3Bob3Rvc3dpcGUuY29tL2RvY3VtZW50YXRpb24vZmFxLmh0bWwjY3VzdG9tLXBpZC1pbi11cmxcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBob3RvU3dpcEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob3RvU3dpcGVJdGVtc1tpbmRleF0ucGlkID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gVVJMIGluZGV4ZXMgc3RhcnQgZnJvbSAxXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBleGl0IGlmIGluZGV4IG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKGlzTmFOKG9wdGlvbnMuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0aW9ucy5iZ09wYWNpdHkgPSAwLjg1O1xuICAgICAgICAgICAgb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBQYXNzIGRhdGEgdG8gUGhvdG9Td2lwZSBhbmQgaW5pdGlhbGl6ZSBpdFxuICAgICAgICAgICAgZ2FsbGVyeSA9IG5ldyBQaG90b1N3aXBlKHBzd3BFbGVtZW50LCBQaG90b1N3aXBlVUlfRGVmYXVsdCwgcGhvdG9Td2lwZUl0ZW1zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhcnNlIHNsaWRlIGRhdGEgKHVybCwgdGl0bGUsIHNpemUgLi4uKSBmcm9tIERPTSBlbGVtZW50c1xuICAgICAgICBjb25zdCBnZXRQaG90b1N3aXBlSXRlbXMgPSBmdW5jdGlvbiAoZ2FsbGVyeSkge1xuICAgICAgICAgICAgY29uc3QgZ2FsbGVyeUxpbmtzID0gZ2FsbGVyeS5xdWVyeVNlbGVjdG9yQWxsKFwiYS5nYWxsZXJ5LWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgZ2FsbGVyeUxpbmtzLmZvckVhY2goKGdhbGxlcnlMaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gZ2FsbGVyeUxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IE51bWJlci5wYXJzZUludChnYWxsZXJ5TGluay5kYXRhc2V0LndpZHRoKSA/PyAxMDI0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE51bWJlci5wYXJzZUludChnYWxsZXJ5TGluay5kYXRhc2V0LmhlaWdodCkgPz8gNzY4O1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHNsaWRlIG9iamVjdFxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICAgICAgICAgICAgdzogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGg6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCEhZ2FsbGVyeUxpbmsucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyA8aW1nPiB0aHVtYm5haWwgZWxlbWVudCwgcmV0cmlldmluZyB0aHVtYm5haWwgdXJsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubXNyYyA9IGdhbGxlcnlMaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0uZWwgPSBnYWxsZXJ5TGluazsgLy8gc2F2ZSBsaW5rIHRvIGVsZW1lbnQgZm9yIGdldFRodW1iQm91bmRzRm5cbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmaW5kIG5lYXJlc3QgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgY29uc3QgY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwgJiYgKGZuKGVsKSA/IGVsIDogY2xvc2VzdChlbC5wYXJlbnROb2RlLCBmbikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhcnNlIHBpY3R1cmUgaW5kZXggYW5kIGdhbGxlcnkgaW5kZXggZnJvbSBVUkwgKCMmcGlkPTEmZ2lkPTIpXG4gICAgICAgIGNvbnN0IHBob3Rvc3dpcGVQYXJzZUhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAgICAgICAgIGlmIChoYXNoLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YXJzID0gaGFzaC5zcGxpdChcIiZcIik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdmFyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFpci5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMuZ2lkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmdpZCA9IHBhcnNlSW50KHBhcmFtcy5naWQsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGdhbGxlcnkgZWxlbWVudHMgYW5kIGJpbmQgZXZlbnRzXG4gICAgICAgIGNvbnN0IGdhbGxlcnlFbGVtZW50cyA9IE5vZGVMaXN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGdhbGxlcnlTZWxlY3RvcilcbiAgICAgICAgICAgID8gZ2FsbGVyeVNlbGVjdG9yXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ2FsbGVyeVNlbGVjdG9yKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGdhbGxlcnlFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBzd3AtdWlkXCIsIGkgKyAxKTtcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5vbmNsaWNrID0gb25JbWFnZUNsaWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgVVJMIGFuZCBvcGVuIGdhbGxlcnkgaWYgaXQgY29udGFpbnMgIyZwaWQ9MyZnaWQ9MVxuICAgICAgICBjb25zdCBoYXNoRGF0YSA9IHBob3Rvc3dpcGVQYXJzZUhhc2goKTtcbiAgICAgICAgaWYgKGhhc2hEYXRhLnBpZCAmJiBoYXNoRGF0YS5naWQpIHtcbiAgICAgICAgICAgIG9wZW5QaG90b1N3aXBlKGhhc2hEYXRhLnBpZCwgZ2FsbGVyeUVsZW1lbnRzW2hhc2hEYXRhLmdpZCAtIDFdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XTGlnaHRib3g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XU2xpZGVyIHtcbiAgICBmbGlja2l0eTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIikpID0+IHtcbiAgICAgICAgdGhpcy5mbGlja2l0eSA9IFtdO1xuXG4gICAgICAgIGVsZW1lbnRzPy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGlja2l0eSA9IG5ldyBGbGlja2l0eShlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLWVudHJ5LWltYWdlXCIpID8gZmFsc2UgOiA2MDAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJydGxcIikgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW46IHRydWUsXG4gICAgICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mbGlja2l0eS5wdXNoKGZsaWNraXR5KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dTbGlkZXI7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGlzU2VsZWN0b3JWYWxpZCwgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU2Nyb2xsRWZmZWN0IHtcclxuICAgICN0YXJnZXRFbGVtO1xyXG4gICAgI2xhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLXByb2R1Y3RcIikgJiYgIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxvY2FsLXNjcm9sbFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLmxvY2FsW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLmxvY2FsIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLm1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEuc2lkci1jbGFzcy1tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChzY3JvbGxJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbEl0ZW1DbGljayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25TY3JvbGxJdGVtQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbG9zZXN0KFwiLm9tdy1vcGVuLW1vZGFsXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1vcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3Mtb3BsLWxpbmtcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHNjcm9sbEl0ZW0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBocmVmLnN1YnN0cmluZyhocmVmLmluZGV4T2YoXCIjXCIpKS5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NlbGVjdG9yVmFsaWQoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiN0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpZCAhPSBcIlwiICYmICEhdGhpcy4jdGFyZ2V0RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRoaXMuI3RhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICEhRE9NLmhlYWRlci5zaXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXN0b20taGVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIURPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIilcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI2ZpeE11bHRpTWVudSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNnZXRBZG1pbkJhckhlaWdodCA9ICgpID0+ICghIURPTS5XUEFkbWluYmFyID8gRE9NLldQQWRtaW5iYXIub2Zmc2V0SGVpZ2h0IDogMCk7XHJcblxyXG4gICAgI2dldFRvcGJhckhlaWdodCA9ICgpID0+XHJcbiAgICAgICAgISFET00uaGVhZGVyLnRvcGJhcldyYXBwZXIgJiYgRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1iYXItc3RpY2t5XCIpXHJcbiAgICAgICAgICAgID8gRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgI2dldFN0aWNreUhlYWRlckhlaWdodCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGlja3lIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLXN0aWNreS13cmFwcGVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoIURPTS5oZWFkZXIuc2l0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIXN0aWNreUhlYWRlcikge1xyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3RpY2t5SGVhZGVyKS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBET00uaGVhZGVyLnNpdGUucXVlcnlTZWxlY3RvcihcIi5ib3R0b20taGVhZGVyLXdyYXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWVudS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbWVudVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5kYXRhc2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1oZWFkZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET00uaGVhZGVyLnNpdGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cC1lZmZlY3RcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIURPTS5oZWFkZXIuc2l0ZSAmJiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudG9yLXN0aWNreVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXIuc2l0ZT8uZGF0YXNldC5oZWlnaHQgPz8gNTQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRvci1zdGlja3lcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDgwO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2ZpeE11bHRpTWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpeGVkT2Zmc2V0ID1cclxuICAgICAgICAgICAgb2Zmc2V0KHRoaXMuI3RhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgIHRoaXMuI2dldEFkbWluQmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICB0aGlzLiNnZXRUb3BiYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0LnRvRml4ZWQoKSA9PT0gZml4ZWRPZmZzZXQudG9GaXhlZCgpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI2ZpeE11bHRpTWVudSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5vZmZzZXRIZWlnaHQgLSAxID4gdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQodGhpcy4jdGFyZ2V0RWxlbSkudG9wIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRBZG1pbkJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRUb3BiYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NLmhlYWRlci5zaXRlPy5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IHdpbmRvdy5wYWdlWU9mZnNldCA+IHRoaXMuI2xhc3RTY3JvbGxUb3AgPyBcInNtb290aFwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiNsYXN0U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRWZmZWN0O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7fTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLiNvbldpbmRvd1Njcm9sbCk7XG4gICAgICAgIERPTS5zY3JvbGwuc2Nyb2xsVG9wPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgICAgIERPTS5zY3JvbGwuZ29Ub3A/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICAgICAgRE9NLnNjcm9sbC5nb1RvcFNsYXNoPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Njcm9sbCA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5zY3JvbGwuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAwKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoRE9NLnNjcm9sbC5zY3JvbGxUb3ApLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgZmFkZUluKERPTS5zY3JvbGwuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShET00uc2Nyb2xsLnNjcm9sbFRvcCkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGZhZGVPdXQoRE9NLnNjcm9sbC5zY3JvbGxUb3ApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvblNjcm9sbFRvcENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBET00uaHRtbC5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2Nyb2xsVG9wLnBhcmVudE5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJzZkhvdmVyXCIpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBEcm9wRG93blNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvZHJvcC1kb3duXCI7XHJcbmltcG9ydCBIZWFkZXJSZXBsYWNlU2VhcmNoIGZyb20gXCIuL3NlYXJjaC9oZWFkZXItcmVwbGFjZVwiO1xyXG5pbXBvcnQgTW9iaWxlU2VhcmNoSWNvbiBmcm9tIFwiLi9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uXCI7XHJcbmltcG9ydCBPdmVybGF5U2VhcmNoIGZyb20gXCIuL3NlYXJjaC9vdmVybGF5XCI7XHJcblxyXG5jbGFzcyBTZWFyY2gge1xyXG4gICAgbW9iaWxlT3ZlcmxheUlucHV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duID0gbmV3IERyb3BEb3duU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJSZXBsYWNlID0gbmV3IEhlYWRlclJlcGxhY2VTZWFyY2goKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBuZXcgT3ZlcmxheVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlU2VhcmNoSWNvbiA9IG5ldyBNb2JpbGVTZWFyY2hJY29uKCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtc2VhcmNoLW92ZXJsYXktaW5wdXRcIik7XHJcblxyXG4gICAgICAgIERPTS5zZWFyY2guZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghIXRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dC5jbG9zZXN0KFwiZm9ybVwiKS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5zZWFyY2guZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbklucHV0S2V5dXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGlucHV0LmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiY2xhc3MgU2VhcmNoQmFzZSB7XG4gICAgZm9jdXMgPSAoZm9ybSwgaW5wdXRDbGFzcykgPT4ge1xuICAgICAgICBsZXQgZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtKS50cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZShcInNcIiwgXCJcIikpICogMTAwMDtcblxuICAgICAgICBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID0gISFmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID8gZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA6IDYwMDtcblxuICAgICAgICBpZiAoZm9ybVRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGlucHV0Q2xhc3MpLmZvY3VzKCk7XG4gICAgICAgICAgICB9LCBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhc2U7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIERyb3BEb3duU2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcImRyb3BfZG93blwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2guZHJvcERvd24udG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRvY3VtZW50Q2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB7IHRvZ2dsZVNlYXJjaEJ0biwgZm9ybSB9ID0gRE9NLnNlYXJjaC5kcm9wRG93bjtcblxuICAgICAgICB0b2dnbGVTZWFyY2hCdG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sIFwiaW5wdXQuZmllbGRcIik7XG4gICAgfTtcblxuICAgICNvbkRvY3VtZW50Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQ29sbGFwcyBzZWFyY2ggZm9ybVxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3NlYXJjaGZvcm0tZHJvcGRvd24uc2hvd1wiKSkge1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi5mb3JtPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgIERPTS5zZWFyY2guZHJvcERvd24udG9nZ2xlU2VhcmNoQnRuPy5wYXJlbnROb2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25TZWFyY2g7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIEhlYWRlclJlcGxhY2VTZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwiaGVhZGVyX3JlcGxhY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2UudG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZS5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VCdG5DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRG9jdW1lbnRDbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlO1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcExlZnRTaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIURPTS5tZW51Lm5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiMzcwcHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTS5tZW51Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIGZvcm0uc3R5bGUubWF4V2lkdGggPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1uYXZpZ2F0aW9uID4gdWwuZHJvcGRvd24tbWVudVwiKT8ub2Zmc2V0V2lkdGggKyA2MCArIFwicHhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlO1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcExlZnRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBET00ubWVudS5uYXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5tYWluLnN0eWxlLm1pbldpZHRoID0gXCJcIjtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRG9jdW1lbnRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBDb2xsYXBzIHNlYXJjaCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS5zaG93XCIpKSB7XG4gICAgICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U/LmZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnRvcExlZnRTaWRlPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm5hdj8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI2hhc1RvcEhlYWRlciA9ICgpID0+IERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWhlYWRlclwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyUmVwbGFjZVNlYXJjaDtcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIE1vYmlsZVNlYXJjaEljb24gZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICAjZWxlbWVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwiZGlzYWJsZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMgPSB7XG4gICAgICAgICAgICBkcm9wZG93blNlYXJjaEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb24tZHJvcGRvd25cIiksXG4gICAgICAgICAgICBkcm9wZG93blNlYXJjaEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLWRyb3Bkb3duXCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtb3ZlcmxheVwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2hJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uLW92ZXJsYXlcIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoQ2xvc2VJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1vdmVybGF5IC5zZWFyY2gtb3ZlcmxheS1jbG9zZVwiKSxcbiAgICAgICAgICAgIGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcImRyb3BfZG93blwiKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiN0b2dnbGVEcm9wZG93blNlYXJjaCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbGlja0RvY3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJvdmVybGF5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2hJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb3Blbk92ZXJsYXlTZWFyY2gpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaENsb3NlSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI2Nsb3NlT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbGlja092ZXJsYXlTZWFyY2gpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICN0b2dnbGVEcm9wZG93blNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIHRoaXMuZm9jdXModGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLCBcImlucHV0LmZpZWxkXCIpO1xuICAgIH07XG5cbiAgICAjb3Blbk92ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVJbih0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoKTtcblxuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFwiaW5wdXQubW9iaWxlLXNlYXJjaC1vdmVybGF5LWlucHV0XCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNjbG9zZU92ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVPdXQodGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNvbkNsaWNrT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25DbGlja0RvY3VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjaWNvbi1zZWFyY2hmb3JtLWRyb3Bkb3duLnNob3dcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlU2VhcmNoSWNvbjtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgT3ZlcmxheVNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJvdmVybGF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5vdmVybGF5LnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBET00uc2VhcmNoLm92ZXJsYXkuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlQnRuQ2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5vdmVybGF5O1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZUluKGZvcm0pO1xuXG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5vdmVybGF5O1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZU91dChmb3JtKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheVNlYXJjaDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCB7XHJcbiAgICAjc2VsZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5zZWxlY3RUYWdzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QgPSBzZWxlY3Q7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgXCJhZnRlcmVuZFwiLFxyXG4gICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwidGhlbWUtc2VsZWN0ICR7dGhpcy4jc2VsZWN0LmNsYXNzTGlzdH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRoZW1lLXNlbGVjdElubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy4jc2VsZWN0Lm9wdGlvbnNbdGhpcy4jc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPmBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdC5jbGFzc0xpc3QuYWRkKFwiaGFzQ3VzdG9tU2VsZWN0XCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc3R5bGUoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVyc0l0ZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI3N0eWxlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmhlaWdodCA9IFwiMzRweFwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5mb250U2l6ZSA9IFwiMTNweFwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5hcHBlYXJhbmNlID0gXCJtZW51bGlzdC1idXR0b25cIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3QubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0Lm5leHRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVyc0l0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uTW91c2VlbnRlcik7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuI29uTW91c2VsZWF2ZSk7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5vbkNoYW5nZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1vdXNlZW50ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZChcInRoZW1lLXNlbGVjdEhvdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Nb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aGVtZS1zZWxlY3RIb3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QubmV4dFNpYmxpbmcuaW5uZXJIVE1MID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMuI29uRG9jdW1lbnRSZWFkeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25Eb2N1bWVudFJlYWR5KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uRG9jdW1lbnRSZWFkeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIERPTS5zZWxlY3RUYWdzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Quc3R5bGUud2lkdGggPSBzZWxlY3QubmV4dFNpYmxpbmcub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCBTZWxlY3QgZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2JpbGUtbWVudVwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcclxuaW1wb3J0IEJsb2dNYXNvbnJ5IGZyb20gXCIuL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5XCI7XHJcbmltcG9ydCBTY3JvbGxUb3AgZnJvbSBcIi4vY29tcG9uZW50cy9zY3JvbGwtdG9wXCI7XHJcbmltcG9ydCBTY3JvbGxFZmZlY3QgZnJvbSBcIi4vY29tcG9uZW50cy9zY3JvbGwtZWZmZWN0XCI7XHJcbmltcG9ydCBFcXVhbEhlaWdodEVsZW1lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvZXF1YWwtaGVpZ2h0LWVsZW1lbnRzXCI7XHJcbmltcG9ydCBPV0luZmluaXRlU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvb3ctaW5maW5pdGUtc2Nyb2xsXCI7XHJcbmltcG9ydCBPV1NsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL293LXNsaWRlclwiO1xyXG5pbXBvcnQgT1dMaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL293LWxpZ2h0Ym94XCI7XHJcblxyXG5jbGFzcyBUaGVtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdCA9IG5ldyBTZWxlY3QoKTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5ibG9nTWFzb25yeSA9IG5ldyBCbG9nTWFzb25yeSgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gbmV3IFNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRWZmZWN0ID0gbmV3IFNjcm9sbEVmZmVjdCgpO1xyXG4gICAgICAgIHRoaXMuZXF1YWxIZWlnaHRFbGVtZW50cyA9IG5ldyBFcXVhbEhlaWdodEVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5vd0xpZ2h0Ym94ID0gbmV3IE9XTGlnaHRib3goKTtcclxuICAgICAgICB0aGlzLm93U2xpZGVyID0gbmV3IE9XU2xpZGVyKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vd0luZmluaXRlU2Nyb2xsID0gbmV3IE9XSW5maW5pdGVTY3JvbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lO1xyXG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBjbGFzc0FwcGx5RGVzY3JpcHRvclNldCA9IHJlcXVpcmUoXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzXCIpO1xuXG52YXIgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yID0gcmVxdWlyZShcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcInNldFwiKTtcbiAgY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZFNldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuIiwidmFyIGNsb3Nlc3QgPSByZXF1aXJlKCcuL2Nsb3Nlc3QnKTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuIiwiLy8gYnV0dG9uXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5maW5pdGVTY3JvbGxCdXR0b24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY2xhc3MgSW5maW5pdGVTY3JvbGxCdXR0b24ge1xuICBjb25zdHJ1Y3RvciggZWxlbWVudCwgaW5mU2Nyb2xsICkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbmZTY3JvbGwgPSBpbmZTY3JvbGw7XG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICAgIGluZlNjcm9sbC5vbiggJ3JlcXVlc3QnLCB0aGlzLmRpc2FibGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnbG9hZCcsIHRoaXMuZW5hYmxlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2Vycm9yJywgdGhpcy5oaWRlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2xhc3QnLCB0aGlzLmhpZGUuYmluZCggdGhpcyApICk7XG4gIH1cblxuICBvbkNsaWNrKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaW5mU2Nyb2xsLmxvYWROZXh0UGFnZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIgKTtcbiAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRlU2Nyb2xsIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMuYnV0dG9uID0gbnVsbDtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYnV0dG9uRWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLmJ1dHRvbiApO1xuICBpZiAoIGJ1dHRvbkVsZW0gKSB7XG4gICAgdGhpcy5idXR0b24gPSBuZXcgSW5maW5pdGVTY3JvbGxCdXR0b24oIGJ1dHRvbkVsZW0sIHRoaXMgKTtcbiAgfVxufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5idXR0b24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmJ1dHRvbiApIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5CdXR0b24gPSBJbmZpbml0ZVNjcm9sbEJ1dHRvbjtcblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIGNvcmVcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIHV0aWxzICkge1xuXG5sZXQgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBJbmZpbml0ZVNjcm9sbCBpbnRhbmNlc1xubGV0IGluc3RhbmNlcyA9IHt9O1xuXG5mdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgbGV0IHF1ZXJ5RWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuXG4gIGlmICggIXF1ZXJ5RWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yIEluZmluaXRlU2Nyb2xsOiAnICsgKCBxdWVyeUVsZW0gfHwgZWxlbWVudCApICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQgPSBxdWVyeUVsZW07XG4gIC8vIGRvIG5vdCBpbml0aWFsaXplIHR3aWNlIG9uIHNhbWUgZWxlbWVudFxuICBpZiAoIGVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEICkge1xuICAgIGxldCBpbnN0YW5jZSA9IGluc3RhbmNlc1sgZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgXTtcbiAgICBpbnN0YW5jZS5vcHRpb24oIG9wdGlvbnMgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHsgLi4uSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMgfTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlKCk7XG59XG5cbi8vIGRlZmF1bHRzXG5JbmZpbml0ZVNjcm9sbC5kZWZhdWx0cyA9IHtcbiAgLy8gcGF0aDogbnVsbCxcbiAgLy8gaGlkZU5hdjogbnVsbCxcbiAgLy8gZGVidWc6IGZhbHNlLFxufTtcblxuLy8gY3JlYXRlICYgZGVzdHJveSBtZXRob2RzXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUgPSB7fTtcbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kgPSB7fTtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbk9iamVjdC5hc3NpZ24oIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbmxldCBHVUlEID0gMDtcblxucHJvdG8uY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNyZWF0ZSBjb3JlXG4gIC8vIGFkZCBpZCBmb3IgSW5maW5pdGVTY3JvbGwuZGF0YVxuICBsZXQgaWQgPSB0aGlzLmd1aWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG4gIC8vIHByb3BlcnRpZXNcbiAgdGhpcy5wYWdlSW5kZXggPSAxOyAvLyBkZWZhdWx0IHRvIGZpcnN0IHBhZ2VcbiAgdGhpcy5sb2FkQ291bnQgPSAwO1xuICB0aGlzLnVwZGF0ZUdldFBhdGgoKTtcbiAgLy8gYmFpbCBpZiBnZXRQYXRoIG5vdCBzZXQsIG9yIHJldHVybnMgZmFsc2V5ICM3NzZcbiAgbGV0IGhhc1BhdGggPSB0aGlzLmdldFBhdGggJiYgdGhpcy5nZXRQYXRoKCk7XG4gIGlmICggIWhhc1BhdGggKSB7XG4gICAgY29uc29sZS5lcnJvcignRGlzYWJsaW5nIEluZmluaXRlU2Nyb2xsJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudXBkYXRlR2V0QWJzb2x1dGVQYXRoKCk7XG4gIHRoaXMubG9nKCAnaW5pdGlhbGl6ZWQnLCBbIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgXSApO1xuICB0aGlzLmNhbGxPbkluaXQoKTtcbiAgLy8gY3JlYXRlIGZlYXR1cmVzXG4gIGZvciAoIGxldCBtZXRob2QgaW4gSW5maW5pdGVTY3JvbGwuY3JlYXRlICkge1xuICAgIEluZmluaXRlU2Nyb2xsLmNyZWF0ZVsgbWV0aG9kIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgT2JqZWN0LmFzc2lnbiggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG4vLyBjYWxsIG9uSW5pdCBvcHRpb24sIHVzZWQgZm9yIGJpbmRpbmcgZXZlbnRzIG9uIGluaXRcbnByb3RvLmNhbGxPbkluaXQgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9uSW5pdCA9IHRoaXMub3B0aW9ucy5vbkluaXQ7XG4gIGlmICggb25Jbml0ICkge1xuICAgIG9uSW5pdC5jYWxsKCB0aGlzLCB0aGlzICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBhcmdzICkge1xuICB0aGlzLmxvZyggdHlwZSwgYXJncyApO1xuICBsZXQgZW1pdEFyZ3MgPSBldmVudCA/IFsgZXZlbnQgXS5jb25jYXQoIGFyZ3MgKSA6IGFyZ3M7XG4gIHRoaXMuZW1pdEV2ZW50KCB0eXBlLCBlbWl0QXJncyApO1xuICAvLyB0cmlnZ2VyIGpRdWVyeSBldmVudFxuICBpZiAoICFqUXVlcnkgfHwgIXRoaXMuJGVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG5hbWVzcGFjZSBqUXVlcnkgZXZlbnRcbiAgdHlwZSArPSAnLmluZmluaXRlU2Nyb2xsJztcbiAgbGV0ICRldmVudCA9IHR5cGU7XG4gIGlmICggZXZlbnQgKSB7XG4gICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwICovXG4gICAgbGV0IGpRRXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgalFFdmVudC50eXBlID0gdHlwZTtcbiAgICAkZXZlbnQgPSBqUUV2ZW50O1xuICB9XG4gIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggJGV2ZW50LCBhcmdzICk7XG59O1xuXG5sZXQgbG9nZ2VycyA9IHtcbiAgaW5pdGlhbGl6ZWQ6ICggY2xhc3NOYW1lICkgPT4gYG9uICR7Y2xhc3NOYW1lfWAsXG4gIHJlcXVlc3Q6ICggcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBsb2FkOiAoIHJlc3BvbnNlLCBwYXRoICkgPT4gYCR7cmVzcG9uc2UudGl0bGUgfHwgJyd9LiBVUkw6ICR7cGF0aH1gLFxuICBlcnJvcjogKCBlcnJvciwgcGF0aCApID0+IGAke2Vycm9yfS4gVVJMOiAke3BhdGh9YCxcbiAgYXBwZW5kOiAoIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApID0+IGAke2l0ZW1zLmxlbmd0aH0gaXRlbXMuIFVSTDogJHtwYXRofWAsXG4gIGxhc3Q6ICggcmVzcG9uc2UsIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgaGlzdG9yeTogKCB0aXRsZSwgcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBwYWdlSW5kZXg6IGZ1bmN0aW9uKCBpbmRleCwgb3JpZ2luICkge1xuICAgIHJldHVybiBgY3VycmVudCBwYWdlIGRldGVybWluZWQgdG8gYmU6ICR7aW5kZXh9IGZyb20gJHtvcmlnaW59YDtcbiAgfSxcbn07XG5cbi8vIGxvZyBldmVudHNcbnByb3RvLmxvZyA9IGZ1bmN0aW9uKCB0eXBlLCBhcmdzICkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuZGVidWcgKSByZXR1cm47XG5cbiAgbGV0IG1lc3NhZ2UgPSBgW0luZmluaXRlU2Nyb2xsXSAke3R5cGV9YDtcbiAgbGV0IGxvZ2dlciA9IGxvZ2dlcnNbIHR5cGUgXTtcbiAgaWYgKCBsb2dnZXIgKSBtZXNzYWdlICs9ICcuICcgKyBsb2dnZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgY29uc29sZS5sb2coIG1lc3NhZ2UgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgdXNlZCBhbW91bmcgZmVhdHVyZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlTWVhc3VyZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBsZXQgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdGhpcy50b3AgPSByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xufTtcblxucHJvdG8udXBkYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGVsZW1lbnRTY3JvbGwgPSB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbDtcbiAgaWYgKCAhZWxlbWVudFNjcm9sbCApIHtcbiAgICAvLyBkZWZhdWx0LCB1c2Ugd2luZG93XG4gICAgdGhpcy5zY3JvbGxlciA9IHdpbmRvdztcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgdHJ1ZSwgc2V0IHRvIGVsZW1lbnQsIG90aGVyd2lzZSB1c2Ugb3B0aW9uXG4gIHRoaXMuc2Nyb2xsZXIgPSBlbGVtZW50U2Nyb2xsID09PSB0cnVlID8gdGhpcy5lbGVtZW50IDpcbiAgICB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnRTY3JvbGwgKTtcbiAgaWYgKCAhdGhpcy5zY3JvbGxlciApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGVsZW1lbnRTY3JvbGw6ICR7ZWxlbWVudFNjcm9sbH1gKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGFnZSBwYXRoIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnVwZGF0ZUdldFBhdGggPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9wdFBhdGggPSB0aGlzLm9wdGlvbnMucGF0aDtcbiAgaWYgKCAhb3B0UGF0aCApIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbmZpbml0ZVNjcm9sbCBwYXRoIG9wdGlvbiByZXF1aXJlZC4gU2V0IGFzOiAke29wdFBhdGh9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGZ1bmN0aW9uXG4gIGxldCB0eXBlID0gdHlwZW9mIG9wdFBhdGg7XG4gIGlmICggdHlwZSA9PSAnZnVuY3Rpb24nICkge1xuICAgIHRoaXMuZ2V0UGF0aCA9IG9wdFBhdGg7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHRlbXBsYXRlIHN0cmluZzogJy9wYWdlcy97eyN9fS5odG1sJ1xuICBsZXQgdGVtcGxhdGVNYXRjaCA9IHR5cGUgPT0gJ3N0cmluZycgJiYgb3B0UGF0aC5tYXRjaCgne3sjfX0nKTtcbiAgaWYgKCB0ZW1wbGF0ZU1hdGNoICkge1xuICAgIHRoaXMudXBkYXRlR2V0UGF0aFRlbXBsYXRlKCBvcHRQYXRoICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNlbGVjdG9yOiAnLm5leHQtcGFnZS1zZWxlY3RvcidcbiAgdGhpcy51cGRhdGVHZXRQYXRoU2VsZWN0b3IoIG9wdFBhdGggKTtcbn07XG5cbnByb3RvLnVwZGF0ZUdldFBhdGhUZW1wbGF0ZSA9IGZ1bmN0aW9uKCBvcHRQYXRoICkge1xuICAvLyBzZXQgZ2V0UGF0aCB3aXRoIHRlbXBsYXRlIHN0cmluZ1xuICB0aGlzLmdldFBhdGggPSAoKSA9PiB7XG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMucGFnZUluZGV4ICsgMTtcbiAgICByZXR1cm4gb3B0UGF0aC5yZXBsYWNlKCAne3sjfX0nLCBuZXh0SW5kZXggKTtcbiAgfTtcbiAgLy8gZ2V0IHBhZ2VJbmRleCBmcm9tIGxvY2F0aW9uXG4gIC8vIGNvbnZlcnQgcGF0aCBvcHRpb24gaW50byByZWdleCB0byBsb29rIGZvciBwYXR0ZXJuIGluIGxvY2F0aW9uXG4gIC8vIGVzY2FwZSBxdWVyeSAoPykgaW4gdXJsLCBhbGxvd3MgZm9yIHBhcnNpbmcgR0VUIHBhcmFtZXRlcnNcbiAgbGV0IHJlZ2V4U3RyaW5nID0gb3B0UGF0aFxuICAgIC5yZXBsYWNlKCAvKFxcXFxcXD98XFw/KS8sICdcXFxcPycgKVxuICAgIC5yZXBsYWNlKCAne3sjfX0nLCAnKFxcXFxkXFxcXGQ/XFxcXGQ/KScgKTtcbiAgbGV0IHRlbXBsYXRlUmUgPSBuZXcgUmVnRXhwKCByZWdleFN0cmluZyApO1xuICBsZXQgbWF0Y2ggPSBsb2NhdGlvbi5ocmVmLm1hdGNoKCB0ZW1wbGF0ZVJlICk7XG5cbiAgaWYgKCBtYXRjaCApIHtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IHBhcnNlSW50KCBtYXRjaFsxXSwgMTAgKTtcbiAgICB0aGlzLmxvZyggJ3BhZ2VJbmRleCcsIFsgdGhpcy5wYWdlSW5kZXgsICd0ZW1wbGF0ZSBzdHJpbmcnIF0gKTtcbiAgfVxufTtcblxubGV0IHBhdGhSZWdleGVzID0gW1xuICAvLyBXb3JkUHJlc3MgJiBUdW1ibHIgLSBleGFtcGxlLmNvbS9wYWdlLzJcbiAgLy8gSmVreWxsIC0gZXhhbXBsZS5jb20vcGFnZTJcbiAgL14oLio/XFwvP3BhZ2VcXC8/KShcXGRcXGQ/XFxkPykoLio/JCkvLFxuICAvLyBEcnVwYWwgLSBleGFtcGxlLmNvbS8/cGFnZT0xXG4gIC9eKC4qP1xcLz9cXD9wYWdlPSkoXFxkXFxkP1xcZD8pKC4qPyQpLyxcbiAgLy8gY2F0Y2ggYWxsLCBsYXN0IG9jY3VyZW5jZSBvZiBhIG51bWJlclxuICAvKC4qPykoXFxkXFxkP1xcZD8pKD8hLipcXGQpKC4qPyQpLyxcbl07XG5cbi8vIHRyeSBtYXRjaGluZyBocmVmIHRvIHBhdGhSZWdleGVzIHBhdHRlcm5zXG5sZXQgZ2V0UGF0aFBhcnRzID0gSW5maW5pdGVTY3JvbGwuZ2V0UGF0aFBhcnRzID0gZnVuY3Rpb24oIGhyZWYgKSB7XG4gIGlmICggIWhyZWYgKSByZXR1cm47XG4gIGZvciAoIGxldCByZWdleCBvZiBwYXRoUmVnZXhlcyApIHtcbiAgICBsZXQgbWF0Y2ggPSBocmVmLm1hdGNoKCByZWdleCApO1xuICAgIGlmICggbWF0Y2ggKSB7XG4gICAgICBsZXQgWyAsIGJlZ2luLCBpbmRleCwgZW5kIF0gPSBtYXRjaDtcbiAgICAgIHJldHVybiB7IGJlZ2luLCBpbmRleCwgZW5kIH07XG4gICAgfVxuICB9XG59O1xuXG5wcm90by51cGRhdGVHZXRQYXRoU2VsZWN0b3IgPSBmdW5jdGlvbiggb3B0UGF0aCApIHtcbiAgLy8gcGFyc2UgaHJlZiBvZiBsaW5rOiAnLm5leHQtcGFnZS1saW5rJ1xuICBsZXQgaHJlZkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBvcHRQYXRoICk7XG4gIGlmICggIWhyZWZFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEJhZCBJbmZpbml0ZVNjcm9sbCBwYXRoIG9wdGlvbi4gTmV4dCBsaW5rIG5vdCBmb3VuZDogJHtvcHRQYXRofWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBocmVmID0gaHJlZkVsZW0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGxldCBwYXRoUGFydHMgPSBnZXRQYXRoUGFydHMoIGhyZWYgKTtcbiAgaWYgKCAhcGF0aFBhcnRzICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEluZmluaXRlU2Nyb2xsIHVuYWJsZSB0byBwYXJzZSBuZXh0IGxpbmsgaHJlZjogJHtocmVmfWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IGJlZ2luLCBpbmRleCwgZW5kIH0gPSBwYXRoUGFydHM7XG4gIHRoaXMuaXNQYXRoU2VsZWN0b3IgPSB0cnVlOyAvLyBmbGFnIGZvciBjaGVja0xhc3RQYWdlKClcbiAgdGhpcy5nZXRQYXRoID0gKCkgPT4gYmVnaW4gKyAoIHRoaXMucGFnZUluZGV4ICsgMSApICsgZW5kO1xuICAvLyBnZXQgcGFnZUluZGV4IGZyb20gaHJlZlxuICB0aGlzLnBhZ2VJbmRleCA9IHBhcnNlSW50KCBpbmRleCwgMTAgKSAtIDE7XG4gIHRoaXMubG9nKCAncGFnZUluZGV4JywgWyB0aGlzLnBhZ2VJbmRleCwgJ25leHQgbGluaycgXSApO1xufTtcblxucHJvdG8udXBkYXRlR2V0QWJzb2x1dGVQYXRoID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gIC8vIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIGh0dHAgb3IgL1xuICBsZXQgaXNBYnNvbHV0ZSA9IHBhdGgubWF0Y2goIC9eaHR0cC8gKSB8fCBwYXRoLm1hdGNoKCAvXlxcLy8gKTtcbiAgaWYgKCBpc0Fic29sdXRlICkge1xuICAgIHRoaXMuZ2V0QWJzb2x1dGVQYXRoID0gdGhpcy5nZXRQYXRoO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IHBhdGhuYW1lIH0gPSBsb2NhdGlvbjtcbiAgLy8gcXVlcnkgcGFyYW1ldGVyICM4MjkuIGV4YW1wbGUuY29tLz9wZz0yXG4gIGxldCBpc1F1ZXJ5ID0gcGF0aC5tYXRjaCggL15cXD8vICk7XG4gIC8vIC9mb28vYmFyL2luZGV4Lmh0bWwgPT4gL2Zvby9iYXJcbiAgbGV0IGRpcmVjdG9yeSA9IHBhdGhuYW1lLnN1YnN0cmluZyggMCwgcGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSApO1xuICBsZXQgcGF0aFN0YXJ0ID0gaXNRdWVyeSA/IHBhdGhuYW1lIDogZGlyZWN0b3J5ICsgJy8nO1xuXG4gIHRoaXMuZ2V0QWJzb2x1dGVQYXRoID0gKCkgPT4gcGF0aFN0YXJ0ICsgdGhpcy5nZXRQYXRoKCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBuYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gaGlkZSBuYXZpZ2F0aW9uXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuaGlkZU5hdiA9IGZ1bmN0aW9uKCkge1xuICBsZXQgbmF2ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuaGlkZU5hdiApO1xuICBpZiAoICFuYXYgKSByZXR1cm47XG5cbiAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHRoaXMubmF2ID0gbmF2O1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5oaWRlTmF2ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5uYXYgKSB0aGlzLm5hdi5zdHlsZS5kaXNwbGF5ID0gJyc7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZXN0cm95IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hbGxPZmYoKTsgLy8gcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgLy8gY2FsbCBkZXN0cm95IG1ldGhvZHNcbiAgZm9yICggbGV0IG1ldGhvZCBpbiBJbmZpbml0ZVNjcm9sbC5kZXN0cm95ICkge1xuICAgIEluZmluaXRlU2Nyb2xsLmRlc3Ryb3lbIG1ldGhvZCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxuXG4gIGRlbGV0ZSB0aGlzLmVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEO1xuICBkZWxldGUgaW5zdGFuY2VzWyB0aGlzLmd1aWQgXTtcbiAgLy8gcmVtb3ZlIGpRdWVyeSBkYXRhLiAjODA3XG4gIGlmICggalF1ZXJ5ICYmIHRoaXMuJGVsZW1lbnQgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgJ2luZmluaXRlU2Nyb2xsJyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gaHR0cHM6Ly9yZW15c2hhcnAuY29tLzIwMTAvMDcvMjEvdGhyb3R0bGluZy1mdW5jdGlvbi1jYWxsc1xuSW5maW5pdGVTY3JvbGwudGhyb3R0bGUgPSBmdW5jdGlvbiggZm4sIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDIwMDtcbiAgbGV0IGxhc3QsIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBub3cgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseSggdGhpcywgYXJncyApO1xuICAgIH07XG4gICAgaWYgKCBsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hvbGQgKSB7XG4gICAgICAvLyBob2xkIG9uIHRvIGl0XG4gICAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cmlnZ2VyLCB0aHJlc2hvbGQgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpZ2dlcigpO1xuICAgIH1cbiAgfTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICBsZXQgaWQgPSBlbGVtICYmIGVsZW0uaW5maW5pdGVTY3JvbGxHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuLy8gc2V0IGludGVybmFsIGpRdWVyeSwgZm9yIFdlYnBhY2sgKyBqUXVlcnkgdjNcbkluZmluaXRlU2Nyb2xsLnNldEpRdWVyeSA9IGZ1bmN0aW9uKCBqcXJ5ICkge1xuICBqUXVlcnkgPSBqcXJ5O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuaHRtbEluaXQoIEluZmluaXRlU2Nyb2xsLCAnaW5maW5pdGUtc2Nyb2xsJyApO1xuXG4vLyBhZGQgbm9vcCBfaW5pdCBtZXRob2QgZm9yIGpRdWVyeSBCcmlkZ2V0LiAjNzY4XG5wcm90by5faW5pdCA9IGZ1bmN0aW9uKCkge307XG5cbmxldCB7IGpRdWVyeUJyaWRnZXQgfSA9IHdpbmRvdztcbmlmICggalF1ZXJ5ICYmIGpRdWVyeUJyaWRnZXQgKSB7XG4gIGpRdWVyeUJyaWRnZXQoICdpbmZpbml0ZVNjcm9sbCcsIEluZmluaXRlU2Nyb2xsLCBqUXVlcnkgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBoaXN0b3J5XG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICBoaXN0b3J5OiAncmVwbGFjZScsXG4gIC8vIGhpc3RvcnlUaXRsZTogZmFsc2UsXG59ICk7XG5cbmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4vLyAtLS0tLSBjcmVhdGUvZGVzdHJveSAtLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuaGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuaGlzdG9yeSApIHJldHVybjtcblxuICAvLyBjaGVjayBmb3Igc2FtZSBvcmlnaW5cbiAgbGluay5ocmVmID0gdGhpcy5nZXRBYnNvbHV0ZVBhdGgoKTtcbiAgLy8gTVMgRWRnZSBkb2VzIG5vdCBoYXZlIG9yaWdpbiBvbiBsaW5rXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMjM2NDkzL1xuICBsZXQgbGlua09yaWdpbiA9IGxpbmsub3JpZ2luIHx8IGxpbmsucHJvdG9jb2wgKyAnLy8nICsgbGluay5ob3N0O1xuICBsZXQgaXNTYW1lT3JpZ2luID0gbGlua09yaWdpbiA9PSBsb2NhdGlvbi5vcmlnaW47XG4gIGlmICggIWlzU2FtZU9yaWdpbiApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnW0luZmluaXRlU2Nyb2xsXSBjYW5ub3Qgc2V0IGhpc3Rvcnkgd2l0aCBkaWZmZXJlbnQgb3JpZ2luOiAnICtcbiAgICAgIGAke2xpbmsub3JpZ2lufSBvbiAke2xvY2F0aW9uLm9yaWdpbn0gLiBIaXN0b3J5IGJlaGF2aW9yIGRpc2FibGVkLmAgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0d28gd2F5cyB0byBoYW5kbGUgY2hhbmdpbmcgaGlzdG9yeVxuICBpZiAoIHRoaXMub3B0aW9ucy5hcHBlbmQgKSB7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5QXBwZW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5UGFnZUxvYWQoKTtcbiAgfVxufTtcblxucHJvdG8uY3JlYXRlSGlzdG9yeUFwcGVuZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIC8vIGFycmF5IG9mIHNjcm9sbCBwb3NpdGlvbnMgb2YgYXBwZW5kZWQgcGFnZXNcbiAgdGhpcy5zY3JvbGxQYWdlcyA9IFtcbiAgICAvLyBmaXJzdCBwYWdlXG4gICAge1xuICAgICAgdG9wOiAwLFxuICAgICAgcGF0aDogbG9jYXRpb24uaHJlZixcbiAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICB9LFxuICBdO1xuICB0aGlzLnNjcm9sbFBhZ2UgPSB0aGlzLnNjcm9sbFBhZ2VzWzBdO1xuICAvLyBldmVudHNcbiAgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciA9IHRoaXMub25TY3JvbGxIaXN0b3J5LmJpbmQoIHRoaXMgKTtcbiAgdGhpcy51bmxvYWRIYW5kbGVyID0gdGhpcy5vblVubG9hZC5iaW5kKCB0aGlzICk7XG4gIHRoaXMuc2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgKTtcbiAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMub25BcHBlbmRIaXN0b3J5ICk7XG4gIHRoaXMuYmluZEhpc3RvcnlBcHBlbmRFdmVudHMoIHRydWUgKTtcbn07XG5cbnByb3RvLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzID0gZnVuY3Rpb24oIGlzQmluZCApIHtcbiAgbGV0IGFkZFJlbW92ZSA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdGhpcy5zY3JvbGxlclsgYWRkUmVtb3ZlIF0oICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyICk7XG4gIHdpbmRvd1sgYWRkUmVtb3ZlIF0oICd1bmxvYWQnLCB0aGlzLnVubG9hZEhhbmRsZXIgKTtcbn07XG5cbnByb3RvLmNyZWF0ZUhpc3RvcnlQYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9uKCAnbG9hZCcsIHRoaXMub25QYWdlTG9hZEhpc3RvcnkgKTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuaGlzdG9yeSA9XG5wcm90by5kZXN0cm95SGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgaXNIaXN0b3J5QXBwZW5kID0gdGhpcy5vcHRpb25zLmhpc3RvcnkgJiYgdGhpcy5vcHRpb25zLmFwcGVuZDtcbiAgaWYgKCBpc0hpc3RvcnlBcHBlbmQgKSB7XG4gICAgdGhpcy5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyggZmFsc2UgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gYXBwZW5kIGhpc3RvcnkgLS0tLS0gLy9cblxucHJvdG8ub25BcHBlbmRIaXN0b3J5ID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApIHtcbiAgLy8gZG8gbm90IHByb2NlZWQgaWYgbm8gaXRlbXMuICM3NzlcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHJldHVybjtcblxuICBsZXQgZmlyc3RJdGVtID0gaXRlbXNbMF07XG4gIGxldCBlbGVtU2Nyb2xsWSA9IHRoaXMuZ2V0RWxlbWVudFNjcm9sbFkoIGZpcnN0SXRlbSApO1xuICAvLyByZXNvbHZlIHBhdGhcbiAgbGluay5ocmVmID0gcGF0aDtcbiAgLy8gYWRkIHBhZ2UgZGF0YSB0byBoYXNoXG4gIHRoaXMuc2Nyb2xsUGFnZXMucHVzaCh7XG4gICAgdG9wOiBlbGVtU2Nyb2xsWSxcbiAgICBwYXRoOiBsaW5rLmhyZWYsXG4gICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICB9KTtcbn07XG5cbnByb3RvLmdldEVsZW1lbnRTY3JvbGxZID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIC0gdGhpcy50b3A7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICB9XG59O1xuXG5wcm90by5vblNjcm9sbEhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3ljbGUgdGhyb3VnaCBwb3NpdGlvbnMsIGZpbmQgYmlnZ2VzdCB3aXRob3V0IGdvaW5nIG92ZXJcbiAgbGV0IHNjcm9sbFBhZ2UgPSB0aGlzLmdldENsb3Nlc3RTY3JvbGxQYWdlKCk7XG4gIC8vIHNldCBoaXN0b3J5IGlmIGNoYW5nZWRcbiAgaWYgKCBzY3JvbGxQYWdlICE9IHRoaXMuc2Nyb2xsUGFnZSApIHtcbiAgICB0aGlzLnNjcm9sbFBhZ2UgPSBzY3JvbGxQYWdlO1xuICAgIHRoaXMuc2V0SGlzdG9yeSggc2Nyb2xsUGFnZS50aXRsZSwgc2Nyb2xsUGFnZS5wYXRoICk7XG4gIH1cbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBJbmZpbml0ZVNjcm9sbCwgJ29uU2Nyb2xsSGlzdG9yeScsIDE1MCApO1xuXG5wcm90by5nZXRDbG9zZXN0U2Nyb2xsUGFnZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc2Nyb2xsVmlld1k7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgc2Nyb2xsVmlld1kgPSB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC8gMjtcbiAgfSBlbHNlIHtcbiAgICBzY3JvbGxWaWV3WSA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICB9XG5cbiAgbGV0IHNjcm9sbFBhZ2U7XG4gIGZvciAoIGxldCBwYWdlIG9mIHRoaXMuc2Nyb2xsUGFnZXMgKSB7XG4gICAgaWYgKCBwYWdlLnRvcCA+PSBzY3JvbGxWaWV3WSApIGJyZWFrO1xuXG4gICAgc2Nyb2xsUGFnZSA9IHBhZ2U7XG4gIH1cbiAgcmV0dXJuIHNjcm9sbFBhZ2U7XG59O1xuXG5wcm90by5zZXRIaXN0b3J5ID0gZnVuY3Rpb24oIHRpdGxlLCBwYXRoICkge1xuICBsZXQgb3B0SGlzdG9yeSA9IHRoaXMub3B0aW9ucy5oaXN0b3J5O1xuICBsZXQgaGlzdG9yeU1ldGhvZCA9IG9wdEhpc3RvcnkgJiYgaGlzdG9yeVsgb3B0SGlzdG9yeSArICdTdGF0ZScgXTtcbiAgaWYgKCAhaGlzdG9yeU1ldGhvZCApIHJldHVybjtcblxuICBoaXN0b3J5WyBvcHRIaXN0b3J5ICsgJ1N0YXRlJyBdKCBudWxsLCB0aXRsZSwgcGF0aCApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5oaXN0b3J5VGl0bGUgKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdoaXN0b3J5JywgbnVsbCwgWyB0aXRsZSwgcGF0aCBdICk7XG59O1xuXG4vLyBzY3JvbGwgdG8gdG9wIHRvIHByZXZlbnQgaW5pdGlhbCBzY3JvbGwtcmVzZXQgYWZ0ZXIgcGFnZSByZWZyZXNoXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MzM5MTUvMTgyMTgzXG5wcm90by5vblVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc2Nyb2xsUGFnZS50b3AgPT09IDAgKSByZXR1cm47XG5cbiAgLy8gY2FsY3VsYXRlIHdoZXJlIHNjcm9sbCBwb3NpdGlvbiB3b3VsZCBiZSBvbiByZWZyZXNoXG4gIGxldCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgLSB0aGlzLnNjcm9sbFBhZ2UudG9wICsgdGhpcy50b3A7XG4gIC8vIGRpc2FibGUgc2Nyb2xsIGV2ZW50IGJlZm9yZSBzZXR0aW5nIHNjcm9sbCAjNjc5XG4gIHRoaXMuZGVzdHJveUhpc3RvcnkoKTtcbiAgc2Nyb2xsVG8oIDAsIHNjcm9sbFkgKTtcbn07XG5cbi8vIC0tLS0tIGxvYWQgaGlzdG9yeSAtLS0tLSAvL1xuXG4vLyB1cGRhdGUgVVJMXG5wcm90by5vblBhZ2VMb2FkSGlzdG9yeSA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCApIHtcbiAgdGhpcy5zZXRIaXN0b3J5KCByZXNwb25zZS50aXRsZSwgcGF0aCApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvKiFcbiAqIEluZmluaXRlIFNjcm9sbCB2NC4wLjFcbiAqIEF1dG9tYXRpY2FsbHkgYWRkIG5leHQgcGFnZVxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIEluZmluaXRlIFNjcm9sbCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKlxuICogaHR0cHM6Ly9pbmZpbml0ZS1zY3JvbGwuY29tXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIE1ldGFmaXp6eVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJy4vcGFnZS1sb2FkJyksXG4gICAgICAgIHJlcXVpcmUoJy4vc2Nyb2xsLXdhdGNoJyksXG4gICAgICAgIHJlcXVpcmUoJy4vaGlzdG9yeScpLFxuICAgICAgICByZXF1aXJlKCcuL2J1dHRvbicpLFxuICAgICAgICByZXF1aXJlKCcuL3N0YXR1cycpLFxuICAgICk7XG4gIH1cblxufSApKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEluZmluaXRlU2Nyb2xsICkge1xuICByZXR1cm4gSW5maW5pdGVTY3JvbGw7XG59ICk7XG4iLCIvLyBwYWdlLWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgLy8gYXBwZW5kOiBmYWxzZSxcbiAgbG9hZE9uU2Nyb2xsOiB0cnVlLFxuICBjaGVja0xhc3RQYWdlOiB0cnVlLFxuICByZXNwb25zZUJvZHk6ICd0ZXh0JyxcbiAgZG9tUGFyc2VSZXNwb25zZTogdHJ1ZSxcbiAgLy8gcHJlZmlsbDogZmFsc2UsXG4gIC8vIG91dGxheWVyOiBudWxsLFxufSApO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUucGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jYW5Mb2FkID0gdHJ1ZTtcbiAgdGhpcy5vbiggJ3Njcm9sbFRocmVzaG9sZCcsIHRoaXMub25TY3JvbGxUaHJlc2hvbGRMb2FkICk7XG4gIHRoaXMub24oICdsb2FkJywgdGhpcy5jaGVja0xhc3RQYWdlICk7XG4gIGlmICggdGhpcy5vcHRpb25zLm91dGxheWVyICkge1xuICAgIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLm9uQXBwZW5kT3V0bGF5ZXIgKTtcbiAgfVxufTtcblxucHJvdG8ub25TY3JvbGxUaHJlc2hvbGRMb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLmxvYWRPblNjcm9sbCApIHRoaXMubG9hZE5leHRQYWdlKCk7XG59O1xuXG5sZXQgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5wcm90by5sb2FkTmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzTG9hZGluZyB8fCAhdGhpcy5jYW5Mb2FkICkgcmV0dXJuO1xuXG4gIGxldCB7IHJlc3BvbnNlQm9keSwgZG9tUGFyc2VSZXNwb25zZSwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG4gIGxldCBwYXRoID0gdGhpcy5nZXRBYnNvbHV0ZVBhdGgoKTtcbiAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICBpZiAoIHR5cGVvZiBmZXRjaE9wdGlvbnMgPT0gJ2Z1bmN0aW9uJyApIGZldGNoT3B0aW9ucyA9IGZldGNoT3B0aW9ucygpO1xuXG4gIGxldCBmZXRjaFByb21pc2UgPSBmZXRjaCggcGF0aCwgZmV0Y2hPcHRpb25zIClcbiAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcbiAgICAgIGlmICggIXJlc3BvbnNlLm9rICkge1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoIHJlc3BvbnNlLnN0YXR1c1RleHQgKTtcbiAgICAgICAgdGhpcy5vblBhZ2VFcnJvciggZXJyb3IsIHBhdGgsIHJlc3BvbnNlICk7XG4gICAgICAgIHJldHVybiB7IHJlc3BvbnNlIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZVsgcmVzcG9uc2VCb2R5IF0oKS50aGVuKCAoIGJvZHkgKSA9PiB7XG4gICAgICAgIGxldCBjYW5Eb21QYXJzZSA9IHJlc3BvbnNlQm9keSA9PSAndGV4dCcgJiYgZG9tUGFyc2VSZXNwb25zZTtcbiAgICAgICAgaWYgKCBjYW5Eb21QYXJzZSApIHtcbiAgICAgICAgICBib2R5ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyggYm9keSwgJ3RleHQvaHRtbCcgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQgKSB7XG4gICAgICAgICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICAgICAgICByZXR1cm4geyBib2R5LCByZXNwb25zZSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uUGFnZUxvYWQoIGJvZHksIHBhdGgsIHJlc3BvbnNlICk7XG4gICAgICAgIH1cbiAgICAgIH0gKTtcbiAgICB9IClcbiAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XG4gICAgICB0aGlzLm9uUGFnZUVycm9yKCBlcnJvciwgcGF0aCApO1xuICAgIH0gKTtcblxuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdyZXF1ZXN0JywgbnVsbCwgWyBwYXRoLCBmZXRjaFByb21pc2UgXSApO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2U7XG59O1xuXG5wcm90by5vblBhZ2VMb2FkID0gZnVuY3Rpb24oIGJvZHksIHBhdGgsIHJlc3BvbnNlICkge1xuICAvLyBkb25lIGxvYWRpbmcgaWYgbm90IGFwcGVuZGluZ1xuICBpZiAoICF0aGlzLm9wdGlvbnMuYXBwZW5kICkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5wYWdlSW5kZXgrKztcbiAgdGhpcy5sb2FkQ291bnQrKztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnbG9hZCcsIG51bGwsIFsgYm9keSwgcGF0aCwgcmVzcG9uc2UgXSApO1xuICByZXR1cm4gdGhpcy5hcHBlbmROZXh0UGFnZSggYm9keSwgcGF0aCwgcmVzcG9uc2UgKTtcbn07XG5cbnByb3RvLmFwcGVuZE5leHRQYWdlID0gZnVuY3Rpb24oIGJvZHksIHBhdGgsIHJlc3BvbnNlICkge1xuICBsZXQgeyBhcHBlbmQsIHJlc3BvbnNlQm9keSwgZG9tUGFyc2VSZXNwb25zZSB9ID0gdGhpcy5vcHRpb25zO1xuICAvLyBkbyBub3QgYXBwZW5kIGpzb25cbiAgbGV0IGlzRG9jdW1lbnQgPSByZXNwb25zZUJvZHkgPT0gJ3RleHQnICYmIGRvbVBhcnNlUmVzcG9uc2U7XG4gIGlmICggIWlzRG9jdW1lbnQgfHwgIWFwcGVuZCApIHJldHVybiB7IGJvZHksIHJlc3BvbnNlIH07XG5cbiAgbGV0IGl0ZW1zID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKCBhcHBlbmQgKTtcbiAgbGV0IHByb21pc2VWYWx1ZSA9IHsgYm9keSwgcmVzcG9uc2UsIGl0ZW1zIH07XG4gIC8vIGxhc3QgcGFnZSBoaXQgaWYgbm8gaXRlbXMuICM4NDBcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgIHJldHVybiBwcm9taXNlVmFsdWU7XG4gIH1cblxuICBsZXQgZnJhZ21lbnQgPSBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApO1xuICBsZXQgYXBwZW5kUmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHBlbmRJdGVtcyggaXRlbXMsIGZyYWdtZW50ICk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdhcHBlbmQnLCBudWxsLCBbIGJvZHksIHBhdGgsIGl0ZW1zLCByZXNwb25zZSBdICk7XG4gICAgcmV0dXJuIHByb21pc2VWYWx1ZTtcbiAgfTtcblxuICAvLyBUT0RPIGFkZCBob29rIGZvciBvcHRpb24gdG8gdHJpZ2dlciBhcHBlbmRSZWFkeVxuICBpZiAoIHRoaXMub3B0aW9ucy5vdXRsYXllciApIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRPdXRsYXllckl0ZW1zKCBmcmFnbWVudCwgYXBwZW5kUmVhZHkgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXBwZW5kUmVhZHkoKTtcbiAgfVxufTtcblxucHJvdG8uYXBwZW5kSXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGZyYWdtZW50ICkge1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXG4gIC8vIGdldCBmcmFnbWVudCBpZiBub3QgcHJvdmlkZWRcbiAgZnJhZ21lbnQgPSBmcmFnbWVudCB8fCBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApO1xuICByZWZyZXNoU2NyaXB0cyggZnJhZ21lbnQgKTtcbiAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xufTtcblxuZnVuY3Rpb24gZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKSB7XG4gIC8vIGFkZCBpdGVtcyB0byBmcmFnbWVudFxuICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGlmICggaXRlbXMgKSBmcmFnbWVudC5hcHBlbmQoIC4uLml0ZW1zICk7XG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuLy8gcmVwbGFjZSA8c2NyaXB0PnMgd2l0aCBjb3BpZXMgc28gdGhleSBsb2FkXG4vLyA8c2NyaXB0PnMgYWRkZWQgYnkgSW5maW5pdGVTY3JvbGwgd2lsbCBub3QgbG9hZFxuLy8gc2ltaWxhciB0byBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MTA5OTVcbmZ1bmN0aW9uIHJlZnJlc2hTY3JpcHRzKCBmcmFnbWVudCApIHtcbiAgbGV0IHNjcmlwdHMgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgZm9yICggbGV0IHNjcmlwdCBvZiBzY3JpcHRzICkge1xuICAgIGxldCBmcmVzaFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIC8vIGNvcHkgYXR0cmlidXRlc1xuICAgIGxldCBhdHRycyA9IHNjcmlwdC5hdHRyaWJ1dGVzO1xuICAgIGZvciAoIGxldCBhdHRyIG9mIGF0dHJzICkge1xuICAgICAgZnJlc2hTY3JpcHQuc2V0QXR0cmlidXRlKCBhdHRyLm5hbWUsIGF0dHIudmFsdWUgKTtcbiAgICB9XG4gICAgLy8gY29weSBpbm5lciBzY3JpcHQgY29kZS4gIzcxOCwgIzc4MlxuICAgIGZyZXNoU2NyaXB0LmlubmVySFRNTCA9IHNjcmlwdC5pbm5lckhUTUw7XG4gICAgc2NyaXB0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCBmcmVzaFNjcmlwdCwgc2NyaXB0ICk7XG4gIH1cbn1cblxuLy8gLS0tLS0gb3V0bGF5ZXIgLS0tLS0gLy9cblxucHJvdG8uYXBwZW5kT3V0bGF5ZXJJdGVtcyA9IGZ1bmN0aW9uKCBmcmFnbWVudCwgYXBwZW5kUmVhZHkgKSB7XG4gIGxldCBpbWFnZXNMb2FkZWQgPSBJbmZpbml0ZVNjcm9sbC5pbWFnZXNMb2FkZWQgfHwgd2luZG93LmltYWdlc0xvYWRlZDtcbiAgaWYgKCAhaW1hZ2VzTG9hZGVkICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tJbmZpbml0ZVNjcm9sbF0gaW1hZ2VzTG9hZGVkIHJlcXVpcmVkIGZvciBvdXRsYXllciBvcHRpb24nKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhcHBlbmQgb25jZSBpbWFnZXMgbG9hZGVkXG4gIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24oIHJlc29sdmUgKSB7XG4gICAgaW1hZ2VzTG9hZGVkKCBmcmFnbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgYm9keVJlc3BvbnNlID0gYXBwZW5kUmVhZHkoKTtcbiAgICAgIHJlc29sdmUoIGJvZHlSZXNwb25zZSApO1xuICAgIH0gKTtcbiAgfSApO1xufTtcblxucHJvdG8ub25BcHBlbmRPdXRsYXllciA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSB7XG4gIHRoaXMub3B0aW9ucy5vdXRsYXllci5hcHBlbmRlZCggaXRlbXMgKTtcbn07XG5cbi8vIC0tLS0tIGNoZWNrTGFzdFBhZ2UgLS0tLS0gLy9cblxuLy8gY2hlY2sgcmVzcG9uc2UgZm9yIG5leHQgZWxlbWVudFxucHJvdG8uY2hlY2tMYXN0UGFnZSA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoICkge1xuICBsZXQgeyBjaGVja0xhc3RQYWdlLCBwYXRoOiBwYXRoT3B0IH0gPSB0aGlzLm9wdGlvbnM7XG4gIGlmICggIWNoZWNrTGFzdFBhZ2UgKSByZXR1cm47XG5cbiAgLy8gaWYgcGF0aCBpcyBmdW5jdGlvbiwgY2hlY2sgaWYgbmV4dCBwYXRoIGlzIHRydXRoeVxuICBpZiAoIHR5cGVvZiBwYXRoT3B0ID09ICdmdW5jdGlvbicgKSB7XG4gICAgbGV0IG5leHRQYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgaWYgKCAhbmV4dFBhdGggKSB7XG4gICAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgc2VsZWN0b3IgZnJvbSBjaGVja0xhc3RQYWdlIG9yIHBhdGggb3B0aW9uXG4gIGxldCBzZWxlY3RvcjtcbiAgaWYgKCB0eXBlb2YgY2hlY2tMYXN0UGFnZSA9PSAnc3RyaW5nJyApIHtcbiAgICBzZWxlY3RvciA9IGNoZWNrTGFzdFBhZ2U7XG4gIH0gZWxzZSBpZiAoIHRoaXMuaXNQYXRoU2VsZWN0b3IgKSB7XG4gICAgLy8gcGF0aCBvcHRpb24gaXMgc2VsZWN0b3Igc3RyaW5nXG4gICAgc2VsZWN0b3IgPSBwYXRoT3B0O1xuICB9XG4gIC8vIGNoZWNrIGxhc3QgcGFnZSBmb3Igc2VsZWN0b3JcbiAgLy8gYmFpbCBpZiBubyBzZWxlY3RvciBvciBub3QgZG9jdW1lbnQgcmVzcG9uc2VcbiAgaWYgKCAhc2VsZWN0b3IgfHwgIWJvZHkucXVlcnlTZWxlY3RvciApIHJldHVybjtcblxuICAvLyBjaGVjayBpZiByZXNwb25zZSBoYXMgc2VsZWN0b3JcbiAgbGV0IG5leHRFbGVtID0gYm9keS5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuICBpZiAoICFuZXh0RWxlbSApIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG59O1xuXG5wcm90by5sYXN0UGFnZVJlYWNoZWQgPSBmdW5jdGlvbiggYm9keSwgcGF0aCApIHtcbiAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2xhc3QnLCBudWxsLCBbIGJvZHksIHBhdGggXSApO1xufTtcblxuLy8gLS0tLS0gZXJyb3IgLS0tLS0gLy9cblxucHJvdG8ub25QYWdlRXJyb3IgPSBmdW5jdGlvbiggZXJyb3IsIHBhdGgsIHJlc3BvbnNlICkge1xuICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB0aGlzLmNhbkxvYWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZXJyb3InLCBudWxsLCBbIGVycm9yLCBwYXRoLCByZXNwb25zZSBdICk7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHByZWZpbGwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnByZWZpbGwgKSByZXR1cm47XG5cbiAgbGV0IGFwcGVuZCA9IHRoaXMub3B0aW9ucy5hcHBlbmQ7XG4gIGlmICggIWFwcGVuZCApIHtcbiAgICBjb25zb2xlLmVycm9yKGBhcHBlbmQgb3B0aW9uIHJlcXVpcmVkIGZvciBwcmVmaWxsLiBTZXQgYXMgOiR7YXBwZW5kfWApO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIHRoaXMuaXNQcmVmaWxsaW5nID0gdHJ1ZTtcbiAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMucHJlZmlsbCApO1xuICB0aGlzLm9uY2UoICdlcnJvcicsIHRoaXMuc3RvcFByZWZpbGwgKTtcbiAgdGhpcy5vbmNlKCAnbGFzdCcsIHRoaXMuc3RvcFByZWZpbGwgKTtcbiAgdGhpcy5wcmVmaWxsKCk7XG59O1xuXG5wcm90by5wcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIGxldCBkaXN0YW5jZSA9IHRoaXMuZ2V0UHJlZmlsbERpc3RhbmNlKCk7XG4gIHRoaXMuaXNQcmVmaWxsaW5nID0gZGlzdGFuY2UgPj0gMDtcbiAgaWYgKCB0aGlzLmlzUHJlZmlsbGluZyApIHtcbiAgICB0aGlzLmxvZygncHJlZmlsbCcpO1xuICAgIHRoaXMubG9hZE5leHRQYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdG9wUHJlZmlsbCgpO1xuICB9XG59O1xuXG5wcm90by5nZXRQcmVmaWxsRGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgLy8gZWxlbWVudCBzY3JvbGxcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQgLSB0aGlzLnNjcm9sbGVyLnNjcm9sbEhlaWdodDtcbiAgfVxuICAvLyB3aW5kb3dcbiAgcmV0dXJuIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbn07XG5cbnByb3RvLnN0b3BQcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMubG9nKCdzdG9wUHJlZmlsbCcpO1xuICB0aGlzLm9mZiggJ2FwcGVuZCcsIHRoaXMucHJlZmlsbCApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBzY3JvbGwtd2F0Y2hcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgc2Nyb2xsVGhyZXNob2xkOiA0MDAsXG4gIC8vIGVsZW1lbnRTY3JvbGw6IG51bGwsXG59ICk7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5zY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAvLyBldmVudHNcbiAgdGhpcy5wYWdlU2Nyb2xsSGFuZGxlciA9IHRoaXMub25QYWdlU2Nyb2xsLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5yZXNpemVIYW5kbGVyID0gdGhpcy5vblJlc2l6ZS5iaW5kKCB0aGlzICk7XG5cbiAgbGV0IHNjcm9sbFRocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQ7XG4gIGxldCBpc0VuYWJsZSA9IHNjcm9sbFRocmVzaG9sZCB8fCBzY3JvbGxUaHJlc2hvbGQgPT09IDA7XG4gIGlmICggaXNFbmFibGUgKSB0aGlzLmVuYWJsZVNjcm9sbFdhdGNoKCk7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LnNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVNjcm9sbFdhdGNoKCk7XG59O1xuXG5wcm90by5lbmFibGVTY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNTY3JvbGxXYXRjaGluZyApIHJldHVybjtcblxuICB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgPSB0cnVlO1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIC8vIFRPRE8gZGlzYWJsZSBhZnRlciBlcnJvcj9cbiAgdGhpcy5vbiggJ2xhc3QnLCB0aGlzLmRpc2FibGVTY3JvbGxXYXRjaCApO1xuICB0aGlzLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyggdHJ1ZSApO1xufTtcblxucHJvdG8uZGlzYWJsZVNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNTY3JvbGxXYXRjaGluZyApIHJldHVybjtcblxuICB0aGlzLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyggZmFsc2UgKTtcbiAgZGVsZXRlIHRoaXMuaXNTY3JvbGxXYXRjaGluZztcbn07XG5cbnByb3RvLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyA9IGZ1bmN0aW9uKCBpc0JpbmQgKSB7XG4gIGxldCBhZGRSZW1vdmUgPSBpc0JpbmQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHRoaXMuc2Nyb2xsZXJbIGFkZFJlbW92ZSBdKCAnc2Nyb2xsJywgdGhpcy5wYWdlU2Nyb2xsSGFuZGxlciApO1xuICB3aW5kb3dbIGFkZFJlbW92ZSBdKCAncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyICk7XG59O1xuXG5wcm90by5vblBhZ2VTY3JvbGwgPSBJbmZpbml0ZVNjcm9sbC50aHJvdHRsZSggZnVuY3Rpb24oKSB7XG4gIGxldCBkaXN0YW5jZSA9IHRoaXMuZ2V0Qm90dG9tRGlzdGFuY2UoKTtcbiAgaWYgKCBkaXN0YW5jZSA8PSB0aGlzLm9wdGlvbnMuc2Nyb2xsVGhyZXNob2xkICkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc2Nyb2xsVGhyZXNob2xkJyk7XG4gIH1cbn0gKTtcblxucHJvdG8uZ2V0Qm90dG9tRGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGJvdHRvbSwgc2Nyb2xsWTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICBib3R0b20gPSB0aGlzLnNjcm9sbGVyLnNjcm9sbEhlaWdodDtcbiAgICBzY3JvbGxZID0gdGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGJvdHRvbSAtIHNjcm9sbFk7XG59O1xuXG5wcm90by5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIEluZmluaXRlU2Nyb2xsLCAnb25SZXNpemUnLCAxNTAgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBzdGF0dXNcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbi8vIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLnN0YXR1cyA9IG51bGw7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5zdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXR1c0VsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5zdGF0dXMgKTtcbiAgaWYgKCAhc3RhdHVzRWxlbSApIHJldHVybjtcblxuICAvLyBlbGVtZW50c1xuICB0aGlzLnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtO1xuICB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHMgPSB7XG4gICAgcmVxdWVzdDogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLXJlcXVlc3QnKSxcbiAgICBlcnJvcjogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLWVycm9yJyksXG4gICAgbGFzdDogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLWxhc3QnKSxcbiAgfTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMub24oICdyZXF1ZXN0JywgdGhpcy5zaG93UmVxdWVzdFN0YXR1cyApO1xuICB0aGlzLm9uKCAnZXJyb3InLCB0aGlzLnNob3dFcnJvclN0YXR1cyApO1xuICB0aGlzLm9uKCAnbGFzdCcsIHRoaXMuc2hvd0xhc3RTdGF0dXMgKTtcbiAgdGhpcy5iaW5kSGlkZVN0YXR1cygnb24nKTtcbn07XG5cbnByb3RvLmJpbmRIaWRlU3RhdHVzID0gZnVuY3Rpb24oIGJpbmRNZXRob2QgKSB7XG4gIGxldCBoaWRlRXZlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kID8gJ2FwcGVuZCcgOiAnbG9hZCc7XG4gIHRoaXNbIGJpbmRNZXRob2QgXSggaGlkZUV2ZW50LCB0aGlzLmhpZGVBbGxTdGF0dXMgKTtcbn07XG5cbnByb3RvLnNob3dSZXF1ZXN0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygncmVxdWVzdCcpO1xufTtcblxucHJvdG8uc2hvd0Vycm9yU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygnZXJyb3InKTtcbn07XG5cbnByb3RvLnNob3dMYXN0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygnbGFzdCcpO1xuICAvLyBwcmV2ZW50IGxhc3QgdGhlbiBhcHBlbmQgZXZlbnQgcmFjZSBjb25kaXRpb24gZnJvbSBzaG93aW5nIGxhc3Qgc3RhdHVzICM3MDZcbiAgdGhpcy5iaW5kSGlkZVN0YXR1cygnb2ZmJyk7XG59O1xuXG5wcm90by5zaG93U3RhdHVzID0gZnVuY3Rpb24oIGV2ZW50TmFtZSApIHtcbiAgc2hvdyggdGhpcy5zdGF0dXNFbGVtZW50ICk7XG4gIHRoaXMuaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMoKTtcbiAgbGV0IGV2ZW50RWxlbSA9IHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50c1sgZXZlbnROYW1lIF07XG4gIHNob3coIGV2ZW50RWxlbSApO1xufTtcblxucHJvdG8uaGlkZUFsbFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBoaWRlKCB0aGlzLnN0YXR1c0VsZW1lbnQgKTtcbiAgdGhpcy5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cygpO1xufTtcblxucHJvdG8uaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgZm9yICggbGV0IHR5cGUgaW4gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzICkge1xuICAgIGxldCBldmVudEVsZW0gPSB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHNbIHR5cGUgXTtcbiAgICBoaWRlKCBldmVudEVsZW0gKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGhpZGUoIGVsZW0gKSB7XG4gIHNldERpc3BsYXkoIGVsZW0sICdub25lJyApO1xufVxuXG5mdW5jdGlvbiBzaG93KCBlbGVtICkge1xuICBzZXREaXNwbGF5KCBlbGVtLCAnYmxvY2snICk7XG59XG5cbmZ1bmN0aW9uIHNldERpc3BsYXkoIGVsZW0sIHZhbHVlICkge1xuICBpZiAoIGVsZW0gKSB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvKipcbiAqIEV2RW1pdHRlciB2Mi4wLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbmxldCBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSByZXR1cm4gdGhpcztcblxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgbGV0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICBsZXQgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCAhbGlzdGVuZXJzLmluY2x1ZGVzKCBsaXN0ZW5lciApICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSByZXR1cm4gdGhpcztcblxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgbGV0IG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIGxldCBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICBsZXQgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHJldHVybiB0aGlzO1xuXG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSggMCApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICBsZXQgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggbGV0IGxpc3RlbmVyIG9mIGxpc3RlbmVycyApIHtcbiAgICBsZXQgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0gKSApO1xuIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2My4wLjBcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCBnbG9iYWwgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGdsb2JhbC5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KCBnbG9iYWwgKTtcbiAgfVxuXG59KCB0aGlzLCBmdW5jdGlvbiBmYWN0b3J5KCBnbG9iYWwgKSB7XG5cbmxldCB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIGEsIGIgKTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSByZXR1cm4gb2JqO1xuXG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSByZXR1cm4gW107XG5cbiAgbGV0IGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICBpZiAoIGlzQXJyYXlMaWtlICkgcmV0dXJuIFsgLi4ub2JqIF07XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICBsZXQgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBsZXQgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuXG4gIHJldHVybiBlbGVtc1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIC5maWx0ZXIoICggZWxlbSApID0+IGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApXG4gICAgLnJlZHVjZSggKCBmZkVsZW1zLCBlbGVtICkgPT4ge1xuICAgICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgICAgcmV0dXJuIGZmRWxlbXM7XG4gICAgICB9XG4gICAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgICAgLy8gZmlsdGVyXG4gICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICB9XG4gICAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgICBsZXQgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgICBmZkVsZW1zID0gZmZFbGVtcy5jb25jYXQoIC4uLmNoaWxkRWxlbXMgKTtcbiAgICAgIHJldHVybiBmZkVsZW1zO1xuICAgIH0sIFtdICk7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIGxldCBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIGxldCB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KCB0aGlzWyB0aW1lb3V0TmFtZSBdICk7XG5cbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgbWV0aG9kLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgKTtcbiAgfTtcbn07XG5cbi8vIC0tLS0tIGRvY1JlYWR5IC0tLS0tIC8vXG5cbnV0aWxzLmRvY1JlYWR5ID0gZnVuY3Rpb24oIG9uRG9jUmVhZHkgKSB7XG4gIGxldCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIG9uRG9jUmVhZHkgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIG9uRG9jUmVhZHkgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gaHRtbEluaXQgLS0tLS0gLy9cblxuLy8gaHR0cDovL2JpdC5seS8zb1lMdXNjXG51dGlscy50b0Rhc2hlZCA9IGZ1bmN0aW9uKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyguKShbQS1aXSkvZywgZnVuY3Rpb24oIG1hdGNoLCAkMSwgJDIgKSB7XG4gICAgcmV0dXJuICQxICsgJy0nICsgJDI7XG4gIH0gKS50b0xvd2VyQ2FzZSgpO1xufTtcblxubGV0IGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcblxuLy8gYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuLy8gaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbi8vIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIGxldCBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgbGV0IGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBgWyR7ZGF0YUF0dHJ9XWAgKTtcbiAgICBsZXQgalF1ZXJ5ID0gZ2xvYmFsLmpRdWVyeTtcblxuICAgIFsgLi4uZGF0YUF0dHJFbGVtcyBdLmZvckVhY2goICggZWxlbSApID0+IHtcbiAgICAgIGxldCBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICk7XG4gICAgICBsZXQgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggYEVycm9yIHBhcnNpbmcgJHtkYXRhQXR0cn0gb24gJHtlbGVtLmNsYXNzTmFtZX06ICR7ZXJyb3J9YCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBXaWRnZXRDbGFzcyggZWxlbSwgb3B0aW9ucyApO1xuICAgICAgLy8gbWFrZSBhdmFpbGFibGUgdmlhICQoKS5kYXRhKCduYW1lc3BhY2UnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSApO1xuXG4gIH0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0gKSApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNwb25zaXZlQXV0b0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVzcG9uc2l2ZUF1dG9IZWlnaHQoc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVBdXRvSGVpZ2h0KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucnVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNwb25zaXZlQXV0b0hlaWdodCwgW3tcbiAgICBrZXk6ICdyZWNhbGMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFrZUdyb3VwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VHcm91cHMoZWxlbWVudHMpIHtcbiAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9KTtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnRzWzBdKS50b3A7XG4gICAgICBncm91cFswXSA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudCkudG9wICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICBoZWlnaHQgPSAoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3A7XG4gICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgZ3JvdXBbaWR4XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwW2lkeF0ucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhdXRvSGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b0hlaWdodChncm91cCkge1xuICAgICAgdmFyIGhlaWdodHMgPSBncm91cC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gY29tcHV0ZWRTdHlsZS5ib3hTaXppbmc7XG4gICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCkgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoaGVpZ2h0cykpO1xuICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdydW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcblxuICAgICAgdmFyIGdyb3VwcyA9IHRoaXMubWFrZUdyb3VwcyhlbGVtZW50cyk7XG4gICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgX3RoaXMyLmF1dG9IZWlnaHQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNwb25zaXZlQXV0b0hlaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG52YXIgZ2V0U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG59O1xuXG52YXIgZ2V0T2Zmc2V0ID0gZXhwb3J0cy5nZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsVG9wKCksXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZ2V0U2Nyb2xsTGVmdCgpXG4gIH07XG59OyJdfQ==
