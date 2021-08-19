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
exports.isSelectorValid = exports.isElement = exports.getSiblings = exports.visible = exports.offset = exports.fadeOut = exports.fadeIn = exports.slideToggle = exports.slideUp = exports.slideDown = exports.wrap = void 0;

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
  }, 1);
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
  }, 1);
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
    opacity: 1,
    duration: 300,
    display: null,
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
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 1;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = 0;
  }, 10);
  setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
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

},{"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":11}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _steps = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _updateCheckout = /*#__PURE__*/new WeakMap();

var _onPaymentMethodBtnClick = /*#__PURE__*/new WeakMap();

var _onNavigationBtnClick = /*#__PURE__*/new WeakMap();

var WooMultiStepCheckout = function WooMultiStepCheckout() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, WooMultiStepCheckout);

  _steps.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _steps, [_constants.DOM.woo.checkoutLogin, _constants.DOM.woo.customerBillingDetails, _constants.DOM.woo.customerShippingDetails, _constants.DOM.woo.orderReview, _constants.DOM.woo.orderCheckoutPayment]);
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$woo$formActions, _DOM$woo$formActions$, _DOM$woo$formActions2, _DOM$woo$formActions3;

      /**
       * Because Woocommerce plugin uses jQuery custom event,
       * We also have to use jQuery to customize this event
       */
      jQuery(_constants.DOM.body).on("updated_checkout", (0, _classPrivateFieldGet2["default"])(_this, _updateCheckout));
      (_DOM$woo$formActions = _constants.DOM.woo.formActions) === null || _DOM$woo$formActions === void 0 ? void 0 : (_DOM$woo$formActions$ = _DOM$woo$formActions.querySelector(".button.prev")) === null || _DOM$woo$formActions$ === void 0 ? void 0 : _DOM$woo$formActions$.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onNavigationBtnClick));
      (_DOM$woo$formActions2 = _constants.DOM.woo.formActions) === null || _DOM$woo$formActions2 === void 0 ? void 0 : (_DOM$woo$formActions3 = _DOM$woo$formActions2.querySelector(".button.next")) === null || _DOM$woo$formActions3 === void 0 ? void 0 : _DOM$woo$formActions3.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onNavigationBtnClick));
    }
  });

  _updateCheckout.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$woo$orderCheckou, _DOM$woo$orderCheckou2;

      (_DOM$woo$orderCheckou = _constants.DOM.woo.orderCheckoutPayment) === null || _DOM$woo$orderCheckou === void 0 ? void 0 : (_DOM$woo$orderCheckou2 = _DOM$woo$orderCheckou.querySelectorAll("input[name=payment_method]")) === null || _DOM$woo$orderCheckou2 === void 0 ? void 0 : _DOM$woo$orderCheckou2.forEach(function (paymentMethod) {
        paymentMethod.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onPaymentMethodBtnClick));
      });
    }
  });

  _onPaymentMethodBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      var paymentMethodBtn = event.target;
      var radioInputs = document.querySelectorAll(".payment_methods input.input-radio");

      if (radioInputs.length > 1) {
        var paymentBox = document.querySelector(".payment_box.".concat(paymentMethodBtn.getAttribute("id")));

        if (paymentMethodBtn.checked === true && !(0, _utils.visible)(paymentBox)) {
          document.querySelectorAll(".payment_box").forEach(function (_paymentBox) {
            if ((0, _utils.visible)(_paymentBox)) {
              setTimeout(function () {
                (0, _utils.slideUp)(_paymentBox, 250);
              }, 250);
            }
          });
          (0, _utils.slideDown)(paymentBox, 250);
        } else {
          document.querySelectorAll(".payment_box").forEach(function (_paymentBox) {
            _paymentBox.style.display = "block";
          });
        }

        if (paymentMethodBtn.getAttribute("data-order_button_text")) {
          _constants.DOM.woo.placeOrder.value = paymentMethodBtn.getAttribute("data-order_button_text");
        } else {
          _constants.DOM.woo.placeOrder.value = _constants.DOM.woo.placeOrder.getAttribute("data-value");
        }
      }
    }
  });

  _onNavigationBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var btn = event.currentTarget;

      var nextBtn = _constants.DOM.woo.formActions.querySelector(".button.next");

      var prevBtn = _constants.DOM.woo.formActions.querySelector(".button.prev");

      var action = btn.getAttribute("data-action");
      var currentStep = Number.parseInt(_constants.DOM.woo.formActions.getAttribute("data-step"));
      var nextStep = currentStep + 1;
      var prevStep = currentStep - 1;
      var isLoggedIn = _constants.options.is_logged_in;

      _constants.DOM.woo.checkoutTimeline.querySelectorAll(".active").forEach(function (activeItem) {
        activeItem.classList.remove("active");
      });

      if (action === "next") {
        _constants.DOM.woo.formActions.setAttribute("data-step", nextStep);

        (0, _utils.fadeOut)((0, _classPrivateFieldGet2["default"])(_this, _steps)[currentStep], {
          display: "inline-block",
          callback: function callback() {
            (0, _utils.fadeIn)((0, _classPrivateFieldGet2["default"])(_this, _steps)[nextStep]);
          }
        });
        document.querySelector("#timeline-".concat(nextStep)).classList.toggle("active");
      } else if (action === "prev") {
        _constants.DOM.woo.formActions.setAttribute("data-step", prevStep);

        (0, _utils.fadeOut)((0, _classPrivateFieldGet2["default"])(_this, _steps)[currentStep], {
          display: "inline-block",
          callback: function callback() {
            (0, _utils.fadeIn)((0, _classPrivateFieldGet2["default"])(_this, _steps)[prevStep]);
          }
        });
        document.querySelector("#timeline-".concat(prevStep)).classList.toggle("active");
      }

      currentStep = _constants.DOM.woo.formActions.getAttribute("data-step");

      if (isLoggedIn == true && currentStep == 1 || isLoggedIn == false && (currentStep == 0 && _constants.options.login_reminder_enabled === 1 || currentStep == 1 && _constants.options.login_reminder_enabled === 0)) {
        (0, _utils.fadeOut)(prevBtn, {
          display: "inline-block"
        });
      } else {
        (0, _utils.fadeIn)(prevBtn, {
          display: "inline-block"
        });
      } // Next title


      if (isLoggedIn == false && (currentStep == 0 && _constants.options.login_reminder_enabled === 1 || currentStep == 1 && _constants.options.login_reminder_enabled === 0)) {
        nextBtn.value = _constants.options.no_account_btn;
      } else {
        nextBtn.value = _constants.options.next;
      } // Last step


      if (currentStep == 3) {
        _constants.DOM.woo.checkoutForm.classList.remove("processing");

        (0, _utils.fadeIn)(_constants.DOM.woo.checkoutCoupon);
        (0, _utils.fadeOut)(nextBtn, {
          display: "inline-block"
        });
      } else {
        _constants.DOM.woo.checkoutForm.classList.add("processing");

        (0, _utils.fadeOut)(_constants.DOM.woo.checkoutCoupon);
        (0, _utils.fadeIn)(nextBtn, {
          display: "inline-block"
        });
      }
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

