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

require("./lib/element");

var _theme = _interopRequireDefault(require("./theme/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OceanWP = function OceanWP() {
  var _this = this;

  _classCallCheck(this, OceanWP);

  _defineProperty(this, "start", function () {
    _this.theme = new _theme["default"]();
  });
};

"use script";
window.oceanwp = new OceanWP();
oceanwp.start();

},{"./lib/element":3,"./theme/theme":29}],3:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlogMasonry = function BlogMasonry() {
  var _this = this;

  _classCallCheck(this, BlogMasonry);

  _defineProperty(this, "isotop", void 0);

  _defineProperty(this, "start", function () {
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

},{"../../constants":1}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _responsiveAutoHeight = _interopRequireDefault(require("responsive-auto-height"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EqualHeightElements = function EqualHeightElements() {
  _classCallCheck(this, EqualHeightElements);

  _defineProperty(this, "start", function () {
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

},{"responsive-auto-height":39}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _lastWindowWidth = /*#__PURE__*/new WeakMap();

var _lastWindowHeight = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowLoad = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _fixedFooter = /*#__PURE__*/new WeakMap();

var _parallaxFooter = /*#__PURE__*/new WeakMap();

var Footer = function Footer() {
  var _this = this;

  _classCallCheck(this, Footer);

  _lastWindowWidth.set(this, {
    writable: true,
    value: void 0
  });

  _lastWindowHeight.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldSet(_this, _lastWindowWidth, window.innerWidth);

      _classPrivateFieldSet(_this, _lastWindowHeight, window.innerHeight);
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      window.addEventListener("load", _classPrivateFieldGet(_this, _onWindowLoad));
      window.addEventListener("resize", _classPrivateFieldGet(_this, _onWindowResize));
    }
  });

  _onWindowLoad.set(this, {
    writable: true,
    value: function value(event) {
      _classPrivateFieldGet(_this, _fixedFooter).call(_this);

      _classPrivateFieldGet(_this, _parallaxFooter).call(_this);
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (_classPrivateFieldGet(_this, _lastWindowWidth) !== window.innerWidth || _classPrivateFieldGet(_this, _lastWindowHeight) !== window.innerHeight) {
        _classPrivateFieldGet(_this, _fixedFooter).call(_this);
      }

      _classPrivateFieldGet(_this, _parallaxFooter).call(_this);
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

          _constants.DOM.main.style.marginBottom = ((_DOM$footer$parallax = _constants.DOM.footer.parallax) === null || _DOM$footer$parallax === void 0 ? void 0 : _DOM$footer$parallax.offsetHeight) + "px";
        }, 1);
      }
    }
  });

  if (!_constants.DOM.main) {
    return;
  }

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

exports["default"] = Footer;

},{"../../constants":1}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vertical = _interopRequireDefault(require("./header/vertical"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var Header = function Header() {
  var _this = this;

  _classCallCheck(this, Header);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.vertical = new _vertical["default"]();
    }
  });

  _classPrivateFieldGet(this, _start).call(this);
};

var _default = Header;
exports["default"] = _default;

},{"./header/vertical":9}],9:[function(require,module,exports){
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

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var VerticalHeader = function VerticalHeader() {
  var _this = this;

  _classCallCheck(this, VerticalHeader);

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

      _classPrivateFieldSet(_this, _menuItemsPlusIcon, _constants.options.verticalHeaderTarget == "link" ? _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children > a") : _constants.DOM.header.vertical.querySelectorAll(".dropdown-toggle"));

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
      _classPrivateFieldGet(_this, _menuItemsPlusIcon).forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", _classPrivateFieldGet(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("tap", _classPrivateFieldGet(_this, _onMenuItemPlusIconClick));
      });

      _constants.DOM.menu.vertical.toggleMenuBtn.addEventListener("click", _classPrivateFieldGet(_this, _onToggleMenuBtnClick));

      document.addEventListener("keydown", _classPrivateFieldGet(_this, _onDocumentKeydown));
    }
  });

  _onMenuItemPlusIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var plusIcon = event.currentTarget;
      var menuItem = _constants.options.verticalHeaderTarget == "link" ? plusIcon.parentNode : plusIcon.parentNode.parentNode;

      if (!menuItem.classList.contains("active")) {
        _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children").forEach(function (menuItemHasChildren) {
          if (menuItem != menuItemHasChildren && menuItem.oceanParents(".menu-item-has-children").findIndex(function (parentMenuItem) {
            return parentMenuItem == menuItemHasChildren;
          })) {
            menuItemHasChildren.classList.remove("active");
            (0, _utils.slideUp)(menuItemHasChildren.lastElementChild, 200);
          }
        });

        menuItem.classList.add("active");
        (0, _utils.slideDown)(menuItem.lastElementChild, 200);
      } else {
        menuItem.classList.remove("active");
        (0, _utils.slideUp)(menuItem.lastElementChild, 200);
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

        _classPrivateFieldGet(_this, _onToggleMenuBtnClick).call(_this, event);
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = VerticalHeader;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../lib/utils");

var _fullScreen = _interopRequireDefault(require("./menu/full-screen"));

var _mega = _interopRequireDefault(require("./menu/mega"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onNoClickMenuItemClick = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseenter = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseleave = /*#__PURE__*/new WeakMap();

var Menu = function Menu() {
  var _this = this;

  _classCallCheck(this, Menu);

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
        noClickMenuItem.addEventListener("click", _classPrivateFieldGet(_this, _onNoClickMenuItemClick));
      });
      document.querySelectorAll("ul.sf-menu").forEach(function (menu) {
        var parentMenuItems = menu.querySelectorAll(".menu-item-has-children");
        parentMenuItems.forEach(function (parentMenuItem) {
          parentMenuItem.addEventListener("mouseenter", _classPrivateFieldGet(_this, _onParentMenuItemMouseenter));
          parentMenuItem.addEventListener("mouseleave", _classPrivateFieldGet(_this, _onParentMenuItemMouseleave));
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = Menu;
exports["default"] = _default;

},{"../../lib/utils":4,"./menu/full-screen":11,"./menu/mega":12}],11:[function(require,module,exports){
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

  _classCallCheck(this, FullScreenMenu);

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

      _constants.DOM.menu.fullScreen.toggleMenuBtn.addEventListener("click", _classPrivateFieldGet(_this, _onToggleMenuBtnClick));

      (_document$querySelect = document.querySelectorAll('#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", _classPrivateFieldGet(_this, _onMenuLinkClick));
        menuItemLink.addEventListener("tap", _classPrivateFieldGet(_this, _onMenuLinkClick));
      });
      document.querySelectorAll('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", _classPrivateFieldGet(_this, _onMenuHashtagLinkClick));
      });
      document.addEventListener("keydown", _classPrivateFieldGet(_this, _onDocumentKeydown));
    }
  });

  _onToggleMenuBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var toggleMenuBtn = event.currentTarget;

      if (!toggleMenuBtn.classList.contains("exit")) {
        _classPrivateFieldGet(_this, _openMenu).call(_this);
      } else {
        _classPrivateFieldGet(_this, _closeMenu).call(_this);
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
      _classPrivateFieldGet(_this, _closeMenu).call(_this);
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

        _classPrivateFieldGet(_this, _closeMenu).call(_this);
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = FullScreenMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4}],12:[function(require,module,exports){
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

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _onTopbarMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _menuItemMouseEnter = /*#__PURE__*/new WeakMap();

var MegaMenu = function MegaMenu() {
  var _this = this;

  _classCallCheck(this, MegaMenu);

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
        menuItem.addEventListener("mouseenter", _classPrivateFieldGet(_this, _onMenuItemMouseEnter));
      }); // Topbar menu items


      _constants.DOM.menu.mega.topbarMenuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", _classPrivateFieldGet(_this, _onTopbarMenuItemMouseEnter));
      });
    }
  });

  _onMenuItemMouseEnter.set(this, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.site.classList.contains("medium-header") ? document.querySelector("#site-navigation-wrap > .container") : document.querySelector("#site-header-inner");

      _classPrivateFieldGet(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _onTopbarMenuItemMouseEnter.set(this, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.topbar;

      _classPrivateFieldGet(_this, _menuItemMouseEnter).call(_this, wrapper, event);
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = MegaMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropDown = _interopRequireDefault(require("./mobile-menu/drop-down"));

var _fullScreen = _interopRequireDefault(require("./mobile-menu/full-screen"));

var _sidebar = _interopRequireDefault(require("./mobile-menu/sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var MobileMenu = function MobileMenu() {
  var _this = this;

  _classCallCheck(this, MobileMenu);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.dropDown = new _dropDown["default"]();
      _this.fullScreen = new _fullScreen["default"]();
      _this.sidebar = new _sidebar["default"]();
    }
  });

  _classPrivateFieldGet(this, _start).call(this);
};

var _default = MobileMenu;
exports["default"] = _default;

},{"./mobile-menu/drop-down":14,"./mobile-menu/full-screen":15,"./mobile-menu/sidebar":16}],14:[function(require,module,exports){
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

  _classCallCheck(this, DropDownMobileMenu);

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

      _classPrivateFieldSet(_this, _isMenuOpen, false);

      (_DOM$mobileMenu$menuI = _constants.DOM.mobileMenu.menuItemsHasChildren) === null || _DOM$mobileMenu$menuI === void 0 ? void 0 : _DOM$mobileMenu$menuI.forEach(function (menuItem) {
        var span = document.createElement("span");
        span.className = "dropdown-toggle";
        span.setAttribute("tabindex", 0);
        menuItem.getElementsByTagName("a")[0].appendChild(span);
      });

      _classPrivateFieldSet(_this, _menuItemsToggleIcon, _constants.options.sidrDropdownTarget == "link" ? (_DOM$mobileMenu$navWr = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr === void 0 ? void 0 : _DOM$mobileMenu$navWr.querySelectorAll("li.menu-item-has-children > a") : (_DOM$mobileMenu$navWr2 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr2 === void 0 ? void 0 : _DOM$mobileMenu$navWr2.querySelectorAll(".dropdown-toggle"));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$toggl, _DOM$mobileMenu$navWr3, _DOM$mobileMenu$navWr4, _DOM$mobileMenu$hambu, _classPrivateFieldGet2;

      (_DOM$mobileMenu$toggl = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl === void 0 ? void 0 : _DOM$mobileMenu$toggl.addEventListener("click", _classPrivateFieldGet(_this, _onToggleMenuButtonClick));
      (_DOM$mobileMenu$navWr3 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr3 === void 0 ? void 0 : _DOM$mobileMenu$navWr3.querySelectorAll('li a[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", _classPrivateFieldGet(_this, _onMenuCloseClick));
      });
      document.addEventListener("click", _classPrivateFieldGet(_this, _onMenuCloseClick));
      (_DOM$mobileMenu$navWr4 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr4 === void 0 ? void 0 : _DOM$mobileMenu$navWr4.addEventListener("click", function (event) {
        event.stopPropagation();
      });
      window.addEventListener("resize", _classPrivateFieldGet(_this, _onWindowResize));
      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.addEventListener("click", _classPrivateFieldGet(_this, _onHamburgerClick));
      (_classPrivateFieldGet2 = _classPrivateFieldGet(_this, _menuItemsToggleIcon)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", _classPrivateFieldGet(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("tap", _classPrivateFieldGet(_this, _onMenuItemPlusIconClick));
      });
      document.addEventListener("keydown", _classPrivateFieldGet(_this, _onDocumentKeydown));
    }
  });

  _onToggleMenuButtonClick.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl2, _DOM$mobileMenu$hambu2, _DOM$mobileMenu$toggl3;

      event.stopPropagation();
      (0, _utils.slideToggle)(_constants.DOM.mobileMenu.navWrapper, 500);
      (_DOM$mobileMenu$toggl2 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl2 === void 0 ? void 0 : _DOM$mobileMenu$toggl2.classList.toggle("opened");
      (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.toggle("is-active");
      (_DOM$mobileMenu$toggl3 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl3 === void 0 ? void 0 : _DOM$mobileMenu$toggl3.focus();
    }
  });

  _onMenuCloseClick.set(this, {
    writable: true,
    value: function value(event) {
      if (!!_constants.DOM.mobileMenu.navWrapper) {
        var _DOM$mobileMenu$toggl4, _DOM$mobileMenu$hambu3;

        (0, _utils.slideUp)(_constants.DOM.mobileMenu.navWrapper, 200);
        (_DOM$mobileMenu$toggl4 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl4 === void 0 ? void 0 : _DOM$mobileMenu$toggl4.classList.remove("opened");
        (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.classList.remove("is-active");
      }
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        _classPrivateFieldGet(_this, _onMenuCloseClick).call(_this);
      }
    }
  });

  _onHamburgerClick.set(this, {
    writable: true,
    value: function value(event) {
      _classPrivateFieldSet(_this, _isMenuOpen, !_classPrivateFieldGet(_this, _isMenuOpen));

      event.currentTarget.setAttribute("aria-expanded", _classPrivateFieldGet(_this, _isMenuOpen));
    }
  });

  _onMenuItemPlusIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        var _DOM$mobileMenu$menuI2;

        (_DOM$mobileMenu$menuI2 = _constants.DOM.mobileMenu.menuItemsHasChildren) === null || _DOM$mobileMenu$menuI2 === void 0 ? void 0 : _DOM$mobileMenu$menuI2.forEach(function (menuItemHasChildren) {
          if (menuItem != menuItemHasChildren && menuItem.oceanParents(".menu-item-has-children").findIndex(function (parentMenuItem) {
            return parentMenuItem == menuItemHasChildren;
          })) {
            menuItemHasChildren === null || menuItemHasChildren === void 0 ? void 0 : menuItemHasChildren.classList.remove("active");
            (0, _utils.slideUp)(menuItemHasChildren.lastElementChild, 200);
          }
        });
        menuItem === null || menuItem === void 0 ? void 0 : menuItem.classList.add("active");
        (0, _utils.slideDown)(menuItem.lastElementChild, 200);
      } else {
        menuItem === null || menuItem === void 0 ? void 0 : menuItem.classList.remove("active");
        (0, _utils.slideUp)(menuItem.lastElementChild, 200);
      }
    }
  });

  _onDocumentKeydown.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl5, _DOM$mobileMenu$nav;

      if (!((_DOM$mobileMenu$toggl5 = _constants.DOM.mobileMenu.toggleMenuBtn) !== null && _DOM$mobileMenu$toggl5 !== void 0 && _DOM$mobileMenu$toggl5.classList.contains("opened"))) {
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

        _classPrivateFieldGet(_this, _onMenuCloseClick).call(_this);
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = DropDownMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4}],15:[function(require,module,exports){
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

  _classCallCheck(this, FullScreenMobileMenu);

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
      var _DOM$mobileMenu$toggl;

      window.addEventListener("resize", _classPrivateFieldGet(_this, _onWindowResize));
      (_DOM$mobileMenu$toggl = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl === void 0 ? void 0 : _DOM$mobileMenu$toggl.addEventListener("click", _classPrivateFieldGet(_this, _onMenuButtonClick));
      document.querySelectorAll('#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", _classPrivateFieldGet(_this, _onDropownToggleIcon));
        menuItemLink.addEventListener("tap", _classPrivateFieldGet(_this, _onDropownToggleIcon));
      });
      document.querySelectorAll('#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", _classPrivateFieldGet(_this, _onCloseIconClick));
      });
      document.addEventListener("keydown", _classPrivateFieldGet(_this, _onDocumentKeydown));
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

      _classPrivateFieldGet(_this, _closeMenu).call(_this);
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
        _classPrivateFieldGet(_this, _closeMenu).call(_this);
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

        _classPrivateFieldGet(_this, _closeMenu).call(_this);
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = FullScreenMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4}],16:[function(require,module,exports){
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

  _classCallCheck(this, SidebarMobileMenu);

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
      _classPrivateFieldSet(_this, _isMenuOpen, false);

      _classPrivateFieldGet(_this, _startSidrPlugin).call(_this);

      if (!document.querySelector(".sidr-class-dropdown-toggle")) {
        document.querySelectorAll(".sidr-class-menu-item-has-children > a").forEach(function (menuItemLink) {
          menuItemLink.insertAdjacentHTML("beforeend", '<span class="sidr-class-dropdown-toggle" tabindex=0></span>');
        });
      }

      _classPrivateFieldSet(_this, _menuItemsPlusIcon, _constants.options.sidrDropdownTarget == "link" ? document.querySelectorAll("li.sidr-class-menu-item-has-children > a") : document.querySelectorAll(".sidr-class-dropdown-toggle"));
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

      _classPrivateFieldSet(_this, _sidebarToggleMenuBtn, document.querySelector("a.sidr-class-toggle-sidr-close"));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu3, _classPrivateFieldGet2, _classPrivateFieldGet3, _document$querySelect, _document$querySelect2;

      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.addEventListener("click", _classPrivateFieldGet(_this, _onHamburgerBtnClick));
      (_classPrivateFieldGet2 = _classPrivateFieldGet(_this, _sidebarToggleMenuBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", _classPrivateFieldGet(_this, _onSidebarCloseMenuBtnClick));
      (_classPrivateFieldGet3 = _classPrivateFieldGet(_this, _menuItemsPlusIcon)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", _classPrivateFieldGet(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("tap", _classPrivateFieldGet(_this, _onMenuItemPlusIconClick));
      });
      (_document$querySelect = document.querySelectorAll('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", _classPrivateFieldGet(_this, _closeSidr));
      });
      (_document$querySelect2 = document.querySelectorAll("li.sidr-class-nav-no-click > a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
      });
      document.addEventListener("keydown", _classPrivateFieldGet(_this, _onDocumentKeydown));
      window.addEventListener("resize", _classPrivateFieldGet(_this, _onWindowResize));
    }
  });

  _onHamburgerBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      _classPrivateFieldSet(_this, _isMenuOpen, !_classPrivateFieldGet(_this, _isMenuOpen));

      event.currentTarget.setAttribute("aria-expanded", _classPrivateFieldGet(_this, _isMenuOpen));
    }
  });

  _onSidebarCloseMenuBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();

      _classPrivateFieldGet(_this, _closeSidr).call(_this);

      _classPrivateFieldGet(_this, _sidebarToggleMenuBtn).classList.remove("opened");
    }
  });

  _onMenuItemPlusIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;

      if (!menuItem.classList.contains("active")) {
        document.querySelectorAll(".sidr-class-menu-item-has-children").forEach(function (parentMenuItem) {
          if (menuItem != parentMenuItem && menuItem.oceanParents(".sidr-class-menu-item-has-children").findIndex(function (nestedMenuItem) {
            return nestedMenuItem == parentMenuItem;
          })) {
            parentMenuItem.classList.remove("active");
            (0, _utils.slideUp)(parentMenuItem.lastElementChild, 200);
          }
        });
        menuItem.classList.add("active");
        (0, _utils.slideDown)(menuItem.lastElementChild, 200);
      } else {
        menuItem.classList.remove("active");
        (0, _utils.slideUp)(menuItem.lastElementChild, 200);
      }
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        _classPrivateFieldGet(_this, _closeSidr).call(_this);
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

      var closeIcon = _classPrivateFieldGet(_this, _sidebarToggleMenuBtn);

      var navElements = document.querySelector("#sidr").querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();

        _classPrivateFieldGet(_this, _closeSidr).call(_this);
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
    _classPrivateFieldGet(this, _start).call(this);

    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  }
};

