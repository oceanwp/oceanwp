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

},{}],3:[function(require,module,exports){
"use strict";

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onCartItemAdded = /*#__PURE__*/new WeakMap();

var _onOverlayCartClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var EddDisplayCart = function EddDisplayCart() {
  var _this = this;

  _classCallCheck(this, EddDisplayCart);

  _start.set(this, {
    writable: true,
    value: function value() {}
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      /**
       * Because Easy Digital Downloads plugin uses jQuery custom event,
       * We also have to use jQuery to customize this event
       */
      jQuery("body").on("edd_cart_item_added", _classPrivateFieldGet(_this, _onCartItemAdded));

      _constants.DOM.edd.overlayCart.addEventListener("click", _classPrivateFieldGet(_this, _onOverlayCartClick));

      window.addEventListener("resize", _classPrivateFieldGet(_this, _onWindowResize));
    }
  });

  _onCartItemAdded.set(this, {
    writable: true,
    value: function value(event, response) {
      (0, _utils.fadeIn)(_constants.DOM.edd.overlayCart);

      _constants.DOM.body.classList.add("show-cart");

      if (!!_constants.DOM.edd.quickViewModal) {
        _constants.DOM.html.style.overflow = "";
        _constants.DOM.html.style.marginRight = "";

        _constants.DOM.html.classList.remove("owp-qv-open");

        (0, _utils.fadeOut)(_constants.DOM.edd.quickViewModal);

        _constants.DOM.edd.quickViewModal.classList.remove("is-visible");

        setTimeout(function () {
          _constants.DOM.edd.quickViewContent.innerHTML = "";
        }, 600);
      }
    }
  });

  _onOverlayCartClick.set(this, {
    writable: true,
    value: function value(event) {
      overlayCart = event.currentTarget;
      (0, _utils.fadeOut)(overlayCart);

      _constants.DOM.body.classList.remove("show-cart");
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (!!_constants.DOM.edd.overlayCart) {
        (0, _utils.fadeOut)(overlayCart);

        _constants.DOM.body.classList.remove("show-cart");
      }
    }
  });

  if (!!_constants.DOM.edd.overlayCart) {
    _classPrivateFieldGet(this, _start).call(this);

    _classPrivateFieldGet(this, _setupEventListeners).call(this);
  }
};

new EddDisplayCart();

},{"../../constants":1,"../../lib/utils":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy93cC1wbHVnaW5zL2Vhc3ktZGlnaXRhbC1kb3dubG9hZHMvZWRkLWRpc3BsYXktY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sT0FBTyxHQUFHLGVBQWhCOztBQUVBLElBQU0sR0FBRyxHQUFHO0FBQ2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEUztBQUVmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUZBO0FBR2YsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FIRztBQUlmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBSlM7QUFLZixFQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBTyxDQUFDLGFBQWxDLENBTEc7QUFNZixFQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FORTtBQU9mLEVBQUEsTUFBTSxFQUFFO0FBQ0osSUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FERjtBQUVKLElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlEQUF2QixDQUZOO0FBR0osSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUNBQXZCLENBSFI7QUFJSixJQUFBLE1BQU0sRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUpKO0FBS0osSUFBQSxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FMWDtBQU1KLElBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENB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Qzs7QUFFQSxRQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IseUJBQUksR0FBSixDQUFRLGdCQUFSLENBQXlCLFNBQXpCLEdBQXFDLEVBQXJDO0FBQ0gsU0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdIO0FBQ0o7QUF2Q2E7O0FBQUE7QUFBQTtBQUFBLFdBeUNRLGVBQUMsS0FBRCxFQUFXO0FBQzdCLE1BQUEsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFwQjtBQUVBLDBCQUFRLFdBQVI7O0FBQ0EscUJBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSDtBQTlDYTs7QUFBQTtBQUFBO0FBQUEsV0FnREksZUFBQyxLQUFELEVBQVc7QUFDekIsVUFBSSxDQUFDLENBQUMsZUFBSSxHQUFKLENBQVEsV0FBZCxFQUEyQjtBQUN2Qiw0QkFBUSxXQUFSOztBQUNBLHVCQUFJLElBQUosQ0FBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0g7QUFDSjtBQXJEYTs7QUFDVixNQUFJLENBQUMsQ0FBQyxlQUFJLEdBQUosQ0FBUSxXQUFkLEVBQTJCO0FBQ3ZCOztBQUNBO0FBQ0g7QUFDSixDOztBQW1ETCxJQUFJLGNBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IG9jZWFud3BMb2NhbGl6ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBET00gPSB7XHJcbiAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXHJcbiAgICBXUEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwYWRtaW5iYXJcIiksXHJcbiAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIiksXHJcbiAgICBzZWxlY3RUYWdzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuY3VzdG9tU2VsZWN0cyksXHJcbiAgICBmbG9hdGluZ0JhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtZmxvYXRpbmctYmFyXCIpLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgc2l0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcclxuICAgICAgICB2ZXJ0aWNhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXIgI3NpdGUtaGVhZGVyLWlubmVyXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyXCIpLFxyXG4gICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyXCIpLFxyXG4gICAgICAgIHRvcGJhcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhci13cmFwXCIpLFxyXG4gICAgICAgIHRvcExlZnRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLmxlZnRcIiksXHJcbiAgICAgICAgdG9wUmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLnRvcC1oZWFkZXIgLmhlYWRlci10b3AgLnJpZ2h0XCIpLFxyXG4gICAgfSxcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuaGVhZGVyLXJlcGxhY2UgI3NpdGUtbmF2aWdhdGlvblwiKSxcclxuICAgICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIuZnVsbF9zY3JlZW4taGVhZGVyICNmdWxsLXNjcmVlbi1tZW51XCIpLFxyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAubWVudS1iYXJcIiksXHJcbiAgICAgICAgICAgIGxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvLmhhcy1mdWxsLXNjcmVlbi1sb2dvXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVnYToge1xyXG4gICAgICAgICAgICBtZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2l0ZS1uYXZpZ2F0aW9uIC5tZWdhbWVudS1saS5mdWxsLW1lZ2FcIiksXHJcbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3AtYmFyLW5hdiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICBtZW51Q29udGVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuYXV0by1tZWdhIC5tZWdhbWVudVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnZlcnRpY2FsLXRvZ2dsZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZU1lbnU6IHtcclxuICAgICAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duID4gbmF2XCIpLFxyXG4gICAgICAgIG5hdldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIHRvZ2dsZU1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIiksXHJcbiAgICAgICAgaGFtYnVyZ2VyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51ID4gLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtZW51SXRlbXNIYXNDaGlsZHJlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZHJvcGRvd24gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtZnVsbHNjcmVlblwiKSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgICBmb3JtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0uaGVhZGVyLXNlYXJjaGZvcm1cIiksXHJcbiAgICAgICAgZHJvcERvd246IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtZHJvcGRvd24tdG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tZHJvcGRvd25cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJSZXBsYWNlOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWhlYWRlci1yZXBsYWNlLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZS1jbG9zZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWhlYWRlci1yZXBsYWNlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1vdmVybGF5LXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5IGEuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1vdmVybGF5XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFyYWxsYXg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtZm9vdGVyXCIpLFxyXG4gICAgfSxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGwtdG9wXCIpLFxyXG4gICAgICAgIGdvVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjZ28tdG9wXCJdJyksXHJcbiAgICAgICAgZ29Ub3BTbGFzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lIGFbaHJlZj1cIi8jZ28tdG9wXCJdJyksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbFdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5maW5pdGUtc2Nyb2xsLXdyYXBcIiksXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIG1hc29ucnlHcmlkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLW1hc29ucnktZ3JpZFwiKSxcclxuICAgIH0sXHJcbiAgICBlZGQ6IHtcclxuICAgICAgICBjYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGQtbWVudS1pY29uXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgdG90YWxQcmljZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkbWVudWNhcnQtZGV0YWlscy50b3RhbFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdNb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICBxdWlja1ZpZXdDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgfSxcclxuICAgIHdvbzoge1xyXG4gICAgICAgIHJlc2V0VmFyaWF0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldF92YXJpYXRpb25zXCIpLFxyXG4gICAgICAgIHByb2R1Y3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3RcIiksXHJcbiAgICAgICAgYWxsUHJvZHVjdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgdWwucHJvZHVjdHNcIiksXHJcbiAgICAgICAgY2F0ZWdvcmllczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b28tZHJvcGRvd24tY2F0IC5wcm9kdWN0LWNhdGVnb3JpZXNcIiksXHJcbiAgICAgICAgdmVydGljYWxUaHVtYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgdGh1bWJzVmVydGljYWxMYXlvdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLXRodW1icy1sYXlvdXQtdmVydGljYWxcIiksXHJcbiAgICAgICAgZ3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1ncmlkXCIpLFxyXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtbGlzdFwiKSxcclxuICAgICAgICBwcm9kdWN0VGFiczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtdGFic1wiKSxcclxuICAgICAgICBwcm9kdWN0Q2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLmNhcnRcIiksXHJcbiAgICAgICAgcHJvZHVjdEN1c3RvbWVyUmV2aWV3TGluazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAud29vY29tbWVyY2UtcmV2aWV3LWxpbmtcIiksXHJcbiAgICAgICAgcXVhbnRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpLFxyXG4gICAgICAgIGNoZWNrb3V0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ud29vY29tbWVyY2UtY2hlY2tvdXRcIiksXHJcbiAgICAgICAgY2hlY2tvdXRMb2dpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9sb2dpblwiKSxcclxuICAgICAgICBjaGVja291dENvdXBvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja291dF9jb3Vwb25cIiksXHJcbiAgICAgICAgY2hlY2tvdXRUaW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtY2hlY2tvdXQtdGltZWxpbmVcIiksXHJcbiAgICAgICAgY3VzdG9tZXJCaWxsaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9iaWxsaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgY3VzdG9tZXJTaGlwcGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfc2hpcHBpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBvcmRlclJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9yZXZpZXdcIiksXHJcbiAgICAgICAgb3JkZXJDaGVja291dFBheW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfY2hlY2tvdXRfcGF5bWVudFwiKSxcclxuICAgICAgICBwbGFjZU9yZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpLFxyXG4gICAgICAgIGZvcm1BY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fYWN0aW9uc1wiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VOYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWFjY291bnQtbGlua3NcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZUJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9sb2dpblwiKSxcclxuICAgICAgICBxdWFudGl0eUlucHV0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eTpub3QoLmJ1dHRvbnNfYWRkZWQpIC5xdHlcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3OiB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi1jb250ZW50XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTVN0cmluZyA9IHt9O1xyXG4iLCJleHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IChlbGVtZW50LCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5O1xyXG5cclxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHJcbiAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgcGFkZGluZ1RvcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBhZGRpbmdUb3A7XHJcbiAgICBsZXQgcGFkZGluZ0JvdHRvbSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBhZGRpbmdCb3R0b207XHJcbiAgICBsZXQgbWFyZ2luVG9wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWFyZ2luVG9wO1xyXG4gICAgbGV0IG1hcmdpbkJvdHRvbSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1hcmdpbkJvdHRvbTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0XCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcInBhZGRpbmdcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9uIC8gMS4yfW1zYDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBwYWRkaW5nVG9wO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdCb3R0b207XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b207XHJcbiAgICB9LCAxMCk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbikgOiBzbGlkZVVwKGVsZW1lbnQsIGR1cmF0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCwgZGlzcGxheSwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcblxyXG4gICAgY29uc3QgZmFkZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHBhcnNlRmxvYXQoZWxlbWVudC5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgICBvcGFjaXR5ID0gTWF0aC5yb3VuZChvcGFjaXR5ICogMTAwICsgMTApIC8gMTAwO1xyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA8PSAxKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3BhY2l0eSA9PT0gMSAmJiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBkaXNwbGF5LCBjYWxsYmFjayA9IG51bGwpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBjb25zdCBmYWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gcGFyc2VGbG9hdChlbGVtZW50LnN0eWxlLm9wYWNpdHkpO1xyXG4gICAgICAgIG9wYWNpdHkgPSBNYXRoLnJvdW5kKG9wYWNpdHkgKiAxMDAgLSAxMCkgLyAxMDA7XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5IDwgMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPT09IDAgJiYgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpc2libGUgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGUpID0+IHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XHJcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPSAobykgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcclxuICAgICAgICA6IG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEVkZERpc3BsYXlDYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLmVkZC5vdmVybGF5Q2FydCkge1xuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHt9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWNhdXNlIEVhc3kgRGlnaXRhbCBEb3dubG9hZHMgcGx1Z2luIHVzZXMgalF1ZXJ5IGN1c3RvbSBldmVudCxcbiAgICAgICAgICogV2UgYWxzbyBoYXZlIHRvIHVzZSBqUXVlcnkgdG8gY3VzdG9taXplIHRoaXMgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIGpRdWVyeShcImJvZHlcIikub24oXCJlZGRfY2FydF9pdGVtX2FkZGVkXCIsIHRoaXMuI29uQ2FydEl0ZW1BZGRlZCk7XG5cbiAgICAgICAgRE9NLmVkZC5vdmVybGF5Q2FydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25PdmVybGF5Q2FydENsaWNrKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XG4gICAgfTtcblxuICAgICNvbkNhcnRJdGVtQWRkZWQgPSAoZXZlbnQsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGZhZGVJbihET00uZWRkLm92ZXJsYXlDYXJ0KTtcblxuICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuYWRkKFwic2hvdy1jYXJ0XCIpO1xuXG4gICAgICAgIGlmICghIURPTS5lZGQucXVpY2tWaWV3TW9kYWwpIHtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcbiAgICAgICAgICAgIERPTS5odG1sLmNsYXNzTGlzdC5yZW1vdmUoXCJvd3AtcXYtb3BlblwiKTtcblxuICAgICAgICAgICAgZmFkZU91dChET00uZWRkLnF1aWNrVmlld01vZGFsKTtcblxuICAgICAgICAgICAgRE9NLmVkZC5xdWlja1ZpZXdNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmlzaWJsZVwiKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRE9NLmVkZC5xdWlja1ZpZXdDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk92ZXJsYXlDYXJ0Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgb3ZlcmxheUNhcnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGZhZGVPdXQob3ZlcmxheUNhcnQpO1xuICAgICAgICBET00uYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jYXJ0XCIpO1xuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCEhRE9NLmVkZC5vdmVybGF5Q2FydCkge1xuICAgICAgICAgICAgZmFkZU91dChvdmVybGF5Q2FydCk7XG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jYXJ0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxubmV3IEVkZERpc3BsYXlDYXJ0KCk7XG4iXX0=
