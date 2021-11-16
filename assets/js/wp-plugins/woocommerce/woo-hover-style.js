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

  if (element.style.display !== "none") {
    return;
  }

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

},{"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/typeof":9}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onAddToWishlistBtnClick = /*#__PURE__*/new WeakMap();

var _onProductGalleryImageClick = /*#__PURE__*/new WeakMap();

var WooHoverStyle = function WooHoverStyle() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooHoverStyle);

  _start.set(this, {
    writable: true,
    value: function value() {}
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      if (!!document.querySelector(".woocommerce ul.products li.product .woo-entry-buttons li.woo-wishlist-btn")) {
        (0, _delegate["default"])(_constants.DOM.body, ".tinvwl_add_to_wishlist_button", "click", (0, _classPrivateFieldGet2["default"])(_this, _onAddToWishlistBtnClick));
      }

      (0, _delegate["default"])(_constants.DOM.body, ".woo-product-gallery a.woo-product-gallery-link", "click", (0, _classPrivateFieldGet2["default"])(_this, _onProductGalleryImageClick));
    }
  });

  _onAddToWishlistBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      var addToWishlistBtn = event.delegateTarget;
      addToWishlistBtn.parentNode.parentNode.classList.add("loading");
      setTimeout(function () {
        addToWishlistBtn.parentNode.parentNode.classList.remove("loading");
      }, 500);
    }
  });

  _onProductGalleryImageClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var galleryImage = event.delegateTarget;
      var mainImage = galleryImage.closest(".product-inner").querySelector(".woo-entry-image-main");

      if (mainImage) {
        var mainImageURL = galleryImage.getAttribute("href");
        var galleryImageSiblings = (0, _utils.getSiblings)(galleryImage.parentNode);
        mainImage.parentNode.classList.add("loading");
        mainImage.setAttribute("src", mainImageURL);
        mainImage.setAttribute("srcset", mainImageURL);
        mainImage.style.cssText = "\n                opacity: 0;\n                -webkit-transform: scale(0.5);\n                -moz-transform: scale(0.5);\n                -ms-transform: scale(0.5);\n                -o-transform: scale(0.5);\n                transform: scale(0.5);\n                -webkit-transition: all 0.3s ease;\n                -moz-transition: all 0.3s ease;\n                -ms-transition: all 0.3s ease;\n                -o-transition: all 0.3s ease;\n                transition: all 0.3s ease;";

        var imageLoaded = function imageLoaded() {
          setTimeout(function () {
            mainImage.style.cssText = "\n                        opacity: 1;\n                        -webkit-transform: scale(1);\n                        -moz-transform: scale(1);\n                        -ms-transform: scale(1);\n                        -o-transform: scale(1);\n                        transform: scale(1);\n                        -webkit-transition: all 0.3s ease;\n                        -moz-transition: all 0.3s ease;\n                        -ms-transition: all 0.3s ease;\n                        -o-transition: all 0.3s ease;\n                        transition: all 0.3s ease;";
            mainImage.parentNode.classList.remove("loading");
          }, 300);
        };

        if (mainImage.complete) {
          imageLoaded();
        } else {
          mainImage.addEventListener("load", imageLoaded);
        }

        galleryImage.parentNode.classList.add("active");
        galleryImageSiblings === null || galleryImageSiblings === void 0 ? void 0 : galleryImageSiblings.forEach(function (_galleryImage) {
          _galleryImage.classList.remove("active");
        });
      }
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