var _default = SidebarMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _infiniteScroll2 = _interopRequireDefault(require("infinite-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _infiniteScroll = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var OWInfiniteScroll = function OWInfiniteScroll() {
  var _this = this;

  _classCallCheck(this, OWInfiniteScroll);

  _infiniteScroll.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldSet(_this, _infiniteScroll, new _infiniteScroll2["default"](_constants.DOM.scroll.infiniteScrollWrapper, {
        path: ".older-posts a",
        append: ".item-entry",
        status: ".scroller-status",
        hideNav: ".infinite-scroll-nav",
        history: false,
        scrollThreshold: 800
      }));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _infiniteScroll).on("load", function (body, path, response) {
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

      _classPrivateFieldGet(_this, _infiniteScroll).on("append", function (body, path, items, response) {
        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeIn)(item);
          });
        }
      });
    }
  });

  if (!!_constants.DOM.scroll.infiniteScrollNav && !!_constants.DOM.scroll.infiniteScrollNav.querySelector(".older-posts a")) {
    _classPrivateFieldGet(this, _start).call(this);

    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  }
};

var _default = OWInfiniteScroll;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"infinite-scroll":33}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _init = /*#__PURE__*/new WeakMap();

var _addLightboxClass = /*#__PURE__*/new WeakMap();

var _imageFormats = /*#__PURE__*/new WeakMap();

var _addPhotoSwipeToDOM = /*#__PURE__*/new WeakMap();

var OWLightbox = function OWLightbox() {
  var _this = this;

  _classCallCheck(this, OWLightbox);

  _defineProperty(this, "start", function () {
    _classPrivateFieldGet(_this, _addLightboxClass).call(_this);

    _classPrivateFieldGet(_this, _addPhotoSwipeToDOM).call(_this);

    _classPrivateFieldGet(_this, _init).call(_this);
  });

  _init.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      // Post gallery
      if (document.querySelector(".gallery-format")) {
        _this.initPhotoSwipeFromDOM(".gallery-format");
      } // Image lightbox


      (_document$querySelect = document.querySelectorAll("a.oceanwp-lightbox")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (link) {
        link.querySelector("img").addEventListener("click", _this.openLightbox);
      });
    }
  });

  _defineProperty(this, "openLightbox", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var pswpElement = document.querySelectorAll(".pswp")[0];
    var imageLightbox = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, [{
      src: event.target.parentNode.getAttribute("href"),
      w: 1920,
      h: 1200
    }], {
      showAnimationDuration: 0,
      hideAnimationDuration: 0
    });
    imageLightbox.init();
  });

  _addLightboxClass.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect2;

      (_document$querySelect2 = document.querySelectorAll("body .entry-content a, body .entry a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (link) {
        if (!!link.querySelector("img")) {
          var imageFormats = _classPrivateFieldGet(_this, _imageFormats).call(_this);

          var imageFormatsMask = 0;
          imageFormats.forEach(function (imageFormat) {
            imageFormatsMask += String(link.getAttribute("href")).indexOf("." + imageFormat);
          });

          if (imageFormatsMask === -13) {
            link.classList.add("no-lightbox");
          }

          if (!(link.classList.contains("no-lightbox") || link.classList.contains("gallery-lightbox") || link.parentNode.classList.contains("gallery-icon") || link.classList.contains("woo-lightbox") || link.classList.contains("woo-thumbnail") || link.parentNode.classList.contains("woocommerce-product-gallery__image"))) {
            link.classList.add("oceanwp-lightbox");
          }

          if (!link.classList.contains("no-lightbox") && link.parentNode.classList.contains("gallery-icon")) {
            link.classList.add("gallery-lightbox");
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

  _defineProperty(this, "initPhotoSwipeFromDOM", function (gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function parseThumbnailElements(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          linkEl,
          size,
          item;

      for (var i = 0; i < numNodes; i++) {
        linkEl = thumbElements[i]; // <a> element
        // include only element nodes

        if (linkEl.nodeType !== 1) {
          continue;
        }

        size = [1920, 1200]; // create slide object

        item = {
          src: linkEl.getAttribute("href"),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };

        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute("src");
        }

        item.el = linkEl; // save link to element for getThumbBoundsFn

        items.push(item);
      }

      return items;
    }; // find nearest parent element


    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    }; // triggers when user clicks on thumbnail


    var onThumbnailsClick = function onThumbnailsClick(e) {
      e = e || window.event;
      var eTarget = e.target || e.srcElement; // find root element of slide

      var clickedListItem = closest(eTarget, function (el) {
        return el.tagName && el.tagName.toUpperCase() === "A" && el.classList.contains("gallery-lightbox");
      });

      if (!clickedListItem) {
        return;
      }

      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      e.stopPropagation(); // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute

      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }

        nodeIndex++;
      }

      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery, true);
      }

      return false;
    }; // parse picture index and gallery index from URL (#&pid=1&gid=2)


    var photoswipeParseHash = function photoswipeParseHash() {
      var hash = window.location.hash.substring(1),
          params = {};

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
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll(".pswp")[0],
          gallery,
          options,
          items;
      items = parseThumbnailElements(galleryElement); // define options (if needed)

      options = {
        // define gallery index (for URL)
        galleryUID: galleryElement.getAttribute("data-pswp-uid"),
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = items[index].el.getElementsByTagName("img")[0],
              // find thumbnail
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();
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
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
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
        options.hideAnimationDuration = 0;
      } // Pass data to PhotoSwipe and initialize it


      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    }; // loop through all gallery elements and bind events


    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute("data-pswp-uid", i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
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

},{"../../constants":1}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OWSlider = function OWSlider() {
  var _this = this;

  _classCallCheck(this, OWSlider);

  _defineProperty(this, "flickity", void 0);

  _defineProperty(this, "start", function () {
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

},{"../../constants":1}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onScrollItemClick = /*#__PURE__*/new WeakMap();

var _getAdminBarHeight = /*#__PURE__*/new WeakMap();

var _getTopbarHeight = /*#__PURE__*/new WeakMap();

var _getStickyHeaderHeight = /*#__PURE__*/new WeakMap();

var ScrollEffect = function ScrollEffect() {
  var _this = this;

  _classCallCheck(this, ScrollEffect);

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll('a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function (scrollItem) {
        scrollItem.addEventListener("click", _classPrivateFieldGet(_this, _onScrollItemClick));
      });
    }
  });

  _onScrollItemClick.set(this, {
    writable: true,
    value: function value(event) {
      var scrollItem = event.currentTarget;

      if (!scrollItem.classList.contains("omw-open-modal") && !scrollItem.classList.contains("opl-link") && !scrollItem.parentNode.classList.contains("omw-open-modal") && !scrollItem.parentNode.classList.contains("opl-link") && !scrollItem.parentNode.parentNode.parentNode.classList.contains("omw-open-modal")) {
        var href = scrollItem.getAttribute("href");
        var id = href.substring(href.indexOf("#")).slice(1);
        var target = document.querySelector("#".concat(id));

        if (id != "" && !!target) {
          event.preventDefault();
          event.stopPropagation();

          var scrollPosition = (0, _utils.offset)(target).top - _classPrivateFieldGet(_this, _getAdminBarHeight).call(_this) - _classPrivateFieldGet(_this, _getTopbarHeight).call(_this) - _classPrivateFieldGet(_this, _getStickyHeaderHeight).call(_this);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });

          _constants.DOM.body.scrollTo({
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
      var height = 0;

      if (!_constants.DOM.header.site) {
        if (!!document.querySelector(".elementor-sticky")) {
          return 80;
        }
      }

      if (_constants.DOM.header.site.classList.contains("fixed-scroll")) {
        height = _constants.DOM.header.site.offsetHeight;
      }

      if (_constants.DOM.header.site.classList.contains("medium-header")) {
        var bottomHeaderWrapper = _constants.DOM.header.site.querySelector(".bottom-header-wrap");

        height = bottomHeaderWrapper.classList.contains("fixed-scroll") ? bottomHeaderWrapper.offsetHeight : !!document.querySelector(".is-sticky #site-header-inner") ? document.querySelector(".is-sticky #site-header-inner").offsetHeight : 0;
      }

      return height;
    }
  });

  if (!_constants.DOM.body.classList.contains("single-product") && !_constants.DOM.body.classList.contains("no-local-scroll")) {
    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  }
};

var _default = ScrollEffect;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowScroll = /*#__PURE__*/new WeakMap();

var _onScrollTopClick = /*#__PURE__*/new WeakMap();

var ScrollTop = function ScrollTop() {
  var _this = this;

  _classCallCheck(this, ScrollTop);

  _start.set(this, {
    writable: true,
    value: function value() {}
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$scroll$scrollTop, _DOM$scroll$goTop, _DOM$scroll$goTopSlas;

      window.addEventListener("scroll", _classPrivateFieldGet(_this, _onWindowScroll));
      (_DOM$scroll$scrollTop = _constants.DOM.scroll.scrollTop) === null || _DOM$scroll$scrollTop === void 0 ? void 0 : _DOM$scroll$scrollTop.addEventListener("click", _classPrivateFieldGet(_this, _onScrollTopClick));
      (_DOM$scroll$goTop = _constants.DOM.scroll.goTop) === null || _DOM$scroll$goTop === void 0 ? void 0 : _DOM$scroll$goTop.addEventListener("click", _classPrivateFieldGet(_this, _onScrollTopClick));
      (_DOM$scroll$goTopSlas = _constants.DOM.scroll.goTopSlash) === null || _DOM$scroll$goTopSlas === void 0 ? void 0 : _DOM$scroll$goTopSlas.addEventListener("click", _classPrivateFieldGet(_this, _onScrollTopClick));
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
      } else {
        if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display !== "none") {
          (0, _utils.fadeOut)(_constants.DOM.scroll.scrollTop);
        }
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

      _constants.DOM.body.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      (_scrollTop$parentNode = scrollTop.parentNode) === null || _scrollTop$parentNode === void 0 ? void 0 : _scrollTop$parentNode.classList.remove("sfHover");
    }
  });

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

exports["default"] = ScrollTop;

},{"../../constants":1,"../../lib/utils":4}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

var _dropDown = _interopRequireDefault(require("./search/drop-down"));

var _headerReplace = _interopRequireDefault(require("./search/header-replace"));

var _mobileSearchIcon = _interopRequireDefault(require("./search/mobile-search-icon"));

var _overlay = _interopRequireDefault(require("./search/overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onInputKeyup = /*#__PURE__*/new WeakMap();

var Search = function Search() {
  var _this = this;

  _classCallCheck(this, Search);

  _defineProperty(this, "mobileOverlayInput", void 0);

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

        (_form$querySelector2 = form.querySelector("input")) === null || _form$querySelector2 === void 0 ? void 0 : _form$querySelector2.addEventListener("keyup", _classPrivateFieldGet(_this, _onInputKeyup));
        (_form$querySelector3 = form.querySelector("input")) === null || _form$querySelector3 === void 0 ? void 0 : _form$querySelector3.addEventListener("blur", _classPrivateFieldGet(_this, _onInputKeyup));
      });

      (_this$mobileOverlayIn2 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn2 === void 0 ? void 0 : _this$mobileOverlayIn2.addEventListener("keyup", _classPrivateFieldGet(_this, _onInputKeyup));
      (_this$mobileOverlayIn3 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn3 === void 0 ? void 0 : _this$mobileOverlayIn3.addEventListener("blur", _classPrivateFieldGet(_this, _onInputKeyup));
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

  _classPrivateFieldGet(this, _start).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = Search;
exports["default"] = _default;

},{"../../constants":1,"./search/drop-down":24,"./search/header-replace":25,"./search/mobile-search-icon":26,"./search/overlay":27}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchBase = function SearchBase() {
  _classCallCheck(this, SearchBase);

  _defineProperty(this, "focus", function (form, inputClass) {
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

},{}],24:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var DropDownSearch = /*#__PURE__*/function (_SearchBase) {
  _inherits(DropDownSearch, _SearchBase);

  var _super = _createSuper(DropDownSearch);

  function DropDownSearch() {
    var _this;

    _classCallCheck(this, DropDownSearch);

    _this = _super.call(this);

    _setupEventListeners.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$dropDown$;

        (_DOM$search$dropDown$ = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$ === void 0 ? void 0 : _DOM$search$dropDown$.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onToggleSearchBtnClick));
        document.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onDocumentClick));
      }
    });

    _onToggleSearchBtnClick.set(_assertThisInitialized(_this), {
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

    _onDocumentClick.set(_assertThisInitialized(_this), {
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
      return _possibleConstructorReturn(_this);
    }

    _classPrivateFieldGet(_assertThisInitialized(_this), _setupEventListeners).call(_assertThisInitialized(_this));

    return _this;
  }

  return DropDownSearch;
}(_base["default"]);

var _default = DropDownSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23}],25:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var _hasTopHeader = /*#__PURE__*/new WeakMap();

var HeaderReplaceSearch = /*#__PURE__*/function (_SearchBase) {
  _inherits(HeaderReplaceSearch, _SearchBase);

  var _super = _createSuper(HeaderReplaceSearch);

  function HeaderReplaceSearch() {
    var _this;

    _classCallCheck(this, HeaderReplaceSearch);

    _this = _super.call(this);

    _setupEventListeners.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$headerRep, _DOM$search$headerRep2;

        (_DOM$search$headerRep = _constants.DOM.search.headerReplace.toggleSearchBtn) === null || _DOM$search$headerRep === void 0 ? void 0 : _DOM$search$headerRep.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onToggleSearchBtnClick));
        (_DOM$search$headerRep2 = _constants.DOM.search.headerReplace.closeBtn) === null || _DOM$search$headerRep2 === void 0 ? void 0 : _DOM$search$headerRep2.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onCloseBtnClick));
        document.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onDocumentClick));
      }
    });

    _onToggleSearchBtnClick.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.toggle("show");

        if (_classPrivateFieldGet(_assertThisInitialized(_this), _hasTopHeader).call(_assertThisInitialized(_this))) {
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

    _onCloseBtnClick.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.remove("show");

        if (_classPrivateFieldGet(_assertThisInitialized(_this), _hasTopHeader).call(_assertThisInitialized(_this))) {
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

    _onDocumentClick.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-header-replace.show")) {
          var _DOM$search$headerRep3, _DOM$search$headerRep4;

          (_DOM$search$headerRep3 = _constants.DOM.search.headerReplace) === null || _DOM$search$headerRep3 === void 0 ? void 0 : (_DOM$search$headerRep4 = _DOM$search$headerRep3.form) === null || _DOM$search$headerRep4 === void 0 ? void 0 : _DOM$search$headerRep4.classList.remove("show");

          if (_classPrivateFieldGet(_assertThisInitialized(_this), _hasTopHeader).call(_assertThisInitialized(_this))) {
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

    _hasTopHeader.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value() {
        var _DOM$header$site;

        return (_DOM$header$site = _constants.DOM.header.site) === null || _DOM$header$site === void 0 ? void 0 : _DOM$header$site.classList.contains("top-header");
      }
    });

    if (_constants.options.menuSearchStyle !== "header_replace") {
      return _possibleConstructorReturn(_this);
    }

    _classPrivateFieldGet(_assertThisInitialized(_this), _setupEventListeners).call(_assertThisInitialized(_this));

    return _this;
  }

  return HeaderReplaceSearch;
}(_base["default"]);

var _default = HeaderReplaceSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23}],26:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _elements = /*#__PURE__*/new WeakMap();

var _setElements = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _toggleDropdownSearch = /*#__PURE__*/new WeakMap();

var _openOverlaySearch = /*#__PURE__*/new WeakMap();

var _closeOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickDocument = /*#__PURE__*/new WeakMap();

var MobileSearchIcon = /*#__PURE__*/function (_SearchBase) {
  _inherits(MobileSearchIcon, _SearchBase);

  var _super = _createSuper(MobileSearchIcon);

  function MobileSearchIcon() {
    var _this;

    _classCallCheck(this, MobileSearchIcon);

    _this = _super.call(this);

    _elements.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _setElements.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value() {
        _classPrivateFieldSet(_assertThisInitialized(_this), _elements, {
          dropdownSearchIcon: document.querySelector(".search-icon-dropdown"),
          dropdownSearchForm: document.querySelector(".search-style-dropdown"),
          overlaySearch: document.querySelector(".search-style-overlay"),
          overlaySearchIcon: document.querySelector(".search-icon-overlay"),
          overlaySearchCloseIcon: document.querySelector(".search-style-overlay .search-overlay-close"),
          html: document.querySelector("html")
        });
      }
    });

    _setupEventListeners.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value() {
        if (_constants.options.mobileMenuSearchStyle === "drop_down") {
          var _classPrivateFieldGet2;

          (_classPrivateFieldGet2 = _classPrivateFieldGet(_assertThisInitialized(_this), _elements).dropdownSearchIcon) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _toggleDropdownSearch));
          document.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onClickDocument));
        } else if (_constants.options.mobileMenuSearchStyle === "overlay") {
          var _classPrivateFieldGet3, _classPrivateFieldGet4, _classPrivateFieldGet5;

          (_classPrivateFieldGet3 = _classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearchIcon) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _openOverlaySearch));
          (_classPrivateFieldGet4 = _classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearchCloseIcon) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _closeOverlaySearch));
          (_classPrivateFieldGet5 = _classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onClickOverlaySearch));
        }
      }
    });

    _toggleDropdownSearch.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();

        _classPrivateFieldGet(_assertThisInitialized(_this), _elements).dropdownSearchForm.classList.toggle("show");

        _classPrivateFieldGet(_assertThisInitialized(_this), _elements).dropdownSearchIcon.classList.toggle("active");

        _this.focus(_classPrivateFieldGet(_assertThisInitialized(_this), _elements).dropdownSearchForm.querySelector("form"), "input.field");
      }
    });

    _openOverlaySearch.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch.classList.add("active");

        (0, _utils.fadeIn)(_classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch);

        _this.focus(_classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch.querySelector("form"), "input.mobile-search-overlay-input");

        setTimeout(function () {
          _classPrivateFieldGet(_assertThisInitialized(_this), _elements).html.style.overflow = "hidden";
        }, 400);
      }
    });

    _closeOverlaySearch.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch.classList.remove("active");

        (0, _utils.fadeOut)(_classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch);
        setTimeout(function () {
          _classPrivateFieldGet(_assertThisInitialized(_this), _elements).html.style.overflow = "visible";
        }, 400);
      }
    });

    _onClickOverlaySearch.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        _classPrivateFieldGet(_assertThisInitialized(_this), _elements).overlaySearch.querySelector("input").focus();
      }
    });

    _onClickDocument.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(event) {
        if (!event.target.closest("#icon-searchform-dropdown.show")) {
          _classPrivateFieldGet(_assertThisInitialized(_this), _elements).dropdownSearchIcon.classList.remove("active");

          _classPrivateFieldGet(_assertThisInitialized(_this), _elements).dropdownSearchForm.classList.remove("show");
        }
      }
    });

    if (_constants.options.mobileMenuSearchStyle === "disabled") {
      return _possibleConstructorReturn(_this);
    }

    _classPrivateFieldGet(_assertThisInitialized(_this), _setElements).call(_assertThisInitialized(_this));

    _classPrivateFieldGet(_assertThisInitialized(_this), _setupEventListeners).call(_assertThisInitialized(_this));

    return _this;
  }

  return MobileSearchIcon;
}(_base["default"]);