new WooMultiStepCheckout();

},{"../../constants":1,"../../lib/utils":2,"@babel/runtime/helpers/classCallCheck":6,"@babel/runtime/helpers/classPrivateFieldGet":8,"@babel/runtime/helpers/classPrivateFieldSet":9,"@babel/runtime/helpers/interopRequireDefault":10}],4:[function(require,module,exports){
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":4,"./classExtractFieldDescriptor.js":7}],9:[function(require,module,exports){
var classApplyDescriptorSet = require("./classApplyDescriptorSet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorSet.js":5,"./classExtractFieldDescriptor.js":7}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
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
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL3dvb2NvbW1lcmNlL3dvby1tdWx0aS1zdGVwLWNoZWNrb3V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRHZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sT0FBTyxHQUFHLGVBQWhCOztBQUVBLElBQU0sR0FBRyxHQUFHO0FBQ2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEUztBQUVmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUZBO0FBR2YsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FIRztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBvcHRpb25zID0gb2NlYW53cExvY2FsaXplO1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTSA9IHtcclxuICAgIGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLFxyXG4gICAgYm9keTogZG9jdW1lbnQuYm9keSxcclxuICAgIFdQQWRtaW5iYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BhZG1pbmJhclwiKSxcclxuICAgIHdyYXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3JhcFwiKSxcclxuICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKSxcclxuICAgIHNlbGVjdFRhZ3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5jdXN0b21TZWxlY3RzKSxcclxuICAgIGZsb2F0aW5nQmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1mbG9hdGluZy1iYXJcIiksXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgICBzaXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnZlcnRpY2FsLWhlYWRlciAjc2l0ZS1oZWFkZXItaW5uZXJcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXJcIiksXHJcbiAgICAgICAgdG9wYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXJcIiksXHJcbiAgICAgICAgdG9wYmFyV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyLXdyYXBcIiksXHJcbiAgICAgICAgdG9wTGVmdFNpZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudG9wLWhlYWRlciAuaGVhZGVyLXRvcCAubGVmdFwiKSxcclxuICAgICAgICB0b3BSaWdodFNpZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudG9wLWhlYWRlciAuaGVhZGVyLXRvcCAucmlnaHRcIiksXHJcbiAgICB9LFxyXG4gICAgbWVudToge1xyXG4gICAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5oZWFkZXItcmVwbGFjZSAjc2l0ZS1uYXZpZ2F0aW9uXCIpLFxyXG4gICAgICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IHtcclxuICAgICAgICAgICAgbWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgI2Z1bGwtc2NyZWVuLW1lbnVcIiksXHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyIC5tZW51LWJhclwiKSxcclxuICAgICAgICAgICAgbG9nbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWxvZ28uaGFzLWZ1bGwtc2NyZWVuLWxvZ29cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZWdhOiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzaXRlLW5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgdG9wYmFyTWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvcC1iYXItbmF2IC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIG1lbnVDb250ZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5hdXRvLW1lZ2EgLm1lZ2FtZW51XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEudmVydGljYWwtdG9nZ2xlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlTWVudToge1xyXG4gICAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZHJvcGRvd24gPiBuYXZcIiksXHJcbiAgICAgICAgbmF2V3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZHJvcGRvd25cIiksXHJcbiAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKSxcclxuICAgICAgICBoYW1idXJnZXJCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUgPiAuaGFtYnVyZ2VyXCIpLFxyXG4gICAgICAgIG1lbnVJdGVtc0hhc0NoaWxkcmVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1kcm9wZG93biAubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1mdWxsc2NyZWVuXCIpLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICAgIGZvcm1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybS5oZWFkZXItc2VhcmNoZm9ybVwiKSxcclxuICAgICAgICBkcm9wRG93bjoge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1kcm9wZG93bi10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1kcm9wZG93blwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlclJlcGxhY2U6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtaGVhZGVyLXJlcGxhY2UtdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlLWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2VcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLW92ZXJsYXktdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLW92ZXJsYXkgYS5zZWFyY2gtb3ZlcmxheS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLW92ZXJsYXlcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBzaXRlRm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3RlclwiKSxcclxuICAgICAgICBjYWxsb3V0Rm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1jYWxsb3V0LXdyYXBcIiksXHJcbiAgICAgICAgZm9vdGVyQmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1iYXJcIiksXHJcbiAgICAgICAgcGFyYWxsYXg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtZm9vdGVyXCIpLFxyXG4gICAgfSxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGwtdG9wXCIpLFxyXG4gICAgICAgIGdvVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjZ28tdG9wXCJdJyksXHJcbiAgICAgICAgZ29Ub3BTbGFzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lIGFbaHJlZj1cIi8jZ28tdG9wXCJdJyksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbFdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLXdyYXBcIiksXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIG1hc29ucnlHcmlkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLW1hc29ucnktZ3JpZFwiKSxcclxuICAgIH0sXHJcbiAgICBlZGQ6IHtcclxuICAgICAgICBjYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGQtbWVudS1pY29uXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgdG90YWxQcmljZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkbWVudWNhcnQtZGV0YWlscy50b3RhbFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdNb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgfSxcclxuICAgIHdvbzoge1xyXG4gICAgICAgIHJlc2V0VmFyaWF0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldF92YXJpYXRpb25zXCIpLFxyXG4gICAgICAgIHByb2R1Y3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3RcIiksXHJcbiAgICAgICAgYWxsUHJvZHVjdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHNcIiksXHJcbiAgICAgICAgY2F0ZWdvcmllczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b28tZHJvcGRvd24tY2F0IC5wcm9kdWN0LWNhdGVnb3JpZXNcIiksXHJcbiAgICAgICAgdmVydGljYWxUaHVtYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgdGh1bWJzVmVydGljYWxMYXlvdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgZ3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1ncmlkXCIpLFxyXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtbGlzdFwiKSxcclxuICAgICAgICBwcm9kdWN0VGFiczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtdGFic1wiKSxcclxuICAgICAgICBwcm9kdWN0Q2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLmNhcnRcIiksXHJcbiAgICAgICAgcHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtcmV2aWV3LWxpbmtcIiksXHJcbiAgICAgICAgcXVhbnRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpLFxyXG4gICAgICAgIGNoZWNrb3V0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ud29vY29tbWVyY2UtY2hlY2tvdXRcIiksXHJcbiAgICAgICAgY2hlY2tvdXRMb2dpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9sb2dpblwiKSxcclxuICAgICAgICBjaGVja291dENvdXBvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9jb3Vwb25cIiksXHJcbiAgICAgICAgY2hlY2tvdXRUaW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtY2hlY2tvdXQtdGltZWxpbmVcIiksXHJcbiAgICAgICAgY3VzdG9tZXJCaWxsaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9iaWxsaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgY3VzdG9tZXJTaGlwcGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfc2hpcHBpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBvcmRlclJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9yZXZpZXdcIiksXHJcbiAgICAgICAgb3JkZXJDaGVja291dFBheW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfY2hlY2tvdXRfcGF5bWVudFwiKSxcclxuICAgICAgICBwbGFjZU9yZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpLFxyXG4gICAgICAgIGZvcm1BY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fYWN0aW9uc1wiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWFjY291bnQtbGlua3NcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZUJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9sb2dpblwiKSxcclxuICAgICAgICBxdWFudGl0eUlucHV0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3OiB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTVN0cmluZyA9IHt9O1xyXG4iLCJleHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVEb3duID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXk7XHJcblxyXG4gICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICAgIGxldCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgfSwgMSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpblwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIH0sIDEpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tYm90dG9tXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlVG9nZ2xlID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbikgOiBzbGlkZVVwKGVsZW1lbnQsIGR1cmF0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCwgX29wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBfb3B0aW9ucyk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG9wdGlvbnMuZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYCR7b3B0aW9ucy5kdXJhdGlvbn1tcyBvcGFjaXR5IGVhc2VgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eTtcclxuICAgIH0sIDUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICEhb3B0aW9ucy5jYWxsYmFjayAmJiBvcHRpb25zLmNhbGxiYWNrKCk7XHJcbiAgICB9LCBvcHRpb25zLmR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVPdXQgPSAoZWxlbWVudCwgX29wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICAgIGRpc3BsYXk6IG51bGwsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgX29wdGlvbnMpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke29wdGlvbnMuZHVyYXRpb259bXMgb3BhY2l0eSBlYXNlYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICEhb3B0aW9ucy5jYWxsYmFjayAmJiBvcHRpb25zLmNhbGxiYWNrKCk7XHJcbiAgICB9LCBvcHRpb25zLmR1cmF0aW9uICsgNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc2libGUgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGUpID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSAobykgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcclxuICAgICAgICA6IG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0b3JWYWxpZCA9ICgoZHVtbXlFbGVtZW50KSA9PiAoc2VsZWN0b3IpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHVtbXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSk7XHJcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwLCB2aXNpYmxlIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBXb29NdWx0aVN0ZXBDaGVja291dCB7XG4gICAgI3N0ZXBzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3N0ZXBzID0gW1xuICAgICAgICAgICAgRE9NLndvby5jaGVja291dExvZ2luLFxuICAgICAgICAgICAgRE9NLndvby5jdXN0b21lckJpbGxpbmdEZXRhaWxzLFxuICAgICAgICAgICAgRE9NLndvby5jdXN0b21lclNoaXBwaW5nRGV0YWlscyxcbiAgICAgICAgICAgIERPTS53b28ub3JkZXJSZXZpZXcsXG4gICAgICAgICAgICBET00ud29vLm9yZGVyQ2hlY2tvdXRQYXltZW50LFxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJlY2F1c2UgV29vY29tbWVyY2UgcGx1Z2luIHVzZXMgalF1ZXJ5IGN1c3RvbSBldmVudCxcbiAgICAgICAgICogV2UgYWxzbyBoYXZlIHRvIHVzZSBqUXVlcnkgdG8gY3VzdG9taXplIHRoaXMgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIGpRdWVyeShET00uYm9keSkub24oXCJ1cGRhdGVkX2NoZWNrb3V0XCIsIHRoaXMuI3VwZGF0ZUNoZWNrb3V0KTtcblxuICAgICAgICBET00ud29vLmZvcm1BY3Rpb25zPy5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi5wcmV2XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25OYXZpZ2F0aW9uQnRuQ2xpY2spO1xuXG4gICAgICAgIERPTS53b28uZm9ybUFjdGlvbnM/LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLm5leHRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk5hdmlnYXRpb25CdG5DbGljayk7XG4gICAgfTtcblxuICAgICN1cGRhdGVDaGVja291dCA9IChldmVudCkgPT4ge1xuICAgICAgICBET00ud29vLm9yZGVyQ2hlY2tvdXRQYXltZW50Py5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1wYXltZW50X21ldGhvZF1cIik/LmZvckVhY2goKHBheW1lbnRNZXRob2QpID0+IHtcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uUGF5bWVudE1ldGhvZEJ0bkNsaWNrKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNvblBheW1lbnRNZXRob2RCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kQnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCByYWRpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGF5bWVudF9tZXRob2RzIGlucHV0LmlucHV0LXJhZGlvXCIpO1xuXG4gICAgICAgIGlmIChyYWRpb0lucHV0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBwYXltZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBheW1lbnRfYm94LiR7cGF5bWVudE1ldGhvZEJ0bi5nZXRBdHRyaWJ1dGUoXCJpZFwiKX1gKTtcblxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RCdG4uY2hlY2tlZCA9PT0gdHJ1ZSAmJiAhdmlzaWJsZShwYXltZW50Qm94KSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGF5bWVudF9ib3hcIikuZm9yRWFjaCgoX3BheW1lbnRCb3gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGUoX3BheW1lbnRCb3gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVVwKF9wYXltZW50Qm94LCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2xpZGVEb3duKHBheW1lbnRCb3gsIDI1MCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGF5bWVudF9ib3hcIikuZm9yRWFjaCgoX3BheW1lbnRCb3gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX3BheW1lbnRCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RCdG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlcl9idXR0b25fdGV4dFwiKSkge1xuICAgICAgICAgICAgICAgIERPTS53b28ucGxhY2VPcmRlci52YWx1ZSA9IHBheW1lbnRNZXRob2RCdG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlcl9idXR0b25fdGV4dFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLndvby5wbGFjZU9yZGVyLnZhbHVlID0gRE9NLndvby5wbGFjZU9yZGVyLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTmF2aWdhdGlvbkJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbmV4dEJ0biA9IERPTS53b28uZm9ybUFjdGlvbnMucXVlcnlTZWxlY3RvcihcIi5idXR0b24ubmV4dFwiKTtcbiAgICAgICAgY29uc3QgcHJldkJ0biA9IERPTS53b28uZm9ybUFjdGlvbnMucXVlcnlTZWxlY3RvcihcIi5idXR0b24ucHJldlwiKTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIpO1xuICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSBOdW1iZXIucGFyc2VJbnQoRE9NLndvby5mb3JtQWN0aW9ucy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIikpO1xuICAgICAgICBsZXQgbmV4dFN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICAgIGxldCBwcmV2U3RlcCA9IGN1cnJlbnRTdGVwIC0gMTtcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IG9wdGlvbnMuaXNfbG9nZ2VkX2luO1xuXG4gICAgICAgIERPTS53b28uY2hlY2tvdXRUaW1lbGluZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKS5mb3JFYWNoKChhY3RpdmVJdGVtKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICBET00ud29vLmZvcm1BY3Rpb25zLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiLCBuZXh0U3RlcCk7XG5cbiAgICAgICAgICAgIGZhZGVPdXQodGhpcy4jc3RlcHNbY3VycmVudFN0ZXBdLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWRlSW4odGhpcy4jc3RlcHNbbmV4dFN0ZXBdKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0aW1lbGluZS0ke25leHRTdGVwfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInByZXZcIikge1xuICAgICAgICAgICAgRE9NLndvby5mb3JtQWN0aW9ucy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIiwgcHJldlN0ZXApO1xuXG4gICAgICAgICAgICBmYWRlT3V0KHRoaXMuI3N0ZXBzW2N1cnJlbnRTdGVwXSwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmFkZUluKHRoaXMuI3N0ZXBzW3ByZXZTdGVwXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGltZWxpbmUtJHtwcmV2U3RlcH1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0ZXAgPSBET00ud29vLmZvcm1BY3Rpb25zLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoaXNMb2dnZWRJbiA9PSB0cnVlICYmIGN1cnJlbnRTdGVwID09IDEpIHx8XG4gICAgICAgICAgICAoaXNMb2dnZWRJbiA9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICgoY3VycmVudFN0ZXAgPT0gMCAmJiBvcHRpb25zLmxvZ2luX3JlbWluZGVyX2VuYWJsZWQgPT09IDEpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50U3RlcCA9PSAxICYmIG9wdGlvbnMubG9naW5fcmVtaW5kZXJfZW5hYmxlZCA9PT0gMCkpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZhZGVPdXQocHJldkJ0biwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZhZGVJbihwcmV2QnRuLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmV4dCB0aXRsZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0xvZ2dlZEluID09IGZhbHNlICYmXG4gICAgICAgICAgICAoKGN1cnJlbnRTdGVwID09IDAgJiYgb3B0aW9ucy5sb2dpbl9yZW1pbmRlcl9lbmFibGVkID09PSAxKSB8fFxuICAgICAgICAgICAgICAgIChjdXJyZW50U3RlcCA9PSAxICYmIG9wdGlvbnMubG9naW5fcmVtaW5kZXJfZW5hYmxlZCA9PT0gMCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbmV4dEJ0bi52YWx1ZSA9IG9wdGlvbnMubm9fYWNjb3VudF9idG47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0QnRuLnZhbHVlID0gb3B0aW9ucy5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGFzdCBzdGVwXG4gICAgICAgIGlmIChjdXJyZW50U3RlcCA9PSAzKSB7XG4gICAgICAgICAgICBET00ud29vLmNoZWNrb3V0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvY2Vzc2luZ1wiKTtcbiAgICAgICAgICAgIGZhZGVJbihET00ud29vLmNoZWNrb3V0Q291cG9uKTtcbiAgICAgICAgICAgIGZhZGVPdXQobmV4dEJ0biwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERPTS53b28uY2hlY2tvdXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9jZXNzaW5nXCIpO1xuICAgICAgICAgICAgZmFkZU91dChET00ud29vLmNoZWNrb3V0Q291cG9uKTtcbiAgICAgICAgICAgIGZhZGVJbihuZXh0QnRuLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxubmV3IFdvb011bHRpU3RlcENoZWNrb3V0KCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0ID0gcmVxdWlyZShcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JTZXQuanNcIik7XG5cbnZhciBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdfQ==
