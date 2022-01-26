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

var _executed = /*#__PURE__*/new WeakMap();

var EqualHeightElements = function EqualHeightElements() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, EqualHeightElements);

  _executed.set(this, {
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

var _footerPositionState = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowLoad = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _fixedFooter = /*#__PURE__*/new WeakMap();

var _parallaxFooter = /*#__PURE__*/new WeakMap();

var Footer = function Footer() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Footer);

  _footerPositionState.set(this, {
    writable: true,
    value: null
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
      (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _fixedFooter.set(this, {
    writable: true,
    value: function value() {
      var _DOM$WPAdminbar$offse, _DOM$WPAdminbar, _DOM$footer$footerBar, _DOM$footer$footerBar2;

      if (!document.body.classList.contains("has-fixed-footer")) {
        return;
      }

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

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _utils = require("../../lib/utils");

var _fullScreen = _interopRequireDefault(require("./menu/full-screen"));

var _mega = _interopRequireDefault(require("./menu/mega"));

var _currentElem = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onNoClickMenuItemClick = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseover = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseout = /*#__PURE__*/new WeakMap();

var _onEnter = /*#__PURE__*/new WeakMap();

var _onLeave = /*#__PURE__*/new WeakMap();

var Menu = function Menu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Menu);

  _currentElem.set(this, {
    writable: true,
    value: void 0
  });

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
          parentMenuItem.addEventListener("mouseover", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseover));
          parentMenuItem.addEventListener("mouseout", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseout));
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

  _onParentMenuItemMouseover.set(this, {
    writable: true,
    value: function value(event) {
      if ((0, _classPrivateFieldGet2["default"])(_this, _currentElem) && (0, _classPrivateFieldGet2["default"])(_this, _currentElem).contains(event.relatedTarget)) {
        return;
      }

      (0, _classPrivateFieldSet2["default"])(_this, _currentElem, event.currentTarget);
      (0, _classPrivateFieldGet2["default"])(_this, _onEnter).call(_this, (0, _classPrivateFieldGet2["default"])(_this, _currentElem));
    }
  });

  _onParentMenuItemMouseout.set(this, {
    writable: true,
    value: function value(event) {
      if (!(0, _classPrivateFieldGet2["default"])(_this, _currentElem) || (0, _classPrivateFieldGet2["default"])(_this, _currentElem).contains(event.relatedTarget)) {
        return;
      } // we left the <a>. really.


      (0, _classPrivateFieldGet2["default"])(_this, _onLeave).call(_this, (0, _classPrivateFieldGet2["default"])(_this, _currentElem));
      (0, _classPrivateFieldSet2["default"])(_this, _currentElem, null);
    }
  });

  _onEnter.set(this, {
    writable: true,
    value: function value(parentMenuItem) {
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.add("sfHover");
      (0, _utils.fadeIn)(subMenu, {
        callback: function callback() {}
      });
    }
  });

  _onLeave.set(this, {
    writable: true,
    value: function value(parentMenuItem) {
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.remove("sfHover");
      subMenu.style.pointerEvents = "none";
      (0, _utils.fadeOut)(subMenu, {
        callback: function callback() {
          subMenu.style.pointerEvents = null;
          parentMenuItem.classList.contains("sfHover") && (0, _classPrivateFieldGet2["default"])(_this, _onEnter).call(_this, parentMenuItem);
        }
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Menu;
exports["default"] = _default;

},{"../../lib/utils":4,"./menu/full-screen":11,"./menu/mega":12,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],11:[function(require,module,exports){
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
      if (event.currentTarget.getAttribute("href").substring(0, 1) === "#") {
        event.preventDefault();
      }

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

  _setupEventListeners.set(this, {
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

  _closeSidr.set(this, {
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

var _responsiveAutoHeight = _interopRequireDefault(require("responsive-auto-height"));

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
        imagesLoaded(items, function () {
          // Blog masonry isotope
          if (_this2.element.classList.contains("blog-masonry-grid")) {
            oceanwp.theme.blogMasonry.isotop.appended(items); // Fix Gallery posts

            if (!!_this2.element.querySelector(".gallery-format")) {
              setTimeout(function () {
                oceanwp.theme.blogMasonry.isotop.layout();
              }, 600 + 1);
            }
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
        imagesLoaded(items, function () {
          // Equal height elements
          if (!_constants.DOM.body.classList.contains("no-matchheight")) {
            var entryItemsSelectors = Array.from(items).map(function (item) {
              return "#".concat(item.id, " .blog-entry-inner");
            });
            console.log(entryItemsSelectors.join(","));
            new _responsiveAutoHeight["default"](entryItemsSelectors.join(","));
          }
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

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"infinite-scroll":49,"responsive-auto-height":55}],18:[function(require,module,exports){
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

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onScrollItemClick = /*#__PURE__*/new WeakMap();

var _getAdminBarHeight = /*#__PURE__*/new WeakMap();

var _getTopbarHeight = /*#__PURE__*/new WeakMap();

var _getStickyHeaderHeight = /*#__PURE__*/new WeakMap();

var ScrollEffect = function ScrollEffect() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollEffect);

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

      if (scrollItem.classList.contains("elementor-item-anchor") && scrollItem.classList.contains("has-submenu")) {
        return;
      }

      if (!scrollItem.classList.contains("omw-open-modal") && !scrollItem.closest(".omw-open-modal") && !scrollItem.classList.contains("oew-modal-button") && !scrollItem.closest(".oew-modal-button") && !scrollItem.classList.contains("opl-link") && !scrollItem.parentNode.classList.contains("opl-link") && !scrollItem.classList.contains("sidr-class-opl-link") && !scrollItem.parentNode.classList.contains("sidr-class-opl-link") && !scrollItem.classList.contains("acomment-reply") && !scrollItem.classList.contains("htb-nav-link") && !scrollItem.classList.contains("upload-file")) {
        var href = scrollItem.getAttribute("href");
        var id = href.substring(href.indexOf("#")).slice(1);
        var targetElem = null;

        if ((0, _utils.isSelectorValid)("#".concat(id))) {
          targetElem = document.querySelector("#".concat(id));
        }

        if (id != "" && !!targetElem) {
          event.preventDefault();
          event.stopPropagation();
          var scrollPosition = (0, _utils.offset)(targetElem).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });
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

      if (!!((_document$querySelect = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect !== void 0 && _document$querySelect.firstElementChild.classList.contains("elementor-sticky"))) {
        var _document$querySelect2;

        return (_document$querySelect2 = document.querySelector(".elementor-section-wrap")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.firstElementChild.offsetHeight;
      }

      return 0;
    }
  });

  if (!_constants.DOM.body.classList.contains("single-product") && !_constants.DOM.body.classList.contains("no-local-scroll")) {
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = ScrollEffect;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],21:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvcGFnZS1sb2FkLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zY3JvbGwtd2F0Y2guanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3N0YXR1cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FMUztBQU1mLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FORztBQU9mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQVBFO0FBUWYsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICB3cmFwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgc2l0ZUZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIiksXHJcbiAgICAgICAgY2FsbG91dEZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItY2FsbG91dC13cmFwXCIpLFxyXG4gICAgICAgIGZvb3RlckJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItYmFyXCIpLFxyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiaW1wb3J0IFwiLi9saWIvZWxlbWVudFwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4vdGhlbWUvdGhlbWVcIjtcclxuXHJcbmNsYXNzIE9jZWFuV1Age1xyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuKFwidXNlIHNjcmlwdFwiKTtcclxuXHJcbndpbmRvdy5vY2VhbndwID0gbmV3IE9jZWFuV1AoKTtcclxub2NlYW53cC5zdGFydCgpO1xyXG4iLCJFbGVtZW50LnByb3RvdHlwZS5vY2VhblBhcmVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xyXG4gICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgdmFyIGlzaGF2ZXNlbGVjdG9yID0gc2VsZWN0b3IgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQpICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc2hhdmVzZWxlY3RvciB8fCBlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50cztcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW5cIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLWJvdHRvbVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVRvZ2dsZSA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCJcclxuICAgICAgICA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbilcclxuICAgICAgICA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIlxyXG4gICAgICAgID8gZmFkZUluKGVsZW1lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgOiBmYWRlT3V0KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhKFxyXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0V2lkdGggfHxcclxuICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodCB8fFxyXG4gICAgICAgIGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGhcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSBlID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSBvID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmXHJcbiAgICAgICAgICAgICAgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICBvICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgby5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0b3JWYWxpZCA9IChkdW1teUVsZW1lbnQgPT4gc2VsZWN0b3IgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdW1teUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nTWFzb25yeSB7XG4gICAgaXNvdG9wO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLmJsb2cubWFzb25yeUdyaWRzPy5mb3JFYWNoKChibG9nTWFzb25yeUdyaWQpID0+IHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChibG9nTWFzb25yeUdyaWQsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wID0gbmV3IElzb3RvcGUoYmxvZ01hc29ucnlHcmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXNvdG9wZS1lbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiBvcHRpb25zLmlzUlRMID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBSZXNwb25zaXZlQXV0b0hlaWdodCBmcm9tIFwicmVzcG9uc2l2ZS1hdXRvLWhlaWdodFwiO1xyXG5cclxuY2xhc3MgRXF1YWxIZWlnaHRFbGVtZW50cyB7XHJcbiAgICAjZXhlY3V0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgIXRoaXMuI2V4ZWN1dGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKSkge1xyXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2l2ZUF1dG9IZWlnaHQoXCIuYmxvZy1lcXVhbC1oZWlnaHRzIC5ibG9nLWVudHJ5LWlubmVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF0Y2gtaGVpZ2h0LWdyaWQgLm1hdGNoLWhlaWdodC1jb250ZW50XCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zaXZlQXV0b0hlaWdodChcclxuICAgICAgICAgICAgICAgIFwiLm1hdGNoLWhlaWdodC1ncmlkIC5tYXRjaC1oZWlnaHQtY29udGVudFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNleGVjdXRlZCA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVhbEhlaWdodEVsZW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gICAgI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLm1haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLiNvbldpbmRvd0xvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93TG9hZCA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhlZEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLWZpeGVkLWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3cEFkbWluYmFySGVpZ2h0ID0gRE9NLldQQWRtaW5iYXI/Lm9mZnNldEhlaWdodCA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGZvb3RlckJhckhlaWdodCA9IERPTS5mb290ZXIuZm9vdGVyQmFyPy5vZmZzZXRIZWlnaHQgPz8gMDtcclxuICAgICAgICBjb25zdCBodG1sSGVpZ2h0ID0gRE9NLmh0bWwub2Zmc2V0SGVpZ2h0IC0gd3BBZG1pbmJhckhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGh0bWxIZWlnaHQgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgRE9NLndyYXAuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICR7d3BBZG1pbmJhckhlaWdodH1weCAtICR7Zm9vdGVyQmFySGVpZ2h0fXB4KTtcclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIGlmICghIURPTS5mb290ZXIuY2FsbG91dEZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEhRE9NLmZvb3Rlci5zaXRlRm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLnNpdGVGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBcImNoYW5nZWRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPT09IFwiY2hhbmdlZFwiKSB7XHJcbiAgICAgICAgICAgIERPTS53cmFwLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuc2l0ZUZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNmb290ZXJQb3NpdGlvblN0YXRlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNwYXJhbGxheEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXBhcmFsbGF4LWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFpblNlY3Rpb25NYXJnaW5Cb3R0b20gKz0gRE9NLmZvb3Rlci5wYXJhbGxheD8ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghIURPTS5mb290ZXIuY2FsbG91dEZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5ib3R0b20gPSBgJHttYWluU2VjdGlvbk1hcmdpbkJvdHRvbX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpblNlY3Rpb25NYXJnaW5Cb3R0b20gKz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBET00ubWFpbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHttYWluU2VjdGlvbk1hcmdpbkJvdHRvbX1weGA7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCBWZXJ0aWNhbEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvdmVydGljYWxcIjtcclxuXHJcbmNsYXNzIEhlYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsID0gbmV3IFZlcnRpY2FsSGVhZGVyKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgVmVydGljYWxIZWFkZXIge1xyXG4gICAgI21lbnVJdGVtc1BsdXNJY29uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLmhlYWRlci52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLmhlYWRlci52ZXJ0aWNhbC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbjpub3QoLmJ0bikgPiBhXCIpLmZvckVhY2goKG1lbnVMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVMaW5rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD1cIjBcIj48L3NwYW4+Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPyBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxyXG4gICAgICAgICAgICAgICAgOiBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG5cclxuICAgICAgICBuZXcgUGVyZmVjdFNjcm9sbGJhcihET00uaGVhZGVyLnZlcnRpY2FsLCB7XHJcbiAgICAgICAgICAgIHdoZWVsU3BlZWQ6IDAuNSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxZOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmVydGljYWxIZWFkZXJUYXJnZXQgPT0gXCJsaW5rXCIgPyBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIiksIDI1MCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI29uVG9nZ2xlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmFkZChcInZoLW9wZW5lZFwiKTtcclxuICAgICAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aC1vcGVuZWRcIik7XHJcbiAgICAgICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4ucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4uZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAqL1xyXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xyXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLmhlYWRlci52ZXJ0aWNhbD8ucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzID8gbmF2RWxlbWVudHNbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHMgPyBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIG5hdkxhc3RFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWwtaGVhZGVyLXN0eWxlXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtY2xvc2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtb3BlbmVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlc2NLZXkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlbnRlcktleSAmJlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSAmJlxyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1jbG9zZWRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbmF2Rmlyc3RFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVydGljYWxIZWFkZXI7XHJcbiIsImltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IEZ1bGxTY3JlZW5NZW51IGZyb20gXCIuL21lbnUvZnVsbC1zY3JlZW5cIjtcclxuaW1wb3J0IE1lZ2FNZW51IGZyb20gXCIuL21lbnUvbWVnYVwiO1xyXG5cclxuY2xhc3MgTWVudSB7XHJcbiAgICAjY3VycmVudEVsZW07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTWVudSgpO1xyXG4gICAgICAgIHRoaXMubWVnYSA9IG5ldyBNZWdhTWVudSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImxpLm5hdi1uby1jbGljayA+IGFcIilcclxuICAgICAgICAgICAgLmZvckVhY2gobm9DbGlja01lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIG5vQ2xpY2tNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNvbk5vQ2xpY2tNZW51SXRlbUNsaWNrXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLnNmLW1lbnVcIikuZm9yRWFjaChtZW51ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtcy5mb3JFYWNoKHBhcmVudE1lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb3VzZW92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VvdmVyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICBcIm1vdXNlb3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlb3V0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTm9DbGlja01lbnVJdGVtQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uUGFyZW50TWVudUl0ZW1Nb3VzZW92ZXIgPSBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLiNjdXJyZW50RWxlbSAmJlxyXG4gICAgICAgICAgICB0aGlzLiNjdXJyZW50RWxlbS5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNjdXJyZW50RWxlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgdGhpcy4jb25FbnRlcih0aGlzLiNjdXJyZW50RWxlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblBhcmVudE1lbnVJdGVtTW91c2VvdXQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy4jY3VycmVudEVsZW0gfHxcclxuICAgICAgICAgICAgdGhpcy4jY3VycmVudEVsZW0uY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2UgbGVmdCB0aGUgPGE+LiByZWFsbHkuXHJcbiAgICAgICAgdGhpcy4jb25MZWF2ZSh0aGlzLiNjdXJyZW50RWxlbSk7XHJcbiAgICAgICAgdGhpcy4jY3VycmVudEVsZW0gPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25FbnRlciA9IHBhcmVudE1lbnVJdGVtID0+IHtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gcGFyZW50TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xyXG5cclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwic2ZIb3ZlclwiKTtcclxuXHJcbiAgICAgICAgZmFkZUluKHN1Yk1lbnUsIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25MZWF2ZSA9IHBhcmVudE1lbnVJdGVtID0+IHtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gcGFyZW50TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xyXG5cclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2ZIb3ZlclwiKTtcclxuICAgICAgICBzdWJNZW51LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgZmFkZU91dChzdWJNZW51LCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ZIb3ZlclwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI29uRW50ZXIocGFyZW50TWVudUl0ZW0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEZ1bGxTY3JlZW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hcnJvd1wiKS5mb3JFYWNoKChwbHVzQnRuKSA9PiB7XG4gICAgICAgICAgICBwbHVzQnRuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYSA+IC50ZXh0LXdyYXAgPiBzcGFuLm5hdi1hcnJvdywgI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUxpbmtDbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUhhc2h0YWdMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVNZW51QnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoIXRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhpdFwiKSkge1xuICAgICAgICAgICAgdGhpcy4jb3Blbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xuXG4gICAgICAgIGlmICghKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1Yk1lbnUpLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTWVudUhhc2h0YWdMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgfTtcblxuICAgICNvcGVuTWVudSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmhlYWRlci5mdWxsU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLmxvZ28/LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG4gICAgfTtcblxuICAgICNjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlT3V0KERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudSk7XG5cbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93blwiKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51Py5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bjtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5uYXYtYXJyb3csIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1hcnJvd1wiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1lbnU7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIE1lZ2FNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51Q29udGVudHMuZm9yRWFjaCgobWVudUNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUNvbnRlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtTGVmdE9mZnNldCA9IG9mZnNldChtZW51SXRlbSkubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250ZW50V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51Q29udGVudCkud2lkdGgpO1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsTWFyZ2luO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUNvbnRlbnRXaWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gMTA7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVDb250ZW50V2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSBtZW51SXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5pc1JUTCkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBgLSR7aG9yaXpvbnRhbFBvc2l0aW9ufXB4YDtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnJpZ2h0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtob3Jpem9udGFsTWFyZ2lufXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1MZWZ0T2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiArXG4gICAgICAgICAgICAgICAgICAgIG1lbnVDb250ZW50V2lkdGggPFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSBtZW51SXRlbUxlZnRPZmZzZXQgLSBtZW51SXRlbS5vZmZzZXRXaWR0aCAtIDEwXG4gICAgICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5tZWdhLm1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25NZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb3BiYXIgbWVudSBpdGVtc1xuICAgICAgICBET00ubWVudS5tZWdhLnRvcGJhck1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKVxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbi13cmFwID4gLmNvbnRhaW5lclwiKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLWlubmVyXCIpO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNvblRvcGJhck1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci50b3BiYXI7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1Nb3VzZUVudGVyKHdyYXBwZXIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgI21lbnVJdGVtTW91c2VFbnRlciA9ICh3cmFwcGVyLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwiLm1lZ2FtZW51XCIpO1xuICAgICAgICBsZXQgbGVmdFBvc2l0aW9uID0gcGFyc2VJbnQob2Zmc2V0KG1lbnVJdGVtKS5sZWZ0IC0gb2Zmc2V0KHdyYXBwZXIpLmxlZnQgKyAxKTtcblxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJib3hlZC1sYXlvdXRcIikpIHtcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvbiAtIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2xlZnRQb3NpdGlvbn1weGA7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUud2lkdGggPSBgJHt3cmFwcGVyLm9mZnNldFdpZHRofXB4YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWdhTWVudTtcbiIsImltcG9ydCBEcm9wRG93bk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZHJvcC1kb3duXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgU2lkZWJhck1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvc2lkZWJhclwiO1xyXG5cclxuY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duID0gbmV3IERyb3BEb3duTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhciA9IG5ldyBTaWRlYmFyTW9iaWxlTWVudSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcclxuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc2xpZGVVcCwgc2xpZGVEb3duLCBzbGlkZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRHJvcERvd25Nb2JpbGVNZW51IHtcbiAgICAjaXNNZW51T3BlbjtcbiAgICAjbWVudUl0ZW1zVG9nZ2xlSWNvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLW1vYmlsZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm1lbnVJdGVtc0hhc0NoaWxkcmVuPy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkcm9wZG93bi10b2dnbGVcIjtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zVG9nZ2xlSWNvbiA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIlxuICAgICAgICAgICAgICAgID8gRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXG4gICAgICAgICAgICAgICAgOiBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIFwiLm1vYmlsZS1tZW51XCIsIFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnV0dG9uQ2xpY2spO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUNsb3NlQ2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkhhbWJ1cmdlckNsaWNrKTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbXNUb2dnbGVJY29uPy5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlTWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciAmJiBzbGlkZVRvZ2dsZShET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyLCA0MDApO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbk1lbnVDbG9zZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciAmJiBzbGlkZVVwKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDI1MCk7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcbiAgICAgICAgICAgIHRoaXMuI29uTWVudUNsb3NlQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25IYW1idXJnZXJDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5NZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5uYXY/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoISFjbG9zZUljb24pIHtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duTW9iaWxlTWVudTtcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gICAgc2xpZGVVcCxcbiAgICBzbGlkZURvd24sXG4gICAgZmFkZUluLFxuICAgIGZhZGVPdXQsXG4gICAgdmlzaWJsZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTW9iaWxlTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnVsbHNjcmVlbi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW5cbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxuICAgICAgICAgICAgPy5mb3JFYWNoKG1lbnVJdGVtTGluayA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBkZWxlZ2F0ZShcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgICAgICAgICBcIi5tb2JpbGUtbWVudVwiLFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy4jb25NZW51QnV0dG9uQ2xpY2tcbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSA+IHNwYW4uZHJvcGRvd24tdG9nZ2xlLCAjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFbaHJlZj1cIiNcIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaChtZW51SXRlbUxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb25cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gLmZzLWRyb3Bkb3duLW1lbnUgbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZnVsbHNjcmVlbiAjbW9iaWxlLW5hdiBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuIGEuY2xvc2UnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaChtZW51SXRlbUxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUljb25DbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvbk1lbnVCdXR0b25DbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZUluKERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4pO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPVxuICAgICAgICAgICAgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VJY29uQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3Vic3RyaW5nKDAsIDEpID09PSBcIiNcIikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZShET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKSkge1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgZmFkZU91dChET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLmRyb3Bkb3duXCIpXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobWVudUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsLnN1Yi1tZW51XCIpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goc3ViTWVudSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRHJvcG93blRvZ2dsZUljb24gPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUl0ZW1MaW5rLmNsb3Nlc3QoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xuXG4gICAgICAgIGlmICghKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1Yk1lbnUpLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uIGluIHRoZSBtZW51IG1vZGFsLlxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZW50ZXJLZXkgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XHJcbmltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTaWRlYmFyTW9iaWxlTWVudSB7XHJcbiAgICAjaXNNZW51T3BlbjtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuICAgICNzaWRlYmFyVG9nZ2xlTWVudUJ0bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnNpZHJTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tb2JpbGVcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiNzdGFydFNpZHJQbHVnaW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChtZW51SXRlbUxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICAgIFwibGkuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI3N0YXJ0U2lkclBsdWdpbiA9ICgpID0+IHtcclxuICAgICAgICBzaWRyLm5ldyhcIi5tb2JpbGUtbWVudVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2lkclwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc2lkclNvdXJjZSxcclxuICAgICAgICAgICAgc2lkZTogb3B0aW9ucy5zaWRyU2lkZSxcclxuICAgICAgICAgICAgZGlzcGxhY2U6IG9wdGlvbnMuc2lkckRpc3BsYWNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICByZW5hbWluZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGltaW5nOiBcImVhc2VcIixcclxuICAgICAgICAgICAgYmluZDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICBvbk9wZW4oKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYS5zaWRyLWNsYXNzLXRvZ2dsZS1zaWRyLWNsb3NlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPy5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnNpdGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWZ0ZXJlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm9jZWFud3Atc2lkci1vdmVybGF5XCIgdGFiaW5kZXg9MD48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVJbihvdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlID4gdWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChzdWJNZW51QWN0aXZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViTWVudUFjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKG1lbnVJdGVtQWN0aXZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLXNpZHItb3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWRlT3V0KG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWZhXCJdJylcclxuICAgICAgICAgICAgLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb24uY2xhc3NOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgL1xcYnNpZHItY2xhc3MtZmEuKj9cXGIvZyxcclxuICAgICAgICAgICAgICAgICAgICBcImZhXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnI3NpZHIgW2NsYXNzKj1cInNpZHItY2xhc3MtaWNvblwiXScpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC9cXGJzaWRyLWNsYXNzLWljb24tLio/XFxiL2csXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uLVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI29uSGFtYnVyZ2VyQnRuQ2xpY2tcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24/LmZvckVhY2gobWVudUl0ZW1QbHVzSWNvbiA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwidG91Y2hlbmRcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcInRvdWNoZW5kXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1uYXYtbm8tY2xpY2sgPiBhXCIpXHJcbiAgICAgICAgICAgID8uZm9yRWFjaChtZW51SXRlbUxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSGFtYnVyZ2VyQnRuQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICA/LmZvckVhY2gob3Blbk1lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25XaW5kb3dSZXNpemUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItb3BlblwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xyXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3NpZHJcIilcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICBcImEsIHNwYW4uc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICBpZiAoY2xvc2VJY29uKSB7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFzaGlmdEtleSAmJlxyXG4gICAgICAgICAgICAgICAgdGFiS2V5ICYmXHJcbiAgICAgICAgICAgICAgICBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcclxuICAgICAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaGlmdEtleSAmJlxyXG4gICAgICAgICAgICAgICAgdGFiS2V5ICYmXHJcbiAgICAgICAgICAgICAgICBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZW50ZXJLZXkgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjY2xvc2VTaWRyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaWRyLmNsb3NlKFwic2lkclwiKTtcclxuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcImluZmluaXRlLXNjcm9sbFwiO1xuaW1wb3J0IFJlc3BvbnNpdmVBdXRvSGVpZ2h0IGZyb20gXCJyZXNwb25zaXZlLWF1dG8taGVpZ2h0XCI7XG5cbmNsYXNzIE9XSW5maW5pdGVTY3JvbGwge1xuICAgICNpbmZpbml0ZVNjcm9sbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIURPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxOYXYgJiZcbiAgICAgICAgICAgICEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdi5xdWVyeVNlbGVjdG9yKFwiLm9sZGVyLXBvc3RzIGFcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbCA9IG5ldyBJbmZpbml0ZVNjcm9sbChcbiAgICAgICAgICAgIERPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxXcmFwcGVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6IFwiLm9sZGVyLXBvc3RzIGFcIixcbiAgICAgICAgICAgICAgICBhcHBlbmQ6IFwiLml0ZW0tZW50cnlcIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiLnNjcm9sbGVyLXN0YXR1c1wiLFxuICAgICAgICAgICAgICAgIGhpZGVOYXY6IFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIixcbiAgICAgICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcmVmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRocmVzaG9sZDogNTAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwub24oXCJsb2FkXCIsIGZ1bmN0aW9uIChib2R5LCBwYXRoLCByZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1lbnRyeVwiKTtcblxuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGl0ZW1zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQmxvZyBtYXNvbnJ5IGlzb3RvcGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuYmxvZ01hc29ucnkuaXNvdG9wLmFwcGVuZGVkKGl0ZW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGaXggR2FsbGVyeSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWZvcm1hdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5ibG9nTWFzb25yeS5pc290b3AubGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDAgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEdhbGxlcnkgcG9zdHMgc2xpZGVyXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1jYXJvdXNlbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93U2xpZGVyLnN0YXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZ2FsbGVyeS1mb3JtYXQsIC5wcm9kdWN0LWVudHJ5LXNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5pbml0U2luZ2xlSW1hZ2VMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93TGlnaHRib3guaW5pdEdhbGxlcnlMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBpbWFnZXMgdG8gYmUgcGFyc2VkIHRvIGZpeCBTYWZhcmkgaXNzdWVcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik/LmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vdXRlckhUTUwgPSBpbWcub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcbiAgICAgICAgICAgIFwiYXBwZW5kXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGl0ZW1zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVxdWFsIGhlaWdodCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLW1hdGNoaGVpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeUl0ZW1zU2VsZWN0b3JzID0gQXJyYXkuZnJvbShpdGVtcykubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke2l0ZW0uaWR9IC5ibG9nLWVudHJ5LWlubmVyYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeUl0ZW1zU2VsZWN0b3JzLmpvaW4oXCIsXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KGVudHJ5SXRlbXNTZWxlY3RvcnMuam9pbihcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dJbmZpbml0ZVNjcm9sbDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgT1dMaWdodGJveCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNhZGRMaWdodGJveENsYXNzKCk7XG4gICAgICAgIHRoaXMuaW5pdFNpbmdsZUltYWdlTGlnaHRib3goKTtcbiAgICAgICAgdGhpcy5pbml0R2FsbGVyeUxpZ2h0Ym94KCk7XG4gICAgfTtcblxuICAgIGluaXRTaW5nbGVJbWFnZUxpZ2h0Ym94ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9jZWFud3AtbGlnaHRib3hcIik/LmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgalF1ZXJ5KFwiLm9jZWFud3AtbGlnaHRib3hcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBtYWluQ2xhc3M6IFwibWZwLXdpdGgtem9vbVwiLFxuXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgICAgIG9wZW5lcjogZnVuY3Rpb24gKG9wZW5lckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoXCJpbWdcIikgPyBvcGVuZXJFbGVtZW50IDogb3BlbmVyRWxlbWVudC5maW5kKFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5pdEdhbGxlcnlMaWdodGJveCA9ICgpID0+IHtcbiAgICAgICAgalF1ZXJ5KFwiLndwLWJsb2NrLWdhbGxlcnksIC5nYWxsZXJ5LWZvcm1hdCwgLmdhbGxlcnlcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogXCIuZ2FsbGVyeS1saWdodGJveDpub3QoLnNsaWNrLWNsb25lZClcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIG1haW5DbGFzczogXCJtZnAtZmFkZVwiLFxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2FkZExpZ2h0Ym94Q2xhc3MgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImJvZHkgLmVudHJ5LWNvbnRlbnQgYSwgYm9keSAuZW50cnkgYSwgYm9keSBhcnRpY2xlIC5nYWxsZXJ5LWZvcm1hdCBhXCIpXG4gICAgICAgICAgICA/LmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VGb3JtYXRzID0gdGhpcy4jaW1hZ2VGb3JtYXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZUZvcm1hdHNNYXNrID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZUZvcm1hdHMuZm9yRWFjaCgoaW1hZ2VGb3JtYXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0c01hc2sgKz0gU3RyaW5nKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkuaW5kZXhPZihcIi5cIiArIGltYWdlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlRm9ybWF0c01hc2sgPT09IC0xMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwibm8tbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1pY29uXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIndvby10aHVtYm5haWxcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vY29tbWVyY2UtcHJvZHVjdC1nYWxsZXJ5X19pbWFnZVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhbGluay5jbG9zZXN0KFwiLndwLWJsb2NrLWdhbGxlcnlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWxpbmsuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbGVtZW50b3Itb3Blbi1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwieWl0aF9tYWduaWZpZXJfdGh1bWJuYWlsXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJnZy1saW5rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwib2NlYW53cC1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikgfHwgISFsaW5rLmNsb3Nlc3QoXCIud3AtYmxvY2stZ2FsbGVyeVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdhbGxlcnktbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2ltYWdlRm9ybWF0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcImJtcFwiLCBcImdpZlwiLCBcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJ0aWZmXCIsIFwidGlmXCIsIFwiamZpZlwiLCBcImpwZVwiLCBcInN2Z1wiLCBcIm1wNFwiLCBcIm9nZ1wiLCBcIndlYm1cIl07XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dMaWdodGJveDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgT1dTbGlkZXIge1xuICAgIGZsaWNraXR5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9IChlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeS1mb3JtYXQsIC5wcm9kdWN0LWVudHJ5LXNsaWRlclwiKSkgPT4ge1xuICAgICAgICB0aGlzLmZsaWNraXR5ID0gW107XG5cbiAgICAgICAgZWxlbWVudHM/LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsaWNraXR5ID0gbmV3IEZsaWNraXR5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBhdXRvUGxheTogZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tZW50cnktaW1hZ2VcIikgPyBmYWxzZSA6IDYwMDAsXG4gICAgICAgICAgICAgICAgcmlnaHRUb0xlZnQ6IERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInJ0bFwiKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbWFnZXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gY29udGFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZsaWNraXR5LnB1c2goZmxpY2tpdHkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV1NsaWRlcjtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNTZWxlY3RvclZhbGlkLCBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTY3JvbGxFZmZlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLXByb2R1Y3RcIikgJiZcclxuICAgICAgICAgICAgIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxvY2FsLXNjcm9sbFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLmxvY2FsW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLmxvY2FsIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLm1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEuc2lkci1jbGFzcy1tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHNjcm9sbEl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxJdGVtQ2xpY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2Nyb2xsSXRlbUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWxlbWVudG9yLWl0ZW0tYW5jaG9yXCIpICYmXHJcbiAgICAgICAgICAgIHNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXN1Ym1lbnVcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbG9zZXN0KFwiLm9tdy1vcGVuLW1vZGFsXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9ldy1tb2RhbC1idXR0b25cIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xvc2VzdChcIi5vZXctbW9kYWwtYnV0dG9uXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1vcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3Mtb3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWNvbW1lbnQtcmVwbHlcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHRiLW5hdi1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInVwbG9hZC1maWxlXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBzY3JvbGxJdGVtLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKFwiI1wiKSkuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NlbGVjdG9yVmFsaWQoYCMke2lkfWApKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpZCAhPSBcIlwiICYmICEhdGFyZ2V0RWxlbSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNnZXRBZG1pbkJhckhlaWdodCA9ICgpID0+XHJcbiAgICAgICAgISFET00uV1BBZG1pbmJhciA/IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodCA6IDA7XHJcblxyXG4gICAgI2dldFRvcGJhckhlaWdodCA9ICgpID0+XHJcbiAgICAgICAgISFET00uaGVhZGVyLnRvcGJhcldyYXBwZXIgJiZcclxuICAgICAgICBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWJhci1zdGlja3lcIilcclxuICAgICAgICAgICAgPyBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIDogMDtcclxuXHJcbiAgICAjZ2V0U3RpY2t5SGVhZGVySGVpZ2h0ID0gKHN0YXJ0UG9zaXRpb24gPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0aWNreUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwiI3NpdGUtaGVhZGVyLXN0aWNreS13cmFwcGVyXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoISFzdGlja3lIZWFkZXIpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImlzLXN0aWNreVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIXN0YXJ0UG9zaXRpb25cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN0aWNreUhlYWRlcikuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gRE9NLmhlYWRlci5zaXRlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuYm90dG9tLWhlYWRlci13cmFwXCJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWVudS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbWVudVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5kYXRhc2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1oZWFkZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET00uaGVhZGVyLnNpdGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cC1lZmZlY3RcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlPy5kYXRhc2V0LmhlaWdodCA/PyA1NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RpY2stYW55dGhpbmctaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0aWNrLWFueXRoaW5nLWhlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgISFkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudG9yLXNlY3Rpb24td3JhcFwiKVxyXG4gICAgICAgICAgICAgICAgPy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50b3Itc3RpY2t5XCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRvci1zZWN0aW9uLXdyYXBcIilcclxuICAgICAgICAgICAgICAgID8uZmlyc3RFbGVtZW50Q2hpbGQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxFZmZlY3Q7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHt9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI29uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgRE9NLnNjcm9sbC5zY3JvbGxUb3A/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICAgICAgRE9NLnNjcm9sbC5nb1RvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wU2xhc2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93U2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLnNjcm9sbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShET00uc2Nyb2xsLnNjcm9sbFRvcCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBmYWRlSW4oRE9NLnNjcm9sbC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgZmFkZU91dChET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uU2Nyb2xsVG9wQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBzY3JvbGxUb3AucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IERyb3BEb3duU2VhcmNoIGZyb20gXCIuL3NlYXJjaC9kcm9wLWRvd25cIjtcclxuaW1wb3J0IEhlYWRlclJlcGxhY2VTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2hlYWRlci1yZXBsYWNlXCI7XHJcbmltcG9ydCBNb2JpbGVTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC9tb2JpbGUtc2VhcmNoLWljb25cIjtcclxuaW1wb3J0IE92ZXJsYXlTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL292ZXJsYXlcIjtcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBtb2JpbGVPdmVybGF5SW5wdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd24gPSBuZXcgRHJvcERvd25TZWFyY2goKTtcclxuICAgICAgICB0aGlzLmhlYWRlclJlcGxhY2UgPSBuZXcgSGVhZGVyUmVwbGFjZVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG5ldyBPdmVybGF5U2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVTZWFyY2hJY29uID0gbmV3IE1vYmlsZVNlYXJjaEljb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0LmNsb3Nlc3QoXCJmb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSW5wdXRLZXl1cCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBmb3JtID0gaW5wdXQuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJjbGFzcyBTZWFyY2hCYXNlIHtcbiAgICBmb2N1cyA9IChmb3JtLCBpbnB1dENsYXNzKSA9PiB7XG4gICAgICAgIGxldCBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGZvcm0pLnRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxMDAwO1xuXG4gICAgICAgIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSAhIWZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPyBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uIDogNjAwO1xuXG4gICAgICAgIGlmIChmb3JtVHJhbnNpdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoaW5wdXRDbGFzcykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFzZTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgRHJvcERvd25TZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRG9jdW1lbnRDbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgdG9nZ2xlU2VhcmNoQnRuLCBmb3JtIH0gPSBET00uc2VhcmNoLmRyb3BEb3duO1xuXG4gICAgICAgIHRvZ2dsZVNlYXJjaEJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29uRG9jdW1lbnRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBDb2xsYXBzIHNlYXJjaCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLmZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LnBhcmVudE5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blNlYXJjaDtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgSGVhZGVyUmVwbGFjZVNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJoZWFkZXJfcmVwbGFjZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5tYWluLnN0eWxlLm1pbldpZHRoID0gXCIzNzBweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgZm9ybS5zdHlsZS5tYXhXaWR0aCA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24gPiB1bC5kcm9wZG93bi1tZW51XCIpPy5vZmZzZXRXaWR0aCArIDYwICsgXCJweFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERPTS5tZW51Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIlwiO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZT8uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubmF2Py5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjaGFzVG9wSGVhZGVyID0gKCkgPT4gRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJSZXBsYWNlU2VhcmNoO1xuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgTW9iaWxlU2VhcmNoSWNvbiBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgICNlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNlbGVtZW50cyA9IHtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtZHJvcGRvd25cIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb24tb3ZlcmxheVwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2hDbG9zZUljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXkgLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxuICAgICAgICAgICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3RvZ2dsZURyb3Bkb3duU2VhcmNoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrRG9jdW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaEljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvcGVuT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoQ2xvc2VJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jY2xvc2VPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI3RvZ2dsZURyb3Bkb3duU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFwiaW5wdXQuZmllbGRcIik7XG4gICAgfTtcblxuICAgICNvcGVuT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZUluKHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHRoaXMuZm9jdXModGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5tb2JpbGUtc2VhcmNoLW92ZXJsYXktaW5wdXRcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZU91dCh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbkNsaWNrRG9jdW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNpY29uLXNlYXJjaGZvcm0tZHJvcGRvd24uc2hvd1wiKSkge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVTZWFyY2hJY29uO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBPdmVybGF5U2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLm92ZXJsYXkudG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VCdG5DbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4oZm9ybSk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KGZvcm0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5U2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IHtcclxuICAgICNzZWxlY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdCA9IHNlbGVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICBcImFmdGVyZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3QgJHt0aGlzLiNzZWxlY3QuY2xhc3NMaXN0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtc2VsZWN0SW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLiNzZWxlY3Qub3B0aW9uc1t0aGlzLiNzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJoYXNDdXN0b21TZWxlY3RcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzdHlsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc3R5bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuaGVpZ2h0ID0gXCIzNHB4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmZvbnRTaXplID0gXCIxM3B4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmFwcGVhcmFuY2UgPSBcIm1lbnVsaXN0LWJ1dHRvblwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3QubmV4dFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Nb3VzZWVudGVyKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25Nb3VzZWxlYXZlKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLm9uQ2hhbmdlKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLXNlbGVjdEhvdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy4jb25Eb2N1bWVudFJlYWR5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Eb2N1bWVudFJlYWR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5zdHlsZS53aWR0aCA9IHNlbGVjdC5uZXh0U2libGluZy5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZS1tZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgQmxvZ01hc29ucnkgZnJvbSBcIi4vY29tcG9uZW50cy9ibG9nLW1hc29ucnlcIjtcclxuaW1wb3J0IFNjcm9sbFRvcCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC10b3BcIjtcclxuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC1lZmZlY3RcIjtcclxuaW1wb3J0IEVxdWFsSGVpZ2h0RWxlbWVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9lcXVhbC1oZWlnaHQtZWxlbWVudHNcIjtcclxuaW1wb3J0IE9XSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1pbmZpbml0ZS1zY3JvbGxcIjtcclxuaW1wb3J0IE9XU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvb3ctc2xpZGVyXCI7XHJcbmltcG9ydCBPV0xpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvb3ctbGlnaHRib3hcIjtcclxuXHJcbmNsYXNzIFRoZW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICB0aGlzLmJsb2dNYXNvbnJ5ID0gbmV3IEJsb2dNYXNvbnJ5KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBuZXcgU2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZmZlY3QgPSBuZXcgU2Nyb2xsRWZmZWN0KCk7XHJcbiAgICAgICAgdGhpcy5lcXVhbEhlaWdodEVsZW1lbnRzID0gbmV3IEVxdWFsSGVpZ2h0RWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLm93TGlnaHRib3ggPSBuZXcgT1dMaWdodGJveCgpO1xyXG4gICAgICAgIHRoaXMub3dTbGlkZXIgPSBuZXcgT1dTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm93SW5maW5pdGVTY3JvbGwgPSBuZXcgT1dJbmZpbml0ZVNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7XHJcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JTZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG4iLCJ2YXIgY2xvc2VzdCA9IHJlcXVpcmUoJy4vY2xvc2VzdCcpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG4iLCIvLyBidXR0b25cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0ZVNjcm9sbEJ1dHRvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jbGFzcyBJbmZpbml0ZVNjcm9sbEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKCBlbGVtZW50LCBpbmZTY3JvbGwgKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmluZlNjcm9sbCA9IGluZlNjcm9sbDtcbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAncmVxdWVzdCcsIHRoaXMuZGlzYWJsZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdsb2FkJywgdGhpcy5lbmFibGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnZXJyb3InLCB0aGlzLmhpZGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnbGFzdCcsIHRoaXMuaGlkZS5iaW5kKCB0aGlzICkgKTtcbiAgfVxuXG4gIG9uQ2xpY2soIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pbmZTY3JvbGwubG9hZE5leHRQYWdlKCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5maW5pdGVTY3JvbGwgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cy5idXR0b24gPSBudWxsO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuYnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGxldCBidXR0b25FbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuYnV0dG9uICk7XG4gIGlmICggYnV0dG9uRWxlbSApIHtcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBJbmZpbml0ZVNjcm9sbEJ1dHRvbiggYnV0dG9uRWxlbSwgdGhpcyApO1xuICB9XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LmJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuYnV0dG9uICkgdGhpcy5idXR0b24uZGVzdHJveSgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLkJ1dHRvbiA9IEluZmluaXRlU2Nyb2xsQnV0dG9uO1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gY29yZVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkluZmluaXRlU2Nyb2xsID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgdXRpbHMgKSB7XG5cbmxldCBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIEluZmluaXRlU2Nyb2xsIGludGFuY2VzXG5sZXQgaW5zdGFuY2VzID0ge307XG5cbmZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBsZXQgcXVlcnlFbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG5cbiAgaWYgKCAhcXVlcnlFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgSW5maW5pdGVTY3JvbGw6ICcgKyAoIHF1ZXJ5RWxlbSB8fCBlbGVtZW50ICkgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudCA9IHF1ZXJ5RWxlbTtcbiAgLy8gZG8gbm90IGluaXRpYWxpemUgdHdpY2Ugb24gc2FtZSBlbGVtZW50XG4gIGlmICggZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgKSB7XG4gICAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VzWyBlbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCBdO1xuICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0geyAuLi5JbmZpbml0ZVNjcm9sbC5kZWZhdWx0cyB9O1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxuLy8gZGVmYXVsdHNcbkluZmluaXRlU2Nyb2xsLmRlZmF1bHRzID0ge1xuICAvLyBwYXRoOiBudWxsLFxuICAvLyBoaWRlTmF2OiBudWxsLFxuICAvLyBkZWJ1ZzogZmFsc2UsXG59O1xuXG4vLyBjcmVhdGUgJiBkZXN0cm95IG1ldGhvZHNcbkluZmluaXRlU2Nyb2xsLmNyZWF0ZSA9IHt9O1xuSW5maW5pdGVTY3JvbGwuZGVzdHJveSA9IHt9O1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxuT2JqZWN0LmFzc2lnbiggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xubGV0IEdVSUQgPSAwO1xuXG5wcm90by5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3JlYXRlIGNvcmVcbiAgLy8gYWRkIGlkIGZvciBJbmZpbml0ZVNjcm9sbC5kYXRhXG4gIGxldCBpZCA9IHRoaXMuZ3VpZCA9ICsrR1VJRDtcbiAgdGhpcy5lbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCA9IGlkOyAvLyBleHBhbmRvXG4gIGluc3RhbmNlc1sgaWQgXSA9IHRoaXM7IC8vIGFzc29jaWF0ZSB2aWEgaWRcbiAgLy8gcHJvcGVydGllc1xuICB0aGlzLnBhZ2VJbmRleCA9IDE7IC8vIGRlZmF1bHQgdG8gZmlyc3QgcGFnZVxuICB0aGlzLmxvYWRDb3VudCA9IDA7XG4gIHRoaXMudXBkYXRlR2V0UGF0aCgpO1xuICAvLyBiYWlsIGlmIGdldFBhdGggbm90IHNldCwgb3IgcmV0dXJucyBmYWxzZXkgIzc3NlxuICBsZXQgaGFzUGF0aCA9IHRoaXMuZ2V0UGF0aCAmJiB0aGlzLmdldFBhdGgoKTtcbiAgaWYgKCAhaGFzUGF0aCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdEaXNhYmxpbmcgSW5maW5pdGVTY3JvbGwnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy51cGRhdGVHZXRBYnNvbHV0ZVBhdGgoKTtcbiAgdGhpcy5sb2coICdpbml0aWFsaXplZCcsIFsgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSBdICk7XG4gIHRoaXMuY2FsbE9uSW5pdCgpO1xuICAvLyBjcmVhdGUgZmVhdHVyZXNcbiAgZm9yICggbGV0IG1ldGhvZCBpbiBJbmZpbml0ZVNjcm9sbC5jcmVhdGUgKSB7XG4gICAgSW5maW5pdGVTY3JvbGwuY3JlYXRlWyBtZXRob2QgXS5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8vIGNhbGwgb25Jbml0IG9wdGlvbiwgdXNlZCBmb3IgYmluZGluZyBldmVudHMgb24gaW5pdFxucHJvdG8uY2FsbE9uSW5pdCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb25Jbml0ID0gdGhpcy5vcHRpb25zLm9uSW5pdDtcbiAgaWYgKCBvbkluaXQgKSB7XG4gICAgb25Jbml0LmNhbGwoIHRoaXMsIHRoaXMgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIHRoaXMubG9nKCB0eXBlLCBhcmdzICk7XG4gIGxldCBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG4gIC8vIHRyaWdnZXIgalF1ZXJ5IGV2ZW50XG4gIGlmICggIWpRdWVyeSB8fCAhdGhpcy4kZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbmFtZXNwYWNlIGpRdWVyeSBldmVudFxuICB0eXBlICs9ICcuaW5maW5pdGVTY3JvbGwnO1xuICBsZXQgJGV2ZW50ID0gdHlwZTtcbiAgaWYgKCBldmVudCApIHtcbiAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXAgKi9cbiAgICBsZXQgalFFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICBqUUV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICRldmVudCA9IGpRRXZlbnQ7XG4gIH1cbiAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbn07XG5cbmxldCBsb2dnZXJzID0ge1xuICBpbml0aWFsaXplZDogKCBjbGFzc05hbWUgKSA9PiBgb24gJHtjbGFzc05hbWV9YCxcbiAgcmVxdWVzdDogKCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIGxvYWQ6ICggcmVzcG9uc2UsIHBhdGggKSA9PiBgJHtyZXNwb25zZS50aXRsZSB8fCAnJ30uIFVSTDogJHtwYXRofWAsXG4gIGVycm9yOiAoIGVycm9yLCBwYXRoICkgPT4gYCR7ZXJyb3J9LiBVUkw6ICR7cGF0aH1gLFxuICBhcHBlbmQ6ICggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkgPT4gYCR7aXRlbXMubGVuZ3RofSBpdGVtcy4gVVJMOiAke3BhdGh9YCxcbiAgbGFzdDogKCByZXNwb25zZSwgcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBoaXN0b3J5OiAoIHRpdGxlLCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIHBhZ2VJbmRleDogZnVuY3Rpb24oIGluZGV4LCBvcmlnaW4gKSB7XG4gICAgcmV0dXJuIGBjdXJyZW50IHBhZ2UgZGV0ZXJtaW5lZCB0byBiZTogJHtpbmRleH0gZnJvbSAke29yaWdpbn1gO1xuICB9LFxufTtcblxuLy8gbG9nIGV2ZW50c1xucHJvdG8ubG9nID0gZnVuY3Rpb24oIHR5cGUsIGFyZ3MgKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5kZWJ1ZyApIHJldHVybjtcblxuICBsZXQgbWVzc2FnZSA9IGBbSW5maW5pdGVTY3JvbGxdICR7dHlwZX1gO1xuICBsZXQgbG9nZ2VyID0gbG9nZ2Vyc1sgdHlwZSBdO1xuICBpZiAoIGxvZ2dlciApIG1lc3NhZ2UgKz0gJy4gJyArIGxvZ2dlci5hcHBseSggdGhpcywgYXJncyApO1xuICBjb25zb2xlLmxvZyggbWVzc2FnZSApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyB1c2VkIGFtb3VuZyBmZWF0dXJlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVNZWFzdXJlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB0aGlzLnRvcCA9IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG59O1xuXG5wcm90by51cGRhdGVTY3JvbGxlciA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZWxlbWVudFNjcm9sbCA9IHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsO1xuICBpZiAoICFlbGVtZW50U2Nyb2xsICkge1xuICAgIC8vIGRlZmF1bHQsIHVzZSB3aW5kb3dcbiAgICB0aGlzLnNjcm9sbGVyID0gd2luZG93O1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiB0cnVlLCBzZXQgdG8gZWxlbWVudCwgb3RoZXJ3aXNlIHVzZSBvcHRpb25cbiAgdGhpcy5zY3JvbGxlciA9IGVsZW1lbnRTY3JvbGwgPT09IHRydWUgPyB0aGlzLmVsZW1lbnQgOlxuICAgIHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudFNjcm9sbCApO1xuICBpZiAoICF0aGlzLnNjcm9sbGVyICkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgZWxlbWVudFNjcm9sbDogJHtlbGVtZW50U2Nyb2xsfWApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwYWdlIHBhdGggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlR2V0UGF0aCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb3B0UGF0aCA9IHRoaXMub3B0aW9ucy5wYXRoO1xuICBpZiAoICFvcHRQYXRoICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEluZmluaXRlU2Nyb2xsIHBhdGggb3B0aW9uIHJlcXVpcmVkLiBTZXQgYXM6ICR7b3B0UGF0aH1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZnVuY3Rpb25cbiAgbGV0IHR5cGUgPSB0eXBlb2Ygb3B0UGF0aDtcbiAgaWYgKCB0eXBlID09ICdmdW5jdGlvbicgKSB7XG4gICAgdGhpcy5nZXRQYXRoID0gb3B0UGF0aDtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdGVtcGxhdGUgc3RyaW5nOiAnL3BhZ2VzL3t7I319Lmh0bWwnXG4gIGxldCB0ZW1wbGF0ZU1hdGNoID0gdHlwZSA9PSAnc3RyaW5nJyAmJiBvcHRQYXRoLm1hdGNoKCd7eyN9fScpO1xuICBpZiAoIHRlbXBsYXRlTWF0Y2ggKSB7XG4gICAgdGhpcy51cGRhdGVHZXRQYXRoVGVtcGxhdGUoIG9wdFBhdGggKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2VsZWN0b3I6ICcubmV4dC1wYWdlLXNlbGVjdG9yJ1xuICB0aGlzLnVwZGF0ZUdldFBhdGhTZWxlY3Rvciggb3B0UGF0aCApO1xufTtcblxucHJvdG8udXBkYXRlR2V0UGF0aFRlbXBsYXRlID0gZnVuY3Rpb24oIG9wdFBhdGggKSB7XG4gIC8vIHNldCBnZXRQYXRoIHdpdGggdGVtcGxhdGUgc3RyaW5nXG4gIHRoaXMuZ2V0UGF0aCA9ICgpID0+IHtcbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5wYWdlSW5kZXggKyAxO1xuICAgIHJldHVybiBvcHRQYXRoLnJlcGxhY2UoICd7eyN9fScsIG5leHRJbmRleCApO1xuICB9O1xuICAvLyBnZXQgcGFnZUluZGV4IGZyb20gbG9jYXRpb25cbiAgLy8gY29udmVydCBwYXRoIG9wdGlvbiBpbnRvIHJlZ2V4IHRvIGxvb2sgZm9yIHBhdHRlcm4gaW4gbG9jYXRpb25cbiAgLy8gZXNjYXBlIHF1ZXJ5ICg/KSBpbiB1cmwsIGFsbG93cyBmb3IgcGFyc2luZyBHRVQgcGFyYW1ldGVyc1xuICBsZXQgcmVnZXhTdHJpbmcgPSBvcHRQYXRoXG4gICAgLnJlcGxhY2UoIC8oXFxcXFxcP3xcXD8pLywgJ1xcXFw/JyApXG4gICAgLnJlcGxhY2UoICd7eyN9fScsICcoXFxcXGRcXFxcZD9cXFxcZD8pJyApO1xuICBsZXQgdGVtcGxhdGVSZSA9IG5ldyBSZWdFeHAoIHJlZ2V4U3RyaW5nICk7XG4gIGxldCBtYXRjaCA9IGxvY2F0aW9uLmhyZWYubWF0Y2goIHRlbXBsYXRlUmUgKTtcblxuICBpZiAoIG1hdGNoICkge1xuICAgIHRoaXMucGFnZUluZGV4ID0gcGFyc2VJbnQoIG1hdGNoWzFdLCAxMCApO1xuICAgIHRoaXMubG9nKCAncGFnZUluZGV4JywgWyB0aGlzLnBhZ2VJbmRleCwgJ3RlbXBsYXRlIHN0cmluZycgXSApO1xuICB9XG59O1xuXG5sZXQgcGF0aFJlZ2V4ZXMgPSBbXG4gIC8vIFdvcmRQcmVzcyAmIFR1bWJsciAtIGV4YW1wbGUuY29tL3BhZ2UvMlxuICAvLyBKZWt5bGwgLSBleGFtcGxlLmNvbS9wYWdlMlxuICAvXiguKj9cXC8/cGFnZVxcLz8pKFxcZFxcZD9cXGQ/KSguKj8kKS8sXG4gIC8vIERydXBhbCAtIGV4YW1wbGUuY29tLz9wYWdlPTFcbiAgL14oLio/XFwvP1xcP3BhZ2U9KShcXGRcXGQ/XFxkPykoLio/JCkvLFxuICAvLyBjYXRjaCBhbGwsIGxhc3Qgb2NjdXJlbmNlIG9mIGEgbnVtYmVyXG4gIC8oLio/KShcXGRcXGQ/XFxkPykoPyEuKlxcZCkoLio/JCkvLFxuXTtcblxuLy8gdHJ5IG1hdGNoaW5nIGhyZWYgdG8gcGF0aFJlZ2V4ZXMgcGF0dGVybnNcbmxldCBnZXRQYXRoUGFydHMgPSBJbmZpbml0ZVNjcm9sbC5nZXRQYXRoUGFydHMgPSBmdW5jdGlvbiggaHJlZiApIHtcbiAgaWYgKCAhaHJlZiApIHJldHVybjtcbiAgZm9yICggbGV0IHJlZ2V4IG9mIHBhdGhSZWdleGVzICkge1xuICAgIGxldCBtYXRjaCA9IGhyZWYubWF0Y2goIHJlZ2V4ICk7XG4gICAgaWYgKCBtYXRjaCApIHtcbiAgICAgIGxldCBbICwgYmVnaW4sIGluZGV4LCBlbmQgXSA9IG1hdGNoO1xuICAgICAgcmV0dXJuIHsgYmVnaW4sIGluZGV4LCBlbmQgfTtcbiAgICB9XG4gIH1cbn07XG5cbnByb3RvLnVwZGF0ZUdldFBhdGhTZWxlY3RvciA9IGZ1bmN0aW9uKCBvcHRQYXRoICkge1xuICAvLyBwYXJzZSBocmVmIG9mIGxpbms6ICcubmV4dC1wYWdlLWxpbmsnXG4gIGxldCBocmVmRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wdFBhdGggKTtcbiAgaWYgKCAhaHJlZkVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvcihgQmFkIEluZmluaXRlU2Nyb2xsIHBhdGggb3B0aW9uLiBOZXh0IGxpbmsgbm90IGZvdW5kOiAke29wdFBhdGh9YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGhyZWYgPSBocmVmRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgbGV0IHBhdGhQYXJ0cyA9IGdldFBhdGhQYXJ0cyggaHJlZiApO1xuICBpZiAoICFwYXRoUGFydHMgKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW5maW5pdGVTY3JvbGwgdW5hYmxlIHRvIHBhcnNlIG5leHQgbGluayBocmVmOiAke2hyZWZ9YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgYmVnaW4sIGluZGV4LCBlbmQgfSA9IHBhdGhQYXJ0cztcbiAgdGhpcy5pc1BhdGhTZWxlY3RvciA9IHRydWU7IC8vIGZsYWcgZm9yIGNoZWNrTGFzdFBhZ2UoKVxuICB0aGlzLmdldFBhdGggPSAoKSA9PiBiZWdpbiArICggdGhpcy5wYWdlSW5kZXggKyAxICkgKyBlbmQ7XG4gIC8vIGdldCBwYWdlSW5kZXggZnJvbSBocmVmXG4gIHRoaXMucGFnZUluZGV4ID0gcGFyc2VJbnQoIGluZGV4LCAxMCApIC0gMTtcbiAgdGhpcy5sb2coICdwYWdlSW5kZXgnLCBbIHRoaXMucGFnZUluZGV4LCAnbmV4dCBsaW5rJyBdICk7XG59O1xuXG5wcm90by51cGRhdGVHZXRBYnNvbHV0ZVBhdGggPSBmdW5jdGlvbigpIHtcbiAgbGV0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgLy8gcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggaHR0cCBvciAvXG4gIGxldCBpc0Fic29sdXRlID0gcGF0aC5tYXRjaCggL15odHRwLyApIHx8IHBhdGgubWF0Y2goIC9eXFwvLyApO1xuICBpZiAoIGlzQWJzb2x1dGUgKSB7XG4gICAgdGhpcy5nZXRBYnNvbHV0ZVBhdGggPSB0aGlzLmdldFBhdGg7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgcGF0aG5hbWUgfSA9IGxvY2F0aW9uO1xuICAvLyBxdWVyeSBwYXJhbWV0ZXIgIzgyOS4gZXhhbXBsZS5jb20vP3BnPTJcbiAgbGV0IGlzUXVlcnkgPSBwYXRoLm1hdGNoKCAvXlxcPy8gKTtcbiAgLy8gL2Zvby9iYXIvaW5kZXguaHRtbCA9PiAvZm9vL2JhclxuICBsZXQgZGlyZWN0b3J5ID0gcGF0aG5hbWUuc3Vic3RyaW5nKCAwLCBwYXRobmFtZS5sYXN0SW5kZXhPZignLycpICk7XG4gIGxldCBwYXRoU3RhcnQgPSBpc1F1ZXJ5ID8gcGF0aG5hbWUgOiBkaXJlY3RvcnkgKyAnLyc7XG5cbiAgdGhpcy5nZXRBYnNvbHV0ZVBhdGggPSAoKSA9PiBwYXRoU3RhcnQgKyB0aGlzLmdldFBhdGgoKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBoaWRlIG5hdmlnYXRpb25cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5oaWRlTmF2ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBuYXYgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5oaWRlTmF2ICk7XG4gIGlmICggIW5hdiApIHJldHVybjtcblxuICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGhpcy5uYXYgPSBuYXY7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LmhpZGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm5hdiApIHRoaXMubmF2LnN0eWxlLmRpc3BsYXkgPSAnJztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlc3Ryb3kgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFsbE9mZigpOyAvLyByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAvLyBjYWxsIGRlc3Ryb3kgbWV0aG9kc1xuICBmb3IgKCBsZXQgbWV0aG9kIGluIEluZmluaXRlU2Nyb2xsLmRlc3Ryb3kgKSB7XG4gICAgSW5maW5pdGVTY3JvbGwuZGVzdHJveVsgbWV0aG9kIF0uY2FsbCggdGhpcyApO1xuICB9XG5cbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIHRoaXMuZ3VpZCBdO1xuICAvLyByZW1vdmUgalF1ZXJ5IGRhdGEuICM4MDdcbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCAnaW5maW5pdGVTY3JvbGwnICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBodHRwczovL3JlbXlzaGFycC5jb20vMjAxMC8wNy8yMS90aHJvdHRsaW5nLWZ1bmN0aW9uLWNhbGxzXG5JbmZpbml0ZVNjcm9sbC50aHJvdHRsZSA9IGZ1bmN0aW9uKCBmbiwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMjAwO1xuICBsZXQgbGFzdCwgdGltZW91dDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgfTtcbiAgICBpZiAoIGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaG9sZCApIHtcbiAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoIHRyaWdnZXIsIHRocmVzaG9sZCApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyKCk7XG4gICAgfVxuICB9O1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIGxldCBpZCA9IGVsZW0gJiYgZWxlbS5pbmZpbml0ZVNjcm9sbEdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG4vLyBzZXQgaW50ZXJuYWwgalF1ZXJ5LCBmb3IgV2VicGFjayArIGpRdWVyeSB2M1xuSW5maW5pdGVTY3JvbGwuc2V0SlF1ZXJ5ID0gZnVuY3Rpb24oIGpxcnkgKSB7XG4gIGpRdWVyeSA9IGpxcnk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG51dGlscy5odG1sSW5pdCggSW5maW5pdGVTY3JvbGwsICdpbmZpbml0ZS1zY3JvbGwnICk7XG5cbi8vIGFkZCBub29wIF9pbml0IG1ldGhvZCBmb3IgalF1ZXJ5IEJyaWRnZXQuICM3NjhcbnByb3RvLl9pbml0ID0gZnVuY3Rpb24oKSB7fTtcblxubGV0IHsgalF1ZXJ5QnJpZGdldCB9ID0gd2luZG93O1xuaWYgKCBqUXVlcnkgJiYgalF1ZXJ5QnJpZGdldCApIHtcbiAgalF1ZXJ5QnJpZGdldCggJ2luZmluaXRlU2Nyb2xsJywgSW5maW5pdGVTY3JvbGwsIGpRdWVyeSApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIGhpc3RvcnlcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIGhpc3Rvcnk6ICdyZXBsYWNlJyxcbiAgLy8gaGlzdG9yeVRpdGxlOiBmYWxzZSxcbn0gKTtcblxubGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbi8vIC0tLS0tIGNyZWF0ZS9kZXN0cm95IC0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5oaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5oaXN0b3J5ICkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGZvciBzYW1lIG9yaWdpblxuICBsaW5rLmhyZWYgPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICAvLyBNUyBFZGdlIGRvZXMgbm90IGhhdmUgb3JpZ2luIG9uIGxpbmtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTIyMzY0OTMvXG4gIGxldCBsaW5rT3JpZ2luID0gbGluay5vcmlnaW4gfHwgbGluay5wcm90b2NvbCArICcvLycgKyBsaW5rLmhvc3Q7XG4gIGxldCBpc1NhbWVPcmlnaW4gPSBsaW5rT3JpZ2luID09IGxvY2F0aW9uLm9yaWdpbjtcbiAgaWYgKCAhaXNTYW1lT3JpZ2luICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdbSW5maW5pdGVTY3JvbGxdIGNhbm5vdCBzZXQgaGlzdG9yeSB3aXRoIGRpZmZlcmVudCBvcmlnaW46ICcgK1xuICAgICAgYCR7bGluay5vcmlnaW59IG9uICR7bG9jYXRpb24ub3JpZ2lufSAuIEhpc3RvcnkgYmVoYXZpb3IgZGlzYWJsZWQuYCApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHR3byB3YXlzIHRvIGhhbmRsZSBjaGFuZ2luZyBoaXN0b3J5XG4gIGlmICggdGhpcy5vcHRpb25zLmFwcGVuZCApIHtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlBcHBlbmQoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlQYWdlTG9hZCgpO1xuICB9XG59O1xuXG5wcm90by5jcmVhdGVIaXN0b3J5QXBwZW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgLy8gYXJyYXkgb2Ygc2Nyb2xsIHBvc2l0aW9ucyBvZiBhcHBlbmRlZCBwYWdlc1xuICB0aGlzLnNjcm9sbFBhZ2VzID0gW1xuICAgIC8vIGZpcnN0IHBhZ2VcbiAgICB7XG4gICAgICB0b3A6IDAsXG4gICAgICBwYXRoOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLFxuICAgIH0sXG4gIF07XG4gIHRoaXMuc2Nyb2xsUGFnZSA9IHRoaXMuc2Nyb2xsUGFnZXNbMF07XG4gIC8vIGV2ZW50c1xuICB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyID0gdGhpcy5vblNjcm9sbEhpc3RvcnkuYmluZCggdGhpcyApO1xuICB0aGlzLnVubG9hZEhhbmRsZXIgPSB0aGlzLm9uVW5sb2FkLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5zY3JvbGxlci5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciApO1xuICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5vbkFwcGVuZEhpc3RvcnkgKTtcbiAgdGhpcy5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyggdHJ1ZSApO1xufTtcblxucHJvdG8uYmluZEhpc3RvcnlBcHBlbmRFdmVudHMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICBsZXQgYWRkUmVtb3ZlID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICB0aGlzLnNjcm9sbGVyWyBhZGRSZW1vdmUgXSggJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgKTtcbiAgd2luZG93WyBhZGRSZW1vdmUgXSggJ3VubG9hZCcsIHRoaXMudW5sb2FkSGFuZGxlciApO1xufTtcblxucHJvdG8uY3JlYXRlSGlzdG9yeVBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdsb2FkJywgdGhpcy5vblBhZ2VMb2FkSGlzdG9yeSApO1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5oaXN0b3J5ID1cbnByb3RvLmRlc3Ryb3lIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBpc0hpc3RvcnlBcHBlbmQgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeSAmJiB0aGlzLm9wdGlvbnMuYXBwZW5kO1xuICBpZiAoIGlzSGlzdG9yeUFwcGVuZCApIHtcbiAgICB0aGlzLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzKCBmYWxzZSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBhcHBlbmQgaGlzdG9yeSAtLS0tLSAvL1xuXG5wcm90by5vbkFwcGVuZEhpc3RvcnkgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkge1xuICAvLyBkbyBub3QgcHJvY2VlZCBpZiBubyBpdGVtcy4gIzc3OVxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXG4gIGxldCBmaXJzdEl0ZW0gPSBpdGVtc1swXTtcbiAgbGV0IGVsZW1TY3JvbGxZID0gdGhpcy5nZXRFbGVtZW50U2Nyb2xsWSggZmlyc3RJdGVtICk7XG4gIC8vIHJlc29sdmUgcGF0aFxuICBsaW5rLmhyZWYgPSBwYXRoO1xuICAvLyBhZGQgcGFnZSBkYXRhIHRvIGhhc2hcbiAgdGhpcy5zY3JvbGxQYWdlcy5wdXNoKHtcbiAgICB0b3A6IGVsZW1TY3JvbGxZLFxuICAgIHBhdGg6IGxpbmsuaHJlZixcbiAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0RWxlbWVudFNjcm9sbFkgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICByZXR1cm4gZWxlbS5vZmZzZXRUb3AgLSB0aGlzLnRvcDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG4gIH1cbn07XG5cbnByb3RvLm9uU2Nyb2xsSGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjeWNsZSB0aHJvdWdoIHBvc2l0aW9ucywgZmluZCBiaWdnZXN0IHdpdGhvdXQgZ29pbmcgb3ZlclxuICBsZXQgc2Nyb2xsUGFnZSA9IHRoaXMuZ2V0Q2xvc2VzdFNjcm9sbFBhZ2UoKTtcbiAgLy8gc2V0IGhpc3RvcnkgaWYgY2hhbmdlZFxuICBpZiAoIHNjcm9sbFBhZ2UgIT0gdGhpcy5zY3JvbGxQYWdlICkge1xuICAgIHRoaXMuc2Nyb2xsUGFnZSA9IHNjcm9sbFBhZ2U7XG4gICAgdGhpcy5zZXRIaXN0b3J5KCBzY3JvbGxQYWdlLnRpdGxlLCBzY3JvbGxQYWdlLnBhdGggKTtcbiAgfVxufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIEluZmluaXRlU2Nyb2xsLCAnb25TY3JvbGxIaXN0b3J5JywgMTUwICk7XG5cbnByb3RvLmdldENsb3Nlc3RTY3JvbGxQYWdlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzY3JvbGxWaWV3WTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICBzY3JvbGxWaWV3WSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQgLyAyO1xuICB9IGVsc2Uge1xuICAgIHNjcm9sbFZpZXdZID0gd2luZG93LnNjcm9sbFkgKyB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gIH1cblxuICBsZXQgc2Nyb2xsUGFnZTtcbiAgZm9yICggbGV0IHBhZ2Ugb2YgdGhpcy5zY3JvbGxQYWdlcyApIHtcbiAgICBpZiAoIHBhZ2UudG9wID49IHNjcm9sbFZpZXdZICkgYnJlYWs7XG5cbiAgICBzY3JvbGxQYWdlID0gcGFnZTtcbiAgfVxuICByZXR1cm4gc2Nyb2xsUGFnZTtcbn07XG5cbnByb3RvLnNldEhpc3RvcnkgPSBmdW5jdGlvbiggdGl0bGUsIHBhdGggKSB7XG4gIGxldCBvcHRIaXN0b3J5ID0gdGhpcy5vcHRpb25zLmhpc3Rvcnk7XG4gIGxldCBoaXN0b3J5TWV0aG9kID0gb3B0SGlzdG9yeSAmJiBoaXN0b3J5WyBvcHRIaXN0b3J5ICsgJ1N0YXRlJyBdO1xuICBpZiAoICFoaXN0b3J5TWV0aG9kICkgcmV0dXJuO1xuXG4gIGhpc3RvcnlbIG9wdEhpc3RvcnkgKyAnU3RhdGUnIF0oIG51bGwsIHRpdGxlLCBwYXRoICk7XG4gIGlmICggdGhpcy5vcHRpb25zLmhpc3RvcnlUaXRsZSApIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2hpc3RvcnknLCBudWxsLCBbIHRpdGxlLCBwYXRoIF0gKTtcbn07XG5cbi8vIHNjcm9sbCB0byB0b3AgdG8gcHJldmVudCBpbml0aWFsIHNjcm9sbC1yZXNldCBhZnRlciBwYWdlIHJlZnJlc2hcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYzMzkxNS8xODIxODNcbnByb3RvLm9uVW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zY3JvbGxQYWdlLnRvcCA9PT0gMCApIHJldHVybjtcblxuICAvLyBjYWxjdWxhdGUgd2hlcmUgc2Nyb2xsIHBvc2l0aW9uIHdvdWxkIGJlIG9uIHJlZnJlc2hcbiAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSAtIHRoaXMuc2Nyb2xsUGFnZS50b3AgKyB0aGlzLnRvcDtcbiAgLy8gZGlzYWJsZSBzY3JvbGwgZXZlbnQgYmVmb3JlIHNldHRpbmcgc2Nyb2xsICM2NzlcbiAgdGhpcy5kZXN0cm95SGlzdG9yeSgpO1xuICBzY3JvbGxUbyggMCwgc2Nyb2xsWSApO1xufTtcblxuLy8gLS0tLS0gbG9hZCBoaXN0b3J5IC0tLS0tIC8vXG5cbi8vIHVwZGF0ZSBVUkxcbnByb3RvLm9uUGFnZUxvYWRIaXN0b3J5ID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoICkge1xuICB0aGlzLnNldEhpc3RvcnkoIHJlc3BvbnNlLnRpdGxlLCBwYXRoICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8qIVxuICogSW5maW5pdGUgU2Nyb2xsIHY0LjAuMVxuICogQXV0b21hdGljYWxseSBhZGQgbmV4dCBwYWdlXG4gKlxuICogTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxuICogb3IgSW5maW5pdGUgU2Nyb2xsIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwczovL2luZmluaXRlLXNjcm9sbC5jb21cbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9wYWdlLWxvYWQnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9zY3JvbGwtd2F0Y2gnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9oaXN0b3J5JyksXG4gICAgICAgIHJlcXVpcmUoJy4vYnV0dG9uJyksXG4gICAgICAgIHJlcXVpcmUoJy4vc3RhdHVzJyksXG4gICAgKTtcbiAgfVxuXG59ICkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggSW5maW5pdGVTY3JvbGwgKSB7XG4gIHJldHVybiBJbmZpbml0ZVNjcm9sbDtcbn0gKTtcbiIsIi8vIHBhZ2UtbG9hZFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICAvLyBhcHBlbmQ6IGZhbHNlLFxuICBsb2FkT25TY3JvbGw6IHRydWUsXG4gIGNoZWNrTGFzdFBhZ2U6IHRydWUsXG4gIHJlc3BvbnNlQm9keTogJ3RleHQnLFxuICBkb21QYXJzZVJlc3BvbnNlOiB0cnVlLFxuICAvLyBwcmVmaWxsOiBmYWxzZSxcbiAgLy8gb3V0bGF5ZXI6IG51bGwsXG59ICk7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5wYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNhbkxvYWQgPSB0cnVlO1xuICB0aGlzLm9uKCAnc2Nyb2xsVGhyZXNob2xkJywgdGhpcy5vblNjcm9sbFRocmVzaG9sZExvYWQgKTtcbiAgdGhpcy5vbiggJ2xvYWQnLCB0aGlzLmNoZWNrTGFzdFBhZ2UgKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMub3V0bGF5ZXIgKSB7XG4gICAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMub25BcHBlbmRPdXRsYXllciApO1xuICB9XG59O1xuXG5wcm90by5vblNjcm9sbFRocmVzaG9sZExvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMubG9hZE9uU2Nyb2xsICkgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcbn07XG5cbmxldCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbnByb3RvLmxvYWROZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNMb2FkaW5nIHx8ICF0aGlzLmNhbkxvYWQgKSByZXR1cm47XG5cbiAgbGV0IHsgcmVzcG9uc2VCb2R5LCBkb21QYXJzZVJlc3BvbnNlLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcbiAgbGV0IHBhdGggPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIGlmICggdHlwZW9mIGZldGNoT3B0aW9ucyA9PSAnZnVuY3Rpb24nICkgZmV0Y2hPcHRpb25zID0gZmV0Y2hPcHRpb25zKCk7XG5cbiAgbGV0IGZldGNoUHJvbWlzZSA9IGZldGNoKCBwYXRoLCBmZXRjaE9wdGlvbnMgKVxuICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgaWYgKCAhcmVzcG9uc2Uub2sgKSB7XG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvciggcmVzcG9uc2Uuc3RhdHVzVGV4dCApO1xuICAgICAgICB0aGlzLm9uUGFnZUVycm9yKCBlcnJvciwgcGF0aCwgcmVzcG9uc2UgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2UgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlWyByZXNwb25zZUJvZHkgXSgpLnRoZW4oICggYm9keSApID0+IHtcbiAgICAgICAgbGV0IGNhbkRvbVBhcnNlID0gcmVzcG9uc2VCb2R5ID09ICd0ZXh0JyAmJiBkb21QYXJzZVJlc3BvbnNlO1xuICAgICAgICBpZiAoIGNhbkRvbVBhcnNlICkge1xuICAgICAgICAgIGJvZHkgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKCBib2R5LCAndGV4dC9odG1sJyApO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDIwNCApIHtcbiAgICAgICAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgICAgICAgIHJldHVybiB7IGJvZHksIHJlc3BvbnNlIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25QYWdlTG9hZCggYm9keSwgcGF0aCwgcmVzcG9uc2UgKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0gKVxuICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcbiAgICAgIHRoaXMub25QYWdlRXJyb3IoIGVycm9yLCBwYXRoICk7XG4gICAgfSApO1xuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3JlcXVlc3QnLCBudWxsLCBbIHBhdGgsIGZldGNoUHJvbWlzZSBdICk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZTtcbn07XG5cbnByb3RvLm9uUGFnZUxvYWQgPSBmdW5jdGlvbiggYm9keSwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIC8vIGRvbmUgbG9hZGluZyBpZiBub3QgYXBwZW5kaW5nXG4gIGlmICggIXRoaXMub3B0aW9ucy5hcHBlbmQgKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBhZ2VJbmRleCsrO1xuICB0aGlzLmxvYWRDb3VudCsrO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdsb2FkJywgbnVsbCwgWyBib2R5LCBwYXRoLCByZXNwb25zZSBdICk7XG4gIHJldHVybiB0aGlzLmFwcGVuZE5leHRQYWdlKCBib2R5LCBwYXRoLCByZXNwb25zZSApO1xufTtcblxucHJvdG8uYXBwZW5kTmV4dFBhZ2UgPSBmdW5jdGlvbiggYm9keSwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIGxldCB7IGFwcGVuZCwgcmVzcG9uc2VCb2R5LCBkb21QYXJzZVJlc3BvbnNlIH0gPSB0aGlzLm9wdGlvbnM7XG4gIC8vIGRvIG5vdCBhcHBlbmQganNvblxuICBsZXQgaXNEb2N1bWVudCA9IHJlc3BvbnNlQm9keSA9PSAndGV4dCcgJiYgZG9tUGFyc2VSZXNwb25zZTtcbiAgaWYgKCAhaXNEb2N1bWVudCB8fCAhYXBwZW5kICkgcmV0dXJuIHsgYm9keSwgcmVzcG9uc2UgfTtcblxuICBsZXQgaXRlbXMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoIGFwcGVuZCApO1xuICBsZXQgcHJvbWlzZVZhbHVlID0geyBib2R5LCByZXNwb25zZSwgaXRlbXMgfTtcbiAgLy8gbGFzdCBwYWdlIGhpdCBpZiBubyBpdGVtcy4gIzg0MFxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgcmV0dXJuIHByb21pc2VWYWx1ZTtcbiAgfVxuXG4gIGxldCBmcmFnbWVudCA9IGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICk7XG4gIGxldCBhcHBlbmRSZWFkeSA9ICgpID0+IHtcbiAgICB0aGlzLmFwcGVuZEl0ZW1zKCBpdGVtcywgZnJhZ21lbnQgKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2FwcGVuZCcsIG51bGwsIFsgYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlIF0gKTtcbiAgICByZXR1cm4gcHJvbWlzZVZhbHVlO1xuICB9O1xuXG4gIC8vIFRPRE8gYWRkIGhvb2sgZm9yIG9wdGlvbiB0byB0cmlnZ2VyIGFwcGVuZFJlYWR5XG4gIGlmICggdGhpcy5vcHRpb25zLm91dGxheWVyICkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZE91dGxheWVySXRlbXMoIGZyYWdtZW50LCBhcHBlbmRSZWFkeSApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcHBlbmRSZWFkeSgpO1xuICB9XG59O1xuXG5wcm90by5hcHBlbmRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgZnJhZ21lbnQgKSB7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSByZXR1cm47XG5cbiAgLy8gZ2V0IGZyYWdtZW50IGlmIG5vdCBwcm92aWRlZFxuICBmcmFnbWVudCA9IGZyYWdtZW50IHx8IGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICk7XG4gIHJlZnJlc2hTY3JpcHRzKCBmcmFnbWVudCApO1xuICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG59O1xuXG5mdW5jdGlvbiBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApIHtcbiAgLy8gYWRkIGl0ZW1zIHRvIGZyYWdtZW50XG4gIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgaWYgKCBpdGVtcyApIGZyYWdtZW50LmFwcGVuZCggLi4uaXRlbXMgKTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyByZXBsYWNlIDxzY3JpcHQ+cyB3aXRoIGNvcGllcyBzbyB0aGV5IGxvYWRcbi8vIDxzY3JpcHQ+cyBhZGRlZCBieSBJbmZpbml0ZVNjcm9sbCB3aWxsIG5vdCBsb2FkXG4vLyBzaW1pbGFyIHRvIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYxMDk5NVxuZnVuY3Rpb24gcmVmcmVzaFNjcmlwdHMoIGZyYWdtZW50ICkge1xuICBsZXQgc2NyaXB0cyA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICBmb3IgKCBsZXQgc2NyaXB0IG9mIHNjcmlwdHMgKSB7XG4gICAgbGV0IGZyZXNoU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgLy8gY29weSBhdHRyaWJ1dGVzXG4gICAgbGV0IGF0dHJzID0gc2NyaXB0LmF0dHJpYnV0ZXM7XG4gICAgZm9yICggbGV0IGF0dHIgb2YgYXR0cnMgKSB7XG4gICAgICBmcmVzaFNjcmlwdC5zZXRBdHRyaWJ1dGUoIGF0dHIubmFtZSwgYXR0ci52YWx1ZSApO1xuICAgIH1cbiAgICAvLyBjb3B5IGlubmVyIHNjcmlwdCBjb2RlLiAjNzE4LCAjNzgyXG4gICAgZnJlc2hTY3JpcHQuaW5uZXJIVE1MID0gc2NyaXB0LmlubmVySFRNTDtcbiAgICBzY3JpcHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoIGZyZXNoU2NyaXB0LCBzY3JpcHQgKTtcbiAgfVxufVxuXG4vLyAtLS0tLSBvdXRsYXllciAtLS0tLSAvL1xuXG5wcm90by5hcHBlbmRPdXRsYXllckl0ZW1zID0gZnVuY3Rpb24oIGZyYWdtZW50LCBhcHBlbmRSZWFkeSApIHtcbiAgbGV0IGltYWdlc0xvYWRlZCA9IEluZmluaXRlU2Nyb2xsLmltYWdlc0xvYWRlZCB8fCB3aW5kb3cuaW1hZ2VzTG9hZGVkO1xuICBpZiAoICFpbWFnZXNMb2FkZWQgKSB7XG4gICAgY29uc29sZS5lcnJvcignW0luZmluaXRlU2Nyb2xsXSBpbWFnZXNMb2FkZWQgcmVxdWlyZWQgZm9yIG91dGxheWVyIG9wdGlvbicpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFwcGVuZCBvbmNlIGltYWdlcyBsb2FkZWRcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiggcmVzb2x2ZSApIHtcbiAgICBpbWFnZXNMb2FkZWQoIGZyYWdtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBib2R5UmVzcG9uc2UgPSBhcHBlbmRSZWFkeSgpO1xuICAgICAgcmVzb2x2ZSggYm9keVJlc3BvbnNlICk7XG4gICAgfSApO1xuICB9ICk7XG59O1xuXG5wcm90by5vbkFwcGVuZE91dGxheWVyID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApIHtcbiAgdGhpcy5vcHRpb25zLm91dGxheWVyLmFwcGVuZGVkKCBpdGVtcyApO1xufTtcblxuLy8gLS0tLS0gY2hlY2tMYXN0UGFnZSAtLS0tLSAvL1xuXG4vLyBjaGVjayByZXNwb25zZSBmb3IgbmV4dCBlbGVtZW50XG5wcm90by5jaGVja0xhc3RQYWdlID0gZnVuY3Rpb24oIGJvZHksIHBhdGggKSB7XG4gIGxldCB7IGNoZWNrTGFzdFBhZ2UsIHBhdGg6IHBhdGhPcHQgfSA9IHRoaXMub3B0aW9ucztcbiAgaWYgKCAhY2hlY2tMYXN0UGFnZSApIHJldHVybjtcblxuICAvLyBpZiBwYXRoIGlzIGZ1bmN0aW9uLCBjaGVjayBpZiBuZXh0IHBhdGggaXMgdHJ1dGh5XG4gIGlmICggdHlwZW9mIHBhdGhPcHQgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBsZXQgbmV4dFBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICBpZiAoICFuZXh0UGF0aCApIHtcbiAgICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIC8vIGdldCBzZWxlY3RvciBmcm9tIGNoZWNrTGFzdFBhZ2Ugb3IgcGF0aCBvcHRpb25cbiAgbGV0IHNlbGVjdG9yO1xuICBpZiAoIHR5cGVvZiBjaGVja0xhc3RQYWdlID09ICdzdHJpbmcnICkge1xuICAgIHNlbGVjdG9yID0gY2hlY2tMYXN0UGFnZTtcbiAgfSBlbHNlIGlmICggdGhpcy5pc1BhdGhTZWxlY3RvciApIHtcbiAgICAvLyBwYXRoIG9wdGlvbiBpcyBzZWxlY3RvciBzdHJpbmdcbiAgICBzZWxlY3RvciA9IHBhdGhPcHQ7XG4gIH1cbiAgLy8gY2hlY2sgbGFzdCBwYWdlIGZvciBzZWxlY3RvclxuICAvLyBiYWlsIGlmIG5vIHNlbGVjdG9yIG9yIG5vdCBkb2N1bWVudCByZXNwb25zZVxuICBpZiAoICFzZWxlY3RvciB8fCAhYm9keS5xdWVyeVNlbGVjdG9yICkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGlmIHJlc3BvbnNlIGhhcyBzZWxlY3RvclxuICBsZXQgbmV4dEVsZW0gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICk7XG4gIGlmICggIW5leHRFbGVtICkgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbn07XG5cbnByb3RvLmxhc3RQYWdlUmVhY2hlZCA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoICkge1xuICB0aGlzLmNhbkxvYWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnbGFzdCcsIG51bGwsIFsgYm9keSwgcGF0aCBdICk7XG59O1xuXG4vLyAtLS0tLSBlcnJvciAtLS0tLSAvL1xuXG5wcm90by5vblBhZ2VFcnJvciA9IGZ1bmN0aW9uKCBlcnJvciwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIHRoaXMuY2FuTG9hZCA9IGZhbHNlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdlcnJvcicsIG51bGwsIFsgZXJyb3IsIHBhdGgsIHJlc3BvbnNlIF0gKTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJlZmlsbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUucHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucHJlZmlsbCApIHJldHVybjtcblxuICBsZXQgYXBwZW5kID0gdGhpcy5vcHRpb25zLmFwcGVuZDtcbiAgaWYgKCAhYXBwZW5kICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYGFwcGVuZCBvcHRpb24gcmVxdWlyZWQgZm9yIHByZWZpbGwuIFNldCBhcyA6JHthcHBlbmR9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgdGhpcy5pc1ByZWZpbGxpbmcgPSB0cnVlO1xuICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5wcmVmaWxsICk7XG4gIHRoaXMub25jZSggJ2Vycm9yJywgdGhpcy5zdG9wUHJlZmlsbCApO1xuICB0aGlzLm9uY2UoICdsYXN0JywgdGhpcy5zdG9wUHJlZmlsbCApO1xuICB0aGlzLnByZWZpbGwoKTtcbn07XG5cbnByb3RvLnByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGRpc3RhbmNlID0gdGhpcy5nZXRQcmVmaWxsRGlzdGFuY2UoKTtcbiAgdGhpcy5pc1ByZWZpbGxpbmcgPSBkaXN0YW5jZSA+PSAwO1xuICBpZiAoIHRoaXMuaXNQcmVmaWxsaW5nICkge1xuICAgIHRoaXMubG9nKCdwcmVmaWxsJyk7XG4gICAgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0b3BQcmVmaWxsKCk7XG4gIH1cbn07XG5cbnByb3RvLmdldFByZWZpbGxEaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBlbGVtZW50IHNjcm9sbFxuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodCAtIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG4gIC8vIHdpbmRvd1xuICByZXR1cm4gdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufTtcblxucHJvdG8uc3RvcFByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5sb2coJ3N0b3BQcmVmaWxsJyk7XG4gIHRoaXMub2ZmKCAnYXBwZW5kJywgdGhpcy5wcmVmaWxsICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIHNjcm9sbC13YXRjaFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICBzY3JvbGxUaHJlc2hvbGQ6IDQwMCxcbiAgLy8gZWxlbWVudFNjcm9sbDogbnVsbCxcbn0gKTtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIC8vIGV2ZW50c1xuICB0aGlzLnBhZ2VTY3JvbGxIYW5kbGVyID0gdGhpcy5vblBhZ2VTY3JvbGwuYmluZCggdGhpcyApO1xuICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB0aGlzLm9uUmVzaXplLmJpbmQoIHRoaXMgKTtcblxuICBsZXQgc2Nyb2xsVGhyZXNob2xkID0gdGhpcy5vcHRpb25zLnNjcm9sbFRocmVzaG9sZDtcbiAgbGV0IGlzRW5hYmxlID0gc2Nyb2xsVGhyZXNob2xkIHx8IHNjcm9sbFRocmVzaG9sZCA9PT0gMDtcbiAgaWYgKCBpc0VuYWJsZSApIHRoaXMuZW5hYmxlU2Nyb2xsV2F0Y2goKTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuc2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlU2Nyb2xsV2F0Y2goKTtcbn07XG5cbnByb3RvLmVuYWJsZVNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc1Njcm9sbFdhdGNoaW5nICkgcmV0dXJuO1xuXG4gIHRoaXMuaXNTY3JvbGxXYXRjaGluZyA9IHRydWU7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgLy8gVE9ETyBkaXNhYmxlIGFmdGVyIGVycm9yP1xuICB0aGlzLm9uKCAnbGFzdCcsIHRoaXMuZGlzYWJsZVNjcm9sbFdhdGNoICk7XG4gIHRoaXMuYmluZFNjcm9sbFdhdGNoRXZlbnRzKCB0cnVlICk7XG59O1xuXG5wcm90by5kaXNhYmxlU2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc1Njcm9sbFdhdGNoaW5nICkgcmV0dXJuO1xuXG4gIHRoaXMuYmluZFNjcm9sbFdhdGNoRXZlbnRzKCBmYWxzZSApO1xuICBkZWxldGUgdGhpcy5pc1Njcm9sbFdhdGNoaW5nO1xufTtcblxucHJvdG8uYmluZFNjcm9sbFdhdGNoRXZlbnRzID0gZnVuY3Rpb24oIGlzQmluZCApIHtcbiAgbGV0IGFkZFJlbW92ZSA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdGhpcy5zY3JvbGxlclsgYWRkUmVtb3ZlIF0oICdzY3JvbGwnLCB0aGlzLnBhZ2VTY3JvbGxIYW5kbGVyICk7XG4gIHdpbmRvd1sgYWRkUmVtb3ZlIF0oICdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIgKTtcbn07XG5cbnByb3RvLm9uUGFnZVNjcm9sbCA9IEluZmluaXRlU2Nyb2xsLnRocm90dGxlKCBmdW5jdGlvbigpIHtcbiAgbGV0IGRpc3RhbmNlID0gdGhpcy5nZXRCb3R0b21EaXN0YW5jZSgpO1xuICBpZiAoIGRpc3RhbmNlIDw9IHRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQgKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzY3JvbGxUaHJlc2hvbGQnKTtcbiAgfVxufSApO1xuXG5wcm90by5nZXRCb3R0b21EaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYm90dG9tLCBzY3JvbGxZO1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIGJvdHRvbSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIHNjcm9sbFkgPSB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgfVxuICByZXR1cm4gYm90dG9tIC0gc2Nyb2xsWTtcbn07XG5cbnByb3RvLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggSW5maW5pdGVTY3JvbGwsICdvblJlc2l6ZScsIDE1MCApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIHN0YXR1c1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuLy8gSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMuc3RhdHVzID0gbnVsbDtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHVzRWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLnN0YXR1cyApO1xuICBpZiAoICFzdGF0dXNFbGVtICkgcmV0dXJuO1xuXG4gIC8vIGVsZW1lbnRzXG4gIHRoaXMuc3RhdHVzRWxlbWVudCA9IHN0YXR1c0VsZW07XG4gIHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50cyA9IHtcbiAgICByZXF1ZXN0OiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtcmVxdWVzdCcpLFxuICAgIGVycm9yOiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtZXJyb3InKSxcbiAgICBsYXN0OiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtbGFzdCcpLFxuICB9O1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ3JlcXVlc3QnLCB0aGlzLnNob3dSZXF1ZXN0U3RhdHVzICk7XG4gIHRoaXMub24oICdlcnJvcicsIHRoaXMuc2hvd0Vycm9yU3RhdHVzICk7XG4gIHRoaXMub24oICdsYXN0JywgdGhpcy5zaG93TGFzdFN0YXR1cyApO1xuICB0aGlzLmJpbmRIaWRlU3RhdHVzKCdvbicpO1xufTtcblxucHJvdG8uYmluZEhpZGVTdGF0dXMgPSBmdW5jdGlvbiggYmluZE1ldGhvZCApIHtcbiAgbGV0IGhpZGVFdmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmQgPyAnYXBwZW5kJyA6ICdsb2FkJztcbiAgdGhpc1sgYmluZE1ldGhvZCBdKCBoaWRlRXZlbnQsIHRoaXMuaGlkZUFsbFN0YXR1cyApO1xufTtcblxucHJvdG8uc2hvd1JlcXVlc3RTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdyZXF1ZXN0Jyk7XG59O1xuXG5wcm90by5zaG93RXJyb3JTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdlcnJvcicpO1xufTtcblxucHJvdG8uc2hvd0xhc3RTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdsYXN0Jyk7XG4gIC8vIHByZXZlbnQgbGFzdCB0aGVuIGFwcGVuZCBldmVudCByYWNlIGNvbmRpdGlvbiBmcm9tIHNob3dpbmcgbGFzdCBzdGF0dXMgIzcwNlxuICB0aGlzLmJpbmRIaWRlU3RhdHVzKCdvZmYnKTtcbn07XG5cbnByb3RvLnNob3dTdGF0dXMgPSBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICBzaG93KCB0aGlzLnN0YXR1c0VsZW1lbnQgKTtcbiAgdGhpcy5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cygpO1xuICBsZXQgZXZlbnRFbGVtID0gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzWyBldmVudE5hbWUgXTtcbiAgc2hvdyggZXZlbnRFbGVtICk7XG59O1xuXG5wcm90by5oaWRlQWxsU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIGhpZGUoIHRoaXMuc3RhdHVzRWxlbWVudCApO1xuICB0aGlzLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzKCk7XG59O1xuXG5wcm90by5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKCBsZXQgdHlwZSBpbiB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHMgKSB7XG4gICAgbGV0IGV2ZW50RWxlbSA9IHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50c1sgdHlwZSBdO1xuICAgIGhpZGUoIGV2ZW50RWxlbSApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gaGlkZSggZWxlbSApIHtcbiAgc2V0RGlzcGxheSggZWxlbSwgJ25vbmUnICk7XG59XG5cbmZ1bmN0aW9uIHNob3coIGVsZW0gKSB7XG4gIHNldERpc3BsYXkoIGVsZW0sICdibG9jaycgKTtcbn1cblxuZnVuY3Rpb24gc2V0RGlzcGxheSggZWxlbSwgdmFsdWUgKSB7XG4gIGlmICggZWxlbSApIHtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8qKlxuICogRXZFbWl0dGVyIHYyLjAuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxubGV0IHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHJldHVybiB0aGlzO1xuXG4gIC8vIHNldCBldmVudHMgaGFzaFxuICBsZXQgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIGxldCBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoICFsaXN0ZW5lcnMuaW5jbHVkZXMoIGxpc3RlbmVyICkgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHJldHVybiB0aGlzO1xuXG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICBsZXQgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHJldHVybiB0aGlzO1xuXG4gIGxldCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCAwICk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIGxldCBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCBsZXQgbGlzdGVuZXIgb2YgbGlzdGVuZXJzICkge1xuICAgIGxldCBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSApICk7XG4iLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYzLjAuMFxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIGdsb2JhbCApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZ2xvYmFsLmZpenp5VUlVdGlscyA9IGZhY3RvcnkoIGdsb2JhbCApO1xuICB9XG5cbn0oIHRoaXMsIGZ1bmN0aW9uIGZhY3RvcnkoIGdsb2JhbCApIHtcblxubGV0IHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbiggYSwgYiApO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG51dGlscy5tYWtlQXJyYXkgPSBmdW5jdGlvbiggb2JqICkge1xuICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHJldHVybiBvYmo7XG5cbiAgLy8gcmV0dXJuIGVtcHR5IGFycmF5IGlmIHVuZGVmaW5lZCBvciBudWxsLiAjNlxuICBpZiAoIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCApIHJldHVybiBbXTtcblxuICBsZXQgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gIGlmICggaXNBcnJheUxpa2UgKSByZXR1cm4gWyAuLi5vYmogXTtcblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIGxldCBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHJldHVybiBlbGVtO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGxldCBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG5cbiAgcmV0dXJuIGVsZW1zXG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgLmZpbHRlciggKCBlbGVtICkgPT4gZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IClcbiAgICAucmVkdWNlKCAoIGZmRWxlbXMsIGVsZW0gKSA9PiB7XG4gICAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgICByZXR1cm4gZmZFbGVtcztcbiAgICAgIH1cbiAgICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICAgIGxldCBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICAgIGZmRWxlbXMgPSBmZkVsZW1zLmNvbmNhdCggLi4uY2hpbGRFbGVtcyApO1xuICAgICAgcmV0dXJuIGZmRWxlbXM7XG4gICAgfSwgW10gKTtcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMTAwO1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgbGV0IG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgbGV0IHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQoIHRoaXNbIHRpbWVvdXROYW1lIF0gKTtcblxuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBtZXRob2QuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggb25Eb2NSZWFkeSApIHtcbiAgbGV0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggb25Eb2NSZWFkeSApO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgb25Eb2NSZWFkeSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vYml0Lmx5LzNvWUx1c2NcbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSApLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5sZXQgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuXG4vLyBhbGxvdyB1c2VyIHRvIGluaXRpYWxpemUgY2xhc3NlcyB2aWEgW2RhdGEtbmFtZXNwYWNlXSBvciAuanMtbmFtZXNwYWNlIGNsYXNzXG4vLyBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuLy8gb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uc1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIGxldCBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgbGV0IGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICBsZXQgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGBbJHtkYXRhQXR0cn1dYCApO1xuICAgIGxldCBqUXVlcnkgPSBnbG9iYWwualF1ZXJ5O1xuXG4gICAgWyAuLi5kYXRhQXR0ckVsZW1zIF0uZm9yRWFjaCggKCBlbGVtICkgPT4ge1xuICAgICAgbGV0IGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YUF0dHIgKTtcbiAgICAgIGxldCBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXJyb3IgcGFyc2luZyAke2RhdGFBdHRyfSBvbiAke2VsZW0uY2xhc3NOYW1lfTogJHtlcnJvcn1gICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9ICk7XG5cbiAgfSApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSApICk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlc3BvbnNpdmVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXNwb25zaXZlQXV0b0hlaWdodChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2l2ZUF1dG9IZWlnaHQpO1xuXG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuZWxlbWVudHMgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ydW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLnJ1bigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlc3BvbnNpdmVBdXRvSGVpZ2h0LCBbe1xuICAgIGtleTogJ3JlY2FsYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYWtlR3JvdXBzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZUdyb3VwcyhlbGVtZW50cykge1xuICAgICAgdmFyIGdyb3VwID0gW107XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIH0pO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICB2YXIgaGVpZ2h0ID0gKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudHNbMF0pLnRvcDtcbiAgICAgIGdyb3VwWzBdID0gW107XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICgoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3AgIT09IGhlaWdodCkge1xuICAgICAgICAgIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnQpLnRvcDtcbiAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICBncm91cFtpZHhdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBbaWR4XS5wdXNoKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2F1dG9IZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRvSGVpZ2h0KGdyb3VwKSB7XG4gICAgICB2YXIgaGVpZ2h0cyA9IGdyb3VwLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgIHZhciBib3hTaXppbmcgPSBjb21wdXRlZFN0eWxlLmJveFNpemluZztcbiAgICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodCAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wKSAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShoZWlnaHRzKSk7XG4gICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3J1bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuXG4gICAgICB2YXIgZ3JvdXBzID0gdGhpcy5tYWtlR3JvdXBzKGVsZW1lbnRzKTtcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICBfdGhpczIuYXV0b0hlaWdodChncm91cCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVzcG9uc2l2ZUF1dG9IZWlnaHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbn07XG5cbnZhciBnZXRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn07XG5cbnZhciBnZXRPZmZzZXQgPSBleHBvcnRzLmdldE9mZnNldCA9IGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGxUb3AoKSxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBnZXRTY3JvbGxMZWZ0KClcbiAgfTtcbn07Il19
