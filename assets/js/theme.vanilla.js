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
          (0, _utils.slideUp)(openMenuItem.nextElementSibling);
        });
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
        scrollThreshold: 750,
        prefill: true
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
    if (_constants.DOM.body.classList.contains("no-lightbox")) {
      return;
    }

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
        if (!link.getAttribute("data-elementor-open-lightbox") && !link.classList.contains("yith_magnifier_thumbnail") && !link.classList.contains("gg-link")) {
          link.querySelector("img").addEventListener("click", _this.openLightbox);
        }
      });
    }
  });

  _defineProperty(this, "openLightbox", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var pswpElement = document.querySelectorAll(".pswp")[0];
    var link = event.target.parentNode;
    var src = link.getAttribute("href");
    var width = !!link.dataset.width ? Number.parseInt(link.dataset.width) : 1024;
    var height = !!link.dataset.height ? Number.parseInt(link.dataset.height) : 768;
    var imageLightbox = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, [{
      src: src,
      w: width,
      h: height
    }], {
      bgOpacity: 0.85,
      showHideOpacity: true
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

        var src = linkEl.getAttribute("href");
        var width = !!linkEl.dataset.width ? Number.parseInt(linkEl.dataset.width) : 1024;
        var height = !!linkEl.dataset.height ? Number.parseInt(linkEl.dataset.height) : 768;
        size = [width, height]; // create slide object

        item = {
          src: src,
          w: width,
          h: height
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
        openPhotoSwipe(index, clickedGallery, false);
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
      }

      options.bgOpacity = 0.85;
      options.showHideOpacity = true; // Pass data to PhotoSwipe and initialize it

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
      document.addEventListener("DOMContentLoaded", function () {
        _this.owInfiniteScroll = new _owInfiniteScroll["default"]();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3BhZ2UtbG9hZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvc2Nyb2xsLXdhdGNoLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL25vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQU8sSUFBTSxPQUFPLEdBQUcsZUFBaEI7O0FBRUEsSUFBTSxHQUFHLEdBQUc7QUFDZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQURTO0FBRWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBRkE7QUFHZixFQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUhHO0FBSWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FKUztBQUtmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FMRztBQU1mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQU5FO0FBT2YsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUxYO0FBTUosSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkNBQXZCLENBTlQ7QUFP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFyYWxsYXg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtZm9vdGVyXCIpLFxyXG4gICAgfSxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGwtdG9wXCIpLFxyXG4gICAgICAgIGdvVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjZ28tdG9wXCJdJyksXHJcbiAgICAgICAgZ29Ub3BTbGFzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lIGFbaHJlZj1cIi8jZ28tdG9wXCJdJyksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbFdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLXdyYXBcIiksXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIG1hc29ucnlHcmlkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLW1hc29ucnktZ3JpZFwiKSxcclxuICAgIH0sXHJcbiAgICBlZGQ6IHtcclxuICAgICAgICBjYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGQtbWVudS1pY29uXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgdG90YWxQcmljZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkbWVudWNhcnQtZGV0YWlscy50b3RhbFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdNb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgfSxcclxuICAgIHdvbzoge1xyXG4gICAgICAgIHJlc2V0VmFyaWF0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldF92YXJpYXRpb25zXCIpLFxyXG4gICAgICAgIHByb2R1Y3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3RcIiksXHJcbiAgICAgICAgYWxsUHJvZHVjdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHNcIiksXHJcbiAgICAgICAgY2F0ZWdvcmllczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b28tZHJvcGRvd24tY2F0IC5wcm9kdWN0LWNhdGVnb3JpZXNcIiksXHJcbiAgICAgICAgdmVydGljYWxUaHVtYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgdGh1bWJzVmVydGljYWxMYXlvdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgZ3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1ncmlkXCIpLFxyXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtbGlzdFwiKSxcclxuICAgICAgICBwcm9kdWN0VGFiczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtdGFic1wiKSxcclxuICAgICAgICBwcm9kdWN0Q2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLmNhcnRcIiksXHJcbiAgICAgICAgcHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtcmV2aWV3LWxpbmtcIiksXHJcbiAgICAgICAgcXVhbnRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpLFxyXG4gICAgICAgIGNoZWNrb3V0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ud29vY29tbWVyY2UtY2hlY2tvdXRcIiksXHJcbiAgICAgICAgY2hlY2tvdXRMb2dpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9sb2dpblwiKSxcclxuICAgICAgICBjaGVja291dENvdXBvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9jb3Vwb25cIiksXHJcbiAgICAgICAgY2hlY2tvdXRUaW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtY2hlY2tvdXQtdGltZWxpbmVcIiksXHJcbiAgICAgICAgY3VzdG9tZXJCaWxsaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9iaWxsaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgY3VzdG9tZXJTaGlwcGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfc2hpcHBpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBvcmRlclJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9yZXZpZXdcIiksXHJcbiAgICAgICAgb3JkZXJDaGVja291dFBheW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfY2hlY2tvdXRfcGF5bWVudFwiKSxcclxuICAgICAgICBwbGFjZU9yZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpLFxyXG4gICAgICAgIGZvcm1BY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fYWN0aW9uc1wiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWFjY291bnQtbGlua3NcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZUJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9sb2dpblwiKSxcclxuICAgICAgICBxdWFudGl0eUlucHV0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3OiB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTVN0cmluZyA9IHt9O1xyXG4iLCJpbXBvcnQgXCIuL2xpYi9lbGVtZW50XCI7XHJcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi90aGVtZS90aGVtZVwiO1xyXG5cclxuY2xhc3MgT2NlYW5XUCB7XHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4oXCJ1c2Ugc2NyaXB0XCIpO1xyXG5cclxud2luZG93Lm9jZWFud3AgPSBuZXcgT2NlYW5XUCgpO1xyXG5vY2VhbndwLnN0YXJ0KCk7XHJcbiIsIkVsZW1lbnQucHJvdG90eXBlLm9jZWFuUGFyZW50cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gW107XHJcbiAgICB2YXIgZWxlbSA9IHRoaXM7XHJcbiAgICB2YXIgaXNoYXZlc2VsZWN0b3IgPSBzZWxlY3RvciAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHdoaWxlICgoZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudCkgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzaGF2ZXNlbGVjdG9yIHx8IGVsZW0ubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgcGFkZGluZ1RvcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBhZGRpbmdUb3A7XHJcbiAgICBsZXQgcGFkZGluZ0JvdHRvbSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBhZGRpbmdCb3R0b207XHJcbiAgICBsZXQgbWFyZ2luVG9wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWFyZ2luVG9wO1xyXG4gICAgbGV0IG1hcmdpbkJvdHRvbSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1hcmdpbkJvdHRvbTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcInBhZGRpbmdcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9uIC8gMS4yfW1zYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBwYWRkaW5nVG9wO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdCb3R0b207XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b207XHJcbiAgICB9LCAxMCk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbikgOiBzbGlkZVVwKGVsZW1lbnQsIGR1cmF0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCwgZGlzcGxheSwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgY29uc3QgZmFkZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHBhcnNlRmxvYXQoZWxlbWVudC5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgICBvcGFjaXR5ID0gTWF0aC5yb3VuZChvcGFjaXR5ICogMTAwICsgMTApIC8gMTAwO1xyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA8PSAxKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3BhY2l0eSA9PT0gMSAmJiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBkaXNwbGF5LCBjYWxsYmFjayA9IG51bGwpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBjb25zdCBmYWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gcGFyc2VGbG9hdChlbGVtZW50LnN0eWxlLm9wYWNpdHkpO1xyXG4gICAgICAgIG9wYWNpdHkgPSBNYXRoLnJvdW5kKG9wYWNpdHkgKiAxMDAgLSAxMCkgLyAxMDA7XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5IDwgMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPT09IDAgJiYgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc2libGUgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGUpID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSAobykgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcclxuICAgICAgICA6IG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dNYXNvbnJ5IHtcbiAgICBpc290b3A7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00uYmxvZy5tYXNvbnJ5R3JpZHM/LmZvckVhY2goKGJsb2dNYXNvbnJ5R3JpZCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGJsb2dNYXNvbnJ5R3JpZCwgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc290b3AgPSBuZXcgSXNvdG9wZShibG9nTWFzb25yeUdyaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5pc290b3BlLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IG9wdGlvbnMuaXNSVEwgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IFJlc3BvbnNpdmVBdXRvSGVpZ2h0IGZyb20gXCJyZXNwb25zaXZlLWF1dG8taGVpZ2h0XCI7XHJcblxyXG5jbGFzcyBFcXVhbEhlaWdodEVsZW1lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKSkge1xyXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2l2ZUF1dG9IZWlnaHQoXCIuYmxvZy1lcXVhbC1oZWlnaHRzIC5ibG9nLWVudHJ5LWlubmVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXRjaC1oZWlnaHQtZ3JpZCAubWF0Y2gtaGVpZ2h0LWNvbnRlbnRcIikpIHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KFwiLm1hdGNoLWhlaWdodC1ncmlkIC5tYXRjaC1oZWlnaHQtY29udGVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVhbEhlaWdodEVsZW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gICAgI2xhc3RXaW5kb3dXaWR0aDtcclxuICAgICNsYXN0V2luZG93SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLm1haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLiNvbldpbmRvd0xvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93TG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy4jcGFyYWxsYXhGb290ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuI2xhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy4jbGFzdFdpbmRvd0hlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhlZEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLWZpeGVkLWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCEhRE9NLldQQWRtaW5iYXIpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gRE9NLldQQWRtaW5iYXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1haW4uc3R5bGUubWluSGVpZ2h0ID1cclxuICAgICAgICAgICAgRE9NLm1haW4ub2Zmc2V0SGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAtIERPTS5odG1sLm9mZnNldEhlaWdodCAtIG9mZnNldCkgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNwYXJhbGxheEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXBhcmFsbGF4LWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIERPTS5tYWluLnN0eWxlLm1hcmdpbkJvdHRvbSA9IERPTS5mb290ZXIucGFyYWxsYXg/Lm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgVmVydGljYWxIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL3ZlcnRpY2FsXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbEhlYWRlcigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFZlcnRpY2FsSGVhZGVyIHtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5oZWFkZXIudmVydGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5oZWFkZXIudmVydGljYWxcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuOm5vdCguYnRuKSA+IGFcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51TGluay5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD1cIjBcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPyBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxyXG4gICAgICAgICAgICAgICAgOiBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG5cclxuICAgICAgICBuZXcgUGVyZmVjdFNjcm9sbGJhcihET00uaGVhZGVyLnZlcnRpY2FsLCB7XHJcbiAgICAgICAgICAgIHdoZWVsU3BlZWQ6IDAuNSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxZOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBwbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnZlcnRpY2FsSGVhZGVyVGFyZ2V0ID09IFwibGlua1wiID8gcGx1c0ljb24ucGFyZW50Tm9kZSA6IHBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgRE9NLmhlYWRlci52ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1IYXNDaGlsZHJlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gIT0gbWVudUl0ZW1IYXNDaGlsZHJlbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9jZWFuUGFyZW50cyhcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KChwYXJlbnRNZW51SXRlbSkgPT4gcGFyZW50TWVudUl0ZW0gPT0gbWVudUl0ZW1IYXNDaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1IYXNDaGlsZHJlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKG1lbnVJdGVtSGFzQ2hpbGRyZW4ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkLCAyMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAobWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNvblRvZ2dsZU1lbnVCdG5DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtb3BlbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ2aC1vcGVuZWRcIik7XHJcbiAgICAgICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4ucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIikuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcclxuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcclxuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5oZWFkZXIudmVydGljYWw/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzID8gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV0gOiBcIlwiO1xyXG5cclxuICAgICAgICBuYXZMYXN0RWxlbWVudC5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlci1zdHlsZVwiKSkge1xyXG4gICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXNjS2V5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZW50ZXJLZXkgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikgJiZcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtY2xvc2VkXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5hdkZpcnN0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xyXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTWVudSBmcm9tIFwiLi9tZW51L2Z1bGwtc2NyZWVuXCI7XHJcbmltcG9ydCBNZWdhTWVudSBmcm9tIFwiLi9tZW51L21lZ2FcIjtcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTWVudSgpO1xyXG4gICAgICAgIHRoaXMubWVnYSA9IG5ldyBNZWdhTWVudSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubmF2LW5vLWNsaWNrID4gYVwiKS5mb3JFYWNoKChub0NsaWNrTWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbm9DbGlja01lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk5vQ2xpY2tNZW51SXRlbUNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLnNmLW1lbnVcIikuZm9yRWFjaCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKTtcclxuICAgICAgICAgICAgcGFyZW50TWVudUl0ZW1zLmZvckVhY2goKHBhcmVudE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VlbnRlcik7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VsZWF2ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ob0NsaWNrTWVudUl0ZW1DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblBhcmVudE1lbnVJdGVtTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudE1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gcGFyZW50TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xyXG5cclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwic2ZIb3ZlclwiKTtcclxuICAgICAgICBmYWRlSW4oc3ViTWVudSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblBhcmVudE1lbnVJdGVtTW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudE1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gcGFyZW50TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xyXG5cclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2ZIb3ZlclwiKTtcclxuICAgICAgICBmYWRlT3V0KHN1Yk1lbnUpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEZ1bGxTY3JlZW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hcnJvd1wiKS5mb3JFYWNoKChwbHVzQnRuKSA9PiB7XG4gICAgICAgICAgICBwbHVzQnRuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYSA+IC50ZXh0LXdyYXAgPiBzcGFuLm5hdi1hcnJvdywgI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUxpbmtDbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUhhc2h0YWdMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVNZW51QnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoIXRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhpdFwiKSkge1xuICAgICAgICAgICAgdGhpcy4jb3Blbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xuXG4gICAgICAgIGlmICghKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1Yk1lbnUpLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTWVudUhhc2h0YWdMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgfTtcblxuICAgICNvcGVuTWVudSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmhlYWRlci5mdWxsU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLmxvZ28/LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG4gICAgfTtcblxuICAgICNjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlT3V0KERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudSk7XG5cbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duXCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51Py5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bjtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5uYXYtYXJyb3csIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1hcnJvd1wiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1lbnU7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIE1lZ2FNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51Q29udGVudHMuZm9yRWFjaCgobWVudUNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUNvbnRlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtTGVmdE9mZnNldCA9IG9mZnNldChtZW51SXRlbSkubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250ZW50V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51Q29udGVudCkud2lkdGgpO1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsTWFyZ2luO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUNvbnRlbnRXaWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gMTA7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVDb250ZW50V2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSBtZW51SXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5pc1JUTCkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBgLSR7aG9yaXpvbnRhbFBvc2l0aW9ufXB4YDtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnJpZ2h0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtob3Jpem9udGFsTWFyZ2lufXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1MZWZ0T2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiArXG4gICAgICAgICAgICAgICAgICAgIG1lbnVDb250ZW50V2lkdGggPFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSBtZW51SXRlbUxlZnRPZmZzZXQgLSBtZW51SXRlbS5vZmZzZXRXaWR0aCAtIDEwXG4gICAgICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5tZWdhLm1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25NZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb3BiYXIgbWVudSBpdGVtc1xuICAgICAgICBET00ubWVudS5tZWdhLnRvcGJhck1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKVxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbi13cmFwID4gLmNvbnRhaW5lclwiKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLWlubmVyXCIpO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNvblRvcGJhck1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci50b3BiYXI7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1Nb3VzZUVudGVyKHdyYXBwZXIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgI21lbnVJdGVtTW91c2VFbnRlciA9ICh3cmFwcGVyLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwiLm1lZ2FtZW51XCIpO1xuICAgICAgICBsZXQgbGVmdFBvc2l0aW9uID0gcGFyc2VJbnQob2Zmc2V0KG1lbnVJdGVtKS5sZWZ0IC0gb2Zmc2V0KHdyYXBwZXIpLmxlZnQgKyAxKTtcblxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJib3hlZC1sYXlvdXRcIikpIHtcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvbiAtIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2xlZnRQb3NpdGlvbn1weGA7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUud2lkdGggPSBgJHt3cmFwcGVyLm9mZnNldFdpZHRofXB4YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWdhTWVudTtcbiIsImltcG9ydCBEcm9wRG93bk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZHJvcC1kb3duXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgU2lkZWJhck1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvc2lkZWJhclwiO1xyXG5cclxuY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duID0gbmV3IERyb3BEb3duTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhciA9IG5ldyBTaWRlYmFyTW9iaWxlTWVudSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc2xpZGVVcCwgc2xpZGVEb3duLCBzbGlkZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRHJvcERvd25Nb2JpbGVNZW51IHtcbiAgICAjaXNNZW51T3BlbjtcbiAgICAjbWVudUl0ZW1zVG9nZ2xlSWNvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLW1vYmlsZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm1lbnVJdGVtc0hhc0NoaWxkcmVuPy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkcm9wZG93bi10b2dnbGVcIjtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zVG9nZ2xlSWNvbiA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIlxuICAgICAgICAgICAgICAgID8gRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXG4gICAgICAgICAgICAgICAgOiBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbCgnbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQ2xpY2spO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24/LmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgc2xpZGVUb2dnbGUoRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciwgNTAwKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25NZW51Q2xvc2VDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoISFET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyKSB7XG4gICAgICAgICAgICBzbGlkZVVwKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDIwMCk7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XG4gICAgICAgICAgICB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uSGFtYnVyZ2VyQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdGhpcy4jaXNNZW51T3Blbik7XG4gICAgfTtcblxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCIgPyBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpPy5mb3JFYWNoKChvcGVuTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUubmF2Py5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKCEhY2xvc2VJY29uKSB7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jb25NZW51Q2xvc2VDbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzbGlkZVVwLCBzbGlkZURvd24sIGZhZGVJbiwgZmFkZU91dCwgdmlzaWJsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRnVsbFNjcmVlbk1vYmlsZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImZ1bGxzY3JlZW4tbW9iaWxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51QnV0dG9uQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhID4gc3Bhbi5kcm9wZG93bi10b2dnbGUsICNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gLmZzLWRyb3Bkb3duLW1lbnUgbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZnVsbHNjcmVlbiAjbW9iaWxlLW5hdiBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuIGEuY2xvc2UnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlSWNvbkNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICBjb25zdCBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbikpIHtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGZhZGVPdXQoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbik7XG5cbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5kcm9wZG93blwiKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRHJvcG93blRvZ2dsZUljb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XG5cbiAgICAgICAgaWYgKCEod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViTWVudSkuZGlzcGxheSA9PT0gXCJub25lXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoXCJhLmNsb3NlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlblxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU2lkZWJhck1vYmlsZU1lbnUge1xyXG4gICAgI2lzTWVudU9wZW47XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcbiAgICAjc2lkZWJhclRvZ2dsZU1lbnVCdG47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpZHJTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tb2JpbGVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiNzdGFydFNpZHJQbHVnaW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJzxzcGFuIGNsYXNzPVwic2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD0wPjwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbiA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNzdGFydFNpZHJQbHVnaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkci5uZXcoXCIubW9iaWxlLW1lbnVcIiwge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNpZHJcIixcclxuICAgICAgICAgICAgc291cmNlOiBvcHRpb25zLnNpZHJTb3VyY2UsXHJcbiAgICAgICAgICAgIHNpZGU6IG9wdGlvbnMuc2lkclNpZGUsXHJcbiAgICAgICAgICAgIGRpc3BsYWNlOiBvcHRpb25zLnNpZHJEaXNwbGFjZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcmVuYW1pbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHRpbWluZzogXCJlYXNlXCIsXHJcbiAgICAgICAgICAgIGJpbmQ6IFwiY2xpY2tcIixcclxuICAgICAgICAgICAgb25PcGVuKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnNpdGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgJzxkaXYgY2xhc3M9XCJvY2VhbndwLXNpZHItb3ZlcmxheVwiIHRhYmluZGV4PTA+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1zaWRyLW92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFkZUluKG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNpZHIuY2xvc2UoXCJzaWRyXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlID4gdWxcIikuZm9yRWFjaCgoc3ViTWVudUFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVBY3RpdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpLmZvckVhY2goKG1lbnVJdGVtQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVPdXQob3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkciBbY2xhc3MqPVwic2lkci1jbGFzcy1mYVwiXScpLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJzaWRyLWNsYXNzLWZhLio/XFxiL2csIFwiZmFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWljb25cIl0nKS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvbi5jbGFzc05hbWUucmVwbGFjZSgvXFxic2lkci1jbGFzcy1pY29uLS4qP1xcYi9nLCBcImljb24tXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNpZHItY2xhc3MtdG9nZ2xlLXNpZHItY2xvc2VcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQnRuQ2xpY2spO1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TaWRlYmFyQ2xvc2VNZW51QnRuQ2xpY2spO1xyXG5cclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbj8uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJy5zaWRyLWNsYXNzLWRyb3Bkb3duLW1lbnUgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5zaWRyLWNsYXNzLW1lbnUtaXRlbSA+IGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI2Nsb3NlU2lkcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1uYXYtbm8tY2xpY2sgPiBhXCIpPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbkhhbWJ1cmdlckJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBpZiAoIW1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKS5mb3JFYWNoKChwYXJlbnRNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtICE9IHBhcmVudE1lbnVJdGVtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9jZWFuUGFyZW50cyhcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgobmVzdGVkTWVudUl0ZW0pID0+IG5lc3RlZE1lbnVJdGVtID09IHBhcmVudE1lbnVJdGVtKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKHBhcmVudE1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVEb3duKG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVVcChtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkLCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG47XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc2lkclwiKVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xyXG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNjbG9zZVNpZHIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck1vYmlsZU1lbnU7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwiaW5maW5pdGUtc2Nyb2xsXCI7XG5cbmNsYXNzIE9XSW5maW5pdGVTY3JvbGwge1xuICAgICNpbmZpbml0ZVNjcm9sbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoISFET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsTmF2ICYmICEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdi5xdWVyeVNlbGVjdG9yKFwiLm9sZGVyLXBvc3RzIGFcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsID0gbmV3IEluZmluaXRlU2Nyb2xsKERPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxXcmFwcGVyLCB7XG4gICAgICAgICAgICBwYXRoOiBcIi5vbGRlci1wb3N0cyBhXCIsXG4gICAgICAgICAgICBhcHBlbmQ6IFwiLml0ZW0tZW50cnlcIixcbiAgICAgICAgICAgIHN0YXR1czogXCIuc2Nyb2xsZXItc3RhdHVzXCIsXG4gICAgICAgICAgICBoaWRlTmF2OiBcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIsXG4gICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbFRocmVzaG9sZDogNzUwLFxuICAgICAgICAgICAgcHJlZmlsbDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcImxvYWRcIiwgZnVuY3Rpb24gKGJvZHksIHBhdGgsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWVudHJ5XCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlT3V0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQoaXRlbXMsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBCbG9nIG1hc29ucnkgaXNvdG9wZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5ibG9nTWFzb25yeS5pc290b3AuYXBwZW5kZWQoaXRlbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeCBHYWxsZXJ5IHBvc3RzXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnktZm9ybWF0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmJsb2dNYXNvbnJ5Lmlzb3RvcC5sYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRXF1YWwgaGVpZ2h0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1tYXRjaGhlaWdodFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmVxdWFsSGVpZ2h0RWxlbWVudHMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHYWxsZXJ5IHBvc3RzIHNsaWRlclxuICAgICAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tY2Fyb3VzZWxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd1NsaWRlci5zdGFydCh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWZvcm1hdCwgLnByb2R1Y3QtZW50cnktc2xpZGVyXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd0xpZ2h0Ym94LmluaXRQaG90b1N3aXBlRnJvbURPTShcIi5nYWxsZXJ5LWZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHYWxsZXJ5IHBvc3RzIGxpZ2h0Ym94XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBQb3N0IGltYWdlIGxpZ2h0Ym94XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcImEub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvY2VhbndwLnRoZW1lLm93TGlnaHRib3gub3BlbkxpZ2h0Ym94KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JjZSB0aGUgaW1hZ2VzIHRvIGJlIHBhcnNlZCB0byBmaXggU2FmYXJpIGlzc3VlXG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik/LmZvckVhY2goKGltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm91dGVySFRNTCA9IGltZy5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsLm9uKFwiYXBwZW5kXCIsIGZ1bmN0aW9uIChib2R5LCBwYXRoLCBpdGVtcywgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dJbmZpbml0ZVNjcm9sbDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgT1dMaWdodGJveCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNhZGRMaWdodGJveENsYXNzKCk7XG4gICAgICAgIHRoaXMuI2FkZFBob3RvU3dpcGVUb0RPTSgpO1xuICAgICAgICB0aGlzLiNpbml0KCk7XG4gICAgfTtcblxuICAgICNpbml0ID0gKCkgPT4ge1xuICAgICAgICAvLyBQb3N0IGdhbGxlcnlcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBob3RvU3dpcGVGcm9tRE9NKFwiLmdhbGxlcnktZm9ybWF0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW1hZ2UgbGlnaHRib3hcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImEub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFsaW5rLmdldEF0dHJpYnV0ZShcImRhdGEtZWxlbWVudG9yLW9wZW4tbGlnaHRib3hcIikgJiZcbiAgICAgICAgICAgICAgICAhbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ5aXRoX21hZ25pZmllcl90aHVtYm5haWxcIikgJiZcbiAgICAgICAgICAgICAgICAhbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJnZy1saW5rXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3BlbkxpZ2h0Ym94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9wZW5MaWdodGJveCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBwc3dwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHN3cFwiKVswXTtcbiAgICAgICAgY29uc3QgbGluayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzcmMgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gISFsaW5rLmRhdGFzZXQud2lkdGggPyBOdW1iZXIucGFyc2VJbnQobGluay5kYXRhc2V0LndpZHRoKSA6IDEwMjQ7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICEhbGluay5kYXRhc2V0LmhlaWdodCA/IE51bWJlci5wYXJzZUludChsaW5rLmRhdGFzZXQuaGVpZ2h0KSA6IDc2ODtcblxuICAgICAgICBjb25zdCBpbWFnZUxpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGUoXG4gICAgICAgICAgICBwc3dwRWxlbWVudCxcbiAgICAgICAgICAgIFBob3RvU3dpcGVVSV9EZWZhdWx0LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgICAgICAgICAgIHc6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmdPcGFjaXR5OiAwLjg1LFxuICAgICAgICAgICAgICAgIHNob3dIaWRlT3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpbWFnZUxpZ2h0Ym94LmluaXQoKTtcbiAgICB9O1xuXG4gICAgI2FkZExpZ2h0Ym94Q2xhc3MgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5IC5lbnRyeS1jb250ZW50IGEsIGJvZHkgLmVudHJ5IGFcIik/LmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIGlmICghIWxpbmsucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRm9ybWF0cyA9IHRoaXMuI2ltYWdlRm9ybWF0cygpO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZUZvcm1hdHNNYXNrID0gMDtcblxuICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0cy5mb3JFYWNoKChpbWFnZUZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZUZvcm1hdHNNYXNrICs9IFN0cmluZyhsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikpLmluZGV4T2YoXCIuXCIgKyBpbWFnZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VGb3JtYXRzTWFzayA9PT0gLTEzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5vLWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktaWNvblwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLXRodW1ibmFpbFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9faW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJvY2VhbndwLWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSAmJiBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1pY29uXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdhbGxlcnktbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2ltYWdlRm9ybWF0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcImJtcFwiLCBcImdpZlwiLCBcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJ0aWZmXCIsIFwidGlmXCIsIFwiamZpZlwiLCBcImpwZVwiLCBcInN2Z1wiLCBcIm1wNFwiLCBcIm9nZ1wiLCBcIndlYm1cIl07XG4gICAgfTtcblxuICAgICNhZGRQaG90b1N3aXBlVG9ET00gPSAoKSA9PiB7XG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHN3cFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NLmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICAgIGA8IS0tIFJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlLiBNdXN0IGhhdmUgY2xhc3MgcHN3cC4gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBCYWNrZ3JvdW5kIG9mIFBob3RvU3dpcGUuIFxuICAgICAgICAgICAgICAgICAgICBJdCdzIGEgc2VwYXJhdGUgZWxlbWVudCBhcyBhbmltYXRpbmcgb3BhY2l0eSBpcyBmYXN0ZXIgdGhhbiByZ2JhKCkuIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19iZ1wiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBTbGlkZXMgd3JhcHBlciB3aXRoIG92ZXJmbG93OmhpZGRlbi4gLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3Njcm9sbC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGFpbmVyIHRoYXQgaG9sZHMgc2xpZGVzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvU3dpcGUga2VlcHMgb25seSAzIG9mIHRoZW0gaW4gdGhlIERPTSB0byBzYXZlIG1lbW9yeS5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IG1vZGlmeSB0aGVzZSAzIHBzd3BfX2l0ZW0gZWxlbWVudHMsIGRhdGEgaXMgYWRkZWQgbGF0ZXIgb24uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmYXVsdCAoUGhvdG9Td2lwZVVJX0RlZmF1bHQpIGludGVyZmFjZSBvbiB0b3Agb2Ygc2xpZGluZyBhcmVhLiBDYW4gYmUgY2hhbmdlZC4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX191aSBwc3dwX191aS0taGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdG9wLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIENvbnRyb2xzIGFyZSBzZWxmLWV4cGxhbmF0b3J5LiBPcmRlciBjYW4gYmUgY2hhbmdlZC4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NvdW50ZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwiQ2xvc2UgKEVzYylcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tc2hhcmVcIiB0aXRsZT1cIlNoYXJlXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWZzXCIgdGl0bGU9XCJUb2dnbGUgZnVsbHNjcmVlblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS16b29tXCIgdGl0bGU9XCJab29tIGluL291dFwiPjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcmVsb2FkZXIgZGVtbyBodHRwczovL2NvZGVwZW4uaW8vZGltc2VtZW5vdi9wZW4veXlCV29SIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gZWxlbWVudCB3aWxsIGdldCBjbGFzcyBwc3dwX19wcmVsb2FkZXItLWFjdGl2ZSB3aGVuIHByZWxvYWRlciBpcyBydW5uaW5nIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9faWNuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2N1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fZG9udXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zaGFyZS1tb2RhbCBwc3dwX19zaGFyZS1tb2RhbC0taGlkZGVuIHBzd3BfX3NpbmdsZS10YXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtdG9vbHRpcFwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnRcIiB0aXRsZT1cIlByZXZpb3VzIChhcnJvdyBsZWZ0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHRcIiB0aXRsZT1cIk5leHQgKGFycm93IHJpZ2h0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25fX2NlbnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBpbml0UGhvdG9Td2lwZUZyb21ET00gPSAoZ2FsbGVyeVNlbGVjdG9yKSA9PiB7XG4gICAgICAgIC8vIHBhcnNlIHNsaWRlIGRhdGEgKHVybCwgdGl0bGUsIHNpemUgLi4uKSBmcm9tIERPTSBlbGVtZW50c1xuICAgICAgICAvLyAoY2hpbGRyZW4gb2YgZ2FsbGVyeVNlbGVjdG9yKVxuICAgICAgICB2YXIgcGFyc2VUaHVtYm5haWxFbGVtZW50cyA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIHRodW1iRWxlbWVudHMgPSBlbC5jaGlsZE5vZGVzLFxuICAgICAgICAgICAgICAgIG51bU5vZGVzID0gdGh1bWJFbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgICAgICAgICBsaW5rRWwsXG4gICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5rRWwgPSB0aHVtYkVsZW1lbnRzW2ldOyAvLyA8YT4gZWxlbWVudFxuXG4gICAgICAgICAgICAgICAgLy8gaW5jbHVkZSBvbmx5IGVsZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICBpZiAobGlua0VsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gISFsaW5rRWwuZGF0YXNldC53aWR0aCA/IE51bWJlci5wYXJzZUludChsaW5rRWwuZGF0YXNldC53aWR0aCkgOiAxMDI0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICEhbGlua0VsLmRhdGFzZXQuaGVpZ2h0ID8gTnVtYmVyLnBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LmhlaWdodCkgOiA3Njg7XG5cbiAgICAgICAgICAgICAgICBzaXplID0gW3dpZHRoLCBoZWlnaHRdO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHNsaWRlIG9iamVjdFxuICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogc3JjLFxuICAgICAgICAgICAgICAgICAgICB3OiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAobGlua0VsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gPGltZz4gdGh1bWJuYWlsIGVsZW1lbnQsIHJldHJpZXZpbmcgdGh1bWJuYWlsIHVybFxuICAgICAgICAgICAgICAgICAgICBpdGVtLm1zcmMgPSBsaW5rRWwuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0uZWwgPSBsaW5rRWw7IC8vIHNhdmUgbGluayB0byBlbGVtZW50IGZvciBnZXRUaHVtYkJvdW5kc0ZuXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZpbmQgbmVhcmVzdCBwYXJlbnQgZWxlbWVudFxuICAgICAgICB2YXIgY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwgJiYgKGZuKGVsKSA/IGVsIDogY2xvc2VzdChlbC5wYXJlbnROb2RlLCBmbikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHRyaWdnZXJzIHdoZW4gdXNlciBjbGlja3Mgb24gdGh1bWJuYWlsXG4gICAgICAgIHZhciBvblRodW1ibmFpbHNDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgZVRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gZmluZCByb290IGVsZW1lbnQgb2Ygc2xpZGVcbiAgICAgICAgICAgIHZhciBjbGlja2VkTGlzdEl0ZW0gPSBjbG9zZXN0KGVUYXJnZXQsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJBXCIgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1saWdodGJveFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWNsaWNrZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IChlLnJldHVyblZhbHVlID0gZmFsc2UpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLy8gZmluZCBpbmRleCBvZiBjbGlja2VkIGl0ZW0gYnkgbG9vcGluZyB0aHJvdWdoIGFsbCBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgLy8gYWx0ZXJuYXRpdmVseSwgeW91IG1heSBkZWZpbmUgaW5kZXggdmlhIGRhdGEtIGF0dHJpYnV0ZVxuICAgICAgICAgICAgdmFyIGNsaWNrZWRHYWxsZXJ5ID0gY2xpY2tlZExpc3RJdGVtLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IGNsaWNrZWRMaXN0SXRlbS5wYXJlbnROb2RlLmNoaWxkTm9kZXMsXG4gICAgICAgICAgICAgICAgbnVtQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgaW5kZXg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hpbGROb2RlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbaV0gPT09IGNsaWNrZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG5vZGVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIG9wZW4gUGhvdG9Td2lwZSBpZiB2YWxpZCBpbmRleCBmb3VuZFxuICAgICAgICAgICAgICAgIG9wZW5QaG90b1N3aXBlKGluZGV4LCBjbGlja2VkR2FsbGVyeSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhcnNlIHBpY3R1cmUgaW5kZXggYW5kIGdhbGxlcnkgaW5kZXggZnJvbSBVUkwgKCMmcGlkPTEmZ2lkPTIpXG4gICAgICAgIHZhciBwaG90b3N3aXBlUGFyc2VIYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICAgICAgcGFyYW1zID0ge307XG5cbiAgICAgICAgICAgIGlmIChoYXNoLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFycyA9IGhhc2guc3BsaXQoXCImXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgIGlmIChwYWlyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMuZ2lkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmdpZCA9IHBhcnNlSW50KHBhcmFtcy5naWQsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3BlblBob3RvU3dpcGUgPSBmdW5jdGlvbiAoaW5kZXgsIGdhbGxlcnlFbGVtZW50LCBkaXNhYmxlQW5pbWF0aW9uLCBmcm9tVVJMKSB7XG4gICAgICAgICAgICB2YXIgcHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBzd3BcIilbMF0sXG4gICAgICAgICAgICAgICAgZ2FsbGVyeSxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIGl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtcyA9IHBhcnNlVGh1bWJuYWlsRWxlbWVudHMoZ2FsbGVyeUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgb3B0aW9ucyAoaWYgbmVlZGVkKVxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAvLyBkZWZpbmUgZ2FsbGVyeSBpbmRleCAoZm9yIFVSTClcbiAgICAgICAgICAgICAgICBnYWxsZXJ5VUlEOiBnYWxsZXJ5RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBzd3AtdWlkXCIpLFxuXG4gICAgICAgICAgICAgICAgZ2V0VGh1bWJCb3VuZHNGbjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBPcHRpb25zIC0+IGdldFRodW1iQm91bmRzRm4gc2VjdGlvbiBvZiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRodW1ibmFpbCA9IGl0ZW1zW2luZGV4XS5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSwgLy8gZmluZCB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VZU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0ID0gdGh1bWJuYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHJlY3QubGVmdCwgeTogcmVjdC50b3AgKyBwYWdlWVNjcm9sbCwgdzogcmVjdC53aWR0aCB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBQaG90b1N3aXBlIG9wZW5lZCBmcm9tIFVSTFxuICAgICAgICAgICAgaWYgKGZyb21VUkwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5nYWxsZXJ5UElEcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSByZWFsIGluZGV4IHdoZW4gY3VzdG9tIFBJRHMgYXJlIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3Bob3Rvc3dpcGUuY29tL2RvY3VtZW50YXRpb24vZmFxLmh0bWwjY3VzdG9tLXBpZC1pbi11cmxcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zW2pdLnBpZCA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gVVJMIGluZGV4ZXMgc3RhcnQgZnJvbSAxXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBleGl0IGlmIGluZGV4IG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKGlzTmFOKG9wdGlvbnMuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzYWJsZUFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wdGlvbnMuYmdPcGFjaXR5ID0gMC44NTtcbiAgICAgICAgICAgIG9wdGlvbnMuc2hvd0hpZGVPcGFjaXR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gUGFzcyBkYXRhIHRvIFBob3RvU3dpcGUgYW5kIGluaXRpYWxpemUgaXRcbiAgICAgICAgICAgIGdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZShwc3dwRWxlbWVudCwgUGhvdG9Td2lwZVVJX0RlZmF1bHQsIGl0ZW1zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgZ2FsbGVyeSBlbGVtZW50cyBhbmQgYmluZCBldmVudHNcbiAgICAgICAgdmFyIGdhbGxlcnlFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ2FsbGVyeVNlbGVjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdhbGxlcnlFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBzd3AtdWlkXCIsIGkgKyAxKTtcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5vbmNsaWNrID0gb25UaHVtYm5haWxzQ2xpY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBVUkwgYW5kIG9wZW4gZ2FsbGVyeSBpZiBpdCBjb250YWlucyAjJnBpZD0zJmdpZD0xXG4gICAgICAgIHZhciBoYXNoRGF0YSA9IHBob3Rvc3dpcGVQYXJzZUhhc2goKTtcbiAgICAgICAgaWYgKGhhc2hEYXRhLnBpZCAmJiBoYXNoRGF0YS5naWQpIHtcbiAgICAgICAgICAgIG9wZW5QaG90b1N3aXBlKGhhc2hEYXRhLnBpZCwgZ2FsbGVyeUVsZW1lbnRzW2hhc2hEYXRhLmdpZCAtIDFdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XTGlnaHRib3g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XU2xpZGVyIHtcbiAgICBmbGlja2l0eTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIikpID0+IHtcbiAgICAgICAgdGhpcy5mbGlja2l0eSA9IFtdO1xuXG4gICAgICAgIGVsZW1lbnRzPy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGlja2l0eSA9IG5ldyBGbGlja2l0eShlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLWVudHJ5LWltYWdlXCIpID8gZmFsc2UgOiA2MDAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJydGxcIikgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW46IHRydWUsXG4gICAgICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mbGlja2l0eS5wdXNoKGZsaWNraXR5KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dTbGlkZXI7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFNjcm9sbEVmZmVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1wcm9kdWN0XCIpICYmICFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1sb2NhbC1zY3JvbGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5sb2NhbFtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5sb2NhbCBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLnNpZHItY2xhc3MtbWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoc2Nyb2xsSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxJdGVtQ2xpY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2Nyb2xsSXRlbUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib213LW9wZW4tbW9kYWxcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm9tdy1vcGVuLW1vZGFsXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBzY3JvbGxJdGVtLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKFwiI1wiKSkuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkICE9IFwiXCIgJiYgISF0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRhcmdldCkudG9wIC0gdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtIHRoaXMuI2dldFRvcGJhckhlaWdodCgpIC0gdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uYm9keS5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjZ2V0QWRtaW5CYXJIZWlnaHQgPSAoKSA9PiAoISFET00uV1BBZG1pbmJhciA/IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodCA6IDApO1xyXG5cclxuICAgICNnZXRUb3BiYXJIZWlnaHQgPSAoKSA9PlxyXG4gICAgICAgICEhRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyICYmIERPTS5oZWFkZXIudG9wYmFyV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtYmFyLXN0aWNreVwiKVxyXG4gICAgICAgICAgICA/IERPTS5oZWFkZXIudG9wYmFyV3JhcHBlci5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICNnZXRTdGlja3lIZWFkZXJIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIGlmICghRE9NLmhlYWRlci5zaXRlKSB7XHJcbiAgICAgICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudG9yLXN0aWNreVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBET00uaGVhZGVyLnNpdGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbUhlYWRlcldyYXBwZXIgPSBET00uaGVhZGVyLnNpdGUucXVlcnlTZWxlY3RvcihcIi5ib3R0b20taGVhZGVyLXdyYXBcIik7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQgPSBib3R0b21IZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKVxyXG4gICAgICAgICAgICAgICAgPyBib3R0b21IZWFkZXJXcmFwcGVyLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICAgICAgOiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXMtc3RpY2t5ICNzaXRlLWhlYWRlci1pbm5lclwiKVxyXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlzLXN0aWNreSAjc2l0ZS1oZWFkZXItaW5uZXJcIikub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRWZmZWN0O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7fTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLiNvbldpbmRvd1Njcm9sbCk7XG4gICAgICAgIERPTS5zY3JvbGwuc2Nyb2xsVG9wPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgICAgIERPTS5zY3JvbGwuZ29Ub3A/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICAgICAgRE9NLnNjcm9sbC5nb1RvcFNsYXNoPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Njcm9sbCA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5zY3JvbGwuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAwKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoRE9NLnNjcm9sbC5zY3JvbGxUb3ApLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgZmFkZUluKERPTS5zY3JvbGwuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShET00uc2Nyb2xsLnNjcm9sbFRvcCkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBmYWRlT3V0KERPTS5zY3JvbGwuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25TY3JvbGxUb3BDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERPTS5ib2R5LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBzY3JvbGxUb3AucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IERyb3BEb3duU2VhcmNoIGZyb20gXCIuL3NlYXJjaC9kcm9wLWRvd25cIjtcclxuaW1wb3J0IEhlYWRlclJlcGxhY2VTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2hlYWRlci1yZXBsYWNlXCI7XHJcbmltcG9ydCBNb2JpbGVTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC9tb2JpbGUtc2VhcmNoLWljb25cIjtcclxuaW1wb3J0IE92ZXJsYXlTZWFyY2ggZnJvbSBcIi4vc2VhcmNoL292ZXJsYXlcIjtcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBtb2JpbGVPdmVybGF5SW5wdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd24gPSBuZXcgRHJvcERvd25TZWFyY2goKTtcclxuICAgICAgICB0aGlzLmhlYWRlclJlcGxhY2UgPSBuZXcgSGVhZGVyUmVwbGFjZVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG5ldyBPdmVybGF5U2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVTZWFyY2hJY29uID0gbmV3IE1vYmlsZVNlYXJjaEljb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0LmNsb3Nlc3QoXCJmb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlYXJjaC5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuI29uSW5wdXRLZXl1cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSW5wdXRLZXl1cCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBmb3JtID0gaW5wdXQuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZmlsbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJjbGFzcyBTZWFyY2hCYXNlIHtcbiAgICBmb2N1cyA9IChmb3JtLCBpbnB1dENsYXNzKSA9PiB7XG4gICAgICAgIGxldCBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGZvcm0pLnRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxMDAwO1xuXG4gICAgICAgIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSAhIWZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPyBmb3JtVHJhbnNpdGlvbkR1cmF0aW9uIDogNjAwO1xuXG4gICAgICAgIGlmIChmb3JtVHJhbnNpdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoaW5wdXRDbGFzcykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFzZTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgRHJvcERvd25TZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRG9jdW1lbnRDbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgdG9nZ2xlU2VhcmNoQnRuLCBmb3JtIH0gPSBET00uc2VhcmNoLmRyb3BEb3duO1xuXG4gICAgICAgIHRvZ2dsZVNlYXJjaEJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHRoaXMuZm9jdXMoZm9ybSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29uRG9jdW1lbnRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBDb2xsYXBzIHNlYXJjaCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLmZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5kcm9wRG93bi50b2dnbGVTZWFyY2hCdG4/LnBhcmVudE5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blNlYXJjaDtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgSGVhZGVyUmVwbGFjZVNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJoZWFkZXJfcmVwbGFjZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5tYWluLnN0eWxlLm1pbldpZHRoID0gXCIzNzBweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgZm9ybS5zdHlsZS5tYXhXaWR0aCA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24gPiB1bC5kcm9wZG93bi1tZW51XCIpPy5vZmZzZXRXaWR0aCArIDYwICsgXCJweFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLmhlYWRlclJlcGxhY2U7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICBpZiAodGhpcy4jaGFzVG9wSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICBET00uaGVhZGVyLnRvcFJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERPTS5tZW51Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIlwiO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZT8uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wTGVmdFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubmF2Py5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjaGFzVG9wSGVhZGVyID0gKCkgPT4gRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJSZXBsYWNlU2VhcmNoO1xuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCBTZWFyY2hCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuY2xhc3MgTW9iaWxlU2VhcmNoSWNvbiBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgICNlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNlbGVtZW50cyA9IHtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIGRyb3Bkb3duU2VhcmNoRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtZHJvcGRvd25cIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb24tb3ZlcmxheVwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2hDbG9zZUljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXkgLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxuICAgICAgICAgICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwiZHJvcF9kb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3RvZ2dsZURyb3Bkb3duU2VhcmNoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrRG9jdW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaEljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvcGVuT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoQ2xvc2VJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jY2xvc2VPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsaWNrT3ZlcmxheVNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI3RvZ2dsZURyb3Bkb3duU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcImZvcm1cIiksIFwiaW5wdXQuZmllbGRcIik7XG4gICAgfTtcblxuICAgICNvcGVuT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZUluKHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHRoaXMuZm9jdXModGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5tb2JpbGUtc2VhcmNoLW92ZXJsYXktaW5wdXRcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlT3ZlcmxheVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmFkZU91dCh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbkNsaWNrRG9jdW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNpY29uLXNlYXJjaGZvcm0tZHJvcGRvd24uc2hvd1wiKSkge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVTZWFyY2hJY29uO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBPdmVybGF5U2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcIm92ZXJsYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLm92ZXJsYXkudG9nZ2xlU2VhcmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVTZWFyY2hCdG5DbGljayk7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VCdG5DbGljayk7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4oZm9ybSk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCAnaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSBET00uc2VhcmNoLm92ZXJsYXk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KGZvcm0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5U2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IHtcclxuICAgICNzZWxlY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdCA9IHNlbGVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICBcImFmdGVyZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3QgJHt0aGlzLiNzZWxlY3QuY2xhc3NMaXN0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtc2VsZWN0SW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLiNzZWxlY3Qub3B0aW9uc1t0aGlzLiNzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJoYXNDdXN0b21TZWxlY3RcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzdHlsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc3R5bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuaGVpZ2h0ID0gXCIzNHB4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmZvbnRTaXplID0gXCIxM3B4XCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLmFwcGVhcmFuY2UgPSBcIm1lbnVsaXN0LWJ1dHRvblwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3QubmV4dFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzSXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Nb3VzZWVudGVyKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25Nb3VzZWxlYXZlKTtcclxuICAgICAgICB0aGlzLiNzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLm9uQ2hhbmdlKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLXNlbGVjdEhvdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy4jb25Eb2N1bWVudFJlYWR5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Eb2N1bWVudFJlYWR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgRE9NLnNlbGVjdFRhZ3MuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5zdHlsZS53aWR0aCA9IHNlbGVjdC5uZXh0U2libGluZy5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZS1tZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgQmxvZ01hc29ucnkgZnJvbSBcIi4vY29tcG9uZW50cy9ibG9nLW1hc29ucnlcIjtcclxuaW1wb3J0IFNjcm9sbFRvcCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC10b3BcIjtcclxuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbC1lZmZlY3RcIjtcclxuaW1wb3J0IEVxdWFsSGVpZ2h0RWxlbWVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9lcXVhbC1oZWlnaHQtZWxlbWVudHNcIjtcclxuaW1wb3J0IE9XSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1pbmZpbml0ZS1zY3JvbGxcIjtcclxuaW1wb3J0IE9XU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvb3ctc2xpZGVyXCI7XHJcbmltcG9ydCBPV0xpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvb3ctbGlnaHRib3hcIjtcclxuXHJcbmNsYXNzIFRoZW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICB0aGlzLmJsb2dNYXNvbnJ5ID0gbmV3IEJsb2dNYXNvbnJ5KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBuZXcgU2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZmZlY3QgPSBuZXcgU2Nyb2xsRWZmZWN0KCk7XHJcbiAgICAgICAgdGhpcy5lcXVhbEhlaWdodEVsZW1lbnRzID0gbmV3IEVxdWFsSGVpZ2h0RWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLm93TGlnaHRib3ggPSBuZXcgT1dMaWdodGJveCgpO1xyXG4gICAgICAgIHRoaXMub3dTbGlkZXIgPSBuZXcgT1dTbGlkZXIoKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3dJbmZpbml0ZVNjcm9sbCA9IG5ldyBPV0luZmluaXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZTtcclxuIiwiLy8gYnV0dG9uXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5maW5pdGVTY3JvbGxCdXR0b24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY2xhc3MgSW5maW5pdGVTY3JvbGxCdXR0b24ge1xuICBjb25zdHJ1Y3RvciggZWxlbWVudCwgaW5mU2Nyb2xsICkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbmZTY3JvbGwgPSBpbmZTY3JvbGw7XG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICAgIGluZlNjcm9sbC5vbiggJ3JlcXVlc3QnLCB0aGlzLmRpc2FibGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnbG9hZCcsIHRoaXMuZW5hYmxlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2Vycm9yJywgdGhpcy5oaWRlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2xhc3QnLCB0aGlzLmhpZGUuYmluZCggdGhpcyApICk7XG4gIH1cblxuICBvbkNsaWNrKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaW5mU2Nyb2xsLmxvYWROZXh0UGFnZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIgKTtcbiAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRlU2Nyb2xsIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMuYnV0dG9uID0gbnVsbDtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYnV0dG9uRWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLmJ1dHRvbiApO1xuICBpZiAoIGJ1dHRvbkVsZW0gKSB7XG4gICAgdGhpcy5idXR0b24gPSBuZXcgSW5maW5pdGVTY3JvbGxCdXR0b24oIGJ1dHRvbkVsZW0sIHRoaXMgKTtcbiAgfVxufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5idXR0b24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmJ1dHRvbiApIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5CdXR0b24gPSBJbmZpbml0ZVNjcm9sbEJ1dHRvbjtcblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIGNvcmVcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIHV0aWxzICkge1xuXG5sZXQgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBJbmZpbml0ZVNjcm9sbCBpbnRhbmNlc1xubGV0IGluc3RhbmNlcyA9IHt9O1xuXG5mdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgbGV0IHF1ZXJ5RWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuXG4gIGlmICggIXF1ZXJ5RWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yIEluZmluaXRlU2Nyb2xsOiAnICsgKCBxdWVyeUVsZW0gfHwgZWxlbWVudCApICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQgPSBxdWVyeUVsZW07XG4gIC8vIGRvIG5vdCBpbml0aWFsaXplIHR3aWNlIG9uIHNhbWUgZWxlbWVudFxuICBpZiAoIGVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEICkge1xuICAgIGxldCBpbnN0YW5jZSA9IGluc3RhbmNlc1sgZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgXTtcbiAgICBpbnN0YW5jZS5vcHRpb24oIG9wdGlvbnMgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHsgLi4uSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMgfTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlKCk7XG59XG5cbi8vIGRlZmF1bHRzXG5JbmZpbml0ZVNjcm9sbC5kZWZhdWx0cyA9IHtcbiAgLy8gcGF0aDogbnVsbCxcbiAgLy8gaGlkZU5hdjogbnVsbCxcbiAgLy8gZGVidWc6IGZhbHNlLFxufTtcblxuLy8gY3JlYXRlICYgZGVzdHJveSBtZXRob2RzXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUgPSB7fTtcbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kgPSB7fTtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbk9iamVjdC5hc3NpZ24oIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbmxldCBHVUlEID0gMDtcblxucHJvdG8uY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNyZWF0ZSBjb3JlXG4gIC8vIGFkZCBpZCBmb3IgSW5maW5pdGVTY3JvbGwuZGF0YVxuICBsZXQgaWQgPSB0aGlzLmd1aWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG4gIC8vIHByb3BlcnRpZXNcbiAgdGhpcy5wYWdlSW5kZXggPSAxOyAvLyBkZWZhdWx0IHRvIGZpcnN0IHBhZ2VcbiAgdGhpcy5sb2FkQ291bnQgPSAwO1xuICB0aGlzLnVwZGF0ZUdldFBhdGgoKTtcbiAgLy8gYmFpbCBpZiBnZXRQYXRoIG5vdCBzZXQsIG9yIHJldHVybnMgZmFsc2V5ICM3NzZcbiAgbGV0IGhhc1BhdGggPSB0aGlzLmdldFBhdGggJiYgdGhpcy5nZXRQYXRoKCk7XG4gIGlmICggIWhhc1BhdGggKSB7XG4gICAgY29uc29sZS5lcnJvcignRGlzYWJsaW5nIEluZmluaXRlU2Nyb2xsJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudXBkYXRlR2V0QWJzb2x1dGVQYXRoKCk7XG4gIHRoaXMubG9nKCAnaW5pdGlhbGl6ZWQnLCBbIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgXSApO1xuICB0aGlzLmNhbGxPbkluaXQoKTtcbiAgLy8gY3JlYXRlIGZlYXR1cmVzXG4gIGZvciAoIGxldCBtZXRob2QgaW4gSW5maW5pdGVTY3JvbGwuY3JlYXRlICkge1xuICAgIEluZmluaXRlU2Nyb2xsLmNyZWF0ZVsgbWV0aG9kIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgT2JqZWN0LmFzc2lnbiggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG4vLyBjYWxsIG9uSW5pdCBvcHRpb24sIHVzZWQgZm9yIGJpbmRpbmcgZXZlbnRzIG9uIGluaXRcbnByb3RvLmNhbGxPbkluaXQgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9uSW5pdCA9IHRoaXMub3B0aW9ucy5vbkluaXQ7XG4gIGlmICggb25Jbml0ICkge1xuICAgIG9uSW5pdC5jYWxsKCB0aGlzLCB0aGlzICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBhcmdzICkge1xuICB0aGlzLmxvZyggdHlwZSwgYXJncyApO1xuICBsZXQgZW1pdEFyZ3MgPSBldmVudCA/IFsgZXZlbnQgXS5jb25jYXQoIGFyZ3MgKSA6IGFyZ3M7XG4gIHRoaXMuZW1pdEV2ZW50KCB0eXBlLCBlbWl0QXJncyApO1xuICAvLyB0cmlnZ2VyIGpRdWVyeSBldmVudFxuICBpZiAoICFqUXVlcnkgfHwgIXRoaXMuJGVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG5hbWVzcGFjZSBqUXVlcnkgZXZlbnRcbiAgdHlwZSArPSAnLmluZmluaXRlU2Nyb2xsJztcbiAgbGV0ICRldmVudCA9IHR5cGU7XG4gIGlmICggZXZlbnQgKSB7XG4gICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwICovXG4gICAgbGV0IGpRRXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgalFFdmVudC50eXBlID0gdHlwZTtcbiAgICAkZXZlbnQgPSBqUUV2ZW50O1xuICB9XG4gIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggJGV2ZW50LCBhcmdzICk7XG59O1xuXG5sZXQgbG9nZ2VycyA9IHtcbiAgaW5pdGlhbGl6ZWQ6ICggY2xhc3NOYW1lICkgPT4gYG9uICR7Y2xhc3NOYW1lfWAsXG4gIHJlcXVlc3Q6ICggcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBsb2FkOiAoIHJlc3BvbnNlLCBwYXRoICkgPT4gYCR7cmVzcG9uc2UudGl0bGUgfHwgJyd9LiBVUkw6ICR7cGF0aH1gLFxuICBlcnJvcjogKCBlcnJvciwgcGF0aCApID0+IGAke2Vycm9yfS4gVVJMOiAke3BhdGh9YCxcbiAgYXBwZW5kOiAoIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApID0+IGAke2l0ZW1zLmxlbmd0aH0gaXRlbXMuIFVSTDogJHtwYXRofWAsXG4gIGxhc3Q6ICggcmVzcG9uc2UsIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgaGlzdG9yeTogKCB0aXRsZSwgcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBwYWdlSW5kZXg6IGZ1bmN0aW9uKCBpbmRleCwgb3JpZ2luICkge1xuICAgIHJldHVybiBgY3VycmVudCBwYWdlIGRldGVybWluZWQgdG8gYmU6ICR7aW5kZXh9IGZyb20gJHtvcmlnaW59YDtcbiAgfSxcbn07XG5cbi8vIGxvZyBldmVudHNcbnByb3RvLmxvZyA9IGZ1bmN0aW9uKCB0eXBlLCBhcmdzICkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuZGVidWcgKSByZXR1cm47XG5cbiAgbGV0IG1lc3NhZ2UgPSBgW0luZmluaXRlU2Nyb2xsXSAke3R5cGV9YDtcbiAgbGV0IGxvZ2dlciA9IGxvZ2dlcnNbIHR5cGUgXTtcbiAgaWYgKCBsb2dnZXIgKSBtZXNzYWdlICs9ICcuICcgKyBsb2dnZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgY29uc29sZS5sb2coIG1lc3NhZ2UgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgdXNlZCBhbW91bmcgZmVhdHVyZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlTWVhc3VyZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBsZXQgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdGhpcy50b3AgPSByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xufTtcblxucHJvdG8udXBkYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGVsZW1lbnRTY3JvbGwgPSB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbDtcbiAgaWYgKCAhZWxlbWVudFNjcm9sbCApIHtcbiAgICAvLyBkZWZhdWx0LCB1c2Ugd2luZG93XG4gICAgdGhpcy5zY3JvbGxlciA9IHdpbmRvdztcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgdHJ1ZSwgc2V0IHRvIGVsZW1lbnQsIG90aGVyd2lzZSB1c2Ugb3B0aW9uXG4gIHRoaXMuc2Nyb2xsZXIgPSBlbGVtZW50U2Nyb2xsID09PSB0cnVlID8gdGhpcy5lbGVtZW50IDpcbiAgICB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnRTY3JvbGwgKTtcbiAgaWYgKCAhdGhpcy5zY3JvbGxlciApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGVsZW1lbnRTY3JvbGw6ICR7ZWxlbWVudFNjcm9sbH1gKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGFnZSBwYXRoIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnVwZGF0ZUdldFBhdGggPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9wdFBhdGggPSB0aGlzLm9wdGlvbnMucGF0aDtcbiAgaWYgKCAhb3B0UGF0aCApIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbmZpbml0ZVNjcm9sbCBwYXRoIG9wdGlvbiByZXF1aXJlZC4gU2V0IGFzOiAke29wdFBhdGh9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGZ1bmN0aW9uXG4gIGxldCB0eXBlID0gdHlwZW9mIG9wdFBhdGg7XG4gIGlmICggdHlwZSA9PSAnZnVuY3Rpb24nICkge1xuICAgIHRoaXMuZ2V0UGF0aCA9IG9wdFBhdGg7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHRlbXBsYXRlIHN0cmluZzogJy9wYWdlcy97eyN9fS5odG1sJ1xuICBsZXQgdGVtcGxhdGVNYXRjaCA9IHR5cGUgPT0gJ3N0cmluZycgJiYgb3B0UGF0aC5tYXRjaCgne3sjfX0nKTtcbiAgaWYgKCB0ZW1wbGF0ZU1hdGNoICkge1xuICAgIHRoaXMudXBkYXRlR2V0UGF0aFRlbXBsYXRlKCBvcHRQYXRoICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNlbGVjdG9yOiAnLm5leHQtcGFnZS1zZWxlY3RvcidcbiAgdGhpcy51cGRhdGVHZXRQYXRoU2VsZWN0b3IoIG9wdFBhdGggKTtcbn07XG5cbnByb3RvLnVwZGF0ZUdldFBhdGhUZW1wbGF0ZSA9IGZ1bmN0aW9uKCBvcHRQYXRoICkge1xuICAvLyBzZXQgZ2V0UGF0aCB3aXRoIHRlbXBsYXRlIHN0cmluZ1xuICB0aGlzLmdldFBhdGggPSAoKSA9PiB7XG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMucGFnZUluZGV4ICsgMTtcbiAgICByZXR1cm4gb3B0UGF0aC5yZXBsYWNlKCAne3sjfX0nLCBuZXh0SW5kZXggKTtcbiAgfTtcbiAgLy8gZ2V0IHBhZ2VJbmRleCBmcm9tIGxvY2F0aW9uXG4gIC8vIGNvbnZlcnQgcGF0aCBvcHRpb24gaW50byByZWdleCB0byBsb29rIGZvciBwYXR0ZXJuIGluIGxvY2F0aW9uXG4gIC8vIGVzY2FwZSBxdWVyeSAoPykgaW4gdXJsLCBhbGxvd3MgZm9yIHBhcnNpbmcgR0VUIHBhcmFtZXRlcnNcbiAgbGV0IHJlZ2V4U3RyaW5nID0gb3B0UGF0aFxuICAgIC5yZXBsYWNlKCAvKFxcXFxcXD98XFw/KS8sICdcXFxcPycgKVxuICAgIC5yZXBsYWNlKCAne3sjfX0nLCAnKFxcXFxkXFxcXGQ/XFxcXGQ/KScgKTtcbiAgbGV0IHRlbXBsYXRlUmUgPSBuZXcgUmVnRXhwKCByZWdleFN0cmluZyApO1xuICBsZXQgbWF0Y2ggPSBsb2NhdGlvbi5ocmVmLm1hdGNoKCB0ZW1wbGF0ZVJlICk7XG5cbiAgaWYgKCBtYXRjaCApIHtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IHBhcnNlSW50KCBtYXRjaFsxXSwgMTAgKTtcbiAgICB0aGlzLmxvZyggJ3BhZ2VJbmRleCcsIFsgdGhpcy5wYWdlSW5kZXgsICd0ZW1wbGF0ZSBzdHJpbmcnIF0gKTtcbiAgfVxufTtcblxubGV0IHBhdGhSZWdleGVzID0gW1xuICAvLyBXb3JkUHJlc3MgJiBUdW1ibHIgLSBleGFtcGxlLmNvbS9wYWdlLzJcbiAgLy8gSmVreWxsIC0gZXhhbXBsZS5jb20vcGFnZTJcbiAgL14oLio/XFwvP3BhZ2VcXC8/KShcXGRcXGQ/XFxkPykoLio/JCkvLFxuICAvLyBEcnVwYWwgLSBleGFtcGxlLmNvbS8/cGFnZT0xXG4gIC9eKC4qP1xcLz9cXD9wYWdlPSkoXFxkXFxkP1xcZD8pKC4qPyQpLyxcbiAgLy8gY2F0Y2ggYWxsLCBsYXN0IG9jY3VyZW5jZSBvZiBhIG51bWJlclxuICAvKC4qPykoXFxkXFxkP1xcZD8pKD8hLipcXGQpKC4qPyQpLyxcbl07XG5cbi8vIHRyeSBtYXRjaGluZyBocmVmIHRvIHBhdGhSZWdleGVzIHBhdHRlcm5zXG5sZXQgZ2V0UGF0aFBhcnRzID0gSW5maW5pdGVTY3JvbGwuZ2V0UGF0aFBhcnRzID0gZnVuY3Rpb24oIGhyZWYgKSB7XG4gIGlmICggIWhyZWYgKSByZXR1cm47XG4gIGZvciAoIGxldCByZWdleCBvZiBwYXRoUmVnZXhlcyApIHtcbiAgICBsZXQgbWF0Y2ggPSBocmVmLm1hdGNoKCByZWdleCApO1xuICAgIGlmICggbWF0Y2ggKSB7XG4gICAgICBsZXQgWyAsIGJlZ2luLCBpbmRleCwgZW5kIF0gPSBtYXRjaDtcbiAgICAgIHJldHVybiB7IGJlZ2luLCBpbmRleCwgZW5kIH07XG4gICAgfVxuICB9XG59O1xuXG5wcm90by51cGRhdGVHZXRQYXRoU2VsZWN0b3IgPSBmdW5jdGlvbiggb3B0UGF0aCApIHtcbiAgLy8gcGFyc2UgaHJlZiBvZiBsaW5rOiAnLm5leHQtcGFnZS1saW5rJ1xuICBsZXQgaHJlZkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBvcHRQYXRoICk7XG4gIGlmICggIWhyZWZFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEJhZCBJbmZpbml0ZVNjcm9sbCBwYXRoIG9wdGlvbi4gTmV4dCBsaW5rIG5vdCBmb3VuZDogJHtvcHRQYXRofWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBocmVmID0gaHJlZkVsZW0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGxldCBwYXRoUGFydHMgPSBnZXRQYXRoUGFydHMoIGhyZWYgKTtcbiAgaWYgKCAhcGF0aFBhcnRzICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEluZmluaXRlU2Nyb2xsIHVuYWJsZSB0byBwYXJzZSBuZXh0IGxpbmsgaHJlZjogJHtocmVmfWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IGJlZ2luLCBpbmRleCwgZW5kIH0gPSBwYXRoUGFydHM7XG4gIHRoaXMuaXNQYXRoU2VsZWN0b3IgPSB0cnVlOyAvLyBmbGFnIGZvciBjaGVja0xhc3RQYWdlKClcbiAgdGhpcy5nZXRQYXRoID0gKCkgPT4gYmVnaW4gKyAoIHRoaXMucGFnZUluZGV4ICsgMSApICsgZW5kO1xuICAvLyBnZXQgcGFnZUluZGV4IGZyb20gaHJlZlxuICB0aGlzLnBhZ2VJbmRleCA9IHBhcnNlSW50KCBpbmRleCwgMTAgKSAtIDE7XG4gIHRoaXMubG9nKCAncGFnZUluZGV4JywgWyB0aGlzLnBhZ2VJbmRleCwgJ25leHQgbGluaycgXSApO1xufTtcblxucHJvdG8udXBkYXRlR2V0QWJzb2x1dGVQYXRoID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gIC8vIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIGh0dHAgb3IgL1xuICBsZXQgaXNBYnNvbHV0ZSA9IHBhdGgubWF0Y2goIC9eaHR0cC8gKSB8fCBwYXRoLm1hdGNoKCAvXlxcLy8gKTtcbiAgaWYgKCBpc0Fic29sdXRlICkge1xuICAgIHRoaXMuZ2V0QWJzb2x1dGVQYXRoID0gdGhpcy5nZXRQYXRoO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IHBhdGhuYW1lIH0gPSBsb2NhdGlvbjtcbiAgLy8gcXVlcnkgcGFyYW1ldGVyICM4MjkuIGV4YW1wbGUuY29tLz9wZz0yXG4gIGxldCBpc1F1ZXJ5ID0gcGF0aC5tYXRjaCggL15cXD8vICk7XG4gIC8vIC9mb28vYmFyL2luZGV4Lmh0bWwgPT4gL2Zvby9iYXJcbiAgbGV0IGRpcmVjdG9yeSA9IHBhdGhuYW1lLnN1YnN0cmluZyggMCwgcGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSApO1xuICBsZXQgcGF0aFN0YXJ0ID0gaXNRdWVyeSA/IHBhdGhuYW1lIDogZGlyZWN0b3J5ICsgJy8nO1xuXG4gIHRoaXMuZ2V0QWJzb2x1dGVQYXRoID0gKCkgPT4gcGF0aFN0YXJ0ICsgdGhpcy5nZXRQYXRoKCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBuYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gaGlkZSBuYXZpZ2F0aW9uXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuaGlkZU5hdiA9IGZ1bmN0aW9uKCkge1xuICBsZXQgbmF2ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuaGlkZU5hdiApO1xuICBpZiAoICFuYXYgKSByZXR1cm47XG5cbiAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHRoaXMubmF2ID0gbmF2O1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5oaWRlTmF2ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5uYXYgKSB0aGlzLm5hdi5zdHlsZS5kaXNwbGF5ID0gJyc7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZXN0cm95IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hbGxPZmYoKTsgLy8gcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgLy8gY2FsbCBkZXN0cm95IG1ldGhvZHNcbiAgZm9yICggbGV0IG1ldGhvZCBpbiBJbmZpbml0ZVNjcm9sbC5kZXN0cm95ICkge1xuICAgIEluZmluaXRlU2Nyb2xsLmRlc3Ryb3lbIG1ldGhvZCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxuXG4gIGRlbGV0ZSB0aGlzLmVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEO1xuICBkZWxldGUgaW5zdGFuY2VzWyB0aGlzLmd1aWQgXTtcbiAgLy8gcmVtb3ZlIGpRdWVyeSBkYXRhLiAjODA3XG4gIGlmICggalF1ZXJ5ICYmIHRoaXMuJGVsZW1lbnQgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgJ2luZmluaXRlU2Nyb2xsJyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gaHR0cHM6Ly9yZW15c2hhcnAuY29tLzIwMTAvMDcvMjEvdGhyb3R0bGluZy1mdW5jdGlvbi1jYWxsc1xuSW5maW5pdGVTY3JvbGwudGhyb3R0bGUgPSBmdW5jdGlvbiggZm4sIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDIwMDtcbiAgbGV0IGxhc3QsIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBub3cgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseSggdGhpcywgYXJncyApO1xuICAgIH07XG4gICAgaWYgKCBsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hvbGQgKSB7XG4gICAgICAvLyBob2xkIG9uIHRvIGl0XG4gICAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cmlnZ2VyLCB0aHJlc2hvbGQgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpZ2dlcigpO1xuICAgIH1cbiAgfTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICBsZXQgaWQgPSBlbGVtICYmIGVsZW0uaW5maW5pdGVTY3JvbGxHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuLy8gc2V0IGludGVybmFsIGpRdWVyeSwgZm9yIFdlYnBhY2sgKyBqUXVlcnkgdjNcbkluZmluaXRlU2Nyb2xsLnNldEpRdWVyeSA9IGZ1bmN0aW9uKCBqcXJ5ICkge1xuICBqUXVlcnkgPSBqcXJ5O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuaHRtbEluaXQoIEluZmluaXRlU2Nyb2xsLCAnaW5maW5pdGUtc2Nyb2xsJyApO1xuXG4vLyBhZGQgbm9vcCBfaW5pdCBtZXRob2QgZm9yIGpRdWVyeSBCcmlkZ2V0LiAjNzY4XG5wcm90by5faW5pdCA9IGZ1bmN0aW9uKCkge307XG5cbmxldCB7IGpRdWVyeUJyaWRnZXQgfSA9IHdpbmRvdztcbmlmICggalF1ZXJ5ICYmIGpRdWVyeUJyaWRnZXQgKSB7XG4gIGpRdWVyeUJyaWRnZXQoICdpbmZpbml0ZVNjcm9sbCcsIEluZmluaXRlU2Nyb2xsLCBqUXVlcnkgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBoaXN0b3J5XG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICBoaXN0b3J5OiAncmVwbGFjZScsXG4gIC8vIGhpc3RvcnlUaXRsZTogZmFsc2UsXG59ICk7XG5cbmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4vLyAtLS0tLSBjcmVhdGUvZGVzdHJveSAtLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuaGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuaGlzdG9yeSApIHJldHVybjtcblxuICAvLyBjaGVjayBmb3Igc2FtZSBvcmlnaW5cbiAgbGluay5ocmVmID0gdGhpcy5nZXRBYnNvbHV0ZVBhdGgoKTtcbiAgLy8gTVMgRWRnZSBkb2VzIG5vdCBoYXZlIG9yaWdpbiBvbiBsaW5rXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMjM2NDkzL1xuICBsZXQgbGlua09yaWdpbiA9IGxpbmsub3JpZ2luIHx8IGxpbmsucHJvdG9jb2wgKyAnLy8nICsgbGluay5ob3N0O1xuICBsZXQgaXNTYW1lT3JpZ2luID0gbGlua09yaWdpbiA9PSBsb2NhdGlvbi5vcmlnaW47XG4gIGlmICggIWlzU2FtZU9yaWdpbiApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnW0luZmluaXRlU2Nyb2xsXSBjYW5ub3Qgc2V0IGhpc3Rvcnkgd2l0aCBkaWZmZXJlbnQgb3JpZ2luOiAnICtcbiAgICAgIGAke2xpbmsub3JpZ2lufSBvbiAke2xvY2F0aW9uLm9yaWdpbn0gLiBIaXN0b3J5IGJlaGF2aW9yIGRpc2FibGVkLmAgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0d28gd2F5cyB0byBoYW5kbGUgY2hhbmdpbmcgaGlzdG9yeVxuICBpZiAoIHRoaXMub3B0aW9ucy5hcHBlbmQgKSB7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5QXBwZW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5UGFnZUxvYWQoKTtcbiAgfVxufTtcblxucHJvdG8uY3JlYXRlSGlzdG9yeUFwcGVuZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIC8vIGFycmF5IG9mIHNjcm9sbCBwb3NpdGlvbnMgb2YgYXBwZW5kZWQgcGFnZXNcbiAgdGhpcy5zY3JvbGxQYWdlcyA9IFtcbiAgICAvLyBmaXJzdCBwYWdlXG4gICAge1xuICAgICAgdG9wOiAwLFxuICAgICAgcGF0aDogbG9jYXRpb24uaHJlZixcbiAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICB9LFxuICBdO1xuICB0aGlzLnNjcm9sbFBhZ2UgPSB0aGlzLnNjcm9sbFBhZ2VzWzBdO1xuICAvLyBldmVudHNcbiAgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciA9IHRoaXMub25TY3JvbGxIaXN0b3J5LmJpbmQoIHRoaXMgKTtcbiAgdGhpcy51bmxvYWRIYW5kbGVyID0gdGhpcy5vblVubG9hZC5iaW5kKCB0aGlzICk7XG4gIHRoaXMuc2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgKTtcbiAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMub25BcHBlbmRIaXN0b3J5ICk7XG4gIHRoaXMuYmluZEhpc3RvcnlBcHBlbmRFdmVudHMoIHRydWUgKTtcbn07XG5cbnByb3RvLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzID0gZnVuY3Rpb24oIGlzQmluZCApIHtcbiAgbGV0IGFkZFJlbW92ZSA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdGhpcy5zY3JvbGxlclsgYWRkUmVtb3ZlIF0oICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyICk7XG4gIHdpbmRvd1sgYWRkUmVtb3ZlIF0oICd1bmxvYWQnLCB0aGlzLnVubG9hZEhhbmRsZXIgKTtcbn07XG5cbnByb3RvLmNyZWF0ZUhpc3RvcnlQYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9uKCAnbG9hZCcsIHRoaXMub25QYWdlTG9hZEhpc3RvcnkgKTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuaGlzdG9yeSA9XG5wcm90by5kZXN0cm95SGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgaXNIaXN0b3J5QXBwZW5kID0gdGhpcy5vcHRpb25zLmhpc3RvcnkgJiYgdGhpcy5vcHRpb25zLmFwcGVuZDtcbiAgaWYgKCBpc0hpc3RvcnlBcHBlbmQgKSB7XG4gICAgdGhpcy5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyggZmFsc2UgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gYXBwZW5kIGhpc3RvcnkgLS0tLS0gLy9cblxucHJvdG8ub25BcHBlbmRIaXN0b3J5ID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApIHtcbiAgLy8gZG8gbm90IHByb2NlZWQgaWYgbm8gaXRlbXMuICM3NzlcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHJldHVybjtcblxuICBsZXQgZmlyc3RJdGVtID0gaXRlbXNbMF07XG4gIGxldCBlbGVtU2Nyb2xsWSA9IHRoaXMuZ2V0RWxlbWVudFNjcm9sbFkoIGZpcnN0SXRlbSApO1xuICAvLyByZXNvbHZlIHBhdGhcbiAgbGluay5ocmVmID0gcGF0aDtcbiAgLy8gYWRkIHBhZ2UgZGF0YSB0byBoYXNoXG4gIHRoaXMuc2Nyb2xsUGFnZXMucHVzaCh7XG4gICAgdG9wOiBlbGVtU2Nyb2xsWSxcbiAgICBwYXRoOiBsaW5rLmhyZWYsXG4gICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICB9KTtcbn07XG5cbnByb3RvLmdldEVsZW1lbnRTY3JvbGxZID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIC0gdGhpcy50b3A7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICB9XG59O1xuXG5wcm90by5vblNjcm9sbEhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3ljbGUgdGhyb3VnaCBwb3NpdGlvbnMsIGZpbmQgYmlnZ2VzdCB3aXRob3V0IGdvaW5nIG92ZXJcbiAgbGV0IHNjcm9sbFBhZ2UgPSB0aGlzLmdldENsb3Nlc3RTY3JvbGxQYWdlKCk7XG4gIC8vIHNldCBoaXN0b3J5IGlmIGNoYW5nZWRcbiAgaWYgKCBzY3JvbGxQYWdlICE9IHRoaXMuc2Nyb2xsUGFnZSApIHtcbiAgICB0aGlzLnNjcm9sbFBhZ2UgPSBzY3JvbGxQYWdlO1xuICAgIHRoaXMuc2V0SGlzdG9yeSggc2Nyb2xsUGFnZS50aXRsZSwgc2Nyb2xsUGFnZS5wYXRoICk7XG4gIH1cbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBJbmZpbml0ZVNjcm9sbCwgJ29uU2Nyb2xsSGlzdG9yeScsIDE1MCApO1xuXG5wcm90by5nZXRDbG9zZXN0U2Nyb2xsUGFnZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc2Nyb2xsVmlld1k7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgc2Nyb2xsVmlld1kgPSB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC8gMjtcbiAgfSBlbHNlIHtcbiAgICBzY3JvbGxWaWV3WSA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICB9XG5cbiAgbGV0IHNjcm9sbFBhZ2U7XG4gIGZvciAoIGxldCBwYWdlIG9mIHRoaXMuc2Nyb2xsUGFnZXMgKSB7XG4gICAgaWYgKCBwYWdlLnRvcCA+PSBzY3JvbGxWaWV3WSApIGJyZWFrO1xuXG4gICAgc2Nyb2xsUGFnZSA9IHBhZ2U7XG4gIH1cbiAgcmV0dXJuIHNjcm9sbFBhZ2U7XG59O1xuXG5wcm90by5zZXRIaXN0b3J5ID0gZnVuY3Rpb24oIHRpdGxlLCBwYXRoICkge1xuICBsZXQgb3B0SGlzdG9yeSA9IHRoaXMub3B0aW9ucy5oaXN0b3J5O1xuICBsZXQgaGlzdG9yeU1ldGhvZCA9IG9wdEhpc3RvcnkgJiYgaGlzdG9yeVsgb3B0SGlzdG9yeSArICdTdGF0ZScgXTtcbiAgaWYgKCAhaGlzdG9yeU1ldGhvZCApIHJldHVybjtcblxuICBoaXN0b3J5WyBvcHRIaXN0b3J5ICsgJ1N0YXRlJyBdKCBudWxsLCB0aXRsZSwgcGF0aCApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5oaXN0b3J5VGl0bGUgKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdoaXN0b3J5JywgbnVsbCwgWyB0aXRsZSwgcGF0aCBdICk7XG59O1xuXG4vLyBzY3JvbGwgdG8gdG9wIHRvIHByZXZlbnQgaW5pdGlhbCBzY3JvbGwtcmVzZXQgYWZ0ZXIgcGFnZSByZWZyZXNoXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MzM5MTUvMTgyMTgzXG5wcm90by5vblVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc2Nyb2xsUGFnZS50b3AgPT09IDAgKSByZXR1cm47XG5cbiAgLy8gY2FsY3VsYXRlIHdoZXJlIHNjcm9sbCBwb3NpdGlvbiB3b3VsZCBiZSBvbiByZWZyZXNoXG4gIGxldCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgLSB0aGlzLnNjcm9sbFBhZ2UudG9wICsgdGhpcy50b3A7XG4gIC8vIGRpc2FibGUgc2Nyb2xsIGV2ZW50IGJlZm9yZSBzZXR0aW5nIHNjcm9sbCAjNjc5XG4gIHRoaXMuZGVzdHJveUhpc3RvcnkoKTtcbiAgc2Nyb2xsVG8oIDAsIHNjcm9sbFkgKTtcbn07XG5cbi8vIC0tLS0tIGxvYWQgaGlzdG9yeSAtLS0tLSAvL1xuXG4vLyB1cGRhdGUgVVJMXG5wcm90by5vblBhZ2VMb2FkSGlzdG9yeSA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCApIHtcbiAgdGhpcy5zZXRIaXN0b3J5KCByZXNwb25zZS50aXRsZSwgcGF0aCApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvKiFcbiAqIEluZmluaXRlIFNjcm9sbCB2NC4wLjFcbiAqIEF1dG9tYXRpY2FsbHkgYWRkIG5leHQgcGFnZVxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIEluZmluaXRlIFNjcm9sbCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKlxuICogaHR0cHM6Ly9pbmZpbml0ZS1zY3JvbGwuY29tXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIE1ldGFmaXp6eVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJy4vcGFnZS1sb2FkJyksXG4gICAgICAgIHJlcXVpcmUoJy4vc2Nyb2xsLXdhdGNoJyksXG4gICAgICAgIHJlcXVpcmUoJy4vaGlzdG9yeScpLFxuICAgICAgICByZXF1aXJlKCcuL2J1dHRvbicpLFxuICAgICAgICByZXF1aXJlKCcuL3N0YXR1cycpLFxuICAgICk7XG4gIH1cblxufSApKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEluZmluaXRlU2Nyb2xsICkge1xuICByZXR1cm4gSW5maW5pdGVTY3JvbGw7XG59ICk7XG4iLCIvLyBwYWdlLWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgLy8gYXBwZW5kOiBmYWxzZSxcbiAgbG9hZE9uU2Nyb2xsOiB0cnVlLFxuICBjaGVja0xhc3RQYWdlOiB0cnVlLFxuICByZXNwb25zZUJvZHk6ICd0ZXh0JyxcbiAgZG9tUGFyc2VSZXNwb25zZTogdHJ1ZSxcbiAgLy8gcHJlZmlsbDogZmFsc2UsXG4gIC8vIG91dGxheWVyOiBudWxsLFxufSApO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUucGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jYW5Mb2FkID0gdHJ1ZTtcbiAgdGhpcy5vbiggJ3Njcm9sbFRocmVzaG9sZCcsIHRoaXMub25TY3JvbGxUaHJlc2hvbGRMb2FkICk7XG4gIHRoaXMub24oICdsb2FkJywgdGhpcy5jaGVja0xhc3RQYWdlICk7XG4gIGlmICggdGhpcy5vcHRpb25zLm91dGxheWVyICkge1xuICAgIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLm9uQXBwZW5kT3V0bGF5ZXIgKTtcbiAgfVxufTtcblxucHJvdG8ub25TY3JvbGxUaHJlc2hvbGRMb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLmxvYWRPblNjcm9sbCApIHRoaXMubG9hZE5leHRQYWdlKCk7XG59O1xuXG5sZXQgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5wcm90by5sb2FkTmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzTG9hZGluZyB8fCAhdGhpcy5jYW5Mb2FkICkgcmV0dXJuO1xuXG4gIGxldCB7IHJlc3BvbnNlQm9keSwgZG9tUGFyc2VSZXNwb25zZSwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG4gIGxldCBwYXRoID0gdGhpcy5nZXRBYnNvbHV0ZVBhdGgoKTtcbiAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICBpZiAoIHR5cGVvZiBmZXRjaE9wdGlvbnMgPT0gJ2Z1bmN0aW9uJyApIGZldGNoT3B0aW9ucyA9IGZldGNoT3B0aW9ucygpO1xuXG4gIGxldCBmZXRjaFByb21pc2UgPSBmZXRjaCggcGF0aCwgZmV0Y2hPcHRpb25zIClcbiAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcbiAgICAgIGlmICggIXJlc3BvbnNlLm9rICkge1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoIHJlc3BvbnNlLnN0YXR1c1RleHQgKTtcbiAgICAgICAgdGhpcy5vblBhZ2VFcnJvciggZXJyb3IsIHBhdGgsIHJlc3BvbnNlICk7XG4gICAgICAgIHJldHVybiB7IHJlc3BvbnNlIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZVsgcmVzcG9uc2VCb2R5IF0oKS50aGVuKCAoIGJvZHkgKSA9PiB7XG4gICAgICAgIGxldCBjYW5Eb21QYXJzZSA9IHJlc3BvbnNlQm9keSA9PSAndGV4dCcgJiYgZG9tUGFyc2VSZXNwb25zZTtcbiAgICAgICAgaWYgKCBjYW5Eb21QYXJzZSApIHtcbiAgICAgICAgICBib2R5ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyggYm9keSwgJ3RleHQvaHRtbCcgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQgKSB7XG4gICAgICAgICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICAgICAgICByZXR1cm4geyBib2R5LCByZXNwb25zZSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uUGFnZUxvYWQoIGJvZHksIHBhdGgsIHJlc3BvbnNlICk7XG4gICAgICAgIH1cbiAgICAgIH0gKTtcbiAgICB9IClcbiAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XG4gICAgICB0aGlzLm9uUGFnZUVycm9yKCBlcnJvciwgcGF0aCApO1xuICAgIH0gKTtcblxuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdyZXF1ZXN0JywgbnVsbCwgWyBwYXRoLCBmZXRjaFByb21pc2UgXSApO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2U7XG59O1xuXG5wcm90by5vblBhZ2VMb2FkID0gZnVuY3Rpb24oIGJvZHksIHBhdGgsIHJlc3BvbnNlICkge1xuICAvLyBkb25lIGxvYWRpbmcgaWYgbm90IGFwcGVuZGluZ1xuICBpZiAoICF0aGlzLm9wdGlvbnMuYXBwZW5kICkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5wYWdlSW5kZXgrKztcbiAgdGhpcy5sb2FkQ291bnQrKztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnbG9hZCcsIG51bGwsIFsgYm9keSwgcGF0aCwgcmVzcG9uc2UgXSApO1xuICByZXR1cm4gdGhpcy5hcHBlbmROZXh0UGFnZSggYm9keSwgcGF0aCwgcmVzcG9uc2UgKTtcbn07XG5cbnByb3RvLmFwcGVuZE5leHRQYWdlID0gZnVuY3Rpb24oIGJvZHksIHBhdGgsIHJlc3BvbnNlICkge1xuICBsZXQgeyBhcHBlbmQsIHJlc3BvbnNlQm9keSwgZG9tUGFyc2VSZXNwb25zZSB9ID0gdGhpcy5vcHRpb25zO1xuICAvLyBkbyBub3QgYXBwZW5kIGpzb25cbiAgbGV0IGlzRG9jdW1lbnQgPSByZXNwb25zZUJvZHkgPT0gJ3RleHQnICYmIGRvbVBhcnNlUmVzcG9uc2U7XG4gIGlmICggIWlzRG9jdW1lbnQgfHwgIWFwcGVuZCApIHJldHVybiB7IGJvZHksIHJlc3BvbnNlIH07XG5cbiAgbGV0IGl0ZW1zID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKCBhcHBlbmQgKTtcbiAgbGV0IHByb21pc2VWYWx1ZSA9IHsgYm9keSwgcmVzcG9uc2UsIGl0ZW1zIH07XG4gIC8vIGxhc3QgcGFnZSBoaXQgaWYgbm8gaXRlbXMuICM4NDBcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgIHJldHVybiBwcm9taXNlVmFsdWU7XG4gIH1cblxuICBsZXQgZnJhZ21lbnQgPSBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApO1xuICBsZXQgYXBwZW5kUmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHBlbmRJdGVtcyggaXRlbXMsIGZyYWdtZW50ICk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdhcHBlbmQnLCBudWxsLCBbIGJvZHksIHBhdGgsIGl0ZW1zLCByZXNwb25zZSBdICk7XG4gICAgcmV0dXJuIHByb21pc2VWYWx1ZTtcbiAgfTtcblxuICAvLyBUT0RPIGFkZCBob29rIGZvciBvcHRpb24gdG8gdHJpZ2dlciBhcHBlbmRSZWFkeVxuICBpZiAoIHRoaXMub3B0aW9ucy5vdXRsYXllciApIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRPdXRsYXllckl0ZW1zKCBmcmFnbWVudCwgYXBwZW5kUmVhZHkgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXBwZW5kUmVhZHkoKTtcbiAgfVxufTtcblxucHJvdG8uYXBwZW5kSXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGZyYWdtZW50ICkge1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXG4gIC8vIGdldCBmcmFnbWVudCBpZiBub3QgcHJvdmlkZWRcbiAgZnJhZ21lbnQgPSBmcmFnbWVudCB8fCBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApO1xuICByZWZyZXNoU2NyaXB0cyggZnJhZ21lbnQgKTtcbiAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xufTtcblxuZnVuY3Rpb24gZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKSB7XG4gIC8vIGFkZCBpdGVtcyB0byBmcmFnbWVudFxuICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGlmICggaXRlbXMgKSBmcmFnbWVudC5hcHBlbmQoIC4uLml0ZW1zICk7XG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuLy8gcmVwbGFjZSA8c2NyaXB0PnMgd2l0aCBjb3BpZXMgc28gdGhleSBsb2FkXG4vLyA8c2NyaXB0PnMgYWRkZWQgYnkgSW5maW5pdGVTY3JvbGwgd2lsbCBub3QgbG9hZFxuLy8gc2ltaWxhciB0byBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MTA5OTVcbmZ1bmN0aW9uIHJlZnJlc2hTY3JpcHRzKCBmcmFnbWVudCApIHtcbiAgbGV0IHNjcmlwdHMgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgZm9yICggbGV0IHNjcmlwdCBvZiBzY3JpcHRzICkge1xuICAgIGxldCBmcmVzaFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIC8vIGNvcHkgYXR0cmlidXRlc1xuICAgIGxldCBhdHRycyA9IHNjcmlwdC5hdHRyaWJ1dGVzO1xuICAgIGZvciAoIGxldCBhdHRyIG9mIGF0dHJzICkge1xuICAgICAgZnJlc2hTY3JpcHQuc2V0QXR0cmlidXRlKCBhdHRyLm5hbWUsIGF0dHIudmFsdWUgKTtcbiAgICB9XG4gICAgLy8gY29weSBpbm5lciBzY3JpcHQgY29kZS4gIzcxOCwgIzc4MlxuICAgIGZyZXNoU2NyaXB0LmlubmVySFRNTCA9IHNjcmlwdC5pbm5lckhUTUw7XG4gICAgc2NyaXB0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCBmcmVzaFNjcmlwdCwgc2NyaXB0ICk7XG4gIH1cbn1cblxuLy8gLS0tLS0gb3V0bGF5ZXIgLS0tLS0gLy9cblxucHJvdG8uYXBwZW5kT3V0bGF5ZXJJdGVtcyA9IGZ1bmN0aW9uKCBmcmFnbWVudCwgYXBwZW5kUmVhZHkgKSB7XG4gIGxldCBpbWFnZXNMb2FkZWQgPSBJbmZpbml0ZVNjcm9sbC5pbWFnZXNMb2FkZWQgfHwgd2luZG93LmltYWdlc0xvYWRlZDtcbiAgaWYgKCAhaW1hZ2VzTG9hZGVkICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tJbmZpbml0ZVNjcm9sbF0gaW1hZ2VzTG9hZGVkIHJlcXVpcmVkIGZvciBvdXRsYXllciBvcHRpb24nKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhcHBlbmQgb25jZSBpbWFnZXMgbG9hZGVkXG4gIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24oIHJlc29sdmUgKSB7XG4gICAgaW1hZ2VzTG9hZGVkKCBmcmFnbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgYm9keVJlc3BvbnNlID0gYXBwZW5kUmVhZHkoKTtcbiAgICAgIHJlc29sdmUoIGJvZHlSZXNwb25zZSApO1xuICAgIH0gKTtcbiAgfSApO1xufTtcblxucHJvdG8ub25BcHBlbmRPdXRsYXllciA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSB7XG4gIHRoaXMub3B0aW9ucy5vdXRsYXllci5hcHBlbmRlZCggaXRlbXMgKTtcbn07XG5cbi8vIC0tLS0tIGNoZWNrTGFzdFBhZ2UgLS0tLS0gLy9cblxuLy8gY2hlY2sgcmVzcG9uc2UgZm9yIG5leHQgZWxlbWVudFxucHJvdG8uY2hlY2tMYXN0UGFnZSA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoICkge1xuICBsZXQgeyBjaGVja0xhc3RQYWdlLCBwYXRoOiBwYXRoT3B0IH0gPSB0aGlzLm9wdGlvbnM7XG4gIGlmICggIWNoZWNrTGFzdFBhZ2UgKSByZXR1cm47XG5cbiAgLy8gaWYgcGF0aCBpcyBmdW5jdGlvbiwgY2hlY2sgaWYgbmV4dCBwYXRoIGlzIHRydXRoeVxuICBpZiAoIHR5cGVvZiBwYXRoT3B0ID09ICdmdW5jdGlvbicgKSB7XG4gICAgbGV0IG5leHRQYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgaWYgKCAhbmV4dFBhdGggKSB7XG4gICAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgc2VsZWN0b3IgZnJvbSBjaGVja0xhc3RQYWdlIG9yIHBhdGggb3B0aW9uXG4gIGxldCBzZWxlY3RvcjtcbiAgaWYgKCB0eXBlb2YgY2hlY2tMYXN0UGFnZSA9PSAnc3RyaW5nJyApIHtcbiAgICBzZWxlY3RvciA9IGNoZWNrTGFzdFBhZ2U7XG4gIH0gZWxzZSBpZiAoIHRoaXMuaXNQYXRoU2VsZWN0b3IgKSB7XG4gICAgLy8gcGF0aCBvcHRpb24gaXMgc2VsZWN0b3Igc3RyaW5nXG4gICAgc2VsZWN0b3IgPSBwYXRoT3B0O1xuICB9XG4gIC8vIGNoZWNrIGxhc3QgcGFnZSBmb3Igc2VsZWN0b3JcbiAgLy8gYmFpbCBpZiBubyBzZWxlY3RvciBvciBub3QgZG9jdW1lbnQgcmVzcG9uc2VcbiAgaWYgKCAhc2VsZWN0b3IgfHwgIWJvZHkucXVlcnlTZWxlY3RvciApIHJldHVybjtcblxuICAvLyBjaGVjayBpZiByZXNwb25zZSBoYXMgc2VsZWN0b3JcbiAgbGV0IG5leHRFbGVtID0gYm9keS5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuICBpZiAoICFuZXh0RWxlbSApIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG59O1xuXG5wcm90by5sYXN0UGFnZVJlYWNoZWQgPSBmdW5jdGlvbiggYm9keSwgcGF0aCApIHtcbiAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2xhc3QnLCBudWxsLCBbIGJvZHksIHBhdGggXSApO1xufTtcblxuLy8gLS0tLS0gZXJyb3IgLS0tLS0gLy9cblxucHJvdG8ub25QYWdlRXJyb3IgPSBmdW5jdGlvbiggZXJyb3IsIHBhdGgsIHJlc3BvbnNlICkge1xuICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB0aGlzLmNhbkxvYWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZXJyb3InLCBudWxsLCBbIGVycm9yLCBwYXRoLCByZXNwb25zZSBdICk7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHByZWZpbGwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnByZWZpbGwgKSByZXR1cm47XG5cbiAgbGV0IGFwcGVuZCA9IHRoaXMub3B0aW9ucy5hcHBlbmQ7XG4gIGlmICggIWFwcGVuZCApIHtcbiAgICBjb25zb2xlLmVycm9yKGBhcHBlbmQgb3B0aW9uIHJlcXVpcmVkIGZvciBwcmVmaWxsLiBTZXQgYXMgOiR7YXBwZW5kfWApO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIHRoaXMuaXNQcmVmaWxsaW5nID0gdHJ1ZTtcbiAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMucHJlZmlsbCApO1xuICB0aGlzLm9uY2UoICdlcnJvcicsIHRoaXMuc3RvcFByZWZpbGwgKTtcbiAgdGhpcy5vbmNlKCAnbGFzdCcsIHRoaXMuc3RvcFByZWZpbGwgKTtcbiAgdGhpcy5wcmVmaWxsKCk7XG59O1xuXG5wcm90by5wcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIGxldCBkaXN0YW5jZSA9IHRoaXMuZ2V0UHJlZmlsbERpc3RhbmNlKCk7XG4gIHRoaXMuaXNQcmVmaWxsaW5nID0gZGlzdGFuY2UgPj0gMDtcbiAgaWYgKCB0aGlzLmlzUHJlZmlsbGluZyApIHtcbiAgICB0aGlzLmxvZygncHJlZmlsbCcpO1xuICAgIHRoaXMubG9hZE5leHRQYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdG9wUHJlZmlsbCgpO1xuICB9XG59O1xuXG5wcm90by5nZXRQcmVmaWxsRGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgLy8gZWxlbWVudCBzY3JvbGxcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQgLSB0aGlzLnNjcm9sbGVyLnNjcm9sbEhlaWdodDtcbiAgfVxuICAvLyB3aW5kb3dcbiAgcmV0dXJuIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbn07XG5cbnByb3RvLnN0b3BQcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMubG9nKCdzdG9wUHJlZmlsbCcpO1xuICB0aGlzLm9mZiggJ2FwcGVuZCcsIHRoaXMucHJlZmlsbCApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBzY3JvbGwtd2F0Y2hcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgc2Nyb2xsVGhyZXNob2xkOiA0MDAsXG4gIC8vIGVsZW1lbnRTY3JvbGw6IG51bGwsXG59ICk7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5zY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAvLyBldmVudHNcbiAgdGhpcy5wYWdlU2Nyb2xsSGFuZGxlciA9IHRoaXMub25QYWdlU2Nyb2xsLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5yZXNpemVIYW5kbGVyID0gdGhpcy5vblJlc2l6ZS5iaW5kKCB0aGlzICk7XG5cbiAgbGV0IHNjcm9sbFRocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQ7XG4gIGxldCBpc0VuYWJsZSA9IHNjcm9sbFRocmVzaG9sZCB8fCBzY3JvbGxUaHJlc2hvbGQgPT09IDA7XG4gIGlmICggaXNFbmFibGUgKSB0aGlzLmVuYWJsZVNjcm9sbFdhdGNoKCk7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LnNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVNjcm9sbFdhdGNoKCk7XG59O1xuXG5wcm90by5lbmFibGVTY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNTY3JvbGxXYXRjaGluZyApIHJldHVybjtcblxuICB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgPSB0cnVlO1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIC8vIFRPRE8gZGlzYWJsZSBhZnRlciBlcnJvcj9cbiAgdGhpcy5vbiggJ2xhc3QnLCB0aGlzLmRpc2FibGVTY3JvbGxXYXRjaCApO1xuICB0aGlzLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyggdHJ1ZSApO1xufTtcblxucHJvdG8uZGlzYWJsZVNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNTY3JvbGxXYXRjaGluZyApIHJldHVybjtcblxuICB0aGlzLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyggZmFsc2UgKTtcbiAgZGVsZXRlIHRoaXMuaXNTY3JvbGxXYXRjaGluZztcbn07XG5cbnByb3RvLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyA9IGZ1bmN0aW9uKCBpc0JpbmQgKSB7XG4gIGxldCBhZGRSZW1vdmUgPSBpc0JpbmQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHRoaXMuc2Nyb2xsZXJbIGFkZFJlbW92ZSBdKCAnc2Nyb2xsJywgdGhpcy5wYWdlU2Nyb2xsSGFuZGxlciApO1xuICB3aW5kb3dbIGFkZFJlbW92ZSBdKCAncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyICk7XG59O1xuXG5wcm90by5vblBhZ2VTY3JvbGwgPSBJbmZpbml0ZVNjcm9sbC50aHJvdHRsZSggZnVuY3Rpb24oKSB7XG4gIGxldCBkaXN0YW5jZSA9IHRoaXMuZ2V0Qm90dG9tRGlzdGFuY2UoKTtcbiAgaWYgKCBkaXN0YW5jZSA8PSB0aGlzLm9wdGlvbnMuc2Nyb2xsVGhyZXNob2xkICkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc2Nyb2xsVGhyZXNob2xkJyk7XG4gIH1cbn0gKTtcblxucHJvdG8uZ2V0Qm90dG9tRGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGJvdHRvbSwgc2Nyb2xsWTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICBib3R0b20gPSB0aGlzLnNjcm9sbGVyLnNjcm9sbEhlaWdodDtcbiAgICBzY3JvbGxZID0gdGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGJvdHRvbSAtIHNjcm9sbFk7XG59O1xuXG5wcm90by5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIEluZmluaXRlU2Nyb2xsLCAnb25SZXNpemUnLCAxNTAgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBzdGF0dXNcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbi8vIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLnN0YXR1cyA9IG51bGw7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5zdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXR1c0VsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5zdGF0dXMgKTtcbiAgaWYgKCAhc3RhdHVzRWxlbSApIHJldHVybjtcblxuICAvLyBlbGVtZW50c1xuICB0aGlzLnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtO1xuICB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHMgPSB7XG4gICAgcmVxdWVzdDogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLXJlcXVlc3QnKSxcbiAgICBlcnJvcjogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLWVycm9yJyksXG4gICAgbGFzdDogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLWxhc3QnKSxcbiAgfTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMub24oICdyZXF1ZXN0JywgdGhpcy5zaG93UmVxdWVzdFN0YXR1cyApO1xuICB0aGlzLm9uKCAnZXJyb3InLCB0aGlzLnNob3dFcnJvclN0YXR1cyApO1xuICB0aGlzLm9uKCAnbGFzdCcsIHRoaXMuc2hvd0xhc3RTdGF0dXMgKTtcbiAgdGhpcy5iaW5kSGlkZVN0YXR1cygnb24nKTtcbn07XG5cbnByb3RvLmJpbmRIaWRlU3RhdHVzID0gZnVuY3Rpb24oIGJpbmRNZXRob2QgKSB7XG4gIGxldCBoaWRlRXZlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kID8gJ2FwcGVuZCcgOiAnbG9hZCc7XG4gIHRoaXNbIGJpbmRNZXRob2QgXSggaGlkZUV2ZW50LCB0aGlzLmhpZGVBbGxTdGF0dXMgKTtcbn07XG5cbnByb3RvLnNob3dSZXF1ZXN0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygncmVxdWVzdCcpO1xufTtcblxucHJvdG8uc2hvd0Vycm9yU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygnZXJyb3InKTtcbn07XG5cbnByb3RvLnNob3dMYXN0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygnbGFzdCcpO1xuICAvLyBwcmV2ZW50IGxhc3QgdGhlbiBhcHBlbmQgZXZlbnQgcmFjZSBjb25kaXRpb24gZnJvbSBzaG93aW5nIGxhc3Qgc3RhdHVzICM3MDZcbiAgdGhpcy5iaW5kSGlkZVN0YXR1cygnb2ZmJyk7XG59O1xuXG5wcm90by5zaG93U3RhdHVzID0gZnVuY3Rpb24oIGV2ZW50TmFtZSApIHtcbiAgc2hvdyggdGhpcy5zdGF0dXNFbGVtZW50ICk7XG4gIHRoaXMuaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMoKTtcbiAgbGV0IGV2ZW50RWxlbSA9IHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50c1sgZXZlbnROYW1lIF07XG4gIHNob3coIGV2ZW50RWxlbSApO1xufTtcblxucHJvdG8uaGlkZUFsbFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBoaWRlKCB0aGlzLnN0YXR1c0VsZW1lbnQgKTtcbiAgdGhpcy5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cygpO1xufTtcblxucHJvdG8uaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgZm9yICggbGV0IHR5cGUgaW4gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzICkge1xuICAgIGxldCBldmVudEVsZW0gPSB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHNbIHR5cGUgXTtcbiAgICBoaWRlKCBldmVudEVsZW0gKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGhpZGUoIGVsZW0gKSB7XG4gIHNldERpc3BsYXkoIGVsZW0sICdub25lJyApO1xufVxuXG5mdW5jdGlvbiBzaG93KCBlbGVtICkge1xuICBzZXREaXNwbGF5KCBlbGVtLCAnYmxvY2snICk7XG59XG5cbmZ1bmN0aW9uIHNldERpc3BsYXkoIGVsZW0sIHZhbHVlICkge1xuICBpZiAoIGVsZW0gKSB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvKipcbiAqIEV2RW1pdHRlciB2Mi4wLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbmxldCBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSByZXR1cm4gdGhpcztcblxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgbGV0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICBsZXQgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCAhbGlzdGVuZXJzLmluY2x1ZGVzKCBsaXN0ZW5lciApICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSByZXR1cm4gdGhpcztcblxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgbGV0IG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIGxldCBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICBsZXQgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHJldHVybiB0aGlzO1xuXG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSggMCApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICBsZXQgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggbGV0IGxpc3RlbmVyIG9mIGxpc3RlbmVycyApIHtcbiAgICBsZXQgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0gKSApO1xuIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2My4wLjBcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCBnbG9iYWwgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGdsb2JhbC5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KCBnbG9iYWwgKTtcbiAgfVxuXG59KCB0aGlzLCBmdW5jdGlvbiBmYWN0b3J5KCBnbG9iYWwgKSB7XG5cbmxldCB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIGEsIGIgKTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSByZXR1cm4gb2JqO1xuXG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSByZXR1cm4gW107XG5cbiAgbGV0IGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICBpZiAoIGlzQXJyYXlMaWtlICkgcmV0dXJuIFsgLi4ub2JqIF07XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICBsZXQgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBsZXQgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuXG4gIHJldHVybiBlbGVtc1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIC5maWx0ZXIoICggZWxlbSApID0+IGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApXG4gICAgLnJlZHVjZSggKCBmZkVsZW1zLCBlbGVtICkgPT4ge1xuICAgICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgICAgcmV0dXJuIGZmRWxlbXM7XG4gICAgICB9XG4gICAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgICAgLy8gZmlsdGVyXG4gICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICB9XG4gICAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgICBsZXQgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgICBmZkVsZW1zID0gZmZFbGVtcy5jb25jYXQoIC4uLmNoaWxkRWxlbXMgKTtcbiAgICAgIHJldHVybiBmZkVsZW1zO1xuICAgIH0sIFtdICk7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIGxldCBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIGxldCB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KCB0aGlzWyB0aW1lb3V0TmFtZSBdICk7XG5cbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgbWV0aG9kLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgKTtcbiAgfTtcbn07XG5cbi8vIC0tLS0tIGRvY1JlYWR5IC0tLS0tIC8vXG5cbnV0aWxzLmRvY1JlYWR5ID0gZnVuY3Rpb24oIG9uRG9jUmVhZHkgKSB7XG4gIGxldCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIG9uRG9jUmVhZHkgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIG9uRG9jUmVhZHkgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gaHRtbEluaXQgLS0tLS0gLy9cblxuLy8gaHR0cDovL2JpdC5seS8zb1lMdXNjXG51dGlscy50b0Rhc2hlZCA9IGZ1bmN0aW9uKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyguKShbQS1aXSkvZywgZnVuY3Rpb24oIG1hdGNoLCAkMSwgJDIgKSB7XG4gICAgcmV0dXJuICQxICsgJy0nICsgJDI7XG4gIH0gKS50b0xvd2VyQ2FzZSgpO1xufTtcblxubGV0IGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcblxuLy8gYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuLy8gaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbi8vIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIGxldCBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgbGV0IGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBgWyR7ZGF0YUF0dHJ9XWAgKTtcbiAgICBsZXQgalF1ZXJ5ID0gZ2xvYmFsLmpRdWVyeTtcblxuICAgIFsgLi4uZGF0YUF0dHJFbGVtcyBdLmZvckVhY2goICggZWxlbSApID0+IHtcbiAgICAgIGxldCBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICk7XG4gICAgICBsZXQgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggYEVycm9yIHBhcnNpbmcgJHtkYXRhQXR0cn0gb24gJHtlbGVtLmNsYXNzTmFtZX06ICR7ZXJyb3J9YCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBXaWRnZXRDbGFzcyggZWxlbSwgb3B0aW9ucyApO1xuICAgICAgLy8gbWFrZSBhdmFpbGFibGUgdmlhICQoKS5kYXRhKCduYW1lc3BhY2UnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSApO1xuXG4gIH0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0gKSApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNwb25zaXZlQXV0b0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVzcG9uc2l2ZUF1dG9IZWlnaHQoc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVBdXRvSGVpZ2h0KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucnVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNwb25zaXZlQXV0b0hlaWdodCwgW3tcbiAgICBrZXk6ICdyZWNhbGMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFrZUdyb3VwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VHcm91cHMoZWxlbWVudHMpIHtcbiAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9KTtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnRzWzBdKS50b3A7XG4gICAgICBncm91cFswXSA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudCkudG9wICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICBoZWlnaHQgPSAoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3A7XG4gICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgZ3JvdXBbaWR4XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwW2lkeF0ucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhdXRvSGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b0hlaWdodChncm91cCkge1xuICAgICAgdmFyIGhlaWdodHMgPSBncm91cC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gY29tcHV0ZWRTdHlsZS5ib3hTaXppbmc7XG4gICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCkgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoaGVpZ2h0cykpO1xuICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdydW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcblxuICAgICAgdmFyIGdyb3VwcyA9IHRoaXMubWFrZUdyb3VwcyhlbGVtZW50cyk7XG4gICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgX3RoaXMyLmF1dG9IZWlnaHQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNwb25zaXZlQXV0b0hlaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG52YXIgZ2V0U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG59O1xuXG52YXIgZ2V0T2Zmc2V0ID0gZXhwb3J0cy5nZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsVG9wKCksXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZ2V0U2Nyb2xsTGVmdCgpXG4gIH07XG59OyJdfQ==
