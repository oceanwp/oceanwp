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

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onCanvasFilterClick = /*#__PURE__*/new WeakMap();

var _onCanvasCloseClick = /*#__PURE__*/new WeakMap();

var WooOffCanvas = function WooOffCanvas() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooOffCanvas);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {}
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      (0, _delegate["default"])(_constants.DOM.body, ".oceanwp-off-canvas-filter", "click", (0, _classPrivateFieldGet2["default"])(_this, _onCanvasFilterClick));
      (0, _delegate["default"])(_constants.DOM.body, ".oceanwp-off-canvas-overlay, .oceanwp-off-canvas-close", "click", (0, _classPrivateFieldGet2["default"])(_this, _onCanvasCloseClick));
    }
  });

  _classPrivateFieldInitSpec(this, _onCanvasFilterClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var initialHTMLInnerWidth = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var afterInitialHTMLInnerWidth = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

      _constants.DOM.body.classList.add("off-canvas-enabled");
    }
  });

  _classPrivateFieldInitSpec(this, _onCanvasCloseClick, {
    writable: true,
    value: function value(event) {
      _constants.DOM.html.style.overflow = "";
      _constants.DOM.html.style.marginRight = "";

      _constants.DOM.body.classList.remove("off-canvas-enabled");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

new WooOffCanvas();

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/classPrivateFieldGet":6,"@babel/runtime/helpers/interopRequireDefault":7,"delegate":9}],3:[function(require,module,exports){
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":3,"./classExtractFieldDescriptor.js":5}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./closest":8}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS93b28tb2ZmLWNhbnZhcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FMUztBQU1mLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxn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QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgd3JhcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHNpdGVGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpLFxyXG4gICAgICAgIGNhbGxvdXRGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWNhbGxvdXQtd3JhcFwiKSxcclxuICAgICAgICBmb290ZXJCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWJhclwiKSxcclxuICAgICAgICBwYXJhbGxheDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheC1mb290ZXJcIiksXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsOiB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbC10b3BcIiksXHJcbiAgICAgICAgZ29Ub3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiNnby10b3BcIl0nKSxcclxuICAgICAgICBnb1RvcFNsYXNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5LmhvbWUgYVtocmVmPVwiLyNnby10b3BcIl0nKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbE5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtd3JhcFwiKSxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgICAgbWFzb25yeUdyaWRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctbWFzb25yeS1ncmlkXCIpLFxyXG4gICAgfSxcclxuICAgIGVkZDoge1xyXG4gICAgICAgIGNhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZC1tZW51LWljb25cIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICB0b3RhbFByaWNlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGRtZW51Y2FydC1kZXRhaWxzLnRvdGFsXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld01vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld0NvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICB9LFxyXG4gICAgd29vOiB7XHJcbiAgICAgICAgcmVzZXRWYXJpYXRpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0X3ZhcmlhdGlvbnNcIiksXHJcbiAgICAgICAgcHJvZHVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdFwiKSxcclxuICAgICAgICBhbGxQcm9kdWN0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSB1bC5wcm9kdWN0c1wiKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvby1kcm9wZG93bi1jYXQgLnByb2R1Y3QtY2F0ZWdvcmllc1wiKSxcclxuICAgICAgICB2ZXJ0aWNhbFRodW1iczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICB0aHVtYnNWZXJ0aWNhbExheW91dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICBncmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWdyaWRcIiksXHJcbiAgICAgICAgbGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1saXN0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RUYWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS10YWJzXCIpLFxyXG4gICAgICAgIHByb2R1Y3RDYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAuY2FydFwiKSxcclxuICAgICAgICBwcm9kdWN0Q3VzdG9tZXJSZXZpZXdMaW5rOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS1yZXZpZXctbGlua1wiKSxcclxuICAgICAgICBxdWFudGl0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyksXHJcbiAgICAgICAgY2hlY2tvdXRGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS53b29jb21tZXJjZS1jaGVja291dFwiKSxcclxuICAgICAgICBjaGVja291dExvZ2luOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2xvZ2luXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0Q291cG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2NvdXBvblwiKSxcclxuICAgICAgICBjaGVja291dFRpbWVsaW5lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1jaGVja291dC10aW1lbGluZVwiKSxcclxuICAgICAgICBjdXN0b21lckJpbGxpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2JpbGxpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBjdXN0b21lclNoaXBwaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9zaGlwcGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIG9yZGVyUmV2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX3Jldmlld1wiKSxcclxuICAgICAgICBvcmRlckNoZWNrb3V0UGF5bWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9jaGVja291dF9wYXltZW50XCIpLFxyXG4gICAgICAgIHBsYWNlT3JkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Vfb3JkZXJcIiksXHJcbiAgICAgICAgZm9ybUFjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9hY3Rpb25zXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZU5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtYWNjb3VudC1saW5rc1wiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlQm94OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2xvZ2luXCIpLFxyXG4gICAgICAgIHF1YW50aXR5SW5wdXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5Om5vdCguYnV0dG9uc19hZGRlZCkgLnF0eVwiKSxcclxuICAgICAgICBxdWlja1ZpZXc6IHtcclxuICAgICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRE9NU3RyaW5nID0ge307XHJcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgV29vT2ZmQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHt9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGRlbGVnYXRlKERPTS5ib2R5LCBcIi5vY2VhbndwLW9mZi1jYW52YXMtZmlsdGVyXCIsIFwiY2xpY2tcIiwgdGhpcy4jb25DYW52YXNGaWx0ZXJDbGljayk7XG4gICAgICAgIGRlbGVnYXRlKERPTS5ib2R5LCBcIi5vY2VhbndwLW9mZi1jYW52YXMtb3ZlcmxheSwgLm9jZWFud3Atb2ZmLWNhbnZhcy1jbG9zZVwiLCBcImNsaWNrXCIsIHRoaXMuI29uQ2FudmFzQ2xvc2VDbGljayk7XG4gICAgfTtcblxuICAgICNvbkNhbnZhc0ZpbHRlckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGluaXRpYWxIVE1MSW5uZXJXaWR0aCA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgYWZ0ZXJJbml0aWFsSFRNTElubmVyV2lkdGggPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IGFmdGVySW5pdGlhbEhUTUxJbm5lcldpZHRoIC0gaW5pdGlhbEhUTUxJbm5lcldpZHRoICsgXCJweFwiO1xuXG4gICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5hZGQoXCJvZmYtY2FudmFzLWVuYWJsZWRcIik7XG4gICAgfTtcblxuICAgICNvbkNhbnZhc0Nsb3NlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XG5cbiAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm9mZi1jYW52YXMtZW5hYmxlZFwiKTtcbiAgICB9O1xufVxuXG5uZXcgV29vT2ZmQ2FudmFzKCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG4iLCJ2YXIgY2xvc2VzdCA9IHJlcXVpcmUoJy4vY2xvc2VzdCcpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG4iXX0=