var _default = MobileSearchIcon;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23}],27:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var OverlaySearch = /*#__PURE__*/function (_SearchBase) {
  _inherits(OverlaySearch, _SearchBase);

  var _super = _createSuper(OverlaySearch);

  function OverlaySearch() {
    var _this;

    _classCallCheck(this, OverlaySearch);

    _this = _super.call(this);

    _setupEventListeners.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$overlay$t, _DOM$search$overlay$c;

        (_DOM$search$overlay$t = _constants.DOM.search.overlay.toggleSearchBtn) === null || _DOM$search$overlay$t === void 0 ? void 0 : _DOM$search$overlay$t.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onToggleSearchBtnClick));
        (_DOM$search$overlay$c = _constants.DOM.search.overlay.closeBtn) === null || _DOM$search$overlay$c === void 0 ? void 0 : _DOM$search$overlay$c.addEventListener("click", _classPrivateFieldGet(_assertThisInitialized(_this), _onCloseBtnClick));
      }
    });

    _onToggleSearchBtnClick.set(_assertThisInitialized(_this), {
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

    _onCloseBtnClick.set(_assertThisInitialized(_this), {
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
      return _possibleConstructorReturn(_this);
    }

    _classPrivateFieldGet(_assertThisInitialized(_this), _setupEventListeners).call(_assertThisInitialized(_this));

    return _this;
  }

  return OverlaySearch;
}(_base["default"]);

var _default = OverlaySearch;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

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

  _classCallCheck(this, Select);

  _select.set(this, {
    writable: true,
    value: void 0
  });

  _render.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.selectTags.forEach(function (select) {
        _classPrivateFieldSet(_this, _select, select);

        _classPrivateFieldGet(_this, _select).insertAdjacentHTML("afterend", "<span class=\"theme-select ".concat(_classPrivateFieldGet(_this, _select).classList, "\">\n                    <span class=\"theme-selectInner\">\n                        ").concat(_classPrivateFieldGet(_this, _select).options[_classPrivateFieldGet(_this, _select).selectedIndex].text, "\n                    </span>\n                </span>"));

        _classPrivateFieldGet(_this, _select).classList.add("hasCustomSelect");

        _classPrivateFieldGet(_this, _style).call(_this);

        _classPrivateFieldGet(_this, _setupEventListenersItem).call(_this);
      });
    }
  });

  _style.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _select).style.opacity = 0;
      _classPrivateFieldGet(_this, _select).style.position = "absolute";
      _classPrivateFieldGet(_this, _select).style.height = "34px";
      _classPrivateFieldGet(_this, _select).style.fontSize = "13px";
      _classPrivateFieldGet(_this, _select).style.appearance = "menulist-button";
      _classPrivateFieldGet(_this, _select).nextSibling.style.display = "inline-block";
      _classPrivateFieldGet(_this, _select).nextSibling.firstElementChild.style.display = "inline-block";
    }
  });

  _setupEventListenersItem.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _select).addEventListener("mouseenter", _classPrivateFieldGet(_this, _onMouseenter));

      _classPrivateFieldGet(_this, _select).addEventListener("mouseleave", _classPrivateFieldGet(_this, _onMouseleave));

      _classPrivateFieldGet(_this, _select).addEventListener("change", _this.onChange);
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

  _defineProperty(this, "onChange", function (event) {
    var select = event.currentTarget;
    select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.addEventListener("DOMContentLoaded", _classPrivateFieldGet(_this, _onDocumentReady));
      window.addEventListener("resize", _classPrivateFieldGet(_this, _onDocumentReady));
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

  _classPrivateFieldGet(this, _render).call(this);

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

exports["default"] = Select;

},{"../../constants":1}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var Theme = function Theme() {
  var _this = this;

  _classCallCheck(this, Theme);

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
      _this.owInfiniteScroll = new _owInfiniteScroll["default"]();
    }
  });

  _classPrivateFieldGet(this, _start).call(this);
};