new WooHoverStyle();

},{"../../constants":1,"../../lib/utils":2,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/classPrivateFieldGet":7,"@babel/runtime/helpers/interopRequireDefault":8,"delegate":11}],4:[function(require,module,exports){
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":4,"./classExtractFieldDescriptor.js":6}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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

},{"./closest":10}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL3dvb2NvbW1lcmNlL3dvby1ob3Zlci1zdHlsZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2Ys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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBvcHRpb25zID0gb2NlYW53cExvY2FsaXplO1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTSA9IHtcclxuICAgIGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLFxyXG4gICAgYm9keTogZG9jdW1lbnQuYm9keSxcclxuICAgIFdQQWRtaW5iYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BhZG1pbmJhclwiKSxcclxuICAgIHdyYXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3JhcFwiKSxcclxuICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKSxcclxuICAgIHNlbGVjdFRhZ3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5jdXN0b21TZWxlY3RzKSxcclxuICAgIGZsb2F0aW5nQmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1mbG9hdGluZy1iYXJcIiksXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgICBzaXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnZlcnRpY2FsLWhlYWRlciAjc2l0ZS1oZWFkZXItaW5uZXJcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXJcIiksXHJcbiAgICAgICAgdG9wYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXJcIiksXHJcbiAgICAgICAgdG9wYmFyV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyLXdyYXBcIiksXHJcbiAgICAgICAgdG9wTGVmdFNpZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudG9wLWhlYWRlciAuaGVhZGVyLXRvcCAubGVmdFwiKSxcclxuICAgICAgICB0b3BSaWdodFNpZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudG9wLWhlYWRlciAuaGVhZGVyLXRvcCAucmlnaHRcIiksXHJcbiAgICB9LFxyXG4gICAgbWVudToge1xyXG4gICAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5oZWFkZXItcmVwbGFjZSAjc2l0ZS1uYXZpZ2F0aW9uXCIpLFxyXG4gICAgICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IHtcclxuICAgICAgICAgICAgbWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgI2Z1bGwtc2NyZWVuLW1lbnVcIiksXHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyIC5tZW51LWJhclwiKSxcclxuICAgICAgICAgICAgbG9nbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWxvZ28uaGFzLWZ1bGwtc2NyZWVuLWxvZ29cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZWdhOiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzaXRlLW5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgdG9wYmFyTWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvcC1iYXItbmF2IC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5hdXRvLW1lZ2EgLm1lZ2FtZW51XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEudmVydGljYWwtdG9nZ2xlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlTWVudToge1xyXG4gICAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZHJvcGRvd24gPiBuYXZcIiksXHJcbiAgICAgICAgbmF2V3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZHJvcGRvd25cIiksXHJcbiAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKSxcclxuICAgICAgICBoYW1idXJnZXJCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUgPiAuaGFtYnVyZ2VyXCIpLFxyXG4gICAgICAgIG1lbnVJdGVtc0hhc0NoaWxkcmVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1kcm9wZG93biAubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1mdWxsc2NyZWVuXCIpLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICAgIGZvcm1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybS5oZWFkZXItc2VhcmNoZm9ybVwiKSxcclxuICAgICAgICBkcm9wRG93bjoge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1kcm9wZG93bi10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1kcm9wZG93blwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlclJlcGxhY2U6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtaGVhZGVyLXJlcGxhY2UtdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2VcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLW92ZXJsYXktdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLW92ZXJsYXkgYS5zZWFyY2gtb3ZlcmxheS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLW92ZXJsYXlcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBzaXRlRm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3RlclwiKSxcclxuICAgICAgICBjYWxsb3V0Rm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1jYWxsb3V0LXdyYXBcIiksXHJcbiAgICAgICAgZm9vdGVyQmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1iYXJcIiksXHJcbiAgICAgICAgcGFyYWxsYXg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtZm9vdGVyXCIpLFxyXG4gICAgfSxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGwtdG9wXCIpLFxyXG4gICAgICAgIGdvVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjZ28tdG9wXCJdJyksXHJcbiAgICAgICAgZ29Ub3BTbGFzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lIGFbaHJlZj1cIi8jZ28tdG9wXCJdJyksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbFdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLXdyYXBcIiksXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIG1hc29ucnlHcmlkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLW1hc29ucnktZ3JpZFwiKSxcclxuICAgIH0sXHJcbiAgICBlZGQ6IHtcclxuICAgICAgICBjYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGQtbWVudS1pY29uXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgdG90YWxQcmljZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkbWVudWNhcnQtZGV0YWlscy50b3RhbFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdNb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgfSxcclxuICAgIHdvbzoge1xyXG4gICAgICAgIHJlc2V0VmFyaWF0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldF92YXJpYXRpb25zXCIpLFxyXG4gICAgICAgIHByb2R1Y3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3RcIiksXHJcbiAgICAgICAgYWxsUHJvZHVjdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHNcIiksXHJcbiAgICAgICAgY2F0ZWdvcmllczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b28tZHJvcGRvd24tY2F0IC5wcm9kdWN0LWNhdGVnb3JpZXNcIiksXHJcbiAgICAgICAgdmVydGljYWxUaHVtYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgdGh1bWJzVmVydGljYWxMYXlvdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgZ3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1ncmlkXCIpLFxyXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtbGlzdFwiKSxcclxuICAgICAgICBwcm9kdWN0VGFiczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtdGFic1wiKSxcclxuICAgICAgICBwcm9kdWN0Q2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLmNhcnRcIiksXHJcbiAgICAgICAgcHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtcmV2aWV3LWxpbmtcIiksXHJcbiAgICAgICAgcXVhbnRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpLFxyXG4gICAgICAgIGNoZWNrb3V0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ud29vY29tbWVyY2UtY2hlY2tvdXRcIiksXHJcbiAgICAgICAgY2hlY2tvdXRMb2dpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9sb2dpblwiKSxcclxuICAgICAgICBjaGVja291dENvdXBvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9jb3Vwb25cIiksXHJcbiAgICAgICAgY2hlY2tvdXRUaW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtY2hlY2tvdXQtdGltZWxpbmVcIiksXHJcbiAgICAgICAgY3VzdG9tZXJCaWxsaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9iaWxsaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgY3VzdG9tZXJTaGlwcGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfc2hpcHBpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBvcmRlclJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9yZXZpZXdcIiksXHJcbiAgICAgICAgb3JkZXJDaGVja291dFBheW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfY2hlY2tvdXRfcGF5bWVudFwiKSxcclxuICAgICAgICBwbGFjZU9yZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpLFxyXG4gICAgICAgIGZvcm1BY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fYWN0aW9uc1wiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWFjY291bnQtbGlua3NcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZUJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9sb2dpblwiKSxcclxuICAgICAgICBxdWFudGl0eUlucHV0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3OiB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTVN0cmluZyA9IHt9O1xyXG4iLCJleHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVEb3duID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXk7XHJcblxyXG4gICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICAgIGxldCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpblwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVG9nZ2xlID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIlxyXG4gICAgICAgID8gc2xpZGVEb3duKGVsZW1lbnQsIGR1cmF0aW9uKVxyXG4gICAgICAgIDogc2xpZGVVcChlbGVtZW50LCBkdXJhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsIF9vcHRpb25zID0ge30pID0+IHtcclxuICAgIGlmIChlbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAhIW9wdGlvbnMuY2FsbGJhY2sgJiYgb3B0aW9ucy5jYWxsYmFjaygpO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlT3V0ID0gKGVsZW1lbnQsIF9vcHRpb25zID0ge30pID0+IHtcclxuICAgIGlmIChlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAhIW9wdGlvbnMuY2FsbGJhY2sgJiYgb3B0aW9ucy5jYWxsYmFjaygpO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlVG9nZ2xlID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiXHJcbiAgICAgICAgPyBmYWRlSW4oZWxlbWVudCwgb3B0aW9ucylcclxuICAgICAgICA6IGZhZGVPdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc2libGUgPSBlbGVtZW50ID0+IHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gISEoXHJcbiAgICAgICAgZWxlbWVudC5vZmZzZXRXaWR0aCB8fFxyXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8XHJcbiAgICAgICAgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aFxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IGUgPT4ge1xyXG4gICAgLy8gZm9yIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIGNvbnN0IHNpYmxpbmdzID0gW107XHJcblxyXG4gICAgLy8gaWYgbm8gcGFyZW50LCByZXR1cm4gbm8gc2libGluZ1xyXG4gICAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gc2libGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuLy8gUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnRcclxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudCA9IG8gPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcclxuICAgICAgICA6IG8gJiZcclxuICAgICAgICAgICAgICB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgIG8gIT09IG51bGwgJiZcclxuICAgICAgICAgICAgICBvLm5vZGVUeXBlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTZWxlY3RvclZhbGlkID0gKGR1bW15RWxlbWVudCA9PiBzZWxlY3RvciA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR1bW15RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59KShkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO1xyXG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRTaWJsaW5ncyB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgV29vSG92ZXJTdHlsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7fTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHMgbGkucHJvZHVjdCAud29vLWVudHJ5LWJ1dHRvbnMgbGkud29vLXdpc2hsaXN0LWJ0blwiXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVsZWdhdGUoRE9NLmJvZHksIFwiLnRpbnZ3bF9hZGRfdG9fd2lzaGxpc3RfYnV0dG9uXCIsIFwiY2xpY2tcIiwgdGhpcy4jb25BZGRUb1dpc2hsaXN0QnRuQ2xpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZWdhdGUoXG4gICAgICAgICAgICBET00uYm9keSxcbiAgICAgICAgICAgIFwiLndvby1wcm9kdWN0LWdhbGxlcnkgYS53b28tcHJvZHVjdC1nYWxsZXJ5LWxpbmtcIixcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuI29uUHJvZHVjdEdhbGxlcnlJbWFnZUNsaWNrXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgICNvbkFkZFRvV2lzaGxpc3RCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUb1dpc2hsaXN0QnRuID0gZXZlbnQuZGVsZWdhdGVUYXJnZXQ7XG5cbiAgICAgICAgYWRkVG9XaXNobGlzdEJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb1dpc2hsaXN0QnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgI29uUHJvZHVjdEdhbGxlcnlJbWFnZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZ2FsbGVyeUltYWdlID0gZXZlbnQuZGVsZWdhdGVUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IGdhbGxlcnlJbWFnZS5jbG9zZXN0KFwiLnByb2R1Y3QtaW5uZXJcIikucXVlcnlTZWxlY3RvcihcIi53b28tZW50cnktaW1hZ2UtbWFpblwiKTtcblxuICAgICAgICBpZiAobWFpbkltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVUkwgPSBnYWxsZXJ5SW1hZ2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdhbGxlcnlJbWFnZVNpYmxpbmdzID0gZ2V0U2libGluZ3MoZ2FsbGVyeUltYWdlLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICBtYWluSW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcblxuICAgICAgICAgICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtYWluSW1hZ2VVUkwpO1xuICAgICAgICAgICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLCBtYWluSW1hZ2VVUkwpO1xuXG4gICAgICAgICAgICBtYWluSW1hZ2Uuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtgO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZUxvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbkltYWdlLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7YDtcblxuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1haW5JbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGltYWdlTG9hZGVkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbWFnZUxvYWRlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdhbGxlcnlJbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGdhbGxlcnlJbWFnZVNpYmxpbmdzPy5mb3JFYWNoKChfZ2FsbGVyeUltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgX2dhbGxlcnlJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5uZXcgV29vSG92ZXJTdHlsZSgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcbiJdfQ==
