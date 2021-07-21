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

    if ((opacity += 0.1) <= 1) {
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

    if ((opacity -= 0.1) < 0) {
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
        history: false
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
        return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3BhZ2UtbG9hZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvc2Nyb2xsLXdhdGNoLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL25vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQU8sSUFBTSxPQUFPLEdBQUcsZUFBaEI7O0FBRUEsSUFBTSxHQUFHLEdBQUc7QUFDZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQURTO0FBRWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBRkE7QUFHZixFQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUhHO0FBSWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FKUztBQUtmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FMRztBQU1mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQU5FO0FBT2YsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUxYO0FBTUosSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkNBQXZCLENBTlQ7QUFP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFyYWxsYXg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtZm9vdGVyXCIpLFxyXG4gICAgfSxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGwtdG9wXCIpLFxyXG4gICAgICAgIGdvVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjZ28tdG9wXCJdJyksXHJcbiAgICAgICAgZ29Ub3BTbGFzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lIGFbaHJlZj1cIi8jZ28tdG9wXCJdJyksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbFdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLXdyYXBcIiksXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIG1hc29ucnlHcmlkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLW1hc29ucnktZ3JpZFwiKSxcclxuICAgIH0sXHJcbiAgICBlZGQ6IHtcclxuICAgICAgICBjYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGQtbWVudS1pY29uXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgdG90YWxQcmljZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkbWVudWNhcnQtZGV0YWlscy50b3RhbFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdNb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgfSxcclxuICAgIHdvbzoge1xyXG4gICAgICAgIHJlc2V0VmFyaWF0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldF92YXJpYXRpb25zXCIpLFxyXG4gICAgICAgIHByb2R1Y3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3RcIiksXHJcbiAgICAgICAgYWxsUHJvZHVjdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHNcIiksXHJcbiAgICAgICAgY2F0ZWdvcmllczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b28tZHJvcGRvd24tY2F0IC5wcm9kdWN0LWNhdGVnb3JpZXNcIiksXHJcbiAgICAgICAgdmVydGljYWxUaHVtYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgdGh1bWJzVmVydGljYWxMYXlvdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgZ3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1ncmlkXCIpLFxyXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtbGlzdFwiKSxcclxuICAgICAgICBwcm9kdWN0VGFiczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtdGFic1wiKSxcclxuICAgICAgICBwcm9kdWN0Q2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLmNhcnRcIiksXHJcbiAgICAgICAgcHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtcmV2aWV3LWxpbmtcIiksXHJcbiAgICAgICAgcXVhbnRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpLFxyXG4gICAgICAgIGNoZWNrb3V0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ud29vY29tbWVyY2UtY2hlY2tvdXRcIiksXHJcbiAgICAgICAgY2hlY2tvdXRMb2dpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9sb2dpblwiKSxcclxuICAgICAgICBjaGVja291dENvdXBvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9jb3Vwb25cIiksXHJcbiAgICAgICAgY2hlY2tvdXRUaW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtY2hlY2tvdXQtdGltZWxpbmVcIiksXHJcbiAgICAgICAgY3VzdG9tZXJCaWxsaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9iaWxsaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgY3VzdG9tZXJTaGlwcGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfc2hpcHBpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBvcmRlclJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9yZXZpZXdcIiksXHJcbiAgICAgICAgb3JkZXJDaGVja291dFBheW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfY2hlY2tvdXRfcGF5bWVudFwiKSxcclxuICAgICAgICBwbGFjZU9yZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpLFxyXG4gICAgICAgIGZvcm1BY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fYWN0aW9uc1wiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWFjY291bnQtbGlua3NcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZUJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9sb2dpblwiKSxcclxuICAgICAgICBxdWFudGl0eUlucHV0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3OiB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTVN0cmluZyA9IHt9O1xyXG4iLCJpbXBvcnQgXCIuL2xpYi9lbGVtZW50XCI7XHJcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi90aGVtZS90aGVtZVwiO1xyXG5cclxuY2xhc3MgT2NlYW5XUCB7XHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4oXCJ1c2Ugc2NyaXB0XCIpO1xyXG5cclxud2luZG93Lm9jZWFud3AgPSBuZXcgT2NlYW5XUCgpO1xyXG5vY2VhbndwLnN0YXJ0KCk7XHJcbiIsIkVsZW1lbnQucHJvdG90eXBlLm9jZWFuUGFyZW50cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gW107XHJcbiAgICB2YXIgZWxlbSA9IHRoaXM7XHJcbiAgICB2YXIgaXNoYXZlc2VsZWN0b3IgPSBzZWxlY3RvciAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHdoaWxlICgoZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudCkgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzaGF2ZXNlbGVjdG9yIHx8IGVsZW0ubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgcGFkZGluZ1RvcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBhZGRpbmdUb3A7XHJcbiAgICBsZXQgcGFkZGluZ0JvdHRvbSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBhZGRpbmdCb3R0b207XHJcbiAgICBsZXQgbWFyZ2luVG9wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWFyZ2luVG9wO1xyXG4gICAgbGV0IG1hcmdpbkJvdHRvbSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1hcmdpbkJvdHRvbTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcInBhZGRpbmdcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9uIC8gMS4yfW1zYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBwYWRkaW5nVG9wO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdCb3R0b207XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b207XHJcbiAgICB9LCAxMCk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIlxyXG4gICAgICAgID8gc2xpZGVEb3duKGVsZW1lbnQsIGR1cmF0aW9uKVxyXG4gICAgICAgIDogc2xpZGVVcChlbGVtZW50LCBkdXJhdGlvbik7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsIGRpc3BsYXksIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGZhZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KGVsZW1lbnQuc3R5bGUub3BhY2l0eSk7XHJcblxyXG4gICAgICAgIGlmICgob3BhY2l0eSArPSAwLjEpIDw9IDEpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID09PSAxICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlT3V0ID0gKGVsZW1lbnQsIGRpc3BsYXksIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGZhZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBwYXJzZUZsb2F0KGVsZW1lbnQuc3R5bGUub3BhY2l0eSk7XHJcblxyXG4gICAgICAgIGlmICgob3BhY2l0eSAtPSAwLjEpIDwgMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPT09IDAgJiYgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc2libGUgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGUpID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSAobykgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcclxuICAgICAgICA6IG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dNYXNvbnJ5IHtcbiAgICBpc290b3A7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00uYmxvZy5tYXNvbnJ5R3JpZHM/LmZvckVhY2goKGJsb2dNYXNvbnJ5R3JpZCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGJsb2dNYXNvbnJ5R3JpZCwgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc290b3AgPSBuZXcgSXNvdG9wZShibG9nTWFzb25yeUdyaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5pc290b3BlLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IG9wdGlvbnMuaXNSVEwgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IFJlc3BvbnNpdmVBdXRvSGVpZ2h0IGZyb20gXCJyZXNwb25zaXZlLWF1dG8taGVpZ2h0XCI7XHJcblxyXG5jbGFzcyBFcXVhbEhlaWdodEVsZW1lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKSkge1xyXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2l2ZUF1dG9IZWlnaHQoXCIuYmxvZy1lcXVhbC1oZWlnaHRzIC5ibG9nLWVudHJ5LWlubmVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXRjaC1oZWlnaHQtZ3JpZCAubWF0Y2gtaGVpZ2h0LWNvbnRlbnRcIikpIHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KFwiLm1hdGNoLWhlaWdodC1ncmlkIC5tYXRjaC1oZWlnaHQtY29udGVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVhbEhlaWdodEVsZW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gICAgI2xhc3RXaW5kb3dXaWR0aDtcclxuICAgICNsYXN0V2luZG93SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghRE9NLm1haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLiNvbldpbmRvd0xvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93TG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy4jcGFyYWxsYXhGb290ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuI2xhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy4jbGFzdFdpbmRvd0hlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2ZpeGVkRm9vdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhlZEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLWZpeGVkLWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCEhRE9NLldQQWRtaW5iYXIpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gRE9NLldQQWRtaW5iYXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1haW4uc3R5bGUubWluSGVpZ2h0ID1cclxuICAgICAgICAgICAgRE9NLm1haW4ub2Zmc2V0SGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAtIERPTS5odG1sLm9mZnNldEhlaWdodCAtIG9mZnNldCkgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICNwYXJhbGxheEZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXBhcmFsbGF4LWZvb3RlclwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIERPTS5tYWluLnN0eWxlLm1hcmdpbkJvdHRvbSA9IERPTS5mb290ZXIucGFyYWxsYXg/Lm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgVmVydGljYWxIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL3ZlcnRpY2FsXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbEhlYWRlcigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFZlcnRpY2FsSGVhZGVyIHtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5oZWFkZXIudmVydGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIERPTS5oZWFkZXIudmVydGljYWxcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuOm5vdCguYnRuKSA+IGFcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51TGluay5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD1cIjBcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPyBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxyXG4gICAgICAgICAgICAgICAgOiBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG5cclxuICAgICAgICBuZXcgUGVyZmVjdFNjcm9sbGJhcihET00uaGVhZGVyLnZlcnRpY2FsLCB7XHJcbiAgICAgICAgICAgIHdoZWVsU3BlZWQ6IDAuNSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxZOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBwbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnZlcnRpY2FsSGVhZGVyVGFyZ2V0ID09IFwibGlua1wiID8gcGx1c0ljb24ucGFyZW50Tm9kZSA6IHBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgaWYgKCFtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgRE9NLmhlYWRlci52ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1IYXNDaGlsZHJlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gIT0gbWVudUl0ZW1IYXNDaGlsZHJlbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9jZWFuUGFyZW50cyhcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KChwYXJlbnRNZW51SXRlbSkgPT4gcGFyZW50TWVudUl0ZW0gPT0gbWVudUl0ZW1IYXNDaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1IYXNDaGlsZHJlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKG1lbnVJdGVtSGFzQ2hpbGRyZW4ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bihtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkLCAyMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHNsaWRlVXAobWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNvblRvZ2dsZU1lbnVCdG5DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtb3BlbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ2aC1vcGVuZWRcIik7XHJcbiAgICAgICAgICAgIERPTS5tZW51LnZlcnRpY2FsLnRvZ2dsZU1lbnVCdG4ucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIikuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcclxuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcclxuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5oZWFkZXIudmVydGljYWw/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzID8gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV0gOiBcIlwiO1xyXG5cclxuICAgICAgICBuYXZMYXN0RWxlbWVudC5zdHlsZS5vdXRsaW5lID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlci1zdHlsZVwiKSkge1xyXG4gICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXNjS2V5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZW50ZXJLZXkgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikgJiZcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmgtY2xvc2VkXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5hdkZpcnN0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xyXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTWVudSBmcm9tIFwiLi9tZW51L2Z1bGwtc2NyZWVuXCI7XHJcbmltcG9ydCBNZWdhTWVudSBmcm9tIFwiLi9tZW51L21lZ2FcIjtcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTWVudSgpO1xyXG4gICAgICAgIHRoaXMubWVnYSA9IG5ldyBNZWdhTWVudSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkubmF2LW5vLWNsaWNrID4gYVwiKS5mb3JFYWNoKChub0NsaWNrTWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbm9DbGlja01lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk5vQ2xpY2tNZW51SXRlbUNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLnNmLW1lbnVcIikuZm9yRWFjaCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKTtcclxuICAgICAgICAgICAgcGFyZW50TWVudUl0ZW1zLmZvckVhY2goKHBhcmVudE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VlbnRlcik7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLiNvblBhcmVudE1lbnVJdGVtTW91c2VsZWF2ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ob0NsaWNrTWVudUl0ZW1DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblBhcmVudE1lbnVJdGVtTW91c2VlbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudE1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gcGFyZW50TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xyXG5cclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwic2ZIb3ZlclwiKTtcclxuICAgICAgICBmYWRlSW4oc3ViTWVudSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblBhcmVudE1lbnVJdGVtTW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudE1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gcGFyZW50TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xyXG5cclxuICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2ZIb3ZlclwiKTtcclxuICAgICAgICBmYWRlT3V0KHN1Yk1lbnUpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEZ1bGxTY3JlZW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hcnJvd1wiKS5mb3JFYWNoKChwbHVzQnRuKSA9PiB7XG4gICAgICAgICAgICBwbHVzQnRuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYSA+IC50ZXh0LXdyYXAgPiBzcGFuLm5hdi1hcnJvdywgI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgID8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUxpbmtDbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUhhc2h0YWdMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVNZW51QnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoIXRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhpdFwiKSkge1xuICAgICAgICAgICAgdGhpcy4jb3Blbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpO1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsLnN1Yi1tZW51XCIpO1xuXG4gICAgICAgIGlmICghKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1Yk1lbnUpLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTWVudUhhc2h0YWdMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgfTtcblxuICAgICNvcGVuTWVudSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmhlYWRlci5mdWxsU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLmxvZ28/LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG4gICAgfTtcblxuICAgICNjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlT3V0KERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudSk7XG5cbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duXCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51Py5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bjtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5uYXYtYXJyb3csIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1hcnJvd1wiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1lbnU7XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIE1lZ2FNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51Q29udGVudHMuZm9yRWFjaCgobWVudUNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUNvbnRlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtTGVmdE9mZnNldCA9IG9mZnNldChtZW51SXRlbSkubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250ZW50V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51Q29udGVudCkud2lkdGgpO1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsTWFyZ2luO1xuXG4gICAgICAgICAgICBpZiAobWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUNvbnRlbnRXaWR0aCAvIDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gMTA7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVDb250ZW50V2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSBtZW51SXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5pc1JUTCkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBgLSR7aG9yaXpvbnRhbFBvc2l0aW9ufXB4YDtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnJpZ2h0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtob3Jpem9udGFsTWFyZ2lufXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1MZWZ0T2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiArXG4gICAgICAgICAgICAgICAgICAgIG1lbnVDb250ZW50V2lkdGggPFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSBtZW51SXRlbUxlZnRPZmZzZXQgLSBtZW51SXRlbS5vZmZzZXRXaWR0aCAtIDEwXG4gICAgICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5tZWdhLm1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25NZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb3BiYXIgbWVudSBpdGVtc1xuICAgICAgICBET00ubWVudS5tZWdhLnRvcGJhck1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI29uTWVudUl0ZW1Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKVxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbi13cmFwID4gLmNvbnRhaW5lclwiKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLWlubmVyXCIpO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNvblRvcGJhck1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci50b3BiYXI7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1Nb3VzZUVudGVyKHdyYXBwZXIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgI21lbnVJdGVtTW91c2VFbnRlciA9ICh3cmFwcGVyLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwiLm1lZ2FtZW51XCIpO1xuICAgICAgICBsZXQgbGVmdFBvc2l0aW9uID0gcGFyc2VJbnQob2Zmc2V0KG1lbnVJdGVtKS5sZWZ0IC0gb2Zmc2V0KHdyYXBwZXIpLmxlZnQgKyAxKTtcblxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJib3hlZC1sYXlvdXRcIikpIHtcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvbiAtIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2xlZnRQb3NpdGlvbn1weGA7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUud2lkdGggPSBgJHt3cmFwcGVyLm9mZnNldFdpZHRofXB4YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWdhTWVudTtcbiIsImltcG9ydCBEcm9wRG93bk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZHJvcC1kb3duXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgU2lkZWJhck1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvc2lkZWJhclwiO1xyXG5cclxuY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duID0gbmV3IERyb3BEb3duTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhciA9IG5ldyBTaWRlYmFyTW9iaWxlTWVudSgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc2xpZGVVcCwgc2xpZGVEb3duLCBzbGlkZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRHJvcERvd25Nb2JpbGVNZW51IHtcbiAgICAjaXNNZW51T3BlbjtcbiAgICAjbWVudUl0ZW1zVG9nZ2xlSWNvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLW1vYmlsZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm1lbnVJdGVtc0hhc0NoaWxkcmVuPy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkcm9wZG93bi10b2dnbGVcIjtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zVG9nZ2xlSWNvbiA9XG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIlxuICAgICAgICAgICAgICAgID8gRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXG4gICAgICAgICAgICAgICAgOiBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbCgnbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQ2xpY2spO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24/LmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlTWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHNsaWRlVG9nZ2xlKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDUwMCk7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUNsb3NlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCEhRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcikge1xuICAgICAgICAgICAgc2xpZGVVcChET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyLCAyMDApO1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jb25NZW51Q2xvc2VDbGljaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkhhbWJ1cmdlckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSAhdGhpcy4jaXNNZW51T3BlbjtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRoaXMuI2lzTWVudU9wZW4pO1xuICAgIH07XG5cbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5tZW51SXRlbXNIYXNDaGlsZHJlbj8uZm9yRWFjaCgobWVudUl0ZW1IYXNDaGlsZHJlbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gIT0gbWVudUl0ZW1IYXNDaGlsZHJlbiAmJlxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9jZWFuUGFyZW50cyhcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KChwYXJlbnRNZW51SXRlbSkgPT4gcGFyZW50TWVudUl0ZW0gPT0gbWVudUl0ZW1IYXNDaGlsZHJlbilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1IYXNDaGlsZHJlbj8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVVcChtZW51SXRlbUhhc0NoaWxkcmVuLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAobWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5uYXY/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoISFjbG9zZUljb24pIHtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi10b2dnbGVcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duTW9iaWxlTWVudTtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNsaWRlVXAsIHNsaWRlRG93biwgZmFkZUluLCBmYWRlT3V0LCB2aXNpYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTW9iaWxlTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnVsbHNjcmVlbi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW5cbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxuICAgICAgICAgICAgPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiB0YWJpbmRleD0wPjwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEgPiBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhW2hyZWY9XCIjXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ecm9wb3duVG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25Ecm9wb3duVG9nZ2xlSWNvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNtb2JpbGUtZnVsbHNjcmVlbiAuZnMtZHJvcGRvd24tbWVudSBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuICNtb2JpbGUtbmF2IGxpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAjbW9iaWxlLWZ1bGxzY3JlZW4gYS5jbG9zZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xvc2VJY29uQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25NZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZUluKERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4pO1xuXG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICBjb25zdCBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuID0gRE9NLmh0bWwuaW5uZXJXaWR0aDtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuIC0gaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gKyBcInB4XCI7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbi5xdWVyeVNlbGVjdG9yKFwiYS5jbG9zZVwiKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25DbG9zZUljb25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZShET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKSkge1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgZmFkZU91dChET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLmRyb3Bkb3duXCIpLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsLnN1Yi1tZW51XCIpLmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDIwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Ecm9wb3duVG9nZ2xlSWNvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtTGluay5jbG9zZXN0KFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcblxuICAgICAgICBpZiAoISh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJNZW51KS5kaXNwbGF5ID09PSBcIm5vbmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvbiBpbiB0aGUgbWVudSBtb2RhbC5cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsU2NyZWVuTW9iaWxlTWVudTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTaWRlYmFyTW9iaWxlTWVudSB7XHJcbiAgICAjaXNNZW51T3BlbjtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuICAgICNzaWRlYmFyVG9nZ2xlTWVudUJ0bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2lkclNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW1vYmlsZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0U2lkclBsdWdpbigpO1xyXG5cclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnPHNwYW4gY2xhc3M9XCJzaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PTA+PC9zcGFuPicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI3N0YXJ0U2lkclBsdWdpbiA9ICgpID0+IHtcclxuICAgICAgICBzaWRyLm5ldyhcIi5tb2JpbGUtbWVudVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2lkclwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc2lkclNvdXJjZSxcclxuICAgICAgICAgICAgc2lkZTogb3B0aW9ucy5zaWRyU2lkZSxcclxuICAgICAgICAgICAgZGlzcGxhY2U6IG9wdGlvbnMuc2lkckRpc3BsYWNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICByZW5hbWluZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGltaW5nOiBcImVhc2VcIixcclxuICAgICAgICAgICAgYmluZDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICBvbk9wZW4oKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zaWRyLWNsYXNzLXRvZ2dsZS1zaWRyLWNsb3NlXCIpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIuc2l0ZS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCAnPGRpdiBjbGFzcz1cIm9jZWFud3Atc2lkci1vdmVybGF5XCIgdGFiaW5kZXg9MD48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLXNpZHItb3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWRlSW4ob3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmUgPiB1bFwiKS5mb3JFYWNoKChzdWJNZW51QWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudUFjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIikuZm9yRWFjaCgobWVudUl0ZW1BY3RpdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1zaWRyLW92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFkZU91dChvdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWZhXCJdJykuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb24uY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnNpZHItY2xhc3MtZmEuKj9cXGIvZywgXCJmYVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZHIgW2NsYXNzKj1cInNpZHItY2xhc3MtaWNvblwiXScpLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJzaWRyLWNsYXNzLWljb24tLio/XFxiL2csIFwiaWNvbi1cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25IYW1idXJnZXJCdG5DbGljayk7XHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNpZGViYXJDbG9zZU1lbnVCdG5DbGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uPy5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jY2xvc2VTaWRyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zaWRyLWNsYXNzLW5hdi1uby1jbGljayA+IGFcIik/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSGFtYnVyZ2VyQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRoaXMuI2lzTWVudU9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25TaWRlYmFyQ2xvc2VNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICghbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLmZvckVhY2goKHBhcmVudE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gIT0gcGFyZW50TWVudUl0ZW0gJiZcclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub2NlYW5QYXJlbnRzKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KChuZXN0ZWRNZW51SXRlbSkgPT4gbmVzdGVkTWVudUl0ZW0gPT0gcGFyZW50TWVudUl0ZW0pXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRNZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVXAocGFyZW50TWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZURvd24obWVudUl0ZW0ubGFzdEVsZW1lbnRDaGlsZCwgMjAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZVVwKG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQsIDIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAqL1xyXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRyLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcclxuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcclxuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bjtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNzaWRyXCIpXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XHJcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoZXNjS2V5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xyXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2Nsb3NlU2lkciA9ICgpID0+IHtcclxuICAgICAgICBzaWRyLmNsb3NlKFwic2lkclwiKTtcclxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyTW9iaWxlTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJpbmZpbml0ZS1zY3JvbGxcIjtcblxuY2xhc3MgT1dJbmZpbml0ZVNjcm9sbCB7XG4gICAgI2luZmluaXRlU2Nyb2xsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdiAmJlxuICAgICAgICAgICAgISFET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsTmF2LnF1ZXJ5U2VsZWN0b3IoXCIub2xkZXItcG9zdHMgYVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsID0gbmV3IEluZmluaXRlU2Nyb2xsKERPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxXcmFwcGVyLCB7XG4gICAgICAgICAgICBwYXRoOiBcIi5vbGRlci1wb3N0cyBhXCIsXG4gICAgICAgICAgICBhcHBlbmQ6IFwiLml0ZW0tZW50cnlcIixcbiAgICAgICAgICAgIHN0YXR1czogXCIuc2Nyb2xsZXItc3RhdHVzXCIsXG4gICAgICAgICAgICBoaWRlTmF2OiBcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIsXG4gICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcImxvYWRcIiwgZnVuY3Rpb24gKGJvZHksIHBhdGgsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWVudHJ5XCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlT3V0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQoaXRlbXMsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBCbG9nIG1hc29ucnkgaXNvdG9wZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5ibG9nTWFzb25yeS5pc290b3AuYXBwZW5kZWQoaXRlbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeCBHYWxsZXJ5IHBvc3RzXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnktZm9ybWF0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmJsb2dNYXNvbnJ5Lmlzb3RvcC5sYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRXF1YWwgaGVpZ2h0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1tYXRjaGhlaWdodFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmVxdWFsSGVpZ2h0RWxlbWVudHMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHYWxsZXJ5IHBvc3RzIHNsaWRlclxuICAgICAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tY2Fyb3VzZWxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd1NsaWRlci5zdGFydChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd0xpZ2h0Ym94LmluaXRQaG90b1N3aXBlRnJvbURPTShcIi5nYWxsZXJ5LWZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHYWxsZXJ5IHBvc3RzIGxpZ2h0Ym94XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBQb3N0IGltYWdlIGxpZ2h0Ym94XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcImEub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5vcGVuTGlnaHRib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yY2UgdGhlIGltYWdlcyB0byBiZSBwYXJzZWQgdG8gZml4IFNhZmFyaSBpc3N1ZVxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpPy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vdXRlckhUTUwgPSBpbWcub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbC5vbihcImFwcGVuZFwiLCBmdW5jdGlvbiAoYm9keSwgcGF0aCwgaXRlbXMsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlSW4oaXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XSW5maW5pdGVTY3JvbGw7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XTGlnaHRib3gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2FkZExpZ2h0Ym94Q2xhc3MoKTtcbiAgICAgICAgdGhpcy4jYWRkUGhvdG9Td2lwZVRvRE9NKCk7XG4gICAgICAgIHRoaXMuI2luaXQoKTtcbiAgICB9O1xuXG4gICAgI2luaXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIFBvc3QgZ2FsbGVyeVxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWZvcm1hdFwiKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGhvdG9Td2lwZUZyb21ET00oXCIuZ2FsbGVyeS1mb3JtYXRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbWFnZSBsaWdodGJveFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYS5vY2VhbndwLWxpZ2h0Ym94XCIpPy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3BlbkxpZ2h0Ym94KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9wZW5MaWdodGJveCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBwc3dwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHN3cFwiKVswXTtcblxuICAgICAgICBjb25zdCBpbWFnZUxpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGUoXG4gICAgICAgICAgICBwc3dwRWxlbWVudCxcbiAgICAgICAgICAgIFBob3RvU3dpcGVVSV9EZWZhdWx0LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgICAgICAgICAgICAgICAgICB3OiAxOTIwLFxuICAgICAgICAgICAgICAgICAgICBoOiAxMjAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNob3dBbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICBoaWRlQW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaW1hZ2VMaWdodGJveC5pbml0KCk7XG4gICAgfTtcblxuICAgICNhZGRMaWdodGJveENsYXNzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSAuZW50cnktY29udGVudCBhLCBib2R5IC5lbnRyeSBhXCIpPy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBpZiAoISFsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUZvcm1hdHMgPSB0aGlzLiNpbWFnZUZvcm1hdHMoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VGb3JtYXRzTWFzayA9IDA7XG5cbiAgICAgICAgICAgICAgICBpbWFnZUZvcm1hdHMuZm9yRWFjaCgoaW1hZ2VGb3JtYXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VGb3JtYXRzTWFzayArPSBTdHJpbmcobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKS5pbmRleE9mKFwiLlwiICsgaW1hZ2VGb3JtYXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRm9ybWF0c01hc2sgPT09IC0xMykge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJuby1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIndvby10aHVtYm5haWxcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX2ltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwib2NlYW53cC1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikgJiYgbGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktaWNvblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5LWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNpbWFnZUZvcm1hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbXCJibXBcIiwgXCJnaWZcIiwgXCJqcGVnXCIsIFwianBnXCIsIFwicG5nXCIsIFwidGlmZlwiLCBcInRpZlwiLCBcImpmaWZcIiwgXCJqcGVcIiwgXCJzdmdcIiwgXCJtcDRcIiwgXCJvZ2dcIiwgXCJ3ZWJtXCJdO1xuICAgIH07XG5cbiAgICAjYWRkUGhvdG9Td2lwZVRvRE9NID0gKCkgPT4ge1xuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzd3BcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIERPTS5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgICAgICBgPCEtLSBSb290IGVsZW1lbnQgb2YgUGhvdG9Td2lwZS4gTXVzdCBoYXZlIGNsYXNzIHBzd3AuIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQmFja2dyb3VuZCBvZiBQaG90b1N3aXBlLiBcbiAgICAgICAgICAgICAgICAgICAgSXQncyBhIHNlcGFyYXRlIGVsZW1lbnQgYXMgYW5pbWF0aW5nIG9wYWNpdHkgaXMgZmFzdGVyIHRoYW4gcmdiYSgpLiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fYmdcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gU2xpZGVzIHdyYXBwZXIgd2l0aCBvdmVyZmxvdzpoaWRkZW4uIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zY3JvbGwtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIENvbnRhaW5lciB0aGF0IGhvbGRzIHNsaWRlcy4gXG4gICAgICAgICAgICAgICAgICAgICAgICBQaG90b1N3aXBlIGtlZXBzIG9ubHkgMyBvZiB0aGVtIGluIHRoZSBET00gdG8gc2F2ZSBtZW1vcnkuXG4gICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBtb2RpZnkgdGhlc2UgMyBwc3dwX19pdGVtIGVsZW1lbnRzLCBkYXRhIGlzIGFkZGVkIGxhdGVyIG9uLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmF1bHQgKFBob3RvU3dpcGVVSV9EZWZhdWx0KSBpbnRlcmZhY2Ugb24gdG9wIG9mIHNsaWRpbmcgYXJlYS4gQ2FuIGJlIGNoYW5nZWQuIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdWkgcHN3cF9fdWktLWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3RvcC1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICBDb250cm9scyBhcmUgc2VsZi1leHBsYW5hdG9yeS4gT3JkZXIgY2FuIGJlIGNoYW5nZWQuIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb3VudGVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tY2xvc2VcIiB0aXRsZT1cIkNsb3NlIChFc2MpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXNoYXJlXCIgdGl0bGU9XCJTaGFyZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1mc1wiIHRpdGxlPVwiVG9nZ2xlIGZ1bGxzY3JlZW5cIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tem9vbVwiIHRpdGxlPVwiWm9vbSBpbi9vdXRcIj48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJlbG9hZGVyIGRlbW8gaHR0cHM6Ly9jb2RlcGVuLmlvL2RpbXNlbWVub3YvcGVuL3l5QldvUiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGVsZW1lbnQgd2lsbCBnZXQgY2xhc3MgcHN3cF9fcHJlbG9hZGVyLS1hY3RpdmUgd2hlbiBwcmVsb2FkZXIgaXMgcnVubmluZyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2ljblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19jdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2RvbnV0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtbW9kYWwgcHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiBwc3dwX19zaW5nbGUtdGFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLXRvb2x0aXBcIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1sZWZ0XCIgdGl0bGU9XCJQcmV2aW91cyAoYXJyb3cgbGVmdClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0XCIgdGl0bGU9XCJOZXh0IChhcnJvdyByaWdodClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jYXB0aW9uX19jZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgaW5pdFBob3RvU3dpcGVGcm9tRE9NID0gKGdhbGxlcnlTZWxlY3RvcikgPT4ge1xuICAgICAgICAvLyBwYXJzZSBzbGlkZSBkYXRhICh1cmwsIHRpdGxlLCBzaXplIC4uLikgZnJvbSBET00gZWxlbWVudHNcbiAgICAgICAgLy8gKGNoaWxkcmVuIG9mIGdhbGxlcnlTZWxlY3RvcilcbiAgICAgICAgdmFyIHBhcnNlVGh1bWJuYWlsRWxlbWVudHMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciB0aHVtYkVsZW1lbnRzID0gZWwuY2hpbGROb2RlcyxcbiAgICAgICAgICAgICAgICBudW1Ob2RlcyA9IHRodW1iRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gW10sXG4gICAgICAgICAgICAgICAgbGlua0VsLFxuICAgICAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICAgICAgaXRlbTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Ob2RlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGlua0VsID0gdGh1bWJFbGVtZW50c1tpXTsgLy8gPGE+IGVsZW1lbnRcblxuICAgICAgICAgICAgICAgIC8vIGluY2x1ZGUgb25seSBlbGVtZW50IG5vZGVzXG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaXplID0gWzE5MjAsIDEyMDBdO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHNsaWRlIG9iamVjdFxuICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogbGlua0VsLmdldEF0dHJpYnV0ZShcImhyZWZcIiksXG4gICAgICAgICAgICAgICAgICAgIHc6IHBhcnNlSW50KHNpemVbMF0sIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgaDogcGFyc2VJbnQoc2l6ZVsxXSwgMTApLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAobGlua0VsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gPGltZz4gdGh1bWJuYWlsIGVsZW1lbnQsIHJldHJpZXZpbmcgdGh1bWJuYWlsIHVybFxuICAgICAgICAgICAgICAgICAgICBpdGVtLm1zcmMgPSBsaW5rRWwuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0uZWwgPSBsaW5rRWw7IC8vIHNhdmUgbGluayB0byBlbGVtZW50IGZvciBnZXRUaHVtYkJvdW5kc0ZuXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZpbmQgbmVhcmVzdCBwYXJlbnQgZWxlbWVudFxuICAgICAgICB2YXIgY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwgJiYgKGZuKGVsKSA/IGVsIDogY2xvc2VzdChlbC5wYXJlbnROb2RlLCBmbikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHRyaWdnZXJzIHdoZW4gdXNlciBjbGlja3Mgb24gdGh1bWJuYWlsXG4gICAgICAgIHZhciBvblRodW1ibmFpbHNDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgZVRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gZmluZCByb290IGVsZW1lbnQgb2Ygc2xpZGVcbiAgICAgICAgICAgIHZhciBjbGlja2VkTGlzdEl0ZW0gPSBjbG9zZXN0KGVUYXJnZXQsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJBXCIgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1saWdodGJveFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWNsaWNrZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IChlLnJldHVyblZhbHVlID0gZmFsc2UpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLy8gZmluZCBpbmRleCBvZiBjbGlja2VkIGl0ZW0gYnkgbG9vcGluZyB0aHJvdWdoIGFsbCBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgLy8gYWx0ZXJuYXRpdmVseSwgeW91IG1heSBkZWZpbmUgaW5kZXggdmlhIGRhdGEtIGF0dHJpYnV0ZVxuICAgICAgICAgICAgdmFyIGNsaWNrZWRHYWxsZXJ5ID0gY2xpY2tlZExpc3RJdGVtLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IGNsaWNrZWRMaXN0SXRlbS5wYXJlbnROb2RlLmNoaWxkTm9kZXMsXG4gICAgICAgICAgICAgICAgbnVtQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgaW5kZXg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hpbGROb2RlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbaV0gPT09IGNsaWNrZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG5vZGVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIG9wZW4gUGhvdG9Td2lwZSBpZiB2YWxpZCBpbmRleCBmb3VuZFxuICAgICAgICAgICAgICAgIG9wZW5QaG90b1N3aXBlKGluZGV4LCBjbGlja2VkR2FsbGVyeSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGFyc2UgcGljdHVyZSBpbmRleCBhbmQgZ2FsbGVyeSBpbmRleCBmcm9tIFVSTCAoIyZwaWQ9MSZnaWQ9MilcbiAgICAgICAgdmFyIHBob3Rvc3dpcGVQYXJzZUhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB7fTtcblxuICAgICAgICAgICAgaWYgKGhhc2gubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YXJzID0gaGFzaC5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgaWYgKHBhaXIubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmFtcy5naWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuZ2lkID0gcGFyc2VJbnQocGFyYW1zLmdpZCwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvcGVuUGhvdG9Td2lwZSA9IGZ1bmN0aW9uIChpbmRleCwgZ2FsbGVyeUVsZW1lbnQsIGRpc2FibGVBbmltYXRpb24sIGZyb21VUkwpIHtcbiAgICAgICAgICAgIHZhciBwc3dwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHN3cFwiKVswXSxcbiAgICAgICAgICAgICAgICBnYWxsZXJ5LFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgaXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW1zID0gcGFyc2VUaHVtYm5haWxFbGVtZW50cyhnYWxsZXJ5RWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIGRlZmluZSBvcHRpb25zIChpZiBuZWVkZWQpXG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBnYWxsZXJ5IGluZGV4IChmb3IgVVJMKVxuICAgICAgICAgICAgICAgIGdhbGxlcnlVSUQ6IGdhbGxlcnlFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHN3cC11aWRcIiksXG5cbiAgICAgICAgICAgICAgICBnZXRUaHVtYkJvdW5kc0ZuOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIE9wdGlvbnMgLT4gZ2V0VGh1bWJCb3VuZHNGbiBzZWN0aW9uIG9mIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGh1bWJuYWlsID0gaXRlbXNbaW5kZXhdLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdLCAvLyBmaW5kIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVlTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QgPSB0aHVtYm5haWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcmVjdC5sZWZ0LCB5OiByZWN0LnRvcCArIHBhZ2VZU2Nyb2xsLCB3OiByZWN0LndpZHRoIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFBob3RvU3dpcGUgb3BlbmVkIGZyb20gVVJMXG4gICAgICAgICAgICBpZiAoZnJvbVVSTCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmdhbGxlcnlQSURzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHJlYWwgaW5kZXggd2hlbiBjdXN0b20gUElEcyBhcmUgdXNlZFxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vcGhvdG9zd2lwZS5jb20vZG9jdW1lbnRhdGlvbi9mYXEuaHRtbCNjdXN0b20tcGlkLWluLXVybFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXNbal0ucGlkID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBVUkwgaW5kZXhlcyBzdGFydCBmcm9tIDFcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IHBhcnNlSW50KGluZGV4LCAxMCkgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IHBhcnNlSW50KGluZGV4LCAxMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGV4aXQgaWYgaW5kZXggbm90IGZvdW5kXG4gICAgICAgICAgICBpZiAoaXNOYU4ob3B0aW9ucy5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGlkZUFuaW1hdGlvbkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUGFzcyBkYXRhIHRvIFBob3RvU3dpcGUgYW5kIGluaXRpYWxpemUgaXRcbiAgICAgICAgICAgIGdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZShwc3dwRWxlbWVudCwgUGhvdG9Td2lwZVVJX0RlZmF1bHQsIGl0ZW1zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgZ2FsbGVyeSBlbGVtZW50cyBhbmQgYmluZCBldmVudHNcbiAgICAgICAgdmFyIGdhbGxlcnlFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ2FsbGVyeVNlbGVjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdhbGxlcnlFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBzd3AtdWlkXCIsIGkgKyAxKTtcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5vbmNsaWNrID0gb25UaHVtYm5haWxzQ2xpY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBVUkwgYW5kIG9wZW4gZ2FsbGVyeSBpZiBpdCBjb250YWlucyAjJnBpZD0zJmdpZD0xXG4gICAgICAgIHZhciBoYXNoRGF0YSA9IHBob3Rvc3dpcGVQYXJzZUhhc2goKTtcbiAgICAgICAgaWYgKGhhc2hEYXRhLnBpZCAmJiBoYXNoRGF0YS5naWQpIHtcbiAgICAgICAgICAgIG9wZW5QaG90b1N3aXBlKGhhc2hEYXRhLnBpZCwgZ2FsbGVyeUVsZW1lbnRzW2hhc2hEYXRhLmdpZCAtIDFdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XTGlnaHRib3g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE9XU2xpZGVyIHtcbiAgICBmbGlja2l0eTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIikpID0+IHtcbiAgICAgICAgdGhpcy5mbGlja2l0eSA9IFtdO1xuXG4gICAgICAgIGVsZW1lbnRzPy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGlja2l0eSA9IG5ldyBGbGlja2l0eShlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLWVudHJ5LWltYWdlXCIpID8gZmFsc2UgOiA2MDAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJydGxcIikgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW46IHRydWUsXG4gICAgICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mbGlja2l0eS5wdXNoKGZsaWNraXR5KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dTbGlkZXI7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFNjcm9sbEVmZmVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1wcm9kdWN0XCIpICYmICFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1sb2NhbC1zY3JvbGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5sb2NhbFtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5sb2NhbCBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLnNpZHItY2xhc3MtbWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoc2Nyb2xsSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxJdGVtQ2xpY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2Nyb2xsSXRlbUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib213LW9wZW4tbW9kYWxcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm9tdy1vcGVuLW1vZGFsXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBzY3JvbGxJdGVtLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKFwiI1wiKSkuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkICE9IFwiXCIgJiYgISF0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRhcmdldCkudG9wIC0gdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtIHRoaXMuI2dldFRvcGJhckhlaWdodCgpIC0gdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00uYm9keS5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjZ2V0QWRtaW5CYXJIZWlnaHQgPSAoKSA9PiAoISFET00uV1BBZG1pbmJhciA/IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodCA6IDApO1xyXG5cclxuICAgICNnZXRUb3BiYXJIZWlnaHQgPSAoKSA9PlxyXG4gICAgICAgICEhRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyICYmIERPTS5oZWFkZXIudG9wYmFyV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtYmFyLXN0aWNreVwiKVxyXG4gICAgICAgICAgICA/IERPTS5oZWFkZXIudG9wYmFyV3JhcHBlci5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICNnZXRTdGlja3lIZWFkZXJIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIGlmICghRE9NLmhlYWRlci5zaXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgYm90dG9tSGVhZGVyV3JhcHBlciA9IERPTS5oZWFkZXIuc2l0ZS5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1oZWFkZXItd3JhcFwiKTtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodCA9IGJvdHRvbUhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpXHJcbiAgICAgICAgICAgICAgICA/IGJvdHRvbUhlYWRlcldyYXBwZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICA6ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcy1zdGlja3kgI3NpdGUtaGVhZGVyLWlubmVyXCIpXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXMtc3RpY2t5ICNzaXRlLWhlYWRlci1pbm5lclwiKS5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxFZmZlY3Q7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHt9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI29uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgRE9NLnNjcm9sbC5zY3JvbGxUb3A/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICAgICAgRE9NLnNjcm9sbC5nb1RvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wU2xhc2g/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNjcm9sbFRvcENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uV2luZG93U2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLnNjcm9sbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShET00uc2Nyb2xsLnNjcm9sbFRvcCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBmYWRlSW4oRE9NLnNjcm9sbC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGZhZGVPdXQoRE9NLnNjcm9sbC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvblNjcm9sbFRvcENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBET00uaHRtbC5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NLmJvZHkuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjcm9sbFRvcC5wYXJlbnROb2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwic2ZIb3ZlclwiKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgRHJvcERvd25TZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2Ryb3AtZG93blwiO1xyXG5pbXBvcnQgSGVhZGVyUmVwbGFjZVNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvaGVhZGVyLXJlcGxhY2VcIjtcclxuaW1wb3J0IE1vYmlsZVNlYXJjaEljb24gZnJvbSBcIi4vc2VhcmNoL21vYmlsZS1zZWFyY2gtaWNvblwiO1xyXG5pbXBvcnQgT3ZlcmxheVNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvb3ZlcmxheVwiO1xyXG5cclxuY2xhc3MgU2VhcmNoIHtcclxuICAgIG1vYmlsZU92ZXJsYXlJbnB1dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93biA9IG5ldyBEcm9wRG93blNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyUmVwbGFjZSA9IG5ldyBIZWFkZXJSZXBsYWNlU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gbmV3IE92ZXJsYXlTZWFyY2goKTtcclxuICAgICAgICB0aGlzLm1vYmlsZVNlYXJjaEljb24gPSBuZXcgTW9iaWxlU2VhcmNoSWNvbigpO1xyXG5cclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLXNlYXJjaC1vdmVybGF5LWlucHV0XCIpO1xyXG5cclxuICAgICAgICBET00uc2VhcmNoLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8udmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQuY2xvc2VzdChcImZvcm1cIikuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBET00uc2VhcmNoLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25JbnB1dEtleXVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBpbnB1dC5jbG9zZXN0KFwiZm9ybVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImNsYXNzIFNlYXJjaEJhc2Uge1xuICAgIGZvY3VzID0gKGZvcm0sIGlucHV0Q2xhc3MpID0+IHtcbiAgICAgICAgbGV0IGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZm9ybSkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDEwMDA7XG5cbiAgICAgICAgZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA9ICEhZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA/IGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gOiA2MDA7XG5cbiAgICAgICAgaWYgKGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihpbnB1dENsYXNzKS5mb2N1cygpO1xuICAgICAgICAgICAgfSwgZm9ybVRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXNlO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBEcm9wRG93blNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJkcm9wX2Rvd25cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyB0b2dnbGVTZWFyY2hCdG4sIGZvcm0gfSA9IERPTS5zZWFyY2guZHJvcERvd247XG5cbiAgICAgICAgdG9nZ2xlU2VhcmNoQnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCBcImlucHV0LmZpZWxkXCIpO1xuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWRyb3Bkb3duLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guZHJvcERvd24uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLnRvZ2dsZVNlYXJjaEJ0bj8ucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duU2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBIZWFkZXJSZXBsYWNlU2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcImhlYWRlcl9yZXBsYWNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2UuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlQnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRvY3VtZW50Q2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFET00ubWVudS5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIjM3MHB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET00ubWVudS5uYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBmb3JtLnN0eWxlLm1heFdpZHRoID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbiA+IHVsLmRyb3Bkb3duLW1lbnVcIik/Lm9mZnNldFdpZHRoICsgNjAgKyBcInB4XCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sICdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiXCI7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkRvY3VtZW50Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQ29sbGFwcyBzZWFyY2ggZm9ybVxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2Uuc2hvd1wiKSkge1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlPy5mb3JtPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5uYXY/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICNoYXNUb3BIZWFkZXIgPSAoKSA9PiBET00uaGVhZGVyLnNpdGU/LmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclJlcGxhY2VTZWFyY2g7XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBNb2JpbGVTZWFyY2hJY29uIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgI2VsZW1lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcImRpc2FibGVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzID0ge1xuICAgICAgICAgICAgZHJvcGRvd25TZWFyY2hJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uLWRyb3Bkb3duXCIpLFxuICAgICAgICAgICAgZHJvcGRvd25TZWFyY2hGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXlcIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaENsb3NlSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtb3ZlcmxheSAuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXG4gICAgICAgICAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkcm9wX2Rvd25cIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jdG9nZ2xlRHJvcGRvd25TZWFyY2gpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xpY2tEb2N1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwib3ZlcmxheVwiKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29wZW5PdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2hDbG9zZUljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNjbG9zZU92ZXJsYXlTZWFyY2gpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xpY2tPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjdG9nZ2xlRHJvcGRvd25TZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29wZW5PdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4odGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaCk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLCBcImlucHV0Lm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjY2xvc2VPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbGlja092ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tEb2N1bWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI2ljb24tc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVNlYXJjaEljb247XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIE92ZXJsYXlTZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwib3ZlcmxheVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5vdmVybGF5LmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2gub3ZlcmxheTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVJbihmb3JtKTtcblxuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sICdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2gub3ZlcmxheTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVPdXQoZm9ybSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXlTZWFyY2g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Qge1xyXG4gICAgI3NlbGVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3JlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBET00uc2VsZWN0VGFncy5mb3JFYWNoKChzZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0ID0gc2VsZWN0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgIFwiYWZ0ZXJlbmRcIixcclxuICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInRoZW1lLXNlbGVjdCAke3RoaXMuI3NlbGVjdC5jbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3RJbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuI3NlbGVjdC5vcHRpb25zW3RoaXMuI3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QuY2xhc3NMaXN0LmFkZChcImhhc0N1c3RvbVNlbGVjdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3N0eWxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnNJdGVtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNzdHlsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5oZWlnaHQgPSBcIjM0cHhcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuZm9udFNpemUgPSBcIjEzcHhcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuYXBwZWFyYW5jZSA9IFwibWVudWxpc3QtYnV0dG9uXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnNJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvbk1vdXNlZW50ZXIpO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLiNvbk1vdXNlbGVhdmUpO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMub25DaGFuZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Nb3VzZWVudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1zZWxlY3RIb3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uRG9jdW1lbnRSZWFkeSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbkRvY3VtZW50UmVhZHkgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBET00uc2VsZWN0VGFncy5mb3JFYWNoKChzZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0LnN0eWxlLndpZHRoID0gc2VsZWN0Lm5leHRTaWJsaW5nLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgU2VsZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbW9iaWxlLW1lbnVcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBCbG9nTWFzb25yeSBmcm9tIFwiLi9jb21wb25lbnRzL2Jsb2ctbWFzb25yeVwiO1xyXG5pbXBvcnQgU2Nyb2xsVG9wIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsLXRvcFwiO1xyXG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdFwiO1xyXG5pbXBvcnQgRXF1YWxIZWlnaHRFbGVtZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50c1wiO1xyXG5pbXBvcnQgT1dJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbFwiO1xyXG5pbXBvcnQgT1dTbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1zbGlkZXJcIjtcclxuaW1wb3J0IE9XTGlnaHRib3ggZnJvbSBcIi4vY29tcG9uZW50cy9vdy1saWdodGJveFwiO1xyXG5cclxuY2xhc3MgVGhlbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSBuZXcgTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuYmxvZ01hc29ucnkgPSBuZXcgQmxvZ01hc29ucnkoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IG5ldyBTY3JvbGxUb3AoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEVmZmVjdCA9IG5ldyBTY3JvbGxFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLmVxdWFsSGVpZ2h0RWxlbWVudHMgPSBuZXcgRXF1YWxIZWlnaHRFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMub3dMaWdodGJveCA9IG5ldyBPV0xpZ2h0Ym94KCk7XHJcbiAgICAgICAgdGhpcy5vd1NsaWRlciA9IG5ldyBPV1NsaWRlcigpO1xyXG4gICAgICAgIHRoaXMub3dJbmZpbml0ZVNjcm9sbCA9IG5ldyBPV0luZmluaXRlU2Nyb2xsKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZTtcclxuIiwiLy8gYnV0dG9uXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5maW5pdGVTY3JvbGxCdXR0b24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY2xhc3MgSW5maW5pdGVTY3JvbGxCdXR0b24ge1xuICBjb25zdHJ1Y3RvciggZWxlbWVudCwgaW5mU2Nyb2xsICkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbmZTY3JvbGwgPSBpbmZTY3JvbGw7XG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICAgIGluZlNjcm9sbC5vbiggJ3JlcXVlc3QnLCB0aGlzLmRpc2FibGUuYmluZCggdGhpcyApICk7XG4gICAgaW5mU2Nyb2xsLm9uKCAnbG9hZCcsIHRoaXMuZW5hYmxlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2Vycm9yJywgdGhpcy5oaWRlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2xhc3QnLCB0aGlzLmhpZGUuYmluZCggdGhpcyApICk7XG4gIH1cblxuICBvbkNsaWNrKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaW5mU2Nyb2xsLmxvYWROZXh0UGFnZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIgKTtcbiAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRlU2Nyb2xsIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMuYnV0dG9uID0gbnVsbDtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBsZXQgYnV0dG9uRWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLmJ1dHRvbiApO1xuICBpZiAoIGJ1dHRvbkVsZW0gKSB7XG4gICAgdGhpcy5idXR0b24gPSBuZXcgSW5maW5pdGVTY3JvbGxCdXR0b24oIGJ1dHRvbkVsZW0sIHRoaXMgKTtcbiAgfVxufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5idXR0b24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmJ1dHRvbiApIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5CdXR0b24gPSBJbmZpbml0ZVNjcm9sbEJ1dHRvbjtcblxucmV0dXJuIEluZmluaXRlU2Nyb2xsO1xuXG59ICkgKTtcbiIsIi8vIGNvcmVcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIHV0aWxzICkge1xuXG5sZXQgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBJbmZpbml0ZVNjcm9sbCBpbnRhbmNlc1xubGV0IGluc3RhbmNlcyA9IHt9O1xuXG5mdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgbGV0IHF1ZXJ5RWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuXG4gIGlmICggIXF1ZXJ5RWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yIEluZmluaXRlU2Nyb2xsOiAnICsgKCBxdWVyeUVsZW0gfHwgZWxlbWVudCApICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQgPSBxdWVyeUVsZW07XG4gIC8vIGRvIG5vdCBpbml0aWFsaXplIHR3aWNlIG9uIHNhbWUgZWxlbWVudFxuICBpZiAoIGVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEICkge1xuICAgIGxldCBpbnN0YW5jZSA9IGluc3RhbmNlc1sgZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgXTtcbiAgICBpbnN0YW5jZS5vcHRpb24oIG9wdGlvbnMgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHsgLi4uSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMgfTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlKCk7XG59XG5cbi8vIGRlZmF1bHRzXG5JbmZpbml0ZVNjcm9sbC5kZWZhdWx0cyA9IHtcbiAgLy8gcGF0aDogbnVsbCxcbiAgLy8gaGlkZU5hdjogbnVsbCxcbiAgLy8gZGVidWc6IGZhbHNlLFxufTtcblxuLy8gY3JlYXRlICYgZGVzdHJveSBtZXRob2RzXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUgPSB7fTtcbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kgPSB7fTtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbk9iamVjdC5hc3NpZ24oIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbmxldCBHVUlEID0gMDtcblxucHJvdG8uY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNyZWF0ZSBjb3JlXG4gIC8vIGFkZCBpZCBmb3IgSW5maW5pdGVTY3JvbGwuZGF0YVxuICBsZXQgaWQgPSB0aGlzLmd1aWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5pbmZpbml0ZVNjcm9sbEdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG4gIC8vIHByb3BlcnRpZXNcbiAgdGhpcy5wYWdlSW5kZXggPSAxOyAvLyBkZWZhdWx0IHRvIGZpcnN0IHBhZ2VcbiAgdGhpcy5sb2FkQ291bnQgPSAwO1xuICB0aGlzLnVwZGF0ZUdldFBhdGgoKTtcbiAgLy8gYmFpbCBpZiBnZXRQYXRoIG5vdCBzZXQsIG9yIHJldHVybnMgZmFsc2V5ICM3NzZcbiAgbGV0IGhhc1BhdGggPSB0aGlzLmdldFBhdGggJiYgdGhpcy5nZXRQYXRoKCk7XG4gIGlmICggIWhhc1BhdGggKSB7XG4gICAgY29uc29sZS5lcnJvcignRGlzYWJsaW5nIEluZmluaXRlU2Nyb2xsJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudXBkYXRlR2V0QWJzb2x1dGVQYXRoKCk7XG4gIHRoaXMubG9nKCAnaW5pdGlhbGl6ZWQnLCBbIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgXSApO1xuICB0aGlzLmNhbGxPbkluaXQoKTtcbiAgLy8gY3JlYXRlIGZlYXR1cmVzXG4gIGZvciAoIGxldCBtZXRob2QgaW4gSW5maW5pdGVTY3JvbGwuY3JlYXRlICkge1xuICAgIEluZmluaXRlU2Nyb2xsLmNyZWF0ZVsgbWV0aG9kIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgT2JqZWN0LmFzc2lnbiggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG4vLyBjYWxsIG9uSW5pdCBvcHRpb24sIHVzZWQgZm9yIGJpbmRpbmcgZXZlbnRzIG9uIGluaXRcbnByb3RvLmNhbGxPbkluaXQgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9uSW5pdCA9IHRoaXMub3B0aW9ucy5vbkluaXQ7XG4gIGlmICggb25Jbml0ICkge1xuICAgIG9uSW5pdC5jYWxsKCB0aGlzLCB0aGlzICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBhcmdzICkge1xuICB0aGlzLmxvZyggdHlwZSwgYXJncyApO1xuICBsZXQgZW1pdEFyZ3MgPSBldmVudCA/IFsgZXZlbnQgXS5jb25jYXQoIGFyZ3MgKSA6IGFyZ3M7XG4gIHRoaXMuZW1pdEV2ZW50KCB0eXBlLCBlbWl0QXJncyApO1xuICAvLyB0cmlnZ2VyIGpRdWVyeSBldmVudFxuICBpZiAoICFqUXVlcnkgfHwgIXRoaXMuJGVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG5hbWVzcGFjZSBqUXVlcnkgZXZlbnRcbiAgdHlwZSArPSAnLmluZmluaXRlU2Nyb2xsJztcbiAgbGV0ICRldmVudCA9IHR5cGU7XG4gIGlmICggZXZlbnQgKSB7XG4gICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwICovXG4gICAgbGV0IGpRRXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgalFFdmVudC50eXBlID0gdHlwZTtcbiAgICAkZXZlbnQgPSBqUUV2ZW50O1xuICB9XG4gIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggJGV2ZW50LCBhcmdzICk7XG59O1xuXG5sZXQgbG9nZ2VycyA9IHtcbiAgaW5pdGlhbGl6ZWQ6ICggY2xhc3NOYW1lICkgPT4gYG9uICR7Y2xhc3NOYW1lfWAsXG4gIHJlcXVlc3Q6ICggcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBsb2FkOiAoIHJlc3BvbnNlLCBwYXRoICkgPT4gYCR7cmVzcG9uc2UudGl0bGUgfHwgJyd9LiBVUkw6ICR7cGF0aH1gLFxuICBlcnJvcjogKCBlcnJvciwgcGF0aCApID0+IGAke2Vycm9yfS4gVVJMOiAke3BhdGh9YCxcbiAgYXBwZW5kOiAoIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApID0+IGAke2l0ZW1zLmxlbmd0aH0gaXRlbXMuIFVSTDogJHtwYXRofWAsXG4gIGxhc3Q6ICggcmVzcG9uc2UsIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgaGlzdG9yeTogKCB0aXRsZSwgcGF0aCApID0+IGBVUkw6ICR7cGF0aH1gLFxuICBwYWdlSW5kZXg6IGZ1bmN0aW9uKCBpbmRleCwgb3JpZ2luICkge1xuICAgIHJldHVybiBgY3VycmVudCBwYWdlIGRldGVybWluZWQgdG8gYmU6ICR7aW5kZXh9IGZyb20gJHtvcmlnaW59YDtcbiAgfSxcbn07XG5cbi8vIGxvZyBldmVudHNcbnByb3RvLmxvZyA9IGZ1bmN0aW9uKCB0eXBlLCBhcmdzICkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuZGVidWcgKSByZXR1cm47XG5cbiAgbGV0IG1lc3NhZ2UgPSBgW0luZmluaXRlU2Nyb2xsXSAke3R5cGV9YDtcbiAgbGV0IGxvZ2dlciA9IGxvZ2dlcnNbIHR5cGUgXTtcbiAgaWYgKCBsb2dnZXIgKSBtZXNzYWdlICs9ICcuICcgKyBsb2dnZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgY29uc29sZS5sb2coIG1lc3NhZ2UgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgdXNlZCBhbW91bmcgZmVhdHVyZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlTWVhc3VyZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBsZXQgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdGhpcy50b3AgPSByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xufTtcblxucHJvdG8udXBkYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGVsZW1lbnRTY3JvbGwgPSB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbDtcbiAgaWYgKCAhZWxlbWVudFNjcm9sbCApIHtcbiAgICAvLyBkZWZhdWx0LCB1c2Ugd2luZG93XG4gICAgdGhpcy5zY3JvbGxlciA9IHdpbmRvdztcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgdHJ1ZSwgc2V0IHRvIGVsZW1lbnQsIG90aGVyd2lzZSB1c2Ugb3B0aW9uXG4gIHRoaXMuc2Nyb2xsZXIgPSBlbGVtZW50U2Nyb2xsID09PSB0cnVlID8gdGhpcy5lbGVtZW50IDpcbiAgICB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnRTY3JvbGwgKTtcbiAgaWYgKCAhdGhpcy5zY3JvbGxlciApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGVsZW1lbnRTY3JvbGw6ICR7ZWxlbWVudFNjcm9sbH1gKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGFnZSBwYXRoIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnVwZGF0ZUdldFBhdGggPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9wdFBhdGggPSB0aGlzLm9wdGlvbnMucGF0aDtcbiAgaWYgKCAhb3B0UGF0aCApIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbmZpbml0ZVNjcm9sbCBwYXRoIG9wdGlvbiByZXF1aXJlZC4gU2V0IGFzOiAke29wdFBhdGh9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGZ1bmN0aW9uXG4gIGxldCB0eXBlID0gdHlwZW9mIG9wdFBhdGg7XG4gIGlmICggdHlwZSA9PSAnZnVuY3Rpb24nICkge1xuICAgIHRoaXMuZ2V0UGF0aCA9IG9wdFBhdGg7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHRlbXBsYXRlIHN0cmluZzogJy9wYWdlcy97eyN9fS5odG1sJ1xuICBsZXQgdGVtcGxhdGVNYXRjaCA9IHR5cGUgPT0gJ3N0cmluZycgJiYgb3B0UGF0aC5tYXRjaCgne3sjfX0nKTtcbiAgaWYgKCB0ZW1wbGF0ZU1hdGNoICkge1xuICAgIHRoaXMudXBkYXRlR2V0UGF0aFRlbXBsYXRlKCBvcHRQYXRoICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNlbGVjdG9yOiAnLm5leHQtcGFnZS1zZWxlY3RvcidcbiAgdGhpcy51cGRhdGVHZXRQYXRoU2VsZWN0b3IoIG9wdFBhdGggKTtcbn07XG5cbnByb3RvLnVwZGF0ZUdldFBhdGhUZW1wbGF0ZSA9IGZ1bmN0aW9uKCBvcHRQYXRoICkge1xuICAvLyBzZXQgZ2V0UGF0aCB3aXRoIHRlbXBsYXRlIHN0cmluZ1xuICB0aGlzLmdldFBhdGggPSAoKSA9PiB7XG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMucGFnZUluZGV4ICsgMTtcbiAgICByZXR1cm4gb3B0UGF0aC5yZXBsYWNlKCAne3sjfX0nLCBuZXh0SW5kZXggKTtcbiAgfTtcbiAgLy8gZ2V0IHBhZ2VJbmRleCBmcm9tIGxvY2F0aW9uXG4gIC8vIGNvbnZlcnQgcGF0aCBvcHRpb24gaW50byByZWdleCB0byBsb29rIGZvciBwYXR0ZXJuIGluIGxvY2F0aW9uXG4gIC8vIGVzY2FwZSBxdWVyeSAoPykgaW4gdXJsLCBhbGxvd3MgZm9yIHBhcnNpbmcgR0VUIHBhcmFtZXRlcnNcbiAgbGV0IHJlZ2V4U3RyaW5nID0gb3B0UGF0aFxuICAgIC5yZXBsYWNlKCAvKFxcXFxcXD98XFw/KS8sICdcXFxcPycgKVxuICAgIC5yZXBsYWNlKCAne3sjfX0nLCAnKFxcXFxkXFxcXGQ/XFxcXGQ/KScgKTtcbiAgbGV0IHRlbXBsYXRlUmUgPSBuZXcgUmVnRXhwKCByZWdleFN0cmluZyApO1xuICBsZXQgbWF0Y2ggPSBsb2NhdGlvbi5ocmVmLm1hdGNoKCB0ZW1wbGF0ZVJlICk7XG5cbiAgaWYgKCBtYXRjaCApIHtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IHBhcnNlSW50KCBtYXRjaFsxXSwgMTAgKTtcbiAgICB0aGlzLmxvZyggJ3BhZ2VJbmRleCcsIFsgdGhpcy5wYWdlSW5kZXgsICd0ZW1wbGF0ZSBzdHJpbmcnIF0gKTtcbiAgfVxufTtcblxubGV0IHBhdGhSZWdleGVzID0gW1xuICAvLyBXb3JkUHJlc3MgJiBUdW1ibHIgLSBleGFtcGxlLmNvbS9wYWdlLzJcbiAgLy8gSmVreWxsIC0gZXhhbXBsZS5jb20vcGFnZTJcbiAgL14oLio/XFwvP3BhZ2VcXC8/KShcXGRcXGQ/XFxkPykoLio/JCkvLFxuICAvLyBEcnVwYWwgLSBleGFtcGxlLmNvbS8/cGFnZT0xXG4gIC9eKC4qP1xcLz9cXD9wYWdlPSkoXFxkXFxkP1xcZD8pKC4qPyQpLyxcbiAgLy8gY2F0Y2ggYWxsLCBsYXN0IG9jY3VyZW5jZSBvZiBhIG51bWJlclxuICAvKC4qPykoXFxkXFxkP1xcZD8pKD8hLipcXGQpKC4qPyQpLyxcbl07XG5cbi8vIHRyeSBtYXRjaGluZyBocmVmIHRvIHBhdGhSZWdleGVzIHBhdHRlcm5zXG5sZXQgZ2V0UGF0aFBhcnRzID0gSW5maW5pdGVTY3JvbGwuZ2V0UGF0aFBhcnRzID0gZnVuY3Rpb24oIGhyZWYgKSB7XG4gIGlmICggIWhyZWYgKSByZXR1cm47XG4gIGZvciAoIGxldCByZWdleCBvZiBwYXRoUmVnZXhlcyApIHtcbiAgICBsZXQgbWF0Y2ggPSBocmVmLm1hdGNoKCByZWdleCApO1xuICAgIGlmICggbWF0Y2ggKSB7XG4gICAgICBsZXQgWyAsIGJlZ2luLCBpbmRleCwgZW5kIF0gPSBtYXRjaDtcbiAgICAgIHJldHVybiB7IGJlZ2luLCBpbmRleCwgZW5kIH07XG4gICAgfVxuICB9XG59O1xuXG5wcm90by51cGRhdGVHZXRQYXRoU2VsZWN0b3IgPSBmdW5jdGlvbiggb3B0UGF0aCApIHtcbiAgLy8gcGFyc2UgaHJlZiBvZiBsaW5rOiAnLm5leHQtcGFnZS1saW5rJ1xuICBsZXQgaHJlZkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBvcHRQYXRoICk7XG4gIGlmICggIWhyZWZFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEJhZCBJbmZpbml0ZVNjcm9sbCBwYXRoIG9wdGlvbi4gTmV4dCBsaW5rIG5vdCBmb3VuZDogJHtvcHRQYXRofWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBocmVmID0gaHJlZkVsZW0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGxldCBwYXRoUGFydHMgPSBnZXRQYXRoUGFydHMoIGhyZWYgKTtcbiAgaWYgKCAhcGF0aFBhcnRzICkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEluZmluaXRlU2Nyb2xsIHVuYWJsZSB0byBwYXJzZSBuZXh0IGxpbmsgaHJlZjogJHtocmVmfWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IGJlZ2luLCBpbmRleCwgZW5kIH0gPSBwYXRoUGFydHM7XG4gIHRoaXMuaXNQYXRoU2VsZWN0b3IgPSB0cnVlOyAvLyBmbGFnIGZvciBjaGVja0xhc3RQYWdlKClcbiAgdGhpcy5nZXRQYXRoID0gKCkgPT4gYmVnaW4gKyAoIHRoaXMucGFnZUluZGV4ICsgMSApICsgZW5kO1xuICAvLyBnZXQgcGFnZUluZGV4IGZyb20gaHJlZlxuICB0aGlzLnBhZ2VJbmRleCA9IHBhcnNlSW50KCBpbmRleCwgMTAgKSAtIDE7XG4gIHRoaXMubG9nKCAncGFnZUluZGV4JywgWyB0aGlzLnBhZ2VJbmRleCwgJ25leHQgbGluaycgXSApO1xufTtcblxucHJvdG8udXBkYXRlR2V0QWJzb2x1dGVQYXRoID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gIC8vIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIGh0dHAgb3IgL1xuICBsZXQgaXNBYnNvbHV0ZSA9IHBhdGgubWF0Y2goIC9eaHR0cC8gKSB8fCBwYXRoLm1hdGNoKCAvXlxcLy8gKTtcbiAgaWYgKCBpc0Fic29sdXRlICkge1xuICAgIHRoaXMuZ2V0QWJzb2x1dGVQYXRoID0gdGhpcy5nZXRQYXRoO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IHBhdGhuYW1lIH0gPSBsb2NhdGlvbjtcbiAgLy8gcXVlcnkgcGFyYW1ldGVyICM4MjkuIGV4YW1wbGUuY29tLz9wZz0yXG4gIGxldCBpc1F1ZXJ5ID0gcGF0aC5tYXRjaCggL15cXD8vICk7XG4gIC8vIC9mb28vYmFyL2luZGV4Lmh0bWwgPT4gL2Zvby9iYXJcbiAgbGV0IGRpcmVjdG9yeSA9IHBhdGhuYW1lLnN1YnN0cmluZyggMCwgcGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSApO1xuICBsZXQgcGF0aFN0YXJ0ID0gaXNRdWVyeSA/IHBhdGhuYW1lIDogZGlyZWN0b3J5ICsgJy8nO1xuXG4gIHRoaXMuZ2V0QWJzb2x1dGVQYXRoID0gKCkgPT4gcGF0aFN0YXJ0ICsgdGhpcy5nZXRQYXRoKCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBuYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gaGlkZSBuYXZpZ2F0aW9uXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuaGlkZU5hdiA9IGZ1bmN0aW9uKCkge1xuICBsZXQgbmF2ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuaGlkZU5hdiApO1xuICBpZiAoICFuYXYgKSByZXR1cm47XG5cbiAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHRoaXMubmF2ID0gbmF2O1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5oaWRlTmF2ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5uYXYgKSB0aGlzLm5hdi5zdHlsZS5kaXNwbGF5ID0gJyc7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZXN0cm95IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hbGxPZmYoKTsgLy8gcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgLy8gY2FsbCBkZXN0cm95IG1ldGhvZHNcbiAgZm9yICggbGV0IG1ldGhvZCBpbiBJbmZpbml0ZVNjcm9sbC5kZXN0cm95ICkge1xuICAgIEluZmluaXRlU2Nyb2xsLmRlc3Ryb3lbIG1ldGhvZCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxuXG4gIGRlbGV0ZSB0aGlzLmVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEO1xuICBkZWxldGUgaW5zdGFuY2VzWyB0aGlzLmd1aWQgXTtcbiAgLy8gcmVtb3ZlIGpRdWVyeSBkYXRhLiAjODA3XG4gIGlmICggalF1ZXJ5ICYmIHRoaXMuJGVsZW1lbnQgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgJ2luZmluaXRlU2Nyb2xsJyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gaHR0cHM6Ly9yZW15c2hhcnAuY29tLzIwMTAvMDcvMjEvdGhyb3R0bGluZy1mdW5jdGlvbi1jYWxsc1xuSW5maW5pdGVTY3JvbGwudGhyb3R0bGUgPSBmdW5jdGlvbiggZm4sIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDIwMDtcbiAgbGV0IGxhc3QsIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBub3cgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseSggdGhpcywgYXJncyApO1xuICAgIH07XG4gICAgaWYgKCBsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hvbGQgKSB7XG4gICAgICAvLyBob2xkIG9uIHRvIGl0XG4gICAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cmlnZ2VyLCB0aHJlc2hvbGQgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpZ2dlcigpO1xuICAgIH1cbiAgfTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICBsZXQgaWQgPSBlbGVtICYmIGVsZW0uaW5maW5pdGVTY3JvbGxHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuLy8gc2V0IGludGVybmFsIGpRdWVyeSwgZm9yIFdlYnBhY2sgKyBqUXVlcnkgdjNcbkluZmluaXRlU2Nyb2xsLnNldEpRdWVyeSA9IGZ1bmN0aW9uKCBqcXJ5ICkge1xuICBqUXVlcnkgPSBqcXJ5O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuaHRtbEluaXQoIEluZmluaXRlU2Nyb2xsLCAnaW5maW5pdGUtc2Nyb2xsJyApO1xuXG4vLyBhZGQgbm9vcCBfaW5pdCBtZXRob2QgZm9yIGpRdWVyeSBCcmlkZ2V0LiAjNzY4XG5wcm90by5faW5pdCA9IGZ1bmN0aW9uKCkge307XG5cbmxldCB7IGpRdWVyeUJyaWRnZXQgfSA9IHdpbmRvdztcbmlmICggalF1ZXJ5ICYmIGpRdWVyeUJyaWRnZXQgKSB7XG4gIGpRdWVyeUJyaWRnZXQoICdpbmZpbml0ZVNjcm9sbCcsIEluZmluaXRlU2Nyb2xsLCBqUXVlcnkgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBoaXN0b3J5XG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG5PYmplY3QuYXNzaWduKCBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cywge1xuICBoaXN0b3J5OiAncmVwbGFjZScsXG4gIC8vIGhpc3RvcnlUaXRsZTogZmFsc2UsXG59ICk7XG5cbmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4vLyAtLS0tLSBjcmVhdGUvZGVzdHJveSAtLS0tLSAvL1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuaGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuaGlzdG9yeSApIHJldHVybjtcblxuICAvLyBjaGVjayBmb3Igc2FtZSBvcmlnaW5cbiAgbGluay5ocmVmID0gdGhpcy5nZXRBYnNvbHV0ZVBhdGgoKTtcbiAgLy8gTVMgRWRnZSBkb2VzIG5vdCBoYXZlIG9yaWdpbiBvbiBsaW5rXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMjM2NDkzL1xuICBsZXQgbGlua09yaWdpbiA9IGxpbmsub3JpZ2luIHx8IGxpbmsucHJvdG9jb2wgKyAnLy8nICsgbGluay5ob3N0O1xuICBsZXQgaXNTYW1lT3JpZ2luID0gbGlua09yaWdpbiA9PSBsb2NhdGlvbi5vcmlnaW47XG4gIGlmICggIWlzU2FtZU9yaWdpbiApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnW0luZmluaXRlU2Nyb2xsXSBjYW5ub3Qgc2V0IGhpc3Rvcnkgd2l0aCBkaWZmZXJlbnQgb3JpZ2luOiAnICtcbiAgICAgIGAke2xpbmsub3JpZ2lufSBvbiAke2xvY2F0aW9uLm9yaWdpbn0gLiBIaXN0b3J5IGJlaGF2aW9yIGRpc2FibGVkLmAgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0d28gd2F5cyB0byBoYW5kbGUgY2hhbmdpbmcgaGlzdG9yeVxuICBpZiAoIHRoaXMub3B0aW9ucy5hcHBlbmQgKSB7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5QXBwZW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5UGFnZUxvYWQoKTtcbiAgfVxufTtcblxucHJvdG8uY3JlYXRlSGlzdG9yeUFwcGVuZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIC8vIGFycmF5IG9mIHNjcm9sbCBwb3NpdGlvbnMgb2YgYXBwZW5kZWQgcGFnZXNcbiAgdGhpcy5zY3JvbGxQYWdlcyA9IFtcbiAgICAvLyBmaXJzdCBwYWdlXG4gICAge1xuICAgICAgdG9wOiAwLFxuICAgICAgcGF0aDogbG9jYXRpb24uaHJlZixcbiAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICB9LFxuICBdO1xuICB0aGlzLnNjcm9sbFBhZ2UgPSB0aGlzLnNjcm9sbFBhZ2VzWzBdO1xuICAvLyBldmVudHNcbiAgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciA9IHRoaXMub25TY3JvbGxIaXN0b3J5LmJpbmQoIHRoaXMgKTtcbiAgdGhpcy51bmxvYWRIYW5kbGVyID0gdGhpcy5vblVubG9hZC5iaW5kKCB0aGlzICk7XG4gIHRoaXMuc2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgKTtcbiAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMub25BcHBlbmRIaXN0b3J5ICk7XG4gIHRoaXMuYmluZEhpc3RvcnlBcHBlbmRFdmVudHMoIHRydWUgKTtcbn07XG5cbnByb3RvLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzID0gZnVuY3Rpb24oIGlzQmluZCApIHtcbiAgbGV0IGFkZFJlbW92ZSA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdGhpcy5zY3JvbGxlclsgYWRkUmVtb3ZlIF0oICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyICk7XG4gIHdpbmRvd1sgYWRkUmVtb3ZlIF0oICd1bmxvYWQnLCB0aGlzLnVubG9hZEhhbmRsZXIgKTtcbn07XG5cbnByb3RvLmNyZWF0ZUhpc3RvcnlQYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9uKCAnbG9hZCcsIHRoaXMub25QYWdlTG9hZEhpc3RvcnkgKTtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuaGlzdG9yeSA9XG5wcm90by5kZXN0cm95SGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgaXNIaXN0b3J5QXBwZW5kID0gdGhpcy5vcHRpb25zLmhpc3RvcnkgJiYgdGhpcy5vcHRpb25zLmFwcGVuZDtcbiAgaWYgKCBpc0hpc3RvcnlBcHBlbmQgKSB7XG4gICAgdGhpcy5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyggZmFsc2UgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gYXBwZW5kIGhpc3RvcnkgLS0tLS0gLy9cblxucHJvdG8ub25BcHBlbmRIaXN0b3J5ID0gZnVuY3Rpb24oIHJlc3BvbnNlLCBwYXRoLCBpdGVtcyApIHtcbiAgLy8gZG8gbm90IHByb2NlZWQgaWYgbm8gaXRlbXMuICM3NzlcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHJldHVybjtcblxuICBsZXQgZmlyc3RJdGVtID0gaXRlbXNbMF07XG4gIGxldCBlbGVtU2Nyb2xsWSA9IHRoaXMuZ2V0RWxlbWVudFNjcm9sbFkoIGZpcnN0SXRlbSApO1xuICAvLyByZXNvbHZlIHBhdGhcbiAgbGluay5ocmVmID0gcGF0aDtcbiAgLy8gYWRkIHBhZ2UgZGF0YSB0byBoYXNoXG4gIHRoaXMuc2Nyb2xsUGFnZXMucHVzaCh7XG4gICAgdG9wOiBlbGVtU2Nyb2xsWSxcbiAgICBwYXRoOiBsaW5rLmhyZWYsXG4gICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICB9KTtcbn07XG5cbnByb3RvLmdldEVsZW1lbnRTY3JvbGxZID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIC0gdGhpcy50b3A7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICB9XG59O1xuXG5wcm90by5vblNjcm9sbEhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3ljbGUgdGhyb3VnaCBwb3NpdGlvbnMsIGZpbmQgYmlnZ2VzdCB3aXRob3V0IGdvaW5nIG92ZXJcbiAgbGV0IHNjcm9sbFBhZ2UgPSB0aGlzLmdldENsb3Nlc3RTY3JvbGxQYWdlKCk7XG4gIC8vIHNldCBoaXN0b3J5IGlmIGNoYW5nZWRcbiAgaWYgKCBzY3JvbGxQYWdlICE9IHRoaXMuc2Nyb2xsUGFnZSApIHtcbiAgICB0aGlzLnNjcm9sbFBhZ2UgPSBzY3JvbGxQYWdlO1xuICAgIHRoaXMuc2V0SGlzdG9yeSggc2Nyb2xsUGFnZS50aXRsZSwgc2Nyb2xsUGFnZS5wYXRoICk7XG4gIH1cbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBJbmZpbml0ZVNjcm9sbCwgJ29uU2Nyb2xsSGlzdG9yeScsIDE1MCApO1xuXG5wcm90by5nZXRDbG9zZXN0U2Nyb2xsUGFnZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc2Nyb2xsVmlld1k7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgc2Nyb2xsVmlld1kgPSB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC8gMjtcbiAgfSBlbHNlIHtcbiAgICBzY3JvbGxWaWV3WSA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICB9XG5cbiAgbGV0IHNjcm9sbFBhZ2U7XG4gIGZvciAoIGxldCBwYWdlIG9mIHRoaXMuc2Nyb2xsUGFnZXMgKSB7XG4gICAgaWYgKCBwYWdlLnRvcCA+PSBzY3JvbGxWaWV3WSApIGJyZWFrO1xuXG4gICAgc2Nyb2xsUGFnZSA9IHBhZ2U7XG4gIH1cbiAgcmV0dXJuIHNjcm9sbFBhZ2U7XG59O1xuXG5wcm90by5zZXRIaXN0b3J5ID0gZnVuY3Rpb24oIHRpdGxlLCBwYXRoICkge1xuICBsZXQgb3B0SGlzdG9yeSA9IHRoaXMub3B0aW9ucy5oaXN0b3J5O1xuICBsZXQgaGlzdG9yeU1ldGhvZCA9IG9wdEhpc3RvcnkgJiYgaGlzdG9yeVsgb3B0SGlzdG9yeSArICdTdGF0ZScgXTtcbiAgaWYgKCAhaGlzdG9yeU1ldGhvZCApIHJldHVybjtcblxuICBoaXN0b3J5WyBvcHRIaXN0b3J5ICsgJ1N0YXRlJyBdKCBudWxsLCB0aXRsZSwgcGF0aCApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5oaXN0b3J5VGl0bGUgKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdoaXN0b3J5JywgbnVsbCwgWyB0aXRsZSwgcGF0aCBdICk7XG59O1xuXG4vLyBzY3JvbGwgdG8gdG9wIHRvIHByZXZlbnQgaW5pdGlhbCBzY3JvbGwtcmVzZXQgYWZ0ZXIgcGFnZSByZWZyZXNoXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MzM5MTUvMTgyMTgzXG5wcm90by5vblVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc2Nyb2xsUGFnZS50b3AgPT09IDAgKSByZXR1cm47XG5cbiAgLy8gY2FsY3VsYXRlIHdoZXJlIHNjcm9sbCBwb3NpdGlvbiB3b3VsZCBiZSBvbiByZWZyZXNoXG4gIGxldCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgLSB0aGlzLnNjcm9sbFBhZ2UudG9wICsgdGhpcy50b3A7XG4gIC8vIGRpc2FibGUgc2Nyb2xsIGV2ZW50IGJlZm9yZSBzZXR0aW5nIHNjcm9sbCAjNjc5XG4gIHRoaXMuZGVzdHJveUhpc3RvcnkoKTtcbiAgc2Nyb2xsVG8oIDAsIHNjcm9sbFkgKTtcbn07XG5cbi8vIC0tLS0tIGxvYWQgaGlzdG9yeSAtLS0tLSAvL1xuXG4vLyB1cGRhdGUgVVJMXG5wcm90by5vblBhZ2VMb2FkSGlzdG9yeSA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCApIHtcbiAgdGhpcy5zZXRIaXN0b3J5KCByZXNwb25zZS50aXRsZSwgcGF0aCApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvKiFcbiAqIEluZmluaXRlIFNjcm9sbCB2NC4wLjFcbiAqIEF1dG9tYXRpY2FsbHkgYWRkIG5leHQgcGFnZVxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIEluZmluaXRlIFNjcm9sbCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKlxuICogaHR0cHM6Ly9pbmZpbml0ZS1zY3JvbGwuY29tXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIE1ldGFmaXp6eVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJy4vcGFnZS1sb2FkJyksXG4gICAgICAgIHJlcXVpcmUoJy4vc2Nyb2xsLXdhdGNoJyksXG4gICAgICAgIHJlcXVpcmUoJy4vaGlzdG9yeScpLFxuICAgICAgICByZXF1aXJlKCcuL2J1dHRvbicpLFxuICAgICAgICByZXF1aXJlKCcuL3N0YXR1cycpLFxuICAgICk7XG4gIH1cblxufSApKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEluZmluaXRlU2Nyb2xsICkge1xuICByZXR1cm4gSW5maW5pdGVTY3JvbGw7XG59ICk7XG4iLCIvLyBwYWdlLWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgLy8gYXBwZW5kOiBmYWxzZSxcbiAgbG9hZE9uU2Nyb2xsOiB0cnVlLFxuICBjaGVja0xhc3RQYWdlOiB0cnVlLFxuICByZXNwb25zZUJvZHk6ICd0ZXh0JyxcbiAgZG9tUGFyc2VSZXNwb25zZTogdHJ1ZSxcbiAgLy8gcHJlZmlsbDogZmFsc2UsXG4gIC8vIG91dGxheWVyOiBudWxsLFxufSApO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUucGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jYW5Mb2FkID0gdHJ1ZTtcbiAgdGhpcy5vbiggJ3Njcm9sbFRocmVzaG9sZCcsIHRoaXMub25TY3JvbGxUaHJlc2hvbGRMb2FkICk7XG4gIHRoaXMub24oICdsb2FkJywgdGhpcy5jaGVja0xhc3RQYWdlICk7XG4gIGlmICggdGhpcy5vcHRpb25zLm91dGxheWVyICkge1xuICAgIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLm9uQXBwZW5kT3V0bGF5ZXIgKTtcbiAgfVxufTtcblxucHJvdG8ub25TY3JvbGxUaHJlc2hvbGRMb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLmxvYWRPblNjcm9sbCApIHRoaXMubG9hZE5leHRQYWdlKCk7XG59O1xuXG5sZXQgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5wcm90by5sb2FkTmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzTG9hZGluZyB8fCAhdGhpcy5jYW5Mb2FkICkgcmV0dXJuO1xuXG4gIGxldCB7IHJlc3BvbnNlQm9keSwgZG9tUGFyc2VSZXNwb25zZSwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG4gIGxldCBwYXRoID0gdGhpcy5nZXRBYnNvbHV0ZVBhdGgoKTtcbiAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICBpZiAoIHR5cGVvZiBmZXRjaE9wdGlvbnMgPT0gJ2Z1bmN0aW9uJyApIGZldGNoT3B0aW9ucyA9IGZldGNoT3B0aW9ucygpO1xuXG4gIGxldCBmZXRjaFByb21pc2UgPSBmZXRjaCggcGF0aCwgZmV0Y2hPcHRpb25zIClcbiAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcbiAgICAgIGlmICggIXJlc3BvbnNlLm9rICkge1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoIHJlc3BvbnNlLnN0YXR1c1RleHQgKTtcbiAgICAgICAgdGhpcy5vblBhZ2VFcnJvciggZXJyb3IsIHBhdGgsIHJlc3BvbnNlICk7XG4gICAgICAgIHJldHVybiB7IHJlc3BvbnNlIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZVsgcmVzcG9uc2VCb2R5IF0oKS50aGVuKCAoIGJvZHkgKSA9PiB7XG4gICAgICAgIGxldCBjYW5Eb21QYXJzZSA9IHJlc3BvbnNlQm9keSA9PSAndGV4dCcgJiYgZG9tUGFyc2VSZXNwb25zZTtcbiAgICAgICAgaWYgKCBjYW5Eb21QYXJzZSApIHtcbiAgICAgICAgICBib2R5ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyggYm9keSwgJ3RleHQvaHRtbCcgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQgKSB7XG4gICAgICAgICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICAgICAgICByZXR1cm4geyBib2R5LCByZXNwb25zZSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uUGFnZUxvYWQoIGJvZHksIHBhdGgsIHJlc3BvbnNlICk7XG4gICAgICAgIH1cbiAgICAgIH0gKTtcbiAgICB9IClcbiAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XG4gICAgICB0aGlzLm9uUGFnZUVycm9yKCBlcnJvciwgcGF0aCApO1xuICAgIH0gKTtcblxuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdyZXF1ZXN0JywgbnVsbCwgWyBwYXRoLCBmZXRjaFByb21pc2UgXSApO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2U7XG59O1xuXG5wcm90by5vblBhZ2VMb2FkID0gZnVuY3Rpb24oIGJvZHksIHBhdGgsIHJlc3BvbnNlICkge1xuICAvLyBkb25lIGxvYWRpbmcgaWYgbm90IGFwcGVuZGluZ1xuICBpZiAoICF0aGlzLm9wdGlvbnMuYXBwZW5kICkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5wYWdlSW5kZXgrKztcbiAgdGhpcy5sb2FkQ291bnQrKztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnbG9hZCcsIG51bGwsIFsgYm9keSwgcGF0aCwgcmVzcG9uc2UgXSApO1xuICByZXR1cm4gdGhpcy5hcHBlbmROZXh0UGFnZSggYm9keSwgcGF0aCwgcmVzcG9uc2UgKTtcbn07XG5cbnByb3RvLmFwcGVuZE5leHRQYWdlID0gZnVuY3Rpb24oIGJvZHksIHBhdGgsIHJlc3BvbnNlICkge1xuICBsZXQgeyBhcHBlbmQsIHJlc3BvbnNlQm9keSwgZG9tUGFyc2VSZXNwb25zZSB9ID0gdGhpcy5vcHRpb25zO1xuICAvLyBkbyBub3QgYXBwZW5kIGpzb25cbiAgbGV0IGlzRG9jdW1lbnQgPSByZXNwb25zZUJvZHkgPT0gJ3RleHQnICYmIGRvbVBhcnNlUmVzcG9uc2U7XG4gIGlmICggIWlzRG9jdW1lbnQgfHwgIWFwcGVuZCApIHJldHVybiB7IGJvZHksIHJlc3BvbnNlIH07XG5cbiAgbGV0IGl0ZW1zID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKCBhcHBlbmQgKTtcbiAgbGV0IHByb21pc2VWYWx1ZSA9IHsgYm9keSwgcmVzcG9uc2UsIGl0ZW1zIH07XG4gIC8vIGxhc3QgcGFnZSBoaXQgaWYgbm8gaXRlbXMuICM4NDBcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgIHJldHVybiBwcm9taXNlVmFsdWU7XG4gIH1cblxuICBsZXQgZnJhZ21lbnQgPSBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApO1xuICBsZXQgYXBwZW5kUmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHBlbmRJdGVtcyggaXRlbXMsIGZyYWdtZW50ICk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdhcHBlbmQnLCBudWxsLCBbIGJvZHksIHBhdGgsIGl0ZW1zLCByZXNwb25zZSBdICk7XG4gICAgcmV0dXJuIHByb21pc2VWYWx1ZTtcbiAgfTtcblxuICAvLyBUT0RPIGFkZCBob29rIGZvciBvcHRpb24gdG8gdHJpZ2dlciBhcHBlbmRSZWFkeVxuICBpZiAoIHRoaXMub3B0aW9ucy5vdXRsYXllciApIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRPdXRsYXllckl0ZW1zKCBmcmFnbWVudCwgYXBwZW5kUmVhZHkgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXBwZW5kUmVhZHkoKTtcbiAgfVxufTtcblxucHJvdG8uYXBwZW5kSXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGZyYWdtZW50ICkge1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXG4gIC8vIGdldCBmcmFnbWVudCBpZiBub3QgcHJvdmlkZWRcbiAgZnJhZ21lbnQgPSBmcmFnbWVudCB8fCBnZXRJdGVtc0ZyYWdtZW50KCBpdGVtcyApO1xuICByZWZyZXNoU2NyaXB0cyggZnJhZ21lbnQgKTtcbiAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xufTtcblxuZnVuY3Rpb24gZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKSB7XG4gIC8vIGFkZCBpdGVtcyB0byBmcmFnbWVudFxuICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGlmICggaXRlbXMgKSBmcmFnbWVudC5hcHBlbmQoIC4uLml0ZW1zICk7XG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuLy8gcmVwbGFjZSA8c2NyaXB0PnMgd2l0aCBjb3BpZXMgc28gdGhleSBsb2FkXG4vLyA8c2NyaXB0PnMgYWRkZWQgYnkgSW5maW5pdGVTY3JvbGwgd2lsbCBub3QgbG9hZFxuLy8gc2ltaWxhciB0byBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MTA5OTVcbmZ1bmN0aW9uIHJlZnJlc2hTY3JpcHRzKCBmcmFnbWVudCApIHtcbiAgbGV0IHNjcmlwdHMgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgZm9yICggbGV0IHNjcmlwdCBvZiBzY3JpcHRzICkge1xuICAgIGxldCBmcmVzaFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIC8vIGNvcHkgYXR0cmlidXRlc1xuICAgIGxldCBhdHRycyA9IHNjcmlwdC5hdHRyaWJ1dGVzO1xuICAgIGZvciAoIGxldCBhdHRyIG9mIGF0dHJzICkge1xuICAgICAgZnJlc2hTY3JpcHQuc2V0QXR0cmlidXRlKCBhdHRyLm5hbWUsIGF0dHIudmFsdWUgKTtcbiAgICB9XG4gICAgLy8gY29weSBpbm5lciBzY3JpcHQgY29kZS4gIzcxOCwgIzc4MlxuICAgIGZyZXNoU2NyaXB0LmlubmVySFRNTCA9IHNjcmlwdC5pbm5lckhUTUw7XG4gICAgc2NyaXB0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCBmcmVzaFNjcmlwdCwgc2NyaXB0ICk7XG4gIH1cbn1cblxuLy8gLS0tLS0gb3V0bGF5ZXIgLS0tLS0gLy9cblxucHJvdG8uYXBwZW5kT3V0bGF5ZXJJdGVtcyA9IGZ1bmN0aW9uKCBmcmFnbWVudCwgYXBwZW5kUmVhZHkgKSB7XG4gIGxldCBpbWFnZXNMb2FkZWQgPSBJbmZpbml0ZVNjcm9sbC5pbWFnZXNMb2FkZWQgfHwgd2luZG93LmltYWdlc0xvYWRlZDtcbiAgaWYgKCAhaW1hZ2VzTG9hZGVkICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tJbmZpbml0ZVNjcm9sbF0gaW1hZ2VzTG9hZGVkIHJlcXVpcmVkIGZvciBvdXRsYXllciBvcHRpb24nKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhcHBlbmQgb25jZSBpbWFnZXMgbG9hZGVkXG4gIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24oIHJlc29sdmUgKSB7XG4gICAgaW1hZ2VzTG9hZGVkKCBmcmFnbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgYm9keVJlc3BvbnNlID0gYXBwZW5kUmVhZHkoKTtcbiAgICAgIHJlc29sdmUoIGJvZHlSZXNwb25zZSApO1xuICAgIH0gKTtcbiAgfSApO1xufTtcblxucHJvdG8ub25BcHBlbmRPdXRsYXllciA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSB7XG4gIHRoaXMub3B0aW9ucy5vdXRsYXllci5hcHBlbmRlZCggaXRlbXMgKTtcbn07XG5cbi8vIC0tLS0tIGNoZWNrTGFzdFBhZ2UgLS0tLS0gLy9cblxuLy8gY2hlY2sgcmVzcG9uc2UgZm9yIG5leHQgZWxlbWVudFxucHJvdG8uY2hlY2tMYXN0UGFnZSA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoICkge1xuICBsZXQgeyBjaGVja0xhc3RQYWdlLCBwYXRoOiBwYXRoT3B0IH0gPSB0aGlzLm9wdGlvbnM7XG4gIGlmICggIWNoZWNrTGFzdFBhZ2UgKSByZXR1cm47XG5cbiAgLy8gaWYgcGF0aCBpcyBmdW5jdGlvbiwgY2hlY2sgaWYgbmV4dCBwYXRoIGlzIHRydXRoeVxuICBpZiAoIHR5cGVvZiBwYXRoT3B0ID09ICdmdW5jdGlvbicgKSB7XG4gICAgbGV0IG5leHRQYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgaWYgKCAhbmV4dFBhdGggKSB7XG4gICAgICB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgc2VsZWN0b3IgZnJvbSBjaGVja0xhc3RQYWdlIG9yIHBhdGggb3B0aW9uXG4gIGxldCBzZWxlY3RvcjtcbiAgaWYgKCB0eXBlb2YgY2hlY2tMYXN0UGFnZSA9PSAnc3RyaW5nJyApIHtcbiAgICBzZWxlY3RvciA9IGNoZWNrTGFzdFBhZ2U7XG4gIH0gZWxzZSBpZiAoIHRoaXMuaXNQYXRoU2VsZWN0b3IgKSB7XG4gICAgLy8gcGF0aCBvcHRpb24gaXMgc2VsZWN0b3Igc3RyaW5nXG4gICAgc2VsZWN0b3IgPSBwYXRoT3B0O1xuICB9XG4gIC8vIGNoZWNrIGxhc3QgcGFnZSBmb3Igc2VsZWN0b3JcbiAgLy8gYmFpbCBpZiBubyBzZWxlY3RvciBvciBub3QgZG9jdW1lbnQgcmVzcG9uc2VcbiAgaWYgKCAhc2VsZWN0b3IgfHwgIWJvZHkucXVlcnlTZWxlY3RvciApIHJldHVybjtcblxuICAvLyBjaGVjayBpZiByZXNwb25zZSBoYXMgc2VsZWN0b3JcbiAgbGV0IG5leHRFbGVtID0gYm9keS5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuICBpZiAoICFuZXh0RWxlbSApIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG59O1xuXG5wcm90by5sYXN0UGFnZVJlYWNoZWQgPSBmdW5jdGlvbiggYm9keSwgcGF0aCApIHtcbiAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2xhc3QnLCBudWxsLCBbIGJvZHksIHBhdGggXSApO1xufTtcblxuLy8gLS0tLS0gZXJyb3IgLS0tLS0gLy9cblxucHJvdG8ub25QYWdlRXJyb3IgPSBmdW5jdGlvbiggZXJyb3IsIHBhdGgsIHJlc3BvbnNlICkge1xuICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB0aGlzLmNhbkxvYWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZXJyb3InLCBudWxsLCBbIGVycm9yLCBwYXRoLCByZXNwb25zZSBdICk7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHByZWZpbGwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnByZWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnByZWZpbGwgKSByZXR1cm47XG5cbiAgbGV0IGFwcGVuZCA9IHRoaXMub3B0aW9ucy5hcHBlbmQ7XG4gIGlmICggIWFwcGVuZCApIHtcbiAgICBjb25zb2xlLmVycm9yKGBhcHBlbmQgb3B0aW9uIHJlcXVpcmVkIGZvciBwcmVmaWxsLiBTZXQgYXMgOiR7YXBwZW5kfWApO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIHRoaXMuaXNQcmVmaWxsaW5nID0gdHJ1ZTtcbiAgdGhpcy5vbiggJ2FwcGVuZCcsIHRoaXMucHJlZmlsbCApO1xuICB0aGlzLm9uY2UoICdlcnJvcicsIHRoaXMuc3RvcFByZWZpbGwgKTtcbiAgdGhpcy5vbmNlKCAnbGFzdCcsIHRoaXMuc3RvcFByZWZpbGwgKTtcbiAgdGhpcy5wcmVmaWxsKCk7XG59O1xuXG5wcm90by5wcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIGxldCBkaXN0YW5jZSA9IHRoaXMuZ2V0UHJlZmlsbERpc3RhbmNlKCk7XG4gIHRoaXMuaXNQcmVmaWxsaW5nID0gZGlzdGFuY2UgPj0gMDtcbiAgaWYgKCB0aGlzLmlzUHJlZmlsbGluZyApIHtcbiAgICB0aGlzLmxvZygncHJlZmlsbCcpO1xuICAgIHRoaXMubG9hZE5leHRQYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdG9wUHJlZmlsbCgpO1xuICB9XG59O1xuXG5wcm90by5nZXRQcmVmaWxsRGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgLy8gZWxlbWVudCBzY3JvbGxcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQgLSB0aGlzLnNjcm9sbGVyLnNjcm9sbEhlaWdodDtcbiAgfVxuICAvLyB3aW5kb3dcbiAgcmV0dXJuIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbn07XG5cbnByb3RvLnN0b3BQcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMubG9nKCdzdG9wUHJlZmlsbCcpO1xuICB0aGlzLm9mZiggJ2FwcGVuZCcsIHRoaXMucHJlZmlsbCApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBzY3JvbGwtd2F0Y2hcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgc2Nyb2xsVGhyZXNob2xkOiA0MDAsXG4gIC8vIGVsZW1lbnRTY3JvbGw6IG51bGwsXG59ICk7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5zY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAvLyBldmVudHNcbiAgdGhpcy5wYWdlU2Nyb2xsSGFuZGxlciA9IHRoaXMub25QYWdlU2Nyb2xsLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5yZXNpemVIYW5kbGVyID0gdGhpcy5vblJlc2l6ZS5iaW5kKCB0aGlzICk7XG5cbiAgbGV0IHNjcm9sbFRocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQ7XG4gIGxldCBpc0VuYWJsZSA9IHNjcm9sbFRocmVzaG9sZCB8fCBzY3JvbGxUaHJlc2hvbGQgPT09IDA7XG4gIGlmICggaXNFbmFibGUgKSB0aGlzLmVuYWJsZVNjcm9sbFdhdGNoKCk7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95LnNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVNjcm9sbFdhdGNoKCk7XG59O1xuXG5wcm90by5lbmFibGVTY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNTY3JvbGxXYXRjaGluZyApIHJldHVybjtcblxuICB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgPSB0cnVlO1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xuICB0aGlzLnVwZGF0ZVNjcm9sbGVyKCk7XG4gIC8vIFRPRE8gZGlzYWJsZSBhZnRlciBlcnJvcj9cbiAgdGhpcy5vbiggJ2xhc3QnLCB0aGlzLmRpc2FibGVTY3JvbGxXYXRjaCApO1xuICB0aGlzLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyggdHJ1ZSApO1xufTtcblxucHJvdG8uZGlzYWJsZVNjcm9sbFdhdGNoID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNTY3JvbGxXYXRjaGluZyApIHJldHVybjtcblxuICB0aGlzLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyggZmFsc2UgKTtcbiAgZGVsZXRlIHRoaXMuaXNTY3JvbGxXYXRjaGluZztcbn07XG5cbnByb3RvLmJpbmRTY3JvbGxXYXRjaEV2ZW50cyA9IGZ1bmN0aW9uKCBpc0JpbmQgKSB7XG4gIGxldCBhZGRSZW1vdmUgPSBpc0JpbmQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHRoaXMuc2Nyb2xsZXJbIGFkZFJlbW92ZSBdKCAnc2Nyb2xsJywgdGhpcy5wYWdlU2Nyb2xsSGFuZGxlciApO1xuICB3aW5kb3dbIGFkZFJlbW92ZSBdKCAncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyICk7XG59O1xuXG5wcm90by5vblBhZ2VTY3JvbGwgPSBJbmZpbml0ZVNjcm9sbC50aHJvdHRsZSggZnVuY3Rpb24oKSB7XG4gIGxldCBkaXN0YW5jZSA9IHRoaXMuZ2V0Qm90dG9tRGlzdGFuY2UoKTtcbiAgaWYgKCBkaXN0YW5jZSA8PSB0aGlzLm9wdGlvbnMuc2Nyb2xsVGhyZXNob2xkICkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc2Nyb2xsVGhyZXNob2xkJyk7XG4gIH1cbn0gKTtcblxucHJvdG8uZ2V0Qm90dG9tRGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGJvdHRvbSwgc2Nyb2xsWTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZWxlbWVudFNjcm9sbCApIHtcbiAgICBib3R0b20gPSB0aGlzLnNjcm9sbGVyLnNjcm9sbEhlaWdodDtcbiAgICBzY3JvbGxZID0gdGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGJvdHRvbSAtIHNjcm9sbFk7XG59O1xuXG5wcm90by5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZU1lYXN1cmVtZW50cygpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIEluZmluaXRlU2Nyb2xsLCAnb25SZXNpemUnLCAxNTAgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBzdGF0dXNcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgICAgd2luZG93LFxuICAgICAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgSW5maW5pdGVTY3JvbGwsIHV0aWxzICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbi8vIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLnN0YXR1cyA9IG51bGw7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5zdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXR1c0VsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5zdGF0dXMgKTtcbiAgaWYgKCAhc3RhdHVzRWxlbSApIHJldHVybjtcblxuICAvLyBlbGVtZW50c1xuICB0aGlzLnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtO1xuICB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHMgPSB7XG4gICAgcmVxdWVzdDogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLXJlcXVlc3QnKSxcbiAgICBlcnJvcjogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLWVycm9yJyksXG4gICAgbGFzdDogc3RhdHVzRWxlbS5xdWVyeVNlbGVjdG9yKCcuaW5maW5pdGUtc2Nyb2xsLWxhc3QnKSxcbiAgfTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMub24oICdyZXF1ZXN0JywgdGhpcy5zaG93UmVxdWVzdFN0YXR1cyApO1xuICB0aGlzLm9uKCAnZXJyb3InLCB0aGlzLnNob3dFcnJvclN0YXR1cyApO1xuICB0aGlzLm9uKCAnbGFzdCcsIHRoaXMuc2hvd0xhc3RTdGF0dXMgKTtcbiAgdGhpcy5iaW5kSGlkZVN0YXR1cygnb24nKTtcbn07XG5cbnByb3RvLmJpbmRIaWRlU3RhdHVzID0gZnVuY3Rpb24oIGJpbmRNZXRob2QgKSB7XG4gIGxldCBoaWRlRXZlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kID8gJ2FwcGVuZCcgOiAnbG9hZCc7XG4gIHRoaXNbIGJpbmRNZXRob2QgXSggaGlkZUV2ZW50LCB0aGlzLmhpZGVBbGxTdGF0dXMgKTtcbn07XG5cbnByb3RvLnNob3dSZXF1ZXN0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygncmVxdWVzdCcpO1xufTtcblxucHJvdG8uc2hvd0Vycm9yU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygnZXJyb3InKTtcbn07XG5cbnByb3RvLnNob3dMYXN0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2hvd1N0YXR1cygnbGFzdCcpO1xuICAvLyBwcmV2ZW50IGxhc3QgdGhlbiBhcHBlbmQgZXZlbnQgcmFjZSBjb25kaXRpb24gZnJvbSBzaG93aW5nIGxhc3Qgc3RhdHVzICM3MDZcbiAgdGhpcy5iaW5kSGlkZVN0YXR1cygnb2ZmJyk7XG59O1xuXG5wcm90by5zaG93U3RhdHVzID0gZnVuY3Rpb24oIGV2ZW50TmFtZSApIHtcbiAgc2hvdyggdGhpcy5zdGF0dXNFbGVtZW50ICk7XG4gIHRoaXMuaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMoKTtcbiAgbGV0IGV2ZW50RWxlbSA9IHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50c1sgZXZlbnROYW1lIF07XG4gIHNob3coIGV2ZW50RWxlbSApO1xufTtcblxucHJvdG8uaGlkZUFsbFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBoaWRlKCB0aGlzLnN0YXR1c0VsZW1lbnQgKTtcbiAgdGhpcy5oaWRlU3RhdHVzRXZlbnRFbGVtZW50cygpO1xufTtcblxucHJvdG8uaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgZm9yICggbGV0IHR5cGUgaW4gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzICkge1xuICAgIGxldCBldmVudEVsZW0gPSB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHNbIHR5cGUgXTtcbiAgICBoaWRlKCBldmVudEVsZW0gKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGhpZGUoIGVsZW0gKSB7XG4gIHNldERpc3BsYXkoIGVsZW0sICdub25lJyApO1xufVxuXG5mdW5jdGlvbiBzaG93KCBlbGVtICkge1xuICBzZXREaXNwbGF5KCBlbGVtLCAnYmxvY2snICk7XG59XG5cbmZ1bmN0aW9uIHNldERpc3BsYXkoIGVsZW0sIHZhbHVlICkge1xuICBpZiAoIGVsZW0gKSB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvKipcbiAqIEV2RW1pdHRlciB2Mi4wLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbmxldCBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSByZXR1cm4gdGhpcztcblxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgbGV0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICBsZXQgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCAhbGlzdGVuZXJzLmluY2x1ZGVzKCBsaXN0ZW5lciApICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSByZXR1cm4gdGhpcztcblxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgbGV0IG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIGxldCBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICBsZXQgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHJldHVybiB0aGlzO1xuXG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSggMCApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICBsZXQgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggbGV0IGxpc3RlbmVyIG9mIGxpc3RlbmVycyApIHtcbiAgICBsZXQgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0gKSApO1xuIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2My4wLjBcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCBnbG9iYWwgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGdsb2JhbC5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KCBnbG9iYWwgKTtcbiAgfVxuXG59KCB0aGlzLCBmdW5jdGlvbiBmYWN0b3J5KCBnbG9iYWwgKSB7XG5cbmxldCB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIGEsIGIgKTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSByZXR1cm4gb2JqO1xuXG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSByZXR1cm4gW107XG5cbiAgbGV0IGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICBpZiAoIGlzQXJyYXlMaWtlICkgcmV0dXJuIFsgLi4ub2JqIF07XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICBsZXQgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBsZXQgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuXG4gIHJldHVybiBlbGVtc1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIC5maWx0ZXIoICggZWxlbSApID0+IGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApXG4gICAgLnJlZHVjZSggKCBmZkVsZW1zLCBlbGVtICkgPT4ge1xuICAgICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgICAgcmV0dXJuIGZmRWxlbXM7XG4gICAgICB9XG4gICAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgICAgLy8gZmlsdGVyXG4gICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICB9XG4gICAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgICBsZXQgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgICBmZkVsZW1zID0gZmZFbGVtcy5jb25jYXQoIC4uLmNoaWxkRWxlbXMgKTtcbiAgICAgIHJldHVybiBmZkVsZW1zO1xuICAgIH0sIFtdICk7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIGxldCBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIGxldCB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KCB0aGlzWyB0aW1lb3V0TmFtZSBdICk7XG5cbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgbWV0aG9kLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgKTtcbiAgfTtcbn07XG5cbi8vIC0tLS0tIGRvY1JlYWR5IC0tLS0tIC8vXG5cbnV0aWxzLmRvY1JlYWR5ID0gZnVuY3Rpb24oIG9uRG9jUmVhZHkgKSB7XG4gIGxldCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIG9uRG9jUmVhZHkgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIG9uRG9jUmVhZHkgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gaHRtbEluaXQgLS0tLS0gLy9cblxuLy8gaHR0cDovL2JpdC5seS8zb1lMdXNjXG51dGlscy50b0Rhc2hlZCA9IGZ1bmN0aW9uKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyguKShbQS1aXSkvZywgZnVuY3Rpb24oIG1hdGNoLCAkMSwgJDIgKSB7XG4gICAgcmV0dXJuICQxICsgJy0nICsgJDI7XG4gIH0gKS50b0xvd2VyQ2FzZSgpO1xufTtcblxubGV0IGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcblxuLy8gYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuLy8gaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbi8vIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIGxldCBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgbGV0IGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBgWyR7ZGF0YUF0dHJ9XWAgKTtcbiAgICBsZXQgalF1ZXJ5ID0gZ2xvYmFsLmpRdWVyeTtcblxuICAgIFsgLi4uZGF0YUF0dHJFbGVtcyBdLmZvckVhY2goICggZWxlbSApID0+IHtcbiAgICAgIGxldCBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICk7XG4gICAgICBsZXQgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggYEVycm9yIHBhcnNpbmcgJHtkYXRhQXR0cn0gb24gJHtlbGVtLmNsYXNzTmFtZX06ICR7ZXJyb3J9YCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBXaWRnZXRDbGFzcyggZWxlbSwgb3B0aW9ucyApO1xuICAgICAgLy8gbWFrZSBhdmFpbGFibGUgdmlhICQoKS5kYXRhKCduYW1lc3BhY2UnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSApO1xuXG4gIH0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0gKSApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNwb25zaXZlQXV0b0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVzcG9uc2l2ZUF1dG9IZWlnaHQoc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVBdXRvSGVpZ2h0KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucnVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNwb25zaXZlQXV0b0hlaWdodCwgW3tcbiAgICBrZXk6ICdyZWNhbGMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFrZUdyb3VwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VHcm91cHMoZWxlbWVudHMpIHtcbiAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9KTtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnRzWzBdKS50b3A7XG4gICAgICBncm91cFswXSA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudCkudG9wICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICBoZWlnaHQgPSAoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3A7XG4gICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgZ3JvdXBbaWR4XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwW2lkeF0ucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhdXRvSGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b0hlaWdodChncm91cCkge1xuICAgICAgdmFyIGhlaWdodHMgPSBncm91cC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gY29tcHV0ZWRTdHlsZS5ib3hTaXppbmc7XG4gICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCkgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoaGVpZ2h0cykpO1xuICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdydW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcblxuICAgICAgdmFyIGdyb3VwcyA9IHRoaXMubWFrZUdyb3VwcyhlbGVtZW50cyk7XG4gICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgX3RoaXMyLmF1dG9IZWlnaHQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNwb25zaXZlQXV0b0hlaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG52YXIgZ2V0U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG59O1xuXG52YXIgZ2V0T2Zmc2V0ID0gZXhwb3J0cy5nZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsVG9wKCksXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZ2V0U2Nyb2xsTGVmdCgpXG4gIH07XG59OyJdfQ==