var _default = Theme;
exports["default"] = _default;

},{"./components/blog-masonry":5,"./components/equal-height-elements":6,"./components/footer":7,"./components/header":8,"./components/menu":10,"./components/mobile-menu":13,"./components/ow-infinite-scroll":17,"./components/ow-lightbox":18,"./components/ow-slider":19,"./components/scroll-effect":20,"./components/scroll-top":21,"./components/search":22,"./components/select":28}],30:[function(require,module,exports){
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

},{"./core":31,"fizzy-ui-utils":38}],31:[function(require,module,exports){
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

},{"ev-emitter":37,"fizzy-ui-utils":38}],32:[function(require,module,exports){
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

},{"./core":31,"fizzy-ui-utils":38}],33:[function(require,module,exports){
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

},{"./button":30,"./core":31,"./history":32,"./page-load":34,"./scroll-watch":35,"./status":36}],34:[function(require,module,exports){
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

},{"./core":31}],35:[function(require,module,exports){
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

},{"./core":31,"fizzy-ui-utils":38}],36:[function(require,module,exports){
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

},{"./core":31,"fizzy-ui-utils":38}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
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
},{"./util":40}],40:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3BhZ2UtbG9hZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvc2Nyb2xsLXdhdGNoLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL25vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQU8sSUFBTSxPQUFPLEdBQUcsZUFBaEI7O0FBRUEsSUFBTSxHQUFHLEdBQUc7QUFDZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQURTO0FBRWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBRkE7QUFHZixFQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUhHO0FBSWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FKUztBQUtmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FMRztBQU1mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQU5FO0FBT2YsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUxYO0FBTUosSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkNBQXZCLENBTlQ7QUFP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QUksNEJBQUosRUFBeEI7QUFDSDtBQWxCYTs7QUFDVjtBQUNILEM7O2VBbUJVLEs7Ozs7QUNwQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiaW1wb3J0IFwiLi9saWIvZWxlbWVudFwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4vdGhlbWUvdGhlbWVcIjtcclxuXHJcbmNsYXNzIE9jZWFuV1Age1xyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuKFwidXNlIHNjcmlwdFwiKTtcclxuXHJcbndpbmRvdy5vY2VhbndwID0gbmV3IE9jZWFuV1AoKTtcclxub2NlYW53cC5zdGFydCgpO1xyXG4iLCJFbGVtZW50LnByb3RvdHlwZS5vY2VhblBhcmVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xyXG4gICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgdmFyIGlzaGF2ZXNlbGVjdG9yID0gc2VsZWN0b3IgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQpICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc2hhdmVzZWxlY3RvciB8fCBlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50cztcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIH0sIDEwKTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInBhZGRpbmctYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZURvd24gPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xyXG5cclxuICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcclxuXHJcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblxyXG4gICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IHBhZGRpbmdUb3AgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wYWRkaW5nVG9wO1xyXG4gICAgbGV0IHBhZGRpbmdCb3R0b20gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wYWRkaW5nQm90dG9tO1xyXG4gICAgbGV0IG1hcmdpblRvcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1hcmdpblRvcDtcclxuICAgIGxldCBtYXJnaW5Cb3R0b20gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5tYXJnaW5Cb3R0b207XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJwYWRkaW5nXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbiAvIDEuMn1tc2A7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gcGFkZGluZ1RvcDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBwYWRkaW5nQm90dG9tO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInBhZGRpbmctYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVG9nZ2xlID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PlxyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIgPyBzbGlkZURvd24oZWxlbWVudCwgZHVyYXRpb24pIDogc2xpZGVVcChlbGVtZW50LCBkdXJhdGlvbik7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsIGRpc3BsYXksIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGZhZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KGVsZW1lbnQuc3R5bGUub3BhY2l0eSk7XHJcbiAgICAgICAgb3BhY2l0eSA9IE1hdGgucm91bmQob3BhY2l0eSAqIDEwMCArIDEwKSAvIDEwMDtcclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPD0gMSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPT09IDEgJiYgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVPdXQgPSAoZWxlbWVudCwgZGlzcGxheSwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgY29uc3QgZmFkZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHBhcnNlRmxvYXQoZWxlbWVudC5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgICBvcGFjaXR5ID0gTWF0aC5yb3VuZChvcGFjaXR5ICogMTAwIC0gMTApIC8gMTAwO1xyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA8IDApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID09PSAwICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gISEoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IChlKSA9PiB7XHJcbiAgICAvLyBmb3IgY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBbXTtcclxuXHJcbiAgICAvLyBpZiBubyBwYXJlbnQsIHJldHVybiBubyBzaWJsaW5nXHJcbiAgICBpZiAoIWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJzdCBjaGlsZCBvZiB0aGUgcGFyZW50IG5vZGVcclxuICAgIGxldCBzaWJsaW5nID0gZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgd2hpbGUgKHNpYmxpbmcpIHtcclxuICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2libGluZ3M7XHJcbn07XHJcblxyXG4vLyBSZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gZWxlbWVudFxyXG5leHBvcnQgY29uc3QgaXNFbGVtZW50ID0gKG8pID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIjtcclxufTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nTWFzb25yeSB7XG4gICAgaXNvdG9wO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLmJsb2cubWFzb25yeUdyaWRzPy5mb3JFYWNoKChibG9nTWFzb25yeUdyaWQpID0+IHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChibG9nTWFzb25yeUdyaWQsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wID0gbmV3IElzb3RvcGUoYmxvZ01hc29ucnlHcmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXNvdG9wZS1lbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiBvcHRpb25zLmlzUlRMID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBSZXNwb25zaXZlQXV0b0hlaWdodCBmcm9tIFwicmVzcG9uc2l2ZS1hdXRvLWhlaWdodFwiO1xyXG5cclxuY2xhc3MgRXF1YWxIZWlnaHRFbGVtZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWVxdWFsLWhlaWdodHMgLmJsb2ctZW50cnktaW5uZXJcIikpIHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF0Y2gtaGVpZ2h0LWdyaWQgLm1hdGNoLWhlaWdodC1jb250ZW50XCIpKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zaXZlQXV0b0hlaWdodChcIi5tYXRjaC1oZWlnaHQtZ3JpZCAubWF0Y2gtaGVpZ2h0LWNvbnRlbnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1YWxIZWlnaHRFbGVtZW50cztcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcclxuICAgICNsYXN0V2luZG93V2lkdGg7XHJcbiAgICAjbGFzdFdpbmRvd0hlaWdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5tYWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNsYXN0V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLiNsYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy4jb25XaW5kb3dMb2FkKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd0xvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLiNsYXN0V2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNwYXJhbGxheEZvb3RlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjZml4ZWRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1maXhlZC1mb290ZXJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIGlmICghIURPTS5XUEFkbWluYmFyKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERPTS5tYWluLnN0eWxlLm1pbkhlaWdodCA9XHJcbiAgICAgICAgICAgIERPTS5tYWluLm9mZnNldEhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBET00uaHRtbC5vZmZzZXRIZWlnaHQgLSBvZmZzZXQpICsgXCJweFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAjcGFyYWxsYXhGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1wYXJhbGxheC1mb290ZXJcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBET00ubWFpbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBET00uZm9vdGVyLnBhcmFsbGF4Py5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFZlcnRpY2FsSGVhZGVyIGZyb20gXCIuL2hlYWRlci92ZXJ0aWNhbFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmVydGljYWwgPSBuZXcgVmVydGljYWxIZWFkZXIoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBWZXJ0aWNhbEhlYWRlciB7XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00uaGVhZGVyLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBET00uaGVhZGVyLnZlcnRpY2FsXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbjpub3QoLmJ0bikgPiBhXCIpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51TGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9XCIwXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmVydGljYWxIZWFkZXJUYXJnZXQgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgID8gRE9NLmhlYWRlci52ZXJ0aWNhbC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcclxuICAgICAgICAgICAgICAgIDogRE9NLmhlYWRlci52ZXJ0aWNhbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuXHJcbiAgICAgICAgbmV3IFBlcmZlY3RTY3JvbGxiYXIoRE9NLmhlYWRlci52ZXJ0aWNhbCwge1xyXG4gICAgICAgICAgICB3aGVlbFNwZWVkOiAwLjUsXHJcbiAgICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uLmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIiA/IHBsdXNJY29uLnBhcmVudE5vZGUgOiBwbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICghbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIERPTS5oZWFkZXIudmVydGljYWxcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtSGFzQ2hpbGRyZW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtICE9IG1lbnVJdGVtSGFzQ2hpbGRyZW4gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vY2VhblBhcmVudHMoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgocGFyZW50TWVudUl0ZW0pID0+IHBhcmVudE1lbnVJdGVtID09IG1lbnVJdGVtSGFzQ2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtSGFzQ2hpbGRyZW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVVcChtZW51SXRlbUhhc0NoaWxkcmVuLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZURvd24obWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZVVwKG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuYWRkKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInZoLW9wZW5lZFwiKTtcclxuICAgICAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00uaGVhZGVyLnZlcnRpY2FsPy5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHMgPyBuYXZFbGVtZW50c1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdIDogXCJcIjtcclxuXHJcbiAgICAgICAgbmF2TGFzdEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXItc3R5bGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1jbG9zZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVudGVyS2V5ICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpICYmXHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuYXZGaXJzdEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1lbnUgZnJvbSBcIi4vbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgTWVnYU1lbnUgZnJvbSBcIi4vbWVudS9tZWdhXCI7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1lbnUoKTtcclxuICAgICAgICB0aGlzLm1lZ2EgPSBuZXcgTWVnYU1lbnUoKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLm5hdi1uby1jbGljayA+IGFcIikuZm9yRWFjaCgobm9DbGlja01lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG5vQ2xpY2tNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ob0NsaWNrTWVudUl0ZW1DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5zZi1tZW51XCIpLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XHJcbiAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtcy5mb3JFYWNoKChwYXJlbnRNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTm9DbGlja01lbnVJdGVtQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcInNmSG92ZXJcIik7XHJcbiAgICAgICAgZmFkZUluKHN1Yk1lbnUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XHJcbiAgICAgICAgZmFkZU91dChzdWJNZW51KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYXJyb3dcIikuZm9yRWFjaCgocGx1c0J0bikgPT4ge1xuICAgICAgICAgICAgcGx1c0J0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93biA+IGEgPiAudGV4dC13cmFwID4gc3Bhbi5uYXYtYXJyb3csICNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93biA+IGFbaHJlZj1cIiNcIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51TGlua0NsaWNrKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIGEubWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVIYXNodGFnTGlua0NsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlTWVudUJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgaWYgKCF0b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImV4aXRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI29wZW5NZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25NZW51TGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUl0ZW1MaW5rLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcblxuICAgICAgICBpZiAoISh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJNZW51KS5kaXNwbGF5ID09PSBcIm5vbmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVIYXNodGFnTGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjb3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlSW4oRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51KTtcblxuICAgICAgICBjb25zdCBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gLSBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBET00uaGVhZGVyLmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubG9nbz8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZU91dChET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93blwiKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwuc3ViLW1lbnVcIikuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uIGluIHRoZSBtZW51IG1vZGFsLlxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5tZW51LmZ1bGxTY3JlZW4ubWVudT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubWVudS5mdWxsU2NyZWVuLm1lbnVcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4ubmF2LWFycm93LCBpbnB1dCwgYnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtYXJyb3dcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxTY3JlZW5NZW51O1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBNZWdhTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51Lm1lZ2EubWVudUNvbnRlbnRzLmZvckVhY2goKG1lbnVDb250ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVDb250ZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUxlZnRPZmZzZXQgPSBvZmZzZXQobWVudUl0ZW0pLmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBtZW51Q29udGVudFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUNvbnRlbnQpLndpZHRoKTtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsUG9zaXRpb247XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbE1hcmdpbjtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtTGVmdE9mZnNldCAtIG1lbnVDb250ZW50V2lkdGggLyAyIDwgMCkge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVJdGVtTGVmdE9mZnNldCAtIDEwO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSBtZW51Q29udGVudFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luID0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaXNSVEwpIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IGAke2hvcml6b250YWxNYXJnaW59cHhgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtob3Jpem9udGFsUG9zaXRpb259cHhgO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtTGVmdE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gK1xuICAgICAgICAgICAgICAgICAgICBtZW51Q29udGVudFdpZHRoIDxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUucmlnaHQgPSBgLSR7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggLSAxMFxuICAgICAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uTWVudUl0ZW1Nb3VzZUVudGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG9wYmFyIG1lbnUgaXRlbXNcbiAgICAgICAgRE9NLm1lbnUubWVnYS50b3BiYXJNZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uVG9wYmFyTWVudUl0ZW1Nb3VzZUVudGVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNvbk1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIilcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24td3JhcCA+IC5jb250YWluZXJcIilcbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci1pbm5lclwiKTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbU1vdXNlRW50ZXIod3JhcHBlciwgZXZlbnQpO1xuICAgIH07XG5cbiAgICAjb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IERPTS5oZWFkZXIudG9wYmFyO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNtZW51SXRlbU1vdXNlRW50ZXIgPSAod3JhcHBlciwgZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcIi5tZWdhbWVudVwiKTtcbiAgICAgICAgbGV0IGxlZnRQb3NpdGlvbiA9IHBhcnNlSW50KG9mZnNldChtZW51SXRlbSkubGVmdCAtIG9mZnNldCh3cmFwcGVyKS5sZWZ0ICsgMSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm94ZWQtbGF5b3V0XCIpKSB7XG4gICAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBsZWZ0UG9zaXRpb24gLSAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdCA9IGAtJHtsZWZ0UG9zaXRpb259cHhgO1xuICAgICAgICBjb250ZW50LnN0eWxlLndpZHRoID0gYCR7d3JhcHBlci5vZmZzZXRXaWR0aH1weGA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVnYU1lbnU7XG4iLCJpbXBvcnQgRHJvcERvd25Nb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L2Ryb3AtZG93blwiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZnVsbC1zY3JlZW5cIjtcclxuaW1wb3J0IFNpZGViYXJNb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L3NpZGViYXJcIjtcclxuXHJcbmNsYXNzIE1vYmlsZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93biA9IG5ldyBEcm9wRG93bk1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNpZGViYXIgPSBuZXcgU2lkZWJhck1vYmlsZU1lbnUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XHJcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNsaWRlVXAsIHNsaWRlRG93biwgc2xpZGVUb2dnbGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIERyb3BEb3duTW9iaWxlTWVudSB7XG4gICAgI2lzTWVudU9wZW47XG4gICAgI21lbnVJdGVtc1RvZ2dsZUljb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSBmYWxzZTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5tZW51SXRlbXNIYXNDaGlsZHJlbj8uZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiZHJvcGRvd24tdG9nZ2xlXCI7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24gPVxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcbiAgICAgICAgICAgICAgICA/IERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxuICAgICAgICAgICAgICAgIDogRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi10b2dnbGVcIik7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnV0dG9uQ2xpY2spO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUNsb3NlQ2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkhhbWJ1cmdlckNsaWNrKTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbXNUb2dnbGVJY29uPy5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZU1lbnVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBzbGlkZVRvZ2dsZShET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyLCA1MDApO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbk1lbnVDbG9zZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghIURPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIpIHtcbiAgICAgICAgICAgIHNsaWRlVXAoRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciwgMjAwKTtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcbiAgICAgICAgICAgIHRoaXMuI29uTWVudUNsb3NlQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25IYW1idXJnZXJDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmICghbWVudUl0ZW0/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUubWVudUl0ZW1zSGFzQ2hpbGRyZW4/LmZvckVhY2goKG1lbnVJdGVtSGFzQ2hpbGRyZW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtICE9IG1lbnVJdGVtSGFzQ2hpbGRyZW4gJiZcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5vY2VhblBhcmVudHMoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgocGFyZW50TWVudUl0ZW0pID0+IHBhcmVudE1lbnVJdGVtID09IG1lbnVJdGVtSGFzQ2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtSGFzQ2hpbGRyZW4/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVXAobWVudUl0ZW1IYXNDaGlsZHJlbi5sYXN0RWxlbWVudENoaWxkLCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZW51SXRlbT8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkLCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBzbGlkZVVwKG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUubmF2Py5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKCEhY2xvc2VJY29uKSB7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jb25NZW51Q2xvc2VDbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzbGlkZVVwLCBzbGlkZURvd24sIGZhZGVJbiwgZmFkZU91dCwgdmlzaWJsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRnVsbFNjcmVlbk1vYmlsZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImZ1bGxzY3JlZW4tbW9iaWxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51QnV0dG9uQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhID4gc3Bhbi5kcm9wZG93bi10b2dnbGUsICNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gLmZzLWRyb3Bkb3duLW1lbnUgbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZnVsbHNjcmVlbiAjbW9iaWxlLW5hdiBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuIGEuY2xvc2UnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlSWNvbkNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICBjb25zdCBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbikpIHtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGZhZGVPdXQoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbik7XG5cbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5kcm9wZG93blwiKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRHJvcG93blRvZ2dsZUljb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XG5cbiAgICAgICAgaWYgKCEod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViTWVudSkuZGlzcGxheSA9PT0gXCJub25lXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoXCJhLmNsb3NlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlblxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU2lkZWJhck1vYmlsZU1lbnUge1xyXG4gICAgI2lzTWVudU9wZW47XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcbiAgICAjc2lkZWJhclRvZ2dsZU1lbnVCdG47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpZHJTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tb2JpbGVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiNzdGFydFNpZHJQbHVnaW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJzxzcGFuIGNsYXNzPVwic2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD0wPjwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNzdGFydFNpZHJQbHVnaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkci5uZXcoXCIubW9iaWxlLW1lbnVcIiwge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNpZHJcIixcclxuICAgICAgICAgICAgc291cmNlOiBvcHRpb25zLnNpZHJTb3VyY2UsXHJcbiAgICAgICAgICAgIHNpZGU6IG9wdGlvbnMuc2lkclNpZGUsXHJcbiAgICAgICAgICAgIGRpc3BsYWNlOiBvcHRpb25zLnNpZHJEaXNwbGFjZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcmVuYW1pbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHRpbWluZzogXCJlYXNlXCIsXHJcbiAgICAgICAgICAgIGJpbmQ6IFwiY2xpY2tcIixcclxuICAgICAgICAgICAgb25PcGVuKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnNpdGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgJzxkaXYgY2xhc3M9XCJvY2VhbndwLXNpZHItb3ZlcmxheVwiIHRhYmluZGV4PTA+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1zaWRyLW92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFkZUluKG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNpZHIuY2xvc2UoXCJzaWRyXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlID4gdWxcIikuZm9yRWFjaCgoc3ViTWVudUFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVBY3RpdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpLmZvckVhY2goKG1lbnVJdGVtQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVPdXQob3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkciBbY2xhc3MqPVwic2lkci1jbGFzcy1mYVwiXScpLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJzaWRyLWNsYXNzLWZhLio/XFxiL2csIFwiZmFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWljb25cIl0nKS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvbi5jbGFzc05hbWUucmVwbGFjZSgvXFxic2lkci1jbGFzcy1pY29uLS4qP1xcYi9nLCBcImljb24tXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNpZHItY2xhc3MtdG9nZ2xlLXNpZHItY2xvc2VcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQnRuQ2xpY2spO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TaWRlYmFyQ2xvc2VNZW51QnRuQ2xpY2spO1xyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbj8uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJy5zaWRyLWNsYXNzLWRyb3Bkb3duLW1lbnUgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5zaWRyLWNsYXNzLW1lbnUtaXRlbSA+IGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI2Nsb3NlU2lkcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1uYXYtbm8tY2xpY2sgPiBhXCIpPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbkhhbWJ1cmdlckJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBpZiAoIW1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKS5mb3JFYWNoKChwYXJlbnRNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtICE9IHBhcmVudE1lbnVJdGVtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9jZWFuUGFyZW50cyhcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgobmVzdGVkTWVudUl0ZW0pID0+IG5lc3RlZE1lbnVJdGVtID09IHBhcmVudE1lbnVJdGVtKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKHBhcmVudE1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVEb3duKG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVVcChtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkLCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG47XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc2lkclwiKVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xyXG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNjbG9zZVNpZHIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck1vYmlsZU1lbnU7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwiaW5maW5pdGUtc2Nyb2xsXCI7XG5cbmNsYXNzIE9XSW5maW5pdGVTY3JvbGwge1xuICAgICNpbmZpbml0ZVNjcm9sbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoISFET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsTmF2ICYmICEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdi5xdWVyeVNlbGVjdG9yKFwiLm9sZGVyLXBvc3RzIGFcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsID0gbmV3IEluZmluaXRlU2Nyb2xsKERPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxXcmFwcGVyLCB7XG4gICAgICAgICAgICBwYXRoOiBcIi5vbGRlci1wb3N0cyBhXCIsXG4gICAgICAgICAgICBhcHBlbmQ6IFwiLml0ZW0tZW50cnlcIixcbiAgICAgICAgICAgIHN0YXR1czogXCIuc2Nyb2xsZXItc3RhdHVzXCIsXG4gICAgICAgICAgICBoaWRlTmF2OiBcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIsXG4gICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbFRocmVzaG9sZDogODAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoYm9keSwgcGF0aCwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tZW50cnlcIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGVPdXQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChpdGVtcywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEJsb2cgbWFzb25yeSBpc290b3BlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmJsb2dNYXNvbnJ5Lmlzb3RvcC5hcHBlbmRlZChpdGVtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRml4IEdhbGxlcnkgcG9zdHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuYmxvZ01hc29ucnkuaXNvdG9wLmxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNjAwICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFcXVhbCBoZWlnaHQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLW1hdGNoaGVpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuZXF1YWxIZWlnaHRFbGVtZW50cy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEdhbGxlcnkgcG9zdHMgc2xpZGVyXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1jYXJvdXNlbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93U2xpZGVyLnN0YXJ0KHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWZvcm1hdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93TGlnaHRib3guaW5pdFBob3RvU3dpcGVGcm9tRE9NKFwiLmdhbGxlcnktZm9ybWF0XCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEdhbGxlcnkgcG9zdHMgbGlnaHRib3hcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBvc3QgaW1hZ2UgbGlnaHRib3hcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiYS5vY2VhbndwLWxpZ2h0Ym94XCIpPy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5vcGVuTGlnaHRib3gpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBpbWFnZXMgdG8gYmUgcGFyc2VkIHRvIGZpeCBTYWZhcmkgaXNzdWVcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKT8uZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub3V0ZXJIVE1MID0gaW1nLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwub24oXCJhcHBlbmRcIiwgZnVuY3Rpb24gKGJvZHksIHBhdGgsIGl0ZW1zLCByZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmFkZUluKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV0luZmluaXRlU2Nyb2xsO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBPV0xpZ2h0Ym94IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNhZGRMaWdodGJveENsYXNzKCk7XG4gICAgICAgIHRoaXMuI2FkZFBob3RvU3dpcGVUb0RPTSgpO1xuICAgICAgICB0aGlzLiNpbml0KCk7XG4gICAgfTtcblxuICAgICNpbml0ID0gKCkgPT4ge1xuICAgICAgICAvLyBQb3N0IGdhbGxlcnlcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBob3RvU3dpcGVGcm9tRE9NKFwiLmdhbGxlcnktZm9ybWF0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW1hZ2UgbGlnaHRib3hcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImEub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9wZW5MaWdodGJveCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvcGVuTGlnaHRib3ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgcHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBzd3BcIilbMF07XG5cbiAgICAgICAgY29uc3QgaW1hZ2VMaWdodGJveCA9IG5ldyBQaG90b1N3aXBlKFxuICAgICAgICAgICAgcHN3cEVsZW1lbnQsXG4gICAgICAgICAgICBQaG90b1N3aXBlVUlfRGVmYXVsdCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICAgICAgICAgICAgICAgICAgdzogMTkyMCxcbiAgICAgICAgICAgICAgICAgICAgaDogMTIwMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93QW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgaGlkZUFuaW1hdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGltYWdlTGlnaHRib3guaW5pdCgpO1xuICAgIH07XG5cbiAgICAjYWRkTGlnaHRib3hDbGFzcyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgLmVudHJ5LWNvbnRlbnQgYSwgYm9keSAuZW50cnkgYVwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgaWYgKCEhbGluay5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VGb3JtYXRzID0gdGhpcy4jaW1hZ2VGb3JtYXRzKCk7XG4gICAgICAgICAgICAgICAgbGV0IGltYWdlRm9ybWF0c01hc2sgPSAwO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VGb3JtYXRzLmZvckVhY2goKGltYWdlRm9ybWF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0c01hc2sgKz0gU3RyaW5nKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkuaW5kZXhPZihcIi5cIiArIGltYWdlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZUZvcm1hdHNNYXNrID09PSAtMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwibm8tbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1pY29uXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIndvby1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tdGh1bWJuYWlsXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vY29tbWVyY2UtcHJvZHVjdC1nYWxsZXJ5X19pbWFnZVwiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm9jZWFud3AtbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpICYmIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeS1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjaW1hZ2VGb3JtYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gW1wiYm1wXCIsIFwiZ2lmXCIsIFwianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcInRpZmZcIiwgXCJ0aWZcIiwgXCJqZmlmXCIsIFwianBlXCIsIFwic3ZnXCIsIFwibXA0XCIsIFwib2dnXCIsIFwid2VibVwiXTtcbiAgICB9O1xuXG4gICAgI2FkZFBob3RvU3dpcGVUb0RPTSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wc3dwXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBET00uYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgICAgYDwhLS0gUm9vdCBlbGVtZW50IG9mIFBob3RvU3dpcGUuIE11c3QgaGF2ZSBjbGFzcyBwc3dwLiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEJhY2tncm91bmQgb2YgUGhvdG9Td2lwZS4gXG4gICAgICAgICAgICAgICAgICAgIEl0J3MgYSBzZXBhcmF0ZSBlbGVtZW50IGFzIGFuaW1hdGluZyBvcGFjaXR5IGlzIGZhc3RlciB0aGFuIHJnYmEoKS4gLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2JnXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIFNsaWRlcyB3cmFwcGVyIHdpdGggb3ZlcmZsb3c6aGlkZGVuLiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2Nyb2xsLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250YWluZXIgdGhhdCBob2xkcyBzbGlkZXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9Td2lwZSBrZWVwcyBvbmx5IDMgb2YgdGhlbSBpbiB0aGUgRE9NIHRvIHNhdmUgbWVtb3J5LlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3QgbW9kaWZ5IHRoZXNlIDMgcHN3cF9faXRlbSBlbGVtZW50cywgZGF0YSBpcyBhZGRlZCBsYXRlciBvbi4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZhdWx0IChQaG90b1N3aXBlVUlfRGVmYXVsdCkgaW50ZXJmYWNlIG9uIHRvcCBvZiBzbGlkaW5nIGFyZWEuIENhbiBiZSBjaGFuZ2VkLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3VpIHBzd3BfX3VpLS1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX190b3AtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgQ29udHJvbHMgYXJlIHNlbGYtZXhwbGFuYXRvcnkuIE9yZGVyIGNhbiBiZSBjaGFuZ2VkLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY291bnRlclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJDbG9zZSAoRXNjKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1zaGFyZVwiIHRpdGxlPVwiU2hhcmVcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tZnNcIiB0aXRsZT1cIlRvZ2dsZSBmdWxsc2NyZWVuXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXpvb21cIiB0aXRsZT1cIlpvb20gaW4vb3V0XCI+PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByZWxvYWRlciBkZW1vIGh0dHBzOi8vY29kZXBlbi5pby9kaW1zZW1lbm92L3Blbi95eUJXb1IgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBlbGVtZW50IHdpbGwgZ2V0IGNsYXNzIHBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHdoZW4gcHJlbG9hZGVyIGlzIHJ1bm5pbmcgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19pY25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fY3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19kb251dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLW1vZGFsIHBzd3BfX3NoYXJlLW1vZGFsLS1oaWRkZW4gcHN3cF9fc2luZ2xlLXRhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zaGFyZS10b29sdGlwXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdFwiIHRpdGxlPVwiUHJldmlvdXMgKGFycm93IGxlZnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1yaWdodFwiIHRpdGxlPVwiTmV4dCAoYXJyb3cgcmlnaHQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvbl9fY2VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGluaXRQaG90b1N3aXBlRnJvbURPTSA9IChnYWxsZXJ5U2VsZWN0b3IpID0+IHtcbiAgICAgICAgLy8gcGFyc2Ugc2xpZGUgZGF0YSAodXJsLCB0aXRsZSwgc2l6ZSAuLi4pIGZyb20gRE9NIGVsZW1lbnRzXG4gICAgICAgIC8vIChjaGlsZHJlbiBvZiBnYWxsZXJ5U2VsZWN0b3IpXG4gICAgICAgIHZhciBwYXJzZVRodW1ibmFpbEVsZW1lbnRzID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgdGh1bWJFbGVtZW50cyA9IGVsLmNoaWxkTm9kZXMsXG4gICAgICAgICAgICAgICAgbnVtTm9kZXMgPSB0aHVtYkVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFtdLFxuICAgICAgICAgICAgICAgIGxpbmtFbCxcbiAgICAgICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgICAgIGl0ZW07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTm9kZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmtFbCA9IHRodW1iRWxlbWVudHNbaV07IC8vIDxhPiBlbGVtZW50XG5cbiAgICAgICAgICAgICAgICAvLyBpbmNsdWRlIG9ubHkgZWxlbWVudCBub2Rlc1xuICAgICAgICAgICAgICAgIGlmIChsaW5rRWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2l6ZSA9IFsxOTIwLCAxMjAwXTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzbGlkZSBvYmplY3RcbiAgICAgICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IGxpbmtFbC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgICAgICAgICAgICAgICAgICB3OiBwYXJzZUludChzaXplWzBdLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIGg6IHBhcnNlSW50KHNpemVbMV0sIDEwKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDxpbWc+IHRodW1ibmFpbCBlbGVtZW50LCByZXRyaWV2aW5nIHRodW1ibmFpbCB1cmxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tc3JjID0gbGlua0VsLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLmVsID0gbGlua0VsOyAvLyBzYXZlIGxpbmsgdG8gZWxlbWVudCBmb3IgZ2V0VGh1bWJCb3VuZHNGblxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmaW5kIG5lYXJlc3QgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgdmFyIGNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KGVsLCBmbikge1xuICAgICAgICAgICAgcmV0dXJuIGVsICYmIChmbihlbCkgPyBlbCA6IGNsb3Nlc3QoZWwucGFyZW50Tm9kZSwgZm4pKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyB0cmlnZ2VycyB3aGVuIHVzZXIgY2xpY2tzIG9uIHRodW1ibmFpbFxuICAgICAgICB2YXIgb25UaHVtYm5haWxzQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgdmFyIGVUYXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIGZpbmQgcm9vdCBlbGVtZW50IG9mIHNsaWRlXG4gICAgICAgICAgICB2YXIgY2xpY2tlZExpc3RJdGVtID0gY2xvc2VzdChlVGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiQVwiICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktbGlnaHRib3hcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFjbGlja2VkTGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiAoZS5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggb2YgY2xpY2tlZCBpdGVtIGJ5IGxvb3BpbmcgdGhyb3VnaCBhbGwgY2hpbGQgbm9kZXNcbiAgICAgICAgICAgIC8vIGFsdGVybmF0aXZlbHksIHlvdSBtYXkgZGVmaW5lIGluZGV4IHZpYSBkYXRhLSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIHZhciBjbGlja2VkR2FsbGVyeSA9IGNsaWNrZWRMaXN0SXRlbS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBjbGlja2VkTGlzdEl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLFxuICAgICAgICAgICAgICAgIG51bUNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBub2RlSW5kZXggPSAwLFxuICAgICAgICAgICAgICAgIGluZGV4O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoaWxkTm9kZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2ldLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2ldID09PSBjbGlja2VkTGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBub2RlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyBvcGVuIFBob3RvU3dpcGUgaWYgdmFsaWQgaW5kZXggZm91bmRcbiAgICAgICAgICAgICAgICBvcGVuUGhvdG9Td2lwZShpbmRleCwgY2xpY2tlZEdhbGxlcnksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhcnNlIHBpY3R1cmUgaW5kZXggYW5kIGdhbGxlcnkgaW5kZXggZnJvbSBVUkwgKCMmcGlkPTEmZ2lkPTIpXG4gICAgICAgIHZhciBwaG90b3N3aXBlUGFyc2VIYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICAgICAgcGFyYW1zID0ge307XG5cbiAgICAgICAgICAgIGlmIChoYXNoLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFycyA9IGhhc2guc3BsaXQoXCImXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgIGlmIChwYWlyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMuZ2lkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmdpZCA9IHBhcnNlSW50KHBhcmFtcy5naWQsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3BlblBob3RvU3dpcGUgPSBmdW5jdGlvbiAoaW5kZXgsIGdhbGxlcnlFbGVtZW50LCBkaXNhYmxlQW5pbWF0aW9uLCBmcm9tVVJMKSB7XG4gICAgICAgICAgICB2YXIgcHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBzd3BcIilbMF0sXG4gICAgICAgICAgICAgICAgZ2FsbGVyeSxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIGl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtcyA9IHBhcnNlVGh1bWJuYWlsRWxlbWVudHMoZ2FsbGVyeUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgb3B0aW9ucyAoaWYgbmVlZGVkKVxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAvLyBkZWZpbmUgZ2FsbGVyeSBpbmRleCAoZm9yIFVSTClcbiAgICAgICAgICAgICAgICBnYWxsZXJ5VUlEOiBnYWxsZXJ5RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBzd3AtdWlkXCIpLFxuXG4gICAgICAgICAgICAgICAgZ2V0VGh1bWJCb3VuZHNGbjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBPcHRpb25zIC0+IGdldFRodW1iQm91bmRzRm4gc2VjdGlvbiBvZiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRodW1ibmFpbCA9IGl0ZW1zW2luZGV4XS5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSwgLy8gZmluZCB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VZU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0ID0gdGh1bWJuYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHJlY3QubGVmdCwgeTogcmVjdC50b3AgKyBwYWdlWVNjcm9sbCwgdzogcmVjdC53aWR0aCB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBQaG90b1N3aXBlIG9wZW5lZCBmcm9tIFVSTFxuICAgICAgICAgICAgaWYgKGZyb21VUkwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5nYWxsZXJ5UElEcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSByZWFsIGluZGV4IHdoZW4gY3VzdG9tIFBJRHMgYXJlIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3Bob3Rvc3dpcGUuY29tL2RvY3VtZW50YXRpb24vZmFxLmh0bWwjY3VzdG9tLXBpZC1pbi11cmxcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zW2pdLnBpZCA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gVVJMIGluZGV4ZXMgc3RhcnQgZnJvbSAxXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBleGl0IGlmIGluZGV4IG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKGlzTmFOKG9wdGlvbnMuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBhc3MgZGF0YSB0byBQaG90b1N3aXBlIGFuZCBpbml0aWFsaXplIGl0XG4gICAgICAgICAgICBnYWxsZXJ5ID0gbmV3IFBob3RvU3dpcGUocHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSV9EZWZhdWx0LCBpdGVtcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBnYWxsZXJ5LmluaXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGdhbGxlcnkgZWxlbWVudHMgYW5kIGJpbmQgZXZlbnRzXG4gICAgICAgIHZhciBnYWxsZXJ5RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGdhbGxlcnlTZWxlY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1wc3dwLXVpZFwiLCBpICsgMSk7XG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbaV0ub25jbGljayA9IG9uVGh1bWJuYWlsc0NsaWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgVVJMIGFuZCBvcGVuIGdhbGxlcnkgaWYgaXQgY29udGFpbnMgIyZwaWQ9MyZnaWQ9MVxuICAgICAgICB2YXIgaGFzaERhdGEgPSBwaG90b3N3aXBlUGFyc2VIYXNoKCk7XG4gICAgICAgIGlmIChoYXNoRGF0YS5waWQgJiYgaGFzaERhdGEuZ2lkKSB7XG4gICAgICAgICAgICBvcGVuUGhvdG9Td2lwZShoYXNoRGF0YS5waWQsIGdhbGxlcnlFbGVtZW50c1toYXNoRGF0YS5naWQgLSAxXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV0xpZ2h0Ym94O1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBPV1NsaWRlciB7XG4gICAgZmxpY2tpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWZvcm1hdCwgLnByb2R1Y3QtZW50cnktc2xpZGVyXCIpKSA9PiB7XG4gICAgICAgIHRoaXMuZmxpY2tpdHkgPSBbXTtcblxuICAgICAgICBlbGVtZW50cz8uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxpY2tpdHkgPSBuZXcgRmxpY2tpdHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndvby1lbnRyeS1pbWFnZVwiKSA/IGZhbHNlIDogNjAwMCxcbiAgICAgICAgICAgICAgICByaWdodFRvTGVmdDogRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicnRsXCIpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBjb250YWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmxpY2tpdHkucHVzaChmbGlja2l0eSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XU2xpZGVyO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTY3JvbGxFZmZlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtcHJvZHVjdFwiKSAmJiAhRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbG9jYWwtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEubG9jYWxbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAubG9jYWwgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEubWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5zaWRyLWNsYXNzLW1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmZvckVhY2goKHNjcm9sbEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsSXRlbUNsaWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblNjcm9sbEl0ZW1DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9tdy1vcGVuLW1vZGFsXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib213LW9wZW4tbW9kYWxcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBocmVmID0gc2Nyb2xsSXRlbS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGhyZWYuc3Vic3RyaW5nKGhyZWYuaW5kZXhPZihcIiNcIikpLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZCAhPSBcIlwiICYmICEhdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCh0YXJnZXQpLnRvcCAtIHRoaXMuI2dldEFkbWluQmFySGVpZ2h0KCkgLSB0aGlzLiNnZXRUb3BiYXJIZWlnaHQoKSAtIHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmJvZHkuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2dldEFkbWluQmFySGVpZ2h0ID0gKCkgPT4gKCEhRE9NLldQQWRtaW5iYXIgPyBET00uV1BBZG1pbmJhci5vZmZzZXRIZWlnaHQgOiAwKTtcclxuXHJcbiAgICAjZ2V0VG9wYmFySGVpZ2h0ID0gKCkgPT5cclxuICAgICAgICAhIURPTS5oZWFkZXIudG9wYmFyV3JhcHBlciAmJiBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWJhci1zdGlja3lcIilcclxuICAgICAgICAgICAgPyBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIDogMDtcclxuXHJcbiAgICAjZ2V0U3RpY2t5SGVhZGVySGVpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIURPTS5oZWFkZXIuc2l0ZSkge1xyXG4gICAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRvci1zdGlja3lcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1zY3JvbGxcIikpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBib3R0b21IZWFkZXJXcmFwcGVyID0gRE9NLmhlYWRlci5zaXRlLnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWhlYWRlci13cmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tSGVhZGVyV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1zY3JvbGxcIilcclxuICAgICAgICAgICAgICAgID8gYm90dG9tSGVhZGVyV3JhcHBlci5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgICAgIDogISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlzLXN0aWNreSAjc2l0ZS1oZWFkZXItaW5uZXJcIilcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcy1zdGlja3kgI3NpdGUtaGVhZGVyLWlubmVyXCIpLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEVmZmVjdDtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb3Age1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge307XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jb25XaW5kb3dTY3JvbGwpO1xuICAgICAgICBET00uc2Nyb2xsLnNjcm9sbFRvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgICAgIERPTS5zY3JvbGwuZ29Ub3BTbGFzaD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgIH07XG5cbiAgICAjb25XaW5kb3dTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00uc2Nyb2xsLnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGZhZGVJbihET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoRE9NLnNjcm9sbC5zY3JvbGxUb3ApLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgZmFkZU91dChET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uU2Nyb2xsVG9wQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBET00uYm9keS5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2Nyb2xsVG9wLnBhcmVudE5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJzZkhvdmVyXCIpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBEcm9wRG93blNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvZHJvcC1kb3duXCI7XHJcbmltcG9ydCBIZWFkZXJSZXBsYWNlU2VhcmNoIGZyb20gXCIuL3NlYXJjaC9oZWFkZXItcmVwbGFjZVwiO1xyXG5pbXBvcnQgTW9iaWxlU2VhcmNoSWNvbiBmcm9tIFwiLi9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uXCI7XHJcbmltcG9ydCBPdmVybGF5U2VhcmNoIGZyb20gXCIuL3NlYXJjaC9vdmVybGF5XCI7XHJcblxyXG5jbGFzcyBTZWFyY2gge1xyXG4gICAgbW9iaWxlT3ZlcmxheUlucHV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duID0gbmV3IERyb3BEb3duU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJSZXBsYWNlID0gbmV3IEhlYWRlclJlcGxhY2VTZWFyY2goKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBuZXcgT3ZlcmxheVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlU2VhcmNoSWNvbiA9IG5ldyBNb2JpbGVTZWFyY2hJY29uKCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtc2VhcmNoLW92ZXJsYXktaW5wdXRcIik7XHJcblxyXG4gICAgICAgIERPTS5zZWFyY2guZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghIXRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dC5jbG9zZXN0KFwiZm9ybVwiKS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5zZWFyY2guZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbklucHV0S2V5dXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGlucHV0LmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiY2xhc3MgU2VhcmNoQmFzZSB7XG4gICAgZm9jdXMgPSAoZm9ybSwgaW5wdXRDbGFzcykgPT4ge1xuICAgICAgICBsZXQgZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtKS50cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZShcInNcIiwgXCJcIikpICogMTAwMDtcblxuICAgICAgICBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID0gISFmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID8gZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA6IDYwMDtcblxuICAgICAgICBpZiAoZm9ybVRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGlucHV0Q2xhc3MpLmZvY3VzKCk7XG4gICAgICAgICAgICB9LCBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhc2U7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIERyb3BEb3duU2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcImRyb3BfZG93blwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2guZHJvcERvd24udG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRvY3VtZW50Q2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB7IHRvZ2dsZVNlYXJjaEJ0biwgZm9ybSB9ID0gRE9NLnNlYXJjaC5kcm9wRG93bjtcblxuICAgICAgICB0b2dnbGVTZWFyY2hCdG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sIFwiaW5wdXQuZmllbGRcIik7XG4gICAgfTtcblxuICAgICNvbkRvY3VtZW50Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQ29sbGFwcyBzZWFyY2ggZm9ybVxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3NlYXJjaGZvcm0tZHJvcGRvd24uc2hvd1wiKSkge1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi5mb3JtPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgIERPTS5zZWFyY2guZHJvcERvd24udG9nZ2xlU2VhcmNoQnRuPy5wYXJlbnROb2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25TZWFyY2g7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIEhlYWRlclJlcGxhY2VTZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwiaGVhZGVyX3JlcGxhY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2UudG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZS5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VCdG5DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRG9jdW1lbnRDbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlO1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcExlZnRTaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIURPTS5tZW51Lm5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiMzcwcHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTS5tZW51Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIGZvcm0uc3R5bGUubWF4V2lkdGggPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1uYXZpZ2F0aW9uID4gdWwuZHJvcGRvd24tbWVudVwiKT8ub2Zmc2V0V2lkdGggKyA2MCArIFwicHhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlO1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcExlZnRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBET00ubWVudS5uYXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5tYWluLnN0eWxlLm1pbldpZHRoID0gXCJcIjtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRG9jdW1lbnRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBDb2xsYXBzIHNlYXJjaCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS5zaG93XCIpKSB7XG4gICAgICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U/LmZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnRvcExlZnRTaWRlPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm5hdj8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI2hhc1RvcEhlYWRlciA9ICgpID0+IERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWhlYWRlclwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyUmVwbGFjZVNlYXJjaDtcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIE1vYmlsZVNlYXJjaEljb24gZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICAjZWxlbWVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwiZGlzYWJsZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMgPSB7XG4gICAgICAgICAgICBkcm9wZG93blNlYXJjaEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb24tZHJvcGRvd25cIiksXG4gICAgICAgICAgICBkcm9wZG93blNlYXJjaEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLWRyb3Bkb3duXCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtb3ZlcmxheVwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2hJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uLW92ZXJsYXlcIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoQ2xvc2VJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1vdmVybGF5IC5zZWFyY2gtb3ZlcmxheS1jbG9zZVwiKSxcbiAgICAgICAgICAgIGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcImRyb3BfZG93blwiKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiN0b2dnbGVEcm9wZG93blNlYXJjaCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbGlja0RvY3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJvdmVybGF5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2hJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb3Blbk92ZXJsYXlTZWFyY2gpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaENsb3NlSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI2Nsb3NlT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbGlja092ZXJsYXlTZWFyY2gpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICN0b2dnbGVEcm9wZG93blNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIHRoaXMuZm9jdXModGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLCBcImlucHV0LmZpZWxkXCIpO1xuICAgIH07XG5cbiAgICAjb3Blbk92ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVJbih0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoKTtcblxuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFwiaW5wdXQubW9iaWxlLXNlYXJjaC1vdmVybGF5LWlucHV0XCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNjbG9zZU92ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVPdXQodGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNvbkNsaWNrT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25DbGlja0RvY3VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjaWNvbi1zZWFyY2hmb3JtLWRyb3Bkb3duLnNob3dcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlU2VhcmNoSWNvbjtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgT3ZlcmxheVNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJvdmVybGF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5vdmVybGF5LnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBET00uc2VhcmNoLm92ZXJsYXkuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlQnRuQ2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5vdmVybGF5O1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZUluKGZvcm0pO1xuXG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gRE9NLnNlYXJjaC5vdmVybGF5O1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZU91dChmb3JtKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheVNlYXJjaDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCB7XHJcbiAgICAjc2VsZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5zZWxlY3RUYWdzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QgPSBzZWxlY3Q7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgICAgICAgXCJhZnRlcmVuZFwiLFxyXG4gICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwidGhlbWUtc2VsZWN0ICR7dGhpcy4jc2VsZWN0LmNsYXNzTGlzdH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRoZW1lLXNlbGVjdElubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy4jc2VsZWN0Lm9wdGlvbnNbdGhpcy4jc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPmBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdC5jbGFzc0xpc3QuYWRkKFwiaGFzQ3VzdG9tU2VsZWN0XCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc3R5bGUoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVyc0l0ZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI3N0eWxlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmhlaWdodCA9IFwiMzRweFwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5mb250U2l6ZSA9IFwiMTNweFwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5hcHBlYXJhbmNlID0gXCJtZW51bGlzdC1idXR0b25cIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3QubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0Lm5leHRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVyc0l0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uTW91c2VlbnRlcik7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuI29uTW91c2VsZWF2ZSk7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5vbkNoYW5nZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1vdXNlZW50ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZChcInRoZW1lLXNlbGVjdEhvdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Nb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aGVtZS1zZWxlY3RIb3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QubmV4dFNpYmxpbmcuaW5uZXJIVE1MID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMuI29uRG9jdW1lbnRSZWFkeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25Eb2N1bWVudFJlYWR5KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uRG9jdW1lbnRSZWFkeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIERPTS5zZWxlY3RUYWdzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Quc3R5bGUud2lkdGggPSBzZWxlY3QubmV4dFNpYmxpbmcub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCBTZWxlY3QgZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2JpbGUtbWVudVwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcclxuaW1wb3J0IEJsb2dNYXNvbnJ5IGZyb20gXCIuL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5XCI7XHJcbmltcG9ydCBTY3JvbGxUb3AgZnJvbSBcIi4vY29tcG9uZW50cy9zY3JvbGwtdG9wXCI7XHJcbmltcG9ydCBTY3JvbGxFZmZlY3QgZnJvbSBcIi4vY29tcG9uZW50cy9zY3JvbGwtZWZmZWN0XCI7XHJcbmltcG9ydCBFcXVhbEhlaWdodEVsZW1lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvZXF1YWwtaGVpZ2h0LWVsZW1lbnRzXCI7XHJcbmltcG9ydCBPV0luZmluaXRlU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvb3ctaW5maW5pdGUtc2Nyb2xsXCI7XHJcbmltcG9ydCBPV1NsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL293LXNsaWRlclwiO1xyXG5pbXBvcnQgT1dMaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL293LWxpZ2h0Ym94XCI7XHJcblxyXG5jbGFzcyBUaGVtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdCA9IG5ldyBTZWxlY3QoKTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5ibG9nTWFzb25yeSA9IG5ldyBCbG9nTWFzb25yeSgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gbmV3IFNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRWZmZWN0ID0gbmV3IFNjcm9sbEVmZmVjdCgpO1xyXG4gICAgICAgIHRoaXMuZXF1YWxIZWlnaHRFbGVtZW50cyA9IG5ldyBFcXVhbEhlaWdodEVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5vd0xpZ2h0Ym94ID0gbmV3IE9XTGlnaHRib3goKTtcclxuICAgICAgICB0aGlzLm93U2xpZGVyID0gbmV3IE9XU2xpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5vd0luZmluaXRlU2Nyb2xsID0gbmV3IE9XSW5maW5pdGVTY3JvbGwoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lO1xyXG4iLCIvLyBidXR0b25cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0ZVNjcm9sbEJ1dHRvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jbGFzcyBJbmZpbml0ZVNjcm9sbEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKCBlbGVtZW50LCBpbmZTY3JvbGwgKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmluZlNjcm9sbCA9IGluZlNjcm9sbDtcbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAncmVxdWVzdCcsIHRoaXMuZGlzYWJsZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdsb2FkJywgdGhpcy5lbmFibGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnZXJyb3InLCB0aGlzLmhpZGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnbGFzdCcsIHRoaXMuaGlkZS5iaW5kKCB0aGlzICkgKTtcbiAgfVxuXG4gIG9uQ2xpY2soIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pbmZTY3JvbGwubG9hZE5leHRQYWdlKCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5maW5pdGVTY3JvbGwgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cy5idXR0b24gPSBudWxsO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuYnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGxldCBidXR0b25FbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuYnV0dG9uICk7XG4gIGlmICggYnV0dG9uRWxlbSApIHtcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBJbmZpbml0ZVNjcm9sbEJ1dHRvbiggYnV0dG9uRWxlbSwgdGhpcyApO1xuICB9XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LmJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuYnV0dG9uICkgdGhpcy5idXR0b24uZGVzdHJveSgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLkJ1dHRvbiA9IEluZmluaXRlU2Nyb2xsQnV0dG9uO1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gY29yZVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkluZmluaXRlU2Nyb2xsID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgdXRpbHMgKSB7XG5cbmxldCBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIEluZmluaXRlU2Nyb2xsIGludGFuY2VzXG5sZXQgaW5zdGFuY2VzID0ge307XG5cbmZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBsZXQgcXVlcnlFbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG5cbiAgaWYgKCAhcXVlcnlFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgSW5maW5pdGVTY3JvbGw6ICcgKyAoIHF1ZXJ5RWxlbSB8fCBlbGVtZW50ICkgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudCA9IHF1ZXJ5RWxlbTtcbiAgLy8gZG8gbm90IGluaXRpYWxpemUgdHdpY2Ugb24gc2FtZSBlbGVtZW50XG4gIGlmICggZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgKSB7XG4gICAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VzWyBlbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCBdO1xuICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0geyAuLi5JbmZpbml0ZVNjcm9sbC5kZWZhdWx0cyB9O1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxuLy8gZGVmYXVsdHNcbkluZmluaXRlU2Nyb2xsLmRlZmF1bHRzID0ge1xuICAvLyBwYXRoOiBudWxsLFxuICAvLyBoaWRlTmF2OiBudWxsLFxuICAvLyBkZWJ1ZzogZmFsc2UsXG59O1xuXG4vLyBjcmVhdGUgJiBkZXN0cm95IG1ldGhvZHNcbkluZmluaXRlU2Nyb2xsLmNyZWF0ZSA9IHt9O1xuSW5maW5pdGVTY3JvbGwuZGVzdHJveSA9IHt9O1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxuT2JqZWN0LmFzc2lnbiggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xubGV0IEdVSUQgPSAwO1xuXG5wcm90by5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3JlYXRlIGNvcmVcbiAgLy8gYWRkIGlkIGZvciBJbmZpbml0ZVNjcm9sbC5kYXRhXG4gIGxldCBpZCA9IHRoaXMuZ3VpZCA9ICsrR1VJRDtcbiAgdGhpcy5lbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCA9IGlkOyAvLyBleHBhbmRvXG4gIGluc3RhbmNlc1sgaWQgXSA9IHRoaXM7IC8vIGFzc29jaWF0ZSB2aWEgaWRcbiAgLy8gcHJvcGVydGllc1xuICB0aGlzLnBhZ2VJbmRleCA9IDE7IC8vIGRlZmF1bHQgdG8gZmlyc3QgcGFnZVxuICB0aGlzLmxvYWRDb3VudCA9IDA7XG4gIHRoaXMudXBkYXRlR2V0UGF0aCgpO1xuICAvLyBiYWlsIGlmIGdldFBhdGggbm90IHNldCwgb3IgcmV0dXJucyBmYWxzZXkgIzc3NlxuICBsZXQgaGFzUGF0aCA9IHRoaXMuZ2V0UGF0aCAmJiB0aGlzLmdldFBhdGgoKTtcbiAgaWYgKCAhaGFzUGF0aCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdEaXNhYmxpbmcgSW5maW5pdGVTY3JvbGwnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy51cGRhdGVHZXRBYnNvbHV0ZVBhdGgoKTtcbiAgdGhpcy5sb2coICdpbml0aWFsaXplZCcsIFsgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSBdICk7XG4gIHRoaXMuY2FsbE9uSW5pdCgpO1xuICAvLyBjcmVhdGUgZmVhdHVyZXNcbiAgZm9yICggbGV0IG1ldGhvZCBpbiBJbmZpbml0ZVNjcm9sbC5jcmVhdGUgKSB7XG4gICAgSW5maW5pdGVTY3JvbGwuY3JlYXRlWyBtZXRob2QgXS5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8vIGNhbGwgb25Jbml0IG9wdGlvbiwgdXNlZCBmb3IgYmluZGluZyBldmVudHMgb24gaW5pdFxucHJvdG8uY2FsbE9uSW5pdCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb25Jbml0ID0gdGhpcy5vcHRpb25zLm9uSW5pdDtcbiAgaWYgKCBvbkluaXQgKSB7XG4gICAgb25Jbml0LmNhbGwoIHRoaXMsIHRoaXMgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIHRoaXMubG9nKCB0eXBlLCBhcmdzICk7XG4gIGxldCBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG4gIC8vIHRyaWdnZXIgalF1ZXJ5IGV2ZW50XG4gIGlmICggIWpRdWVyeSB8fCAhdGhpcy4kZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbmFtZXNwYWNlIGpRdWVyeSBldmVudFxuICB0eXBlICs9ICcuaW5maW5pdGVTY3JvbGwnO1xuICBsZXQgJGV2ZW50ID0gdHlwZTtcbiAgaWYgKCBldmVudCApIHtcbiAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXAgKi9cbiAgICBsZXQgalFFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICBqUUV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICRldmVudCA9IGpRRXZlbnQ7XG4gIH1cbiAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbn07XG5cbmxldCBsb2dnZXJzID0ge1xuICBpbml0aWFsaXplZDogKCBjbGFzc05hbWUgKSA9PiBgb24gJHtjbGFzc05hbWV9YCxcbiAgcmVxdWVzdDogKCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIGxvYWQ6ICggcmVzcG9uc2UsIHBhdGggKSA9PiBgJHtyZXNwb25zZS50aXRsZSB8fCAnJ30uIFVSTDogJHtwYXRofWAsXG4gIGVycm9yOiAoIGVycm9yLCBwYXRoICkgPT4gYCR7ZXJyb3J9LiBVUkw6ICR7cGF0aH1gLFxuICBhcHBlbmQ6ICggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkgPT4gYCR7aXRlbXMubGVuZ3RofSBpdGVtcy4gVVJMOiAke3BhdGh9YCxcbiAgbGFzdDogKCByZXNwb25zZSwgcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBoaXN0b3J5OiAoIHRpdGxlLCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIHBhZ2VJbmRleDogZnVuY3Rpb24oIGluZGV4LCBvcmlnaW4gKSB7XG4gICAgcmV0dXJuIGBjdXJyZW50IHBhZ2UgZGV0ZXJtaW5lZCB0byBiZTogJHtpbmRleH0gZnJvbSAke29yaWdpbn1gO1xuICB9LFxufTtcblxuLy8gbG9nIGV2ZW50c1xucHJvdG8ubG9nID0gZnVuY3Rpb24oIHR5cGUsIGFyZ3MgKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5kZWJ1ZyApIHJldHVybjtcblxuICBsZXQgbWVzc2FnZSA9IGBbSW5maW5pdGVTY3JvbGxdICR7dHlwZX1gO1xuICBsZXQgbG9nZ2VyID0gbG9nZ2Vyc1sgdHlwZSBdO1xuICBpZiAoIGxvZ2dlciApIG1lc3NhZ2UgKz0gJy4gJyArIGxvZ2dlci5hcHBseSggdGhpcywgYXJncyApO1xuICBjb25zb2xlLmxvZyggbWVzc2FnZSApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyB1c2VkIGFtb3VuZyBmZWF0dXJlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVNZWFzdXJlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB0aGlzLnRvcCA9IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG59O1xuXG5wcm90by51cGRhdGVTY3JvbGxlciA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZWxlbWVudFNjcm9sbCA9IHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsO1xuICBpZiAoICFlbGVtZW50U2Nyb2xsICkge1xuICAgIC8vIGRlZmF1bHQsIHVzZSB3aW5kb3dcbiAgICB0aGlzLnNjcm9sbGVyID0gd2luZG93O1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiB0cnVlLCBzZXQgdG8gZWxlbWVudCwgb3RoZXJ3aXNlIHVzZSBvcHRpb25cbiAgdGhpcy5zY3JvbGxlciA9IGVsZW1lbnRTY3JvbGwgPT09IHRydWUgPyB0aGlzLmVsZW1lbnQgOlxuICAgIHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudFNjcm9sbCApO1xuICBpZiAoICF0aGlzLnNjcm9sbGVyICkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgZWxlbWVudFNjcm9sbDogJHtlbGVtZW50U2Nyb2xsfWApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwYWdlIHBhdGggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlR2V0UGF0aCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb3B0UGF0aCA9IHRoaXMub3B0aW9ucy5wYXRoO1xuICBpZiAoICFvcHRQYXRoICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEluZmluaXRlU2Nyb2xsIHBhdGggb3B0aW9uIHJlcXVpcmVkLiBTZXQgYXM6ICR7b3B0UGF0aH1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZnVuY3Rpb25cbiAgbGV0IHR5cGUgPSB0eXBlb2Ygb3B0UGF0aDtcbiAgaWYgKCB0eXBlID09ICdmdW5jdGlvbicgKSB7XG4gICAgdGhpcy5nZXRQYXRoID0gb3B0UGF0aDtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdGVtcGxhdGUgc3RyaW5nOiAnL3BhZ2VzL3t7I319Lmh0bWwnXG4gIGxldCB0ZW1wbGF0ZU1hdGNoID0gdHlwZSA9PSAnc3RyaW5nJyAmJiBvcHRQYXRoLm1hdGNoKCd7eyN9fScpO1xuICBpZiAoIHRlbXBsYXRlTWF0Y2ggKSB7XG4gICAgdGhpcy51cGRhdGVHZXRQYXRoVGVtcGxhdGUoIG9wdFBhdGggKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2VsZWN0b3I6ICcubmV4dC1wYWdlLXNlbGVjdG9yJ1xuICB0aGlzLnVwZGF0ZUdldFBhdGhTZWxlY3Rvciggb3B0UGF0aCApO1xufTtcblxucHJvdG8udXBkYXRlR2V0UGF0aFRlbXBsYXRlID0gZnVuY3Rpb24oIG9wdFBhdGggKSB7XG4gIC8vIHNldCBnZXRQYXRoIHdpdGggdGVtcGxhdGUgc3RyaW5nXG4gIHRoaXMuZ2V0UGF0aCA9ICgpID0+IHtcbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5wYWdlSW5kZXggKyAxO1xuICAgIHJldHVybiBvcHRQYXRoLnJlcGxhY2UoICd7eyN9fScsIG5leHRJbmRleCApO1xuICB9O1xuICAvLyBnZXQgcGFnZUluZGV4IGZyb20gbG9jYXRpb25cbiAgLy8gY29udmVydCBwYXRoIG9wdGlvbiBpbnRvIHJlZ2V4IHRvIGxvb2sgZm9yIHBhdHRlcm4gaW4gbG9jYXRpb25cbiAgLy8gZXNjYXBlIHF1ZXJ5ICg/KSBpbiB1cmwsIGFsbG93cyBmb3IgcGFyc2luZyBHRVQgcGFyYW1ldGVyc1xuICBsZXQgcmVnZXhTdHJpbmcgPSBvcHRQYXRoXG4gICAgLnJlcGxhY2UoIC8oXFxcXFxcP3xcXD8pLywgJ1xcXFw/JyApXG4gICAgLnJlcGxhY2UoICd7eyN9fScsICcoXFxcXGRcXFxcZD9cXFxcZD8pJyApO1xuICBsZXQgdGVtcGxhdGVSZSA9IG5ldyBSZWdFeHAoIHJlZ2V4U3RyaW5nICk7XG4gIGxldCBtYXRjaCA9IGxvY2F0aW9uLmhyZWYubWF0Y2goIHRlbXBsYXRlUmUgKTtcblxuICBpZiAoIG1hdGNoICkge1xuICAgIHRoaXMucGFnZUluZGV4ID0gcGFyc2VJbnQoIG1hdGNoWzFdLCAxMCApO1xuICAgIHRoaXMubG9nKCAncGFnZUluZGV4JywgWyB0aGlzLnBhZ2VJbmRleCwgJ3RlbXBsYXRlIHN0cmluZycgXSApO1xuICB9XG59O1xuXG5sZXQgcGF0aFJlZ2V4ZXMgPSBbXG4gIC8vIFdvcmRQcmVzcyAmIFR1bWJsciAtIGV4YW1wbGUuY29tL3BhZ2UvMlxuICAvLyBKZWt5bGwgLSBleGFtcGxlLmNvbS9wYWdlMlxuICAvXiguKj9cXC8/cGFnZVxcLz8pKFxcZFxcZD9cXGQ/KSguKj8kKS8sXG4gIC8vIERydXBhbCAtIGV4YW1wbGUuY29tLz9wYWdlPTFcbiAgL14oLio/XFwvP1xcP3BhZ2U9KShcXGRcXGQ/XFxkPykoLio/JCkvLFxuICAvLyBjYXRjaCBhbGwsIGxhc3Qgb2NjdXJlbmNlIG9mIGEgbnVtYmVyXG4gIC8oLio/KShcXGRcXGQ/XFxkPykoPyEuKlxcZCkoLio/JCkvLFxuXTtcblxuLy8gdHJ5IG1hdGNoaW5nIGhyZWYgdG8gcGF0aFJlZ2V4ZXMgcGF0dGVybnNcbmxldCBnZXRQYXRoUGFydHMgPSBJbmZpbml0ZVNjcm9sbC5nZXRQYXRoUGFydHMgPSBmdW5jdGlvbiggaHJlZiApIHtcbiAgaWYgKCAhaHJlZiApIHJldHVybjtcbiAgZm9yICggbGV0IHJlZ2V4IG9mIHBhdGhSZWdleGVzICkge1xuICAgIGxldCBtYXRjaCA9IGhyZWYubWF0Y2goIHJlZ2V4ICk7XG4gICAgaWYgKCBtYXRjaCApIHtcbiAgICAgIGxldCBbICwgYmVnaW4sIGluZGV4LCBlbmQgXSA9IG1hdGNoO1xuICAgICAgcmV0dXJuIHsgYmVnaW4sIGluZGV4LCBlbmQgfTtcbiAgICB9XG4gIH1cbn07XG5cbnByb3RvLnVwZGF0ZUdldFBhdGhTZWxlY3RvciA9IGZ1bmN0aW9uKCBvcHRQYXRoICkge1xuICAvLyBwYXJzZSBocmVmIG9mIGxpbms6ICcubmV4dC1wYWdlLWxpbmsnXG4gIGxldCBocmVmRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wdFBhdGggKTtcbiAgaWYgKCAhaHJlZkVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvcihgQmFkIEluZmluaXRlU2Nyb2xsIHBhdGggb3B0aW9uLiBOZXh0IGxpbmsgbm90IGZvdW5kOiAke29wdFBhdGh9YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGhyZWYgPSBocmVmRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgbGV0IHBhdGhQYXJ0cyA9IGdldFBhdGhQYXJ0cyggaHJlZiApO1xuICBpZiAoICFwYXRoUGFydHMgKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW5maW5pdGVTY3JvbGwgdW5hYmxlIHRvIHBhcnNlIG5leHQgbGluayBocmVmOiAke2hyZWZ9YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgYmVnaW4sIGluZGV4LCBlbmQgfSA9IHBhdGhQYXJ0cztcbiAgdGhpcy5pc1BhdGhTZWxlY3RvciA9IHRydWU7IC8vIGZsYWcgZm9yIGNoZWNrTGFzdFBhZ2UoKVxuICB0aGlzLmdldFBhdGggPSAoKSA9PiBiZWdpbiArICggdGhpcy5wYWdlSW5kZXggKyAxICkgKyBlbmQ7XG4gIC8vIGdldCBwYWdlSW5kZXggZnJvbSBocmVmXG4gIHRoaXMucGFnZUluZGV4ID0gcGFyc2VJbnQoIGluZGV4LCAxMCApIC0gMTtcbiAgdGhpcy5sb2coICdwYWdlSW5kZXgnLCBbIHRoaXMucGFnZUluZGV4LCAnbmV4dCBsaW5rJyBdICk7XG59O1xuXG5wcm90by51cGRhdGVHZXRBYnNvbHV0ZVBhdGggPSBmdW5jdGlvbigpIHtcbiAgbGV0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgLy8gcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggaHR0cCBvciAvXG4gIGxldCBpc0Fic29sdXRlID0gcGF0aC5tYXRjaCggL15odHRwLyApIHx8IHBhdGgubWF0Y2goIC9eXFwvLyApO1xuICBpZiAoIGlzQWJzb2x1dGUgKSB7XG4gICAgdGhpcy5nZXRBYnNvbHV0ZVBhdGggPSB0aGlzLmdldFBhdGg7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgcGF0aG5hbWUgfSA9IGxvY2F0aW9uO1xuICAvLyBxdWVyeSBwYXJhbWV0ZXIgIzgyOS4gZXhhbXBsZS5jb20vP3BnPTJcbiAgbGV0IGlzUXVlcnkgPSBwYXRoLm1hdGNoKCAvXlxcPy8gKTtcbiAgLy8gL2Zvby9iYXIvaW5kZXguaHRtbCA9PiAvZm9vL2JhclxuICBsZXQgZGlyZWN0b3J5ID0gcGF0aG5hbWUuc3Vic3RyaW5nKCAwLCBwYXRobmFtZS5sYXN0SW5kZXhPZignLycpICk7XG4gIGxldCBwYXRoU3RhcnQgPSBpc1F1ZXJ5ID8gcGF0aG5hbWUgOiBkaXJlY3RvcnkgKyAnLyc7XG5cbiAgdGhpcy5nZXRBYnNvbHV0ZVBhdGggPSAoKSA9PiBwYXRoU3RhcnQgKyB0aGlzLmdldFBhdGgoKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBoaWRlIG5hdmlnYXRpb25cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5oaWRlTmF2ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBuYXYgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5oaWRlTmF2ICk7XG4gIGlmICggIW5hdiApIHJldHVybjtcblxuICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGhpcy5uYXYgPSBuYXY7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LmhpZGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm5hdiApIHRoaXMubmF2LnN0eWxlLmRpc3BsYXkgPSAnJztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlc3Ryb3kgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFsbE9mZigpOyAvLyByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAvLyBjYWxsIGRlc3Ryb3kgbWV0aG9kc1xuICBmb3IgKCBsZXQgbWV0aG9kIGluIEluZmluaXRlU2Nyb2xsLmRlc3Ryb3kgKSB7XG4gICAgSW5maW5pdGVTY3JvbGwuZGVzdHJveVsgbWV0aG9kIF0uY2FsbCggdGhpcyApO1xuICB9XG5cbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIHRoaXMuZ3VpZCBdO1xuICAvLyByZW1vdmUgalF1ZXJ5IGRhdGEuICM4MDdcbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCAnaW5maW5pdGVTY3JvbGwnICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBodHRwczovL3JlbXlzaGFycC5jb20vMjAxMC8wNy8yMS90aHJvdHRsaW5nLWZ1bmN0aW9uLWNhbGxzXG5JbmZpbml0ZVNjcm9sbC50aHJvdHRsZSA9IGZ1bmN0aW9uKCBmbiwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMjAwO1xuICBsZXQgbGFzdCwgdGltZW91dDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgfTtcbiAgICBpZiAoIGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaG9sZCApIHtcbiAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoIHRyaWdnZXIsIHRocmVzaG9sZCApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyKCk7XG4gICAgfVxuICB9O1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIGxldCBpZCA9IGVsZW0gJiYgZWxlbS5pbmZpbml0ZVNjcm9sbEdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG4vLyBzZXQgaW50ZXJuYWwgalF1ZXJ5LCBmb3IgV2VicGFjayArIGpRdWVyeSB2M1xuSW5maW5pdGVTY3JvbGwuc2V0SlF1ZXJ5ID0gZnVuY3Rpb24oIGpxcnkgKSB7XG4gIGpRdWVyeSA9IGpxcnk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG51dGlscy5odG1sSW5pdCggSW5maW5pdGVTY3JvbGwsICdpbmZpbml0ZS1zY3JvbGwnICk7XG5cbi8vIGFkZCBub29wIF9pbml0IG1ldGhvZCBmb3IgalF1ZXJ5IEJyaWRnZXQuICM3NjhcbnByb3RvLl9pbml0ID0gZnVuY3Rpb24oKSB7fTtcblxubGV0IHsgalF1ZXJ5QnJpZGdldCB9ID0gd2luZG93O1xuaWYgKCBqUXVlcnkgJiYgalF1ZXJ5QnJpZGdldCApIHtcbiAgalF1ZXJ5QnJpZGdldCggJ2luZmluaXRlU2Nyb2xsJywgSW5maW5pdGVTY3JvbGwsIGpRdWVyeSApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIGhpc3RvcnlcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIGhpc3Rvcnk6ICdyZXBsYWNlJyxcbiAgLy8gaGlzdG9yeVRpdGxlOiBmYWxzZSxcbn0gKTtcblxubGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbi8vIC0tLS0tIGNyZWF0ZS9kZXN0cm95IC0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5oaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5oaXN0b3J5ICkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGZvciBzYW1lIG9yaWdpblxuICBsaW5rLmhyZWYgPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICAvLyBNUyBFZGdlIGRvZXMgbm90IGhhdmUgb3JpZ2luIG9uIGxpbmtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTIyMzY0OTMvXG4gIGxldCBsaW5rT3JpZ2luID0gbGluay5vcmlnaW4gfHwgbGluay5wcm90b2NvbCArICcvLycgKyBsaW5rLmhvc3Q7XG4gIGxldCBpc1NhbWVPcmlnaW4gPSBsaW5rT3JpZ2luID09IGxvY2F0aW9uLm9yaWdpbjtcbiAgaWYgKCAhaXNTYW1lT3JpZ2luICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdbSW5maW5pdGVTY3JvbGxdIGNhbm5vdCBzZXQgaGlzdG9yeSB3aXRoIGRpZmZlcmVudCBvcmlnaW46ICcgK1xuICAgICAgYCR7bGluay5vcmlnaW59IG9uICR7bG9jYXRpb24ub3JpZ2lufSAuIEhpc3RvcnkgYmVoYXZpb3IgZGlzYWJsZWQuYCApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHR3byB3YXlzIHRvIGhhbmRsZSBjaGFuZ2luZyBoaXN0b3J5XG4gIGlmICggdGhpcy5vcHRpb25zLmFwcGVuZCApIHtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlBcHBlbmQoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlQYWdlTG9hZCgpO1xuICB9XG59O1xuXG5wcm90by5jcmVhdGVIaXN0b3J5QXBwZW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgLy8gYXJyYXkgb2Ygc2Nyb2xsIHBvc2l0aW9ucyBvZiBhcHBlbmRlZCBwYWdlc1xuICB0aGlzLnNjcm9sbFBhZ2VzID0gW1xuICAgIC8vIGZpcnN0IHBhZ2VcbiAgICB7XG4gICAgICB0b3A6IDAsXG4gICAgICBwYXRoOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLFxuICAgIH0sXG4gIF07XG4gIHRoaXMuc2Nyb2xsUGFnZSA9IHRoaXMuc2Nyb2xsUGFnZXNbMF07XG4gIC8vIGV2ZW50c1xuICB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyID0gdGhpcy5vblNjcm9sbEhpc3RvcnkuYmluZCggdGhpcyApO1xuICB0aGlzLnVubG9hZEhhbmRsZXIgPSB0aGlzLm9uVW5sb2FkLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5zY3JvbGxlci5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciApO1xuICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5vbkFwcGVuZEhpc3RvcnkgKTtcbiAgdGhpcy5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyggdHJ1ZSApO1xufTtcblxucHJvdG8uYmluZEhpc3RvcnlBcHBlbmRFdmVudHMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICBsZXQgYWRkUmVtb3ZlID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICB0aGlzLnNjcm9sbGVyWyBhZGRSZW1vdmUgXSggJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgKTtcbiAgd2luZG93WyBhZGRSZW1vdmUgXSggJ3VubG9hZCcsIHRoaXMudW5sb2FkSGFuZGxlciApO1xufTtcblxucHJvdG8uY3JlYXRlSGlzdG9yeVBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdsb2FkJywgdGhpcy5vblBhZ2VMb2FkSGlzdG9yeSApO1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5oaXN0b3J5ID1cbnByb3RvLmRlc3Ryb3lIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBpc0hpc3RvcnlBcHBlbmQgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeSAmJiB0aGlzLm9wdGlvbnMuYXBwZW5kO1xuICBpZiAoIGlzSGlzdG9yeUFwcGVuZCApIHtcbiAgICB0aGlzLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzKCBmYWxzZSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBhcHBlbmQgaGlzdG9yeSAtLS0tLSAvL1xuXG5wcm90by5vbkFwcGVuZEhpc3RvcnkgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkge1xuICAvLyBkbyBub3QgcHJvY2VlZCBpZiBubyBpdGVtcy4gIzc3OVxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXG4gIGxldCBmaXJzdEl0ZW0gPSBpdGVtc1swXTtcbiAgbGV0IGVsZW1TY3JvbGxZID0gdGhpcy5nZXRFbGVtZW50U2Nyb2xsWSggZmlyc3RJdGVtICk7XG4gIC8vIHJlc29sdmUgcGF0aFxuICBsaW5rLmhyZWYgPSBwYXRoO1xuICAvLyBhZGQgcGFnZSBkYXRhIHRvIGhhc2hcbiAgdGhpcy5zY3JvbGxQYWdlcy5wdXNoKHtcbiAgICB0b3A6IGVsZW1TY3JvbGxZLFxuICAgIHBhdGg6IGxpbmsuaHJlZixcbiAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0RWxlbWVudFNjcm9sbFkgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICByZXR1cm4gZWxlbS5vZmZzZXRUb3AgLSB0aGlzLnRvcDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG4gIH1cbn07XG5cbnByb3RvLm9uU2Nyb2xsSGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjeWNsZSB0aHJvdWdoIHBvc2l0aW9ucywgZmluZCBiaWdnZXN0IHdpdGhvdXQgZ29pbmcgb3ZlclxuICBsZXQgc2Nyb2xsUGFnZSA9IHRoaXMuZ2V0Q2xvc2VzdFNjcm9sbFBhZ2UoKTtcbiAgLy8gc2V0IGhpc3RvcnkgaWYgY2hhbmdlZFxuICBpZiAoIHNjcm9sbFBhZ2UgIT0gdGhpcy5zY3JvbGxQYWdlICkge1xuICAgIHRoaXMuc2Nyb2xsUGFnZSA9IHNjcm9sbFBhZ2U7XG4gICAgdGhpcy5zZXRIaXN0b3J5KCBzY3JvbGxQYWdlLnRpdGxlLCBzY3JvbGxQYWdlLnBhdGggKTtcbiAgfVxufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIEluZmluaXRlU2Nyb2xsLCAnb25TY3JvbGxIaXN0b3J5JywgMTUwICk7XG5cbnByb3RvLmdldENsb3Nlc3RTY3JvbGxQYWdlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzY3JvbGxWaWV3WTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICBzY3JvbGxWaWV3WSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQgLyAyO1xuICB9IGVsc2Uge1xuICAgIHNjcm9sbFZpZXdZID0gd2luZG93LnNjcm9sbFkgKyB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gIH1cblxuICBsZXQgc2Nyb2xsUGFnZTtcbiAgZm9yICggbGV0IHBhZ2Ugb2YgdGhpcy5zY3JvbGxQYWdlcyApIHtcbiAgICBpZiAoIHBhZ2UudG9wID49IHNjcm9sbFZpZXdZICkgYnJlYWs7XG5cbiAgICBzY3JvbGxQYWdlID0gcGFnZTtcbiAgfVxuICByZXR1cm4gc2Nyb2xsUGFnZTtcbn07XG5cbnByb3RvLnNldEhpc3RvcnkgPSBmdW5jdGlvbiggdGl0bGUsIHBhdGggKSB7XG4gIGxldCBvcHRIaXN0b3J5ID0gdGhpcy5vcHRpb25zLmhpc3Rvcnk7XG4gIGxldCBoaXN0b3J5TWV0aG9kID0gb3B0SGlzdG9yeSAmJiBoaXN0b3J5WyBvcHRIaXN0b3J5ICsgJ1N0YXRlJyBdO1xuICBpZiAoICFoaXN0b3J5TWV0aG9kICkgcmV0dXJuO1xuXG4gIGhpc3RvcnlbIG9wdEhpc3RvcnkgKyAnU3RhdGUnIF0oIG51bGwsIHRpdGxlLCBwYXRoICk7XG4gIGlmICggdGhpcy5vcHRpb25zLmhpc3RvcnlUaXRsZSApIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2hpc3RvcnknLCBudWxsLCBbIHRpdGxlLCBwYXRoIF0gKTtcbn07XG5cbi8vIHNjcm9sbCB0byB0b3AgdG8gcHJldmVudCBpbml0aWFsIHNjcm9sbC1yZXNldCBhZnRlciBwYWdlIHJlZnJlc2hcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYzMzkxNS8xODIxODNcbnByb3RvLm9uVW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zY3JvbGxQYWdlLnRvcCA9PT0gMCApIHJldHVybjtcblxuICAvLyBjYWxjdWxhdGUgd2hlcmUgc2Nyb2xsIHBvc2l0aW9uIHdvdWxkIGJlIG9uIHJlZnJlc2hcbiAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSAtIHRoaXMuc2Nyb2xsUGFnZS50b3AgKyB0aGlzLnRvcDtcbiAgLy8gZGlzYWJsZSBzY3JvbGwgZXZlbnQgYmVmb3JlIHNldHRpbmcgc2Nyb2xsICM2NzlcbiAgdGhpcy5kZXN0cm95SGlzdG9yeSgpO1xuICBzY3JvbGxUbyggMCwgc2Nyb2xsWSApO1xufTtcblxuLy8gLS0tLS0gbG9hZCBoaXN0b3J5IC0tLS0tIC8vXG5cbi8vIHVwZGF0ZSBVUkxcbnByb3RvLm9uUGFnZUxvYWRIaXN0b3J5ID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoICkge1xuICB0aGlzLnNldEhpc3RvcnkoIHJlc3BvbnNlLnRpdGxlLCBwYXRoICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8qIVxuICogSW5maW5pdGUgU2Nyb2xsIHY0LjAuMVxuICogQXV0b21hdGljYWxseSBhZGQgbmV4dCBwYWdlXG4gKlxuICogTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxuICogb3IgSW5maW5pdGUgU2Nyb2xsIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwczovL2luZmluaXRlLXNjcm9sbC5jb21cbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9wYWdlLWxvYWQnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9zY3JvbGwtd2F0Y2gnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9oaXN0b3J5JyksXG4gICAgICAgIHJlcXVpcmUoJy4vYnV0dG9uJyksXG4gICAgICAgIHJlcXVpcmUoJy4vc3RhdHVzJyksXG4gICAgKTtcbiAgfVxuXG59ICkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggSW5maW5pdGVTY3JvbGwgKSB7XG4gIHJldHVybiBJbmZpbml0ZVNjcm9sbDtcbn0gKTtcbiIsIi8vIHBhZ2UtbG9hZFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICAvLyBhcHBlbmQ6IGZhbHNlLFxuICBsb2FkT25TY3JvbGw6IHRydWUsXG4gIGNoZWNrTGFzdFBhZ2U6IHRydWUsXG4gIHJlc3BvbnNlQm9keTogJ3RleHQnLFxuICBkb21QYXJzZVJlc3BvbnNlOiB0cnVlLFxuICAvLyBwcmVmaWxsOiBmYWxzZSxcbiAgLy8gb3V0bGF5ZXI6IG51bGwsXG59ICk7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5wYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNhbkxvYWQgPSB0cnVlO1xuICB0aGlzLm9uKCAnc2Nyb2xsVGhyZXNob2xkJywgdGhpcy5vblNjcm9sbFRocmVzaG9sZExvYWQgKTtcbiAgdGhpcy5vbiggJ2xvYWQnLCB0aGlzLmNoZWNrTGFzdFBhZ2UgKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMub3V0bGF5ZXIgKSB7XG4gICAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMub25BcHBlbmRPdXRsYXllciApO1xuICB9XG59O1xuXG5wcm90by5vblNjcm9sbFRocmVzaG9sZExvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMubG9hZE9uU2Nyb2xsICkgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcbn07XG5cbmxldCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbnByb3RvLmxvYWROZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNMb2FkaW5nIHx8ICF0aGlzLmNhbkxvYWQgKSByZXR1cm47XG5cbiAgbGV0IHsgcmVzcG9uc2VCb2R5LCBkb21QYXJzZVJlc3BvbnNlLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcbiAgbGV0IHBhdGggPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIGlmICggdHlwZW9mIGZldGNoT3B0aW9ucyA9PSAnZnVuY3Rpb24nICkgZmV0Y2hPcHRpb25zID0gZmV0Y2hPcHRpb25zKCk7XG5cbiAgbGV0IGZldGNoUHJvbWlzZSA9IGZldGNoKCBwYXRoLCBmZXRjaE9wdGlvbnMgKVxuICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgaWYgKCAhcmVzcG9uc2Uub2sgKSB7XG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvciggcmVzcG9uc2Uuc3RhdHVzVGV4dCApO1xuICAgICAgICB0aGlzLm9uUGFnZUVycm9yKCBlcnJvciwgcGF0aCwgcmVzcG9uc2UgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2UgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlWyByZXNwb25zZUJvZHkgXSgpLnRoZW4oICggYm9keSApID0+IHtcbiAgICAgICAgbGV0IGNhbkRvbVBhcnNlID0gcmVzcG9uc2VCb2R5ID09ICd0ZXh0JyAmJiBkb21QYXJzZVJlc3BvbnNlO1xuICAgICAgICBpZiAoIGNhbkRvbVBhcnNlICkge1xuICAgICAgICAgIGJvZHkgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKCBib2R5LCAndGV4dC9odG1sJyApO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDIwNCApIHtcbiAgICAgICAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgICAgICAgIHJldHVybiB7IGJvZHksIHJlc3BvbnNlIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25QYWdlTG9hZCggYm9keSwgcGF0aCwgcmVzcG9uc2UgKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0gKVxuICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcbiAgICAgIHRoaXMub25QYWdlRXJyb3IoIGVycm9yLCBwYXRoICk7XG4gICAgfSApO1xuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3JlcXVlc3QnLCBudWxsLCBbIHBhdGgsIGZldGNoUHJvbWlzZSBdICk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZTtcbn07XG5cbnByb3RvLm9uUGFnZUxvYWQgPSBmdW5jdGlvbiggYm9keSwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIC8vIGRvbmUgbG9hZGluZyBpZiBub3QgYXBwZW5kaW5nXG4gIGlmICggIXRoaXMub3B0aW9ucy5hcHBlbmQgKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBhZ2VJbmRleCsrO1xuICB0aGlzLmxvYWRDb3VudCsrO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdsb2FkJywgbnVsbCwgWyBib2R5LCBwYXRoLCByZXNwb25zZSBdICk7XG4gIHJldHVybiB0aGlzLmFwcGVuZE5leHRQYWdlKCBib2R5LCBwYXRoLCByZXNwb25zZSApO1xufTtcblxucHJvdG8uYXBwZW5kTmV4dFBhZ2UgPSBmdW5jdGlvbiggYm9keSwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIGxldCB7IGFwcGVuZCwgcmVzcG9uc2VCb2R5LCBkb21QYXJzZVJlc3BvbnNlIH0gPSB0aGlzLm9wdGlvbnM7XG4gIC8vIGRvIG5vdCBhcHBlbmQganNvblxuICBsZXQgaXNEb2N1bWVudCA9IHJlc3BvbnNlQm9keSA9PSAndGV4dCcgJiYgZG9tUGFyc2VSZXNwb25zZTtcbiAgaWYgKCAhaXNEb2N1bWVudCB8fCAhYXBwZW5kICkgcmV0dXJuIHsgYm9keSwgcmVzcG9uc2UgfTtcblxuICBsZXQgaXRlbXMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoIGFwcGVuZCApO1xuICBsZXQgcHJvbWlzZVZhbHVlID0geyBib2R5LCByZXNwb25zZSwgaXRlbXMgfTtcbiAgLy8gbGFzdCBwYWdlIGhpdCBpZiBubyBpdGVtcy4gIzg0MFxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgcmV0dXJuIHByb21pc2VWYWx1ZTtcbiAgfVxuXG4gIGxldCBmcmFnbWVudCA9IGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICk7XG4gIGxldCBhcHBlbmRSZWFkeSA9ICgpID0+IHtcbiAgICB0aGlzLmFwcGVuZEl0ZW1zKCBpdGVtcywgZnJhZ21lbnQgKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2FwcGVuZCcsIG51bGwsIFsgYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlIF0gKTtcbiAgICByZXR1cm4gcHJvbWlzZVZhbHVlO1xuICB9O1xuXG4gIC8vIFRPRE8gYWRkIGhvb2sgZm9yIG9wdGlvbiB0byB0cmlnZ2VyIGFwcGVuZFJlYWR5XG4gIGlmICggdGhpcy5vcHRpb25zLm91dGxheWVyICkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZE91dGxheWVySXRlbXMoIGZyYWdtZW50LCBhcHBlbmRSZWFkeSApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcHBlbmRSZWFkeSgpO1xuICB9XG59O1xuXG5wcm90by5hcHBlbmRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgZnJhZ21lbnQgKSB7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSByZXR1cm47XG5cbiAgLy8gZ2V0IGZyYWdtZW50IGlmIG5vdCBwcm92aWRlZFxuICBmcmFnbWVudCA9IGZyYWdtZW50IHx8IGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICk7XG4gIHJlZnJlc2hTY3JpcHRzKCBmcmFnbWVudCApO1xuICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG59O1xuXG5mdW5jdGlvbiBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApIHtcbiAgLy8gYWRkIGl0ZW1zIHRvIGZyYWdtZW50XG4gIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgaWYgKCBpdGVtcyApIGZyYWdtZW50LmFwcGVuZCggLi4uaXRlbXMgKTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyByZXBsYWNlIDxzY3JpcHQ+cyB3aXRoIGNvcGllcyBzbyB0aGV5IGxvYWRcbi8vIDxzY3JpcHQ+cyBhZGRlZCBieSBJbmZpbml0ZVNjcm9sbCB3aWxsIG5vdCBsb2FkXG4vLyBzaW1pbGFyIHRvIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYxMDk5NVxuZnVuY3Rpb24gcmVmcmVzaFNjcmlwdHMoIGZyYWdtZW50ICkge1xuICBsZXQgc2NyaXB0cyA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICBmb3IgKCBsZXQgc2NyaXB0IG9mIHNjcmlwdHMgKSB7XG4gICAgbGV0IGZyZXNoU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgLy8gY29weSBhdHRyaWJ1dGVzXG4gICAgbGV0IGF0dHJzID0gc2NyaXB0LmF0dHJpYnV0ZXM7XG4gICAgZm9yICggbGV0IGF0dHIgb2YgYXR0cnMgKSB7XG4gICAgICBmcmVzaFNjcmlwdC5zZXRBdHRyaWJ1dGUoIGF0dHIubmFtZSwgYXR0ci52YWx1ZSApO1xuICAgIH1cbiAgICAvLyBjb3B5IGlubmVyIHNjcmlwdCBjb2RlLiAjNzE4LCAjNzgyXG4gICAgZnJlc2hTY3JpcHQuaW5uZXJIVE1MID0gc2NyaXB0LmlubmVySFRNTDtcbiAgICBzY3JpcHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoIGZyZXNoU2NyaXB0LCBzY3JpcHQgKTtcbiAgfVxufVxuXG4vLyAtLS0tLSBvdXRsYXllciAtLS0tLSAvL1xuXG5wcm90by5hcHBlbmRPdXRsYXllckl0ZW1zID0gZnVuY3Rpb24oIGZyYWdtZW50LCBhcHBlbmRSZWFkeSApIHtcbiAgbGV0IGltYWdlc0xvYWRlZCA9IEluZmluaXRlU2Nyb2xsLmltYWdlc0xvYWRlZCB8fCB3aW5kb3cuaW1hZ2VzTG9hZGVkO1xuICBpZiAoICFpbWFnZXNMb2FkZWQgKSB7XG4gICAgY29uc29sZS5lcnJvcignW0luZmluaXRlU2Nyb2xsXSBpbWFnZXNMb2FkZWQgcmVxdWlyZWQgZm9yIG91dGxheWVyIG9wdGlvbicpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFwcGVuZCBvbmNlIGltYWdlcyBsb2FkZWRcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiggcmVzb2x2ZSApIHtcbiAgICBpbWFnZXNMb2FkZWQoIGZyYWdtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBib2R5UmVzcG9uc2UgPSBhcHBlbmRSZWFkeSgpO1xuICAgICAgcmVzb2x2ZSggYm9keVJlc3BvbnNlICk7XG4gICAgfSApO1xuICB9ICk7XG59O1xuXG5wcm90by5vbkFwcGVuZE91dGxheWVyID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApIHtcbiAgdGhpcy5vcHRpb25zLm91dGxheWVyLmFwcGVuZGVkKCBpdGVtcyApO1xufTtcblxuLy8gLS0tLS0gY2hlY2tMYXN0UGFnZSAtLS0tLSAvL1xuXG4vLyBjaGVjayByZXNwb25zZSBmb3IgbmV4dCBlbGVtZW50XG5wcm90by5jaGVja0xhc3RQYWdlID0gZnVuY3Rpb24oIGJvZHksIHBhdGggKSB7XG4gIGxldCB7IGNoZWNrTGFzdFBhZ2UsIHBhdGg6IHBhdGhPcHQgfSA9IHRoaXMub3B0aW9ucztcbiAgaWYgKCAhY2hlY2tMYXN0UGFnZSApIHJldHVybjtcblxuICAvLyBpZiBwYXRoIGlzIGZ1bmN0aW9uLCBjaGVjayBpZiBuZXh0IHBhdGggaXMgdHJ1dGh5XG4gIGlmICggdHlwZW9mIHBhdGhPcHQgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBsZXQgbmV4dFBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICBpZiAoICFuZXh0UGF0aCApIHtcbiAgICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIC8vIGdldCBzZWxlY3RvciBmcm9tIGNoZWNrTGFzdFBhZ2Ugb3IgcGF0aCBvcHRpb25cbiAgbGV0IHNlbGVjdG9yO1xuICBpZiAoIHR5cGVvZiBjaGVja0xhc3RQYWdlID09ICdzdHJpbmcnICkge1xuICAgIHNlbGVjdG9yID0gY2hlY2tMYXN0UGFnZTtcbiAgfSBlbHNlIGlmICggdGhpcy5pc1BhdGhTZWxlY3RvciApIHtcbiAgICAvLyBwYXRoIG9wdGlvbiBpcyBzZWxlY3RvciBzdHJpbmdcbiAgICBzZWxlY3RvciA9IHBhdGhPcHQ7XG4gIH1cbiAgLy8gY2hlY2sgbGFzdCBwYWdlIGZvciBzZWxlY3RvclxuICAvLyBiYWlsIGlmIG5vIHNlbGVjdG9yIG9yIG5vdCBkb2N1bWVudCByZXNwb25zZVxuICBpZiAoICFzZWxlY3RvciB8fCAhYm9keS5xdWVyeVNlbGVjdG9yICkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGlmIHJlc3BvbnNlIGhhcyBzZWxlY3RvclxuICBsZXQgbmV4dEVsZW0gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICk7XG4gIGlmICggIW5leHRFbGVtICkgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbn07XG5cbnByb3RvLmxhc3RQYWdlUmVhY2hlZCA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoICkge1xuICB0aGlzLmNhbkxvYWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnbGFzdCcsIG51bGwsIFsgYm9keSwgcGF0aCBdICk7XG59O1xuXG4vLyAtLS0tLSBlcnJvciAtLS0tLSAvL1xuXG5wcm90by5vblBhZ2VFcnJvciA9IGZ1bmN0aW9uKCBlcnJvciwgcGF0aCwgcmVzcG9uc2UgKSB7XG4gIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIHRoaXMuY2FuTG9hZCA9IGZhbHNlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdlcnJvcicsIG51bGwsIFsgZXJyb3IsIHBhdGgsIHJlc3BvbnNlIF0gKTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJlZmlsbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUucHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucHJlZmlsbCApIHJldHVybjtcblxuICBsZXQgYXBwZW5kID0gdGhpcy5vcHRpb25zLmFwcGVuZDtcbiAgaWYgKCAhYXBwZW5kICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYGFwcGVuZCBvcHRpb24gcmVxdWlyZWQgZm9yIHByZWZpbGwuIFNldCBhcyA6JHthcHBlbmR9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgdGhpcy5pc1ByZWZpbGxpbmcgPSB0cnVlO1xuICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5wcmVmaWxsICk7XG4gIHRoaXMub25jZSggJ2Vycm9yJywgdGhpcy5zdG9wUHJlZmlsbCApO1xuICB0aGlzLm9uY2UoICdsYXN0JywgdGhpcy5zdG9wUHJlZmlsbCApO1xuICB0aGlzLnByZWZpbGwoKTtcbn07XG5cbnByb3RvLnByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGRpc3RhbmNlID0gdGhpcy5nZXRQcmVmaWxsRGlzdGFuY2UoKTtcbiAgdGhpcy5pc1ByZWZpbGxpbmcgPSBkaXN0YW5jZSA+PSAwO1xuICBpZiAoIHRoaXMuaXNQcmVmaWxsaW5nICkge1xuICAgIHRoaXMubG9nKCdwcmVmaWxsJyk7XG4gICAgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0b3BQcmVmaWxsKCk7XG4gIH1cbn07XG5cbnByb3RvLmdldFByZWZpbGxEaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBlbGVtZW50IHNjcm9sbFxuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodCAtIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG4gIC8vIHdpbmRvd1xuICByZXR1cm4gdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufTtcblxucHJvdG8uc3RvcFByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5sb2coJ3N0b3BQcmVmaWxsJyk7XG4gIHRoaXMub2ZmKCAnYXBwZW5kJywgdGhpcy5wcmVmaWxsICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIHNjcm9sbC13YXRjaFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICBzY3JvbGxUaHJlc2hvbGQ6IDQwMCxcbiAgLy8gZWxlbWVudFNjcm9sbDogbnVsbCxcbn0gKTtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIC8vIGV2ZW50c1xuICB0aGlzLnBhZ2VTY3JvbGxIYW5kbGVyID0gdGhpcy5vblBhZ2VTY3JvbGwuYmluZCggdGhpcyApO1xuICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB0aGlzLm9uUmVzaXplLmJpbmQoIHRoaXMgKTtcblxuICBsZXQgc2Nyb2xsVGhyZXNob2xkID0gdGhpcy5vcHRpb25zLnNjcm9sbFRocmVzaG9sZDtcbiAgbGV0IGlzRW5hYmxlID0gc2Nyb2xsVGhyZXNob2xkIHx8IHNjcm9sbFRocmVzaG9sZCA9PT0gMDtcbiAgaWYgKCBpc0VuYWJsZSApIHRoaXMuZW5hYmxlU2Nyb2xsV2F0Y2goKTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuc2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlU2Nyb2xsV2F0Y2goKTtcbn07XG5cbnByb3RvLmVuYWJsZVNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc1Njcm9sbFdhdGNoaW5nICkgcmV0dXJuO1xuXG4gIHRoaXMuaXNTY3JvbGxXYXRjaGluZyA9IHRydWU7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG4gIHRoaXMudXBkYXRlU2Nyb2xsZXIoKTtcbiAgLy8gVE9ETyBkaXNhYmxlIGFmdGVyIGVycm9yP1xuICB0aGlzLm9uKCAnbGFzdCcsIHRoaXMuZGlzYWJsZVNjcm9sbFdhdGNoICk7XG4gIHRoaXMuYmluZFNjcm9sbFdhdGNoRXZlbnRzKCB0cnVlICk7XG59O1xuXG5wcm90by5kaXNhYmxlU2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc1Njcm9sbFdhdGNoaW5nICkgcmV0dXJuO1xuXG4gIHRoaXMuYmluZFNjcm9sbFdhdGNoRXZlbnRzKCBmYWxzZSApO1xuICBkZWxldGUgdGhpcy5pc1Njcm9sbFdhdGNoaW5nO1xufTtcblxucHJvdG8uYmluZFNjcm9sbFdhdGNoRXZlbnRzID0gZnVuY3Rpb24oIGlzQmluZCApIHtcbiAgbGV0IGFkZFJlbW92ZSA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdGhpcy5zY3JvbGxlclsgYWRkUmVtb3ZlIF0oICdzY3JvbGwnLCB0aGlzLnBhZ2VTY3JvbGxIYW5kbGVyICk7XG4gIHdpbmRvd1sgYWRkUmVtb3ZlIF0oICdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIgKTtcbn07XG5cbnByb3RvLm9uUGFnZVNjcm9sbCA9IEluZmluaXRlU2Nyb2xsLnRocm90dGxlKCBmdW5jdGlvbigpIHtcbiAgbGV0IGRpc3RhbmNlID0gdGhpcy5nZXRCb3R0b21EaXN0YW5jZSgpO1xuICBpZiAoIGRpc3RhbmNlIDw9IHRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQgKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzY3JvbGxUaHJlc2hvbGQnKTtcbiAgfVxufSApO1xuXG5wcm90by5nZXRCb3R0b21EaXN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYm90dG9tLCBzY3JvbGxZO1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIGJvdHRvbSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIHNjcm9sbFkgPSB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgfVxuICByZXR1cm4gYm90dG9tIC0gc2Nyb2xsWTtcbn07XG5cbnByb3RvLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudXBkYXRlTWVhc3VyZW1lbnRzKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggSW5maW5pdGVTY3JvbGwsICdvblJlc2l6ZScsIDE1MCApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIHN0YXR1c1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuLy8gSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMuc3RhdHVzID0gbnVsbDtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHVzRWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLnN0YXR1cyApO1xuICBpZiAoICFzdGF0dXNFbGVtICkgcmV0dXJuO1xuXG4gIC8vIGVsZW1lbnRzXG4gIHRoaXMuc3RhdHVzRWxlbWVudCA9IHN0YXR1c0VsZW07XG4gIHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50cyA9IHtcbiAgICByZXF1ZXN0OiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtcmVxdWVzdCcpLFxuICAgIGVycm9yOiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtZXJyb3InKSxcbiAgICBsYXN0OiBzdGF0dXNFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZpbml0ZS1zY3JvbGwtbGFzdCcpLFxuICB9O1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ3JlcXVlc3QnLCB0aGlzLnNob3dSZXF1ZXN0U3RhdHVzICk7XG4gIHRoaXMub24oICdlcnJvcicsIHRoaXMuc2hvd0Vycm9yU3RhdHVzICk7XG4gIHRoaXMub24oICdsYXN0JywgdGhpcy5zaG93TGFzdFN0YXR1cyApO1xuICB0aGlzLmJpbmRIaWRlU3RhdHVzKCdvbicpO1xufTtcblxucHJvdG8uYmluZEhpZGVTdGF0dXMgPSBmdW5jdGlvbiggYmluZE1ldGhvZCApIHtcbiAgbGV0IGhpZGVFdmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmQgPyAnYXBwZW5kJyA6ICdsb2FkJztcbiAgdGhpc1sgYmluZE1ldGhvZCBdKCBoaWRlRXZlbnQsIHRoaXMuaGlkZUFsbFN0YXR1cyApO1xufTtcblxucHJvdG8uc2hvd1JlcXVlc3RTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdyZXF1ZXN0Jyk7XG59O1xuXG5wcm90by5zaG93RXJyb3JTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdlcnJvcicpO1xufTtcblxucHJvdG8uc2hvd0xhc3RTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaG93U3RhdHVzKCdsYXN0Jyk7XG4gIC8vIHByZXZlbnQgbGFzdCB0aGVuIGFwcGVuZCBldmVudCByYWNlIGNvbmRpdGlvbiBmcm9tIHNob3dpbmcgbGFzdCBzdGF0dXMgIzcwNlxuICB0aGlzLmJpbmRIaWRlU3RhdHVzKCdvZmYnKTtcbn07XG5cbnByb3RvLnNob3dTdGF0dXMgPSBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICBzaG93KCB0aGlzLnN0YXR1c0VsZW1lbnQgKTtcbiAgdGhpcy5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cygpO1xuICBsZXQgZXZlbnRFbGVtID0gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzWyBldmVudE5hbWUgXTtcbiAgc2hvdyggZXZlbnRFbGVtICk7XG59O1xuXG5wcm90by5oaWRlQWxsU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIGhpZGUoIHRoaXMuc3RhdHVzRWxlbWVudCApO1xuICB0aGlzLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzKCk7XG59O1xuXG5wcm90by5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKCBsZXQgdHlwZSBpbiB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHMgKSB7XG4gICAgbGV0IGV2ZW50RWxlbSA9IHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50c1sgdHlwZSBdO1xuICAgIGhpZGUoIGV2ZW50RWxlbSApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gaGlkZSggZWxlbSApIHtcbiAgc2V0RGlzcGxheSggZWxlbSwgJ25vbmUnICk7XG59XG5cbmZ1bmN0aW9uIHNob3coIGVsZW0gKSB7XG4gIHNldERpc3BsYXkoIGVsZW0sICdibG9jaycgKTtcbn1cblxuZnVuY3Rpb24gc2V0RGlzcGxheSggZWxlbSwgdmFsdWUgKSB7XG4gIGlmICggZWxlbSApIHtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8qKlxuICogRXZFbWl0dGVyIHYyLjAuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxubGV0IHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHJldHVybiB0aGlzO1xuXG4gIC8vIHNldCBldmVudHMgaGFzaFxuICBsZXQgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIGxldCBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoICFsaXN0ZW5lcnMuaW5jbHVkZXMoIGxpc3RlbmVyICkgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHJldHVybiB0aGlzO1xuXG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICBsZXQgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHJldHVybiB0aGlzO1xuXG4gIGxldCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCAwICk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIGxldCBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCBsZXQgbGlzdGVuZXIgb2YgbGlzdGVuZXJzICkge1xuICAgIGxldCBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSApICk7XG4iLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYzLjAuMFxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIGdsb2JhbCApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZ2xvYmFsLmZpenp5VUlVdGlscyA9IGZhY3RvcnkoIGdsb2JhbCApO1xuICB9XG5cbn0oIHRoaXMsIGZ1bmN0aW9uIGZhY3RvcnkoIGdsb2JhbCApIHtcblxubGV0IHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbiggYSwgYiApO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG51dGlscy5tYWtlQXJyYXkgPSBmdW5jdGlvbiggb2JqICkge1xuICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHJldHVybiBvYmo7XG5cbiAgLy8gcmV0dXJuIGVtcHR5IGFycmF5IGlmIHVuZGVmaW5lZCBvciBudWxsLiAjNlxuICBpZiAoIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCApIHJldHVybiBbXTtcblxuICBsZXQgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gIGlmICggaXNBcnJheUxpa2UgKSByZXR1cm4gWyAuLi5vYmogXTtcblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIGxldCBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHJldHVybiBlbGVtO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGxldCBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG5cbiAgcmV0dXJuIGVsZW1zXG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgLmZpbHRlciggKCBlbGVtICkgPT4gZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IClcbiAgICAucmVkdWNlKCAoIGZmRWxlbXMsIGVsZW0gKSA9PiB7XG4gICAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgICByZXR1cm4gZmZFbGVtcztcbiAgICAgIH1cbiAgICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICAgIGxldCBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICAgIGZmRWxlbXMgPSBmZkVsZW1zLmNvbmNhdCggLi4uY2hpbGRFbGVtcyApO1xuICAgICAgcmV0dXJuIGZmRWxlbXM7XG4gICAgfSwgW10gKTtcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMTAwO1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgbGV0IG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgbGV0IHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQoIHRoaXNbIHRpbWVvdXROYW1lIF0gKTtcblxuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBtZXRob2QuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggb25Eb2NSZWFkeSApIHtcbiAgbGV0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggb25Eb2NSZWFkeSApO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgb25Eb2NSZWFkeSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vYml0Lmx5LzNvWUx1c2NcbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSApLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5sZXQgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuXG4vLyBhbGxvdyB1c2VyIHRvIGluaXRpYWxpemUgY2xhc3NlcyB2aWEgW2RhdGEtbmFtZXNwYWNlXSBvciAuanMtbmFtZXNwYWNlIGNsYXNzXG4vLyBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuLy8gb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uc1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIGxldCBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgbGV0IGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICBsZXQgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGBbJHtkYXRhQXR0cn1dYCApO1xuICAgIGxldCBqUXVlcnkgPSBnbG9iYWwualF1ZXJ5O1xuXG4gICAgWyAuLi5kYXRhQXR0ckVsZW1zIF0uZm9yRWFjaCggKCBlbGVtICkgPT4ge1xuICAgICAgbGV0IGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YUF0dHIgKTtcbiAgICAgIGxldCBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXJyb3IgcGFyc2luZyAke2RhdGFBdHRyfSBvbiAke2VsZW0uY2xhc3NOYW1lfTogJHtlcnJvcn1gICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9ICk7XG5cbiAgfSApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSApICk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlc3BvbnNpdmVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXNwb25zaXZlQXV0b0hlaWdodChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2l2ZUF1dG9IZWlnaHQpO1xuXG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuZWxlbWVudHMgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ydW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLnJ1bigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlc3BvbnNpdmVBdXRvSGVpZ2h0LCBbe1xuICAgIGtleTogJ3JlY2FsYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYWtlR3JvdXBzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZUdyb3VwcyhlbGVtZW50cykge1xuICAgICAgdmFyIGdyb3VwID0gW107XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIH0pO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICB2YXIgaGVpZ2h0ID0gKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudHNbMF0pLnRvcDtcbiAgICAgIGdyb3VwWzBdID0gW107XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICgoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3AgIT09IGhlaWdodCkge1xuICAgICAgICAgIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnQpLnRvcDtcbiAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICBncm91cFtpZHhdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBbaWR4XS5wdXNoKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2F1dG9IZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRvSGVpZ2h0KGdyb3VwKSB7XG4gICAgICB2YXIgaGVpZ2h0cyA9IGdyb3VwLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgIHZhciBib3hTaXppbmcgPSBjb21wdXRlZFN0eWxlLmJveFNpemluZztcbiAgICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodCAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wKSAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShoZWlnaHRzKSk7XG4gICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3J1bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuXG4gICAgICB2YXIgZ3JvdXBzID0gdGhpcy5tYWtlR3JvdXBzKGVsZW1lbnRzKTtcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICBfdGhpczIuYXV0b0hlaWdodChncm91cCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVzcG9uc2l2ZUF1dG9IZWlnaHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbn07XG5cbnZhciBnZXRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn07XG5cbnZhciBnZXRPZmZzZXQgPSBleHBvcnRzLmdldE9mZnNldCA9IGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGxUb3AoKSxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBnZXRTY3JvbGxMZWZ0KClcbiAgfTtcbn07Il19
