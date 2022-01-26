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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL3dvb2NvbW1lcmNlL3dvby1ob3Zlci1zdHlsZS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2Ys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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICB3cmFwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgc2l0ZUZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIiksXHJcbiAgICAgICAgY2FsbG91dEZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItY2FsbG91dC13cmFwXCIpLFxyXG4gICAgICAgIGZvb3RlckJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItYmFyXCIpLFxyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVXAgPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW5cIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLWJvdHRvbVwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVRvZ2dsZSA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCJcclxuICAgICAgICA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbilcclxuICAgICAgICA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIlxyXG4gICAgICAgID8gZmFkZUluKGVsZW1lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgOiBmYWRlT3V0KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlID0gZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhKFxyXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0V2lkdGggfHxcclxuICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodCB8fFxyXG4gICAgICAgIGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGhcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSBlID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSBvID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXHJcbiAgICAgICAgOiBvICYmXHJcbiAgICAgICAgICAgICAgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICBvICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgby5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0b3JWYWxpZCA9IChkdW1teUVsZW1lbnQgPT4gc2VsZWN0b3IgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdW1teUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIFdvb0hvdmVyU3R5bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge307XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzIGxpLnByb2R1Y3QgLndvby1lbnRyeS1idXR0b25zIGxpLndvby13aXNobGlzdC1idG5cIlxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlbGVnYXRlKERPTS5ib2R5LCBcIi50aW52d2xfYWRkX3RvX3dpc2hsaXN0X2J1dHRvblwiLCBcImNsaWNrXCIsIHRoaXMuI29uQWRkVG9XaXNobGlzdEJ0bkNsaWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGVnYXRlKFxuICAgICAgICAgICAgRE9NLmJvZHksXG4gICAgICAgICAgICBcIi53b28tcHJvZHVjdC1nYWxsZXJ5IGEud29vLXByb2R1Y3QtZ2FsbGVyeS1saW5rXCIsXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLiNvblByb2R1Y3RHYWxsZXJ5SW1hZ2VDbGlja1xuICAgICAgICApO1xuICAgIH07XG5cbiAgICAjb25BZGRUb1dpc2hsaXN0QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVG9XaXNobGlzdEJ0biA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuXG4gICAgICAgIGFkZFRvV2lzaGxpc3RCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWRkVG9XaXNobGlzdEJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxuICAgICNvblByb2R1Y3RHYWxsZXJ5SW1hZ2VDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGdhbGxlcnlJbWFnZSA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuICAgICAgICBjb25zdCBtYWluSW1hZ2UgPSBnYWxsZXJ5SW1hZ2UuY2xvc2VzdChcIi5wcm9kdWN0LWlubmVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIud29vLWVudHJ5LWltYWdlLW1haW5cIik7XG5cbiAgICAgICAgaWYgKG1haW5JbWFnZSkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVVJMID0gZ2FsbGVyeUltYWdlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICBjb25zdCBnYWxsZXJ5SW1hZ2VTaWJsaW5ncyA9IGdldFNpYmxpbmdzKGdhbGxlcnlJbWFnZS5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgbWFpbkltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XG5cbiAgICAgICAgICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWFpbkltYWdlVVJMKTtcbiAgICAgICAgICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiwgbWFpbkltYWdlVVJMKTtcblxuICAgICAgICAgICAgbWFpbkltYWdlLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7YDtcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2VMb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5JbWFnZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO2A7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFpbkltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtYWluSW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUxvYWRlZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW1hZ2VMb2FkZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnYWxsZXJ5SW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICBnYWxsZXJ5SW1hZ2VTaWJsaW5ncz8uZm9yRWFjaCgoX2dhbGxlcnlJbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIF9nYWxsZXJ5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxubmV3IFdvb0hvdmVyU3R5bGUoKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCA9IHJlcXVpcmUoXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCIpO1xuXG52YXIgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yID0gcmVxdWlyZShcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG4iLCJ2YXIgY2xvc2VzdCA9IHJlcXVpcmUoJy4vY2xvc2VzdCcpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG4iXX0=
