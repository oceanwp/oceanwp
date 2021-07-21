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

var _constants = require("../../constants");

var _delegate = _interopRequireDefault(require("delegate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onAddToCartBtnClick = /*#__PURE__*/new WeakMap();

var _updateCart = /*#__PURE__*/new WeakMap();

var _getFormData = /*#__PURE__*/new WeakMap();

var WooAjaxAddToCart = function WooAjaxAddToCart() {
  var _this = this;

  _classCallCheck(this, WooAjaxAddToCart);

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      (0, _delegate["default"])(_constants.DOM.body, ".product:not(.product-type-external) .single_add_to_cart_button:not(.disabled)", "click", _classPrivateFieldGet(_this, _onAddToCartBtnClick));
      /**
       * Because Woocommerce plugin uses jQuery custom event,
       * We also have to use jQuery to customize this event.
       */

      jQuery("body").on("added_to_cart", _classPrivateFieldGet(_this, _updateCart));
    }
  });

  _onAddToCartBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var addToCartBtn = event.delegateTarget;
      var form = addToCartBtn.closest("form.cart");

      var formData = _classPrivateFieldGet(_this, _getFormData).call(_this, form);

      if (formData.some(function (_ref) {
        var name = _ref.name;
        return name === "add-to-cart";
      })) {
        event.preventDefault();
        addToCartBtn.classList.remove("added");
        addToCartBtn.classList.add("loading");
        formData.forEach(function (dataItem) {
          if (dataItem.name == "add-to-cart") {
            var _form$querySelector;

            dataItem.name = "product_id";
            dataItem.value = ((_form$querySelector = form.querySelector("input[name=variation_id]")) === null || _form$querySelector === void 0 ? void 0 : _form$querySelector.value) || addToCartBtn.value;
          }
        });
        /**
         * Because Woocommerce plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event.
         */

        jQuery("body").trigger("adding_to_cart", [jQuery(addToCartBtn), formData]);
        /**
         * Because Woocommerce plugin uses jQuery dynamic nonce,
         * We also have to use jQuery to customize.
         */

        jQuery.ajax({
          type: "POST",
          url: woocommerce_params.wc_ajax_url.replace("%%endpoint%%", "add_to_cart"),
          data: formData,
          success: function success(response) {
            /**
             * Because Woocommerce plugin uses jQuery custom event,
             * We also have to use jQuery to customize this event.
             */
            jQuery("body").trigger("added_to_cart", [response.fragments, response.cart_hash, jQuery(addToCartBtn)]);

            if (_constants.options.cart_redirect_after_add === "yes") {
              window.location = _constants.options.cart_url;
              return;
            }
          }
        });
      }
    }
  });

  _updateCart.set(this, {
    writable: true,
    value: function value(e, fragments, cart_hash, $button) {
      var cartBtn = typeof $button === "undefined" ? false : $button.get(0);

      if (cartBtn) {
        cartBtn.classList.remove("loading");
        cartBtn.classList.add("added"); // Add view cart text.

        if (!_constants.options.is_cart && !cartBtn.parentNode.querySelector(".added_to_cart")) {
          cartBtn.insertAdjacentHTML("afterend", "<a href=\"".concat(_constants.options.cart_url, "\" class=\"added_to_cart wc-forward\" title=\"").concat(_constants.options.view_cart, "\">").concat(_constants.options.view_cart, "</a>"));
        }
      }
    }
  });

  _getFormData.set(this, {
    writable: true,
    value: function value(form) {
      form = form instanceof Element ? form : document.querySelector(form);
      var rCRLF = /\r?\n/g;
      return Array.from(form.elements).map(function (element, index) {
        var elementValue = element.value;
        var elementName = element.name;

        if (elementName === "product_id") {
          return true;
        }

        if (elementValue === null) {
          return true;
        } else if (element.nodeName === "checkbox" && element.checked == false) {
          return {
            name: elementName,
            value: ""
          };
        } else if (element.nodeName === "radio" && element.checked == false) {
          return {
            name: elementName,
            value: element.checked ? elementValue : ""
          };
        }

        return Array.isArray(elementValue) ? Array.from(elementValue).map(function (val, index) {
          return {
            name: elementName,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elementName,
          value: elementValue.replace(rCRLF, "\r\n")
        };
      });
    }
  });

  if (_constants.DOM.woo.product.classList.contains("product-type-grouped")) {
    return;
  }

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

jQuery(function () {
  new WooAjaxAddToCart();
});

},{"../../constants":1,"delegate":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./closest":3}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvd3AtcGx1Z2lucy93b29jb21tZXJjZS93b28tYWpheC1hZGQtdG8tY2FydC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2YsRUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQU8sQ0FBQyxhQUFsQyxDQUxHO0FBTWYsRUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBTkU7QUFPZixFQUFBLE1BQU0sRUFBRTtBQUNKLElBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBREY7QUFFSixJQUFBLFFBQVEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpREFBdkIsQ0FGTjtBQUdKLElBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlDQUF2QixDQUhSO0FBSUosSUFBQSxNQUFNLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FKSjtBQUtKLElBQUEsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBTFg7QUFNSixJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QiwyQ0FBdkIsQ0FOVDtBQU9KLElBQUEsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDRDQUF2QjtBQVBWLEdBUE87QUFnQmYsRUFBQSxJQUFJLEVBQUU7QUFDRixJQUFBLEdBQUcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qiw4Q0FBdkIsQ0FESDtBQUVGLElBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBRko7QUFHRixJQUFBLFVBQVUsRUFBRTtBQUNSLE1BQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1EQUF2QixDQURFO0FBRVIsTUFBQSxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkNBQXZCLENBRlA7QUFHUixNQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkI7QUFIRSxLQUhWO0FBUUYsSUFBQSxJQUFJLEVBQUU7QUFDRixNQUFBLFNBQVMsRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIseUNBQTFCLENBRFQ7QUFFRixNQUFBLGVBQWUsRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIscUNBQTFCLENBRmY7QUFHRixNQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsOENBQTFCO0FBSFosS0FSSjtBQWFGLElBQUEsUUFBUSxFQUFFO0FBQ04sTUFBQSxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCO0FBRFQ7QUFiUixHQWhCUztBQWlDZixFQUFBLFVBQVUsRUFBRTtBQUNSLElBQUEsR0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHdCQUF2QixDQURHO0FBRVIsSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBRko7QUFHUixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUhQO0FBSVIsSUFBQSxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkJBQXZCLENBSk47QUFLUixJQUFBLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQiwwQ0FBMUIsQ0FMZDtBQU1SLElBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QjtBQU5KLEdBakNHO0FBeUNmLEVBQUEsTUFBTSxFQUFFO0FBQ0osSUFBQSxLQUFLLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLHdCQUExQixDQURIO0FBRUosSUFBQSxRQUFRLEVBQUU7QUFDTixNQUFBLGVBQWUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QiwwQkFBdkIsQ0FEWDtBQUVOLE1BQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHNCQUF2QjtBQUZBLEtBRk47QUFNSixJQUFBLGFBQWEsRUFBRTtBQUNYLE1BQUEsZUFBZSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdDQUF2QixDQUROO0FBRVgsTUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0NBQXZCLENBRkM7QUFHWCxNQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qiw0QkFBdkI7QUFISyxLQU5YO0FBV0osSUFBQSxPQUFPLEVBQUU7QUFDTCxNQUFBLGVBQWUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEWjtBQUVMLE1BQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDRDQUF2QixDQUZMO0FBR0wsTUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCO0FBSEQ7QUFYTCxHQXpDTztBQTBEZixFQUFBLE1BQU0sRUFBRTtBQUNKLElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QjtBQUROLEdBMURPO0FBNkRmLEVBQUEsTUFBTSxFQUFFO0FBQ0osSUFBQSxTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FEUDtBQUVKLElBQUEsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQUZIO0FBR0osSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsOEJBQXZCLENBSFI7QUFJSixJQUFBLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHNCQUF2QixDQUpmO0FBS0osSUFBQSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qix1QkFBdkI7QUFMbkIsR0E3RE87QUFvRWYsRUFBQSxJQUFJLEVBQUU7QUFDRixJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0JBQTFCO0FBRFosR0FwRVM7QUF1RWYsRUFBQSxHQUFHLEVBQUU7QUFDRCxJQUFBLEtBQUssRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBRE47QUFFRCxJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGWjtBQUdELElBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQiw0QkFBMUIsQ0FIWjtBQUlELElBQUEsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBSmY7QUFLRCxJQUFBLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QjtBQUxqQixHQXZFVTtBQThFZixFQUFBLEdBQUcsRUFBRTtBQUNELElBQUEsZUFBZSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQURoQjtBQUVELElBQUEsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDBCQUF2QixDQUZSO0FBR0QsSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLDBCQUExQixDQUhaO0FBSUQsSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLHVDQUExQixDQUpYO0FBS0QsSUFBQSxjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLDZCQUExQixDQUxmO0FBTUQsSUFBQSxvQkFBb0IsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FOckI7QUFPRCxJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQ0FBdkIsQ0FQTDtBQVFELElBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtDQUF2QixDQVJMO0FBU0QsSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsNENBQXZCLENBVFo7QUFVRCxJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0NBQTFCLENBVmI7QUFXRCxJQUFBLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1EQUF2QixDQVgxQjtBQVlELElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHdCQUF2QixDQVpUO0FBYUQsSUFBQSxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkJBQXZCLENBYmI7QUFjRCxJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FkZDtBQWVELElBQUEsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQWZmO0FBZ0JELElBQUEsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsd0JBQXZCLENBaEJqQjtBQWlCRCxJQUFBLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDJCQUF2QixDQWpCdkI7QUFrQkQsSUFBQSx1QkFBdUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FsQnhCO0FBbUJELElBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBbkJaO0FBb0JELElBQUEsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIseUJBQXZCLENBcEJyQjtBQXFCRCxJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQXJCWDtBQXNCRCxJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQXRCWjtBQXVCRCxJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0F2Qlo7QUF3QkQsSUFBQSxtQkFBbUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0F4QnBCO0FBeUJELElBQUEsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBekJwQjtBQTBCRCxJQUFBLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0NBQTFCLENBMUJmO0FBMkJELElBQUEsU0FBUyxFQUFFO0FBQ1AsTUFBQSxLQUFLLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FEQTtBQUVQLE1BQUEsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QjtBQUZGO0FBM0JWO0FBOUVVLENBQVo7O0FBZ0hBLElBQU0sU0FBUyxHQUFHLEVBQWxCOzs7Ozs7QUNsSFA7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU0sZ0IsR0FDRiw0QkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxXQVFTLGlCQUFNO0FBQ3pCLGdDQUNJLGVBQUksSUFEUixFQUVJLGdGQUZKLEVBR0ksT0FISix3QkFJSSxLQUpKO0FBT0E7QUFDUjtBQUNBO0FBQ0E7O0FBQ1EsTUFBQSxNQUFNLENBQUMsTUFBRCxDQUFOLENBQWUsRUFBZixDQUFrQixlQUFsQix3QkFBbUMsS0FBbkM7QUFDSDtBQXJCYTs7QUFBQTtBQUFBO0FBQUEsV0F1QlMsZUFBQyxLQUFELEVBQVc7QUFDOUIsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxjQUEzQjtBQUNBLFVBQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFiLENBQXFCLFdBQXJCLENBQWI7O0FBQ0EsVUFBTSxRQUFRLHlCQUFHLEtBQUgscUJBQUcsS0FBSCxFQUFxQixJQUFyQixDQUFkOztBQUVBLFVBQUksUUFBUSxDQUFDLElBQVQsQ0FBYztBQUFBLFlBQUcsSUFBSCxRQUFHLElBQUg7QUFBQSxlQUFjLElBQUksS0FBSyxhQUF2QjtBQUFBLE9BQWQsQ0FBSixFQUF5RDtBQUNyRCxRQUFBLEtBQUssQ0FBQyxjQUFOO0FBRUEsUUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixNQUF2QixDQUE4QixPQUE5QjtBQUNBLFFBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsU0FBM0I7QUFFQSxRQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUMsUUFBRCxFQUFjO0FBQzNCLGNBQUksUUFBUSxDQUFDLElBQVQsSUFBaUIsYUFBckIsRUFBb0M7QUFBQTs7QUFDaEMsWUFBQSxRQUFRLENBQUMsSUFBVCxHQUFnQixZQUFoQjtBQUNBLFlBQUEsUUFBUSxDQUFDLEtBQVQsR0FDSSx3QkFBQSxJQUFJLENBQUMsYUFBTCxDQUFtQiwwQkFBbkIsNkVBQWdELEtBQWhELEtBQXlELFlBQVksQ0FBQyxLQUQxRTtBQUVIO0FBQ0osU0FORDtBQVFBO0FBQ1o7QUFDQTtBQUNBOztBQUNZLFFBQUEsTUFBTSxDQUFDLE1BQUQsQ0FBTixDQUFlLE9BQWYsQ0FBdUIsZ0JBQXZCLEVBQXlDLENBQUMsTUFBTSxDQUFDLFlBQUQsQ0FBUCxFQUF1QixRQUF2QixDQUF6QztBQUVBO0FBQ1o7QUFDQTtBQUNBOztBQUNZLFFBQUEsTUFBTSxDQUFDLElBQVAsQ0FBWTtBQUNSLFVBQUEsSUFBSSxFQUFFLE1BREU7QUFFUixVQUFBLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxXQUFuQixDQUErQixPQUEvQixDQUF1QyxjQUF2QyxFQUF1RCxhQUF2RCxDQUZHO0FBR1IsVUFBQSxJQUFJLEVBQUUsUUFIRTtBQUtSLFVBQUEsT0FBTyxFQUFFLGlCQUFVLFFBQVYsRUFBb0I7QUFDekI7QUFDcEI7QUFDQTtBQUNBO0FBQ29CLFlBQUEsTUFBTSxDQUFDLE1BQUQsQ0FBTixDQUFlLE9BQWYsQ0FBdUIsZUFBdkIsRUFBd0MsQ0FDcEMsUUFBUSxDQUFDLFNBRDJCLEVBRXBDLFFBQVEsQ0FBQyxTQUYyQixFQUdwQyxNQUFNLENBQUMsWUFBRCxDQUg4QixDQUF4Qzs7QUFNQSxnQkFBSSxtQkFBUSx1QkFBUixLQUFvQyxLQUF4QyxFQUErQztBQUMzQyxjQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLG1CQUFRLFFBQTFCO0FBQ0E7QUFDSDtBQUNKO0FBcEJPLFNBQVo7QUFzQkg7QUFDSjtBQTdFYTs7QUFBQTtBQUFBO0FBQUEsV0ErRUEsZUFBQyxDQUFELEVBQUksU0FBSixFQUFlLFNBQWYsRUFBMEIsT0FBMUIsRUFBc0M7QUFDaEQsVUFBTSxPQUFPLEdBQUcsT0FBTyxPQUFQLEtBQW1CLFdBQW5CLEdBQWlDLEtBQWpDLEdBQXlDLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBWixDQUF6RDs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNULFFBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsU0FBekI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLE9BQXRCLEVBRlMsQ0FJVDs7QUFDQSxZQUFJLENBQUMsbUJBQVEsT0FBVCxJQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFSLENBQW1CLGFBQW5CLENBQWlDLGdCQUFqQyxDQUF6QixFQUE2RTtBQUN6RSxVQUFBLE9BQU8sQ0FBQyxrQkFBUixDQUNJLFVBREosc0JBRWdCLG1CQUFRLFFBRnhCLDJEQUU2RSxtQkFBUSxTQUZyRixnQkFFbUcsbUJBQVEsU0FGM0c7QUFJSDtBQUNKO0FBQ0o7QUE5RmE7O0FBQUE7QUFBQTtBQUFBLFdBZ0dDLGVBQUMsSUFBRCxFQUFVO0FBQ3JCLE1BQUEsSUFBSSxHQUFHLElBQUksWUFBWSxPQUFoQixHQUEwQixJQUExQixHQUFpQyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF4QztBQUNBLFVBQU0sS0FBSyxHQUFHLFFBQWQ7QUFFQSxhQUFPLEtBQUssQ0FBQyxJQUFOLENBQVcsSUFBSSxDQUFDLFFBQWhCLEVBQTBCLEdBQTFCLENBQThCLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDckQsWUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQTdCO0FBQ0EsWUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQTVCOztBQUVBLFlBQUksV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQzlCLGlCQUFPLElBQVA7QUFDSDs7QUFFRCxZQUFJLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN2QixpQkFBTyxJQUFQO0FBQ0gsU0FGRCxNQUVPLElBQUksT0FBTyxDQUFDLFFBQVIsS0FBcUIsVUFBckIsSUFBbUMsT0FBTyxDQUFDLE9BQVIsSUFBbUIsS0FBMUQsRUFBaUU7QUFDcEUsaUJBQU87QUFBRSxZQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCLFlBQUEsS0FBSyxFQUFFO0FBQTVCLFdBQVA7QUFDSCxTQUZNLE1BRUEsSUFBSSxPQUFPLENBQUMsUUFBUixLQUFxQixPQUFyQixJQUFnQyxPQUFPLENBQUMsT0FBUixJQUFtQixLQUF2RCxFQUE4RDtBQUNqRSxpQkFBTztBQUFFLFlBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUIsWUFBQSxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQVIsR0FBa0IsWUFBbEIsR0FBaUM7QUFBN0QsV0FBUDtBQUNIOztBQUVELGVBQU8sS0FBSyxDQUFDLE9BQU4sQ0FBYyxZQUFkLElBQ0QsS0FBSyxDQUFDLElBQU4sQ0FBVyxZQUFYLEVBQXlCLEdBQXpCLENBQTZCLFVBQUMsR0FBRCxFQUFNLEtBQU4sRUFBZ0I7QUFDekMsaUJBQU87QUFBRSxZQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCLFlBQUEsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFKLENBQVksS0FBWixFQUFtQixNQUFuQjtBQUE1QixXQUFQO0FBQ0gsU0FGRCxDQURDLEdBSUQ7QUFBRSxVQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCLFVBQUEsS0FBSyxFQUFFLFlBQVksQ0FBQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLE1BQTVCO0FBQTVCLFNBSk47QUFLSCxPQXJCTSxDQUFQO0FBc0JIO0FBMUhhOztBQUNWLE1BQUksZUFBSSxHQUFKLENBQVEsT0FBUixDQUFnQixTQUFoQixDQUEwQixRQUExQixDQUFtQyxzQkFBbkMsQ0FBSixFQUFnRTtBQUM1RDtBQUNIOztBQUVEO0FBQ0gsQzs7QUF1SEwsTUFBTSxDQUFDLFlBQVk7QUFDZixNQUFJLGdCQUFKO0FBQ0gsQ0FGSyxDQUFOOzs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHBhcmFsbGF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LWZvb3RlclwiKSxcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsLXRvcFwiKSxcclxuICAgICAgICBnb1RvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGdvVG9wU2xhc2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZSBhW2hyZWY9XCIvI2dvLXRvcFwiXScpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIiksXHJcbiAgICAgICAgaW5maW5pdGVTY3JvbGxXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZmluaXRlLXNjcm9sbC13cmFwXCIpLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBtYXNvbnJ5R3JpZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1tYXNvbnJ5LWdyaWRcIiksXHJcbiAgICB9LFxyXG4gICAgZWRkOiB7XHJcbiAgICAgICAgY2FydHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRkLW1lbnUtaWNvblwiKSxcclxuICAgICAgICBvdmVybGF5Q2FydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtY2FydC1vdmVybGF5XCIpLFxyXG4gICAgICAgIHRvdGFsUHJpY2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZG1lbnVjYXJ0LWRldGFpbHMudG90YWxcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3TW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgcXVpY2tWaWV3Q29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgIH0sXHJcbiAgICB3b286IHtcclxuICAgICAgICByZXNldFZhcmlhdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRfdmFyaWF0aW9uc1wiKSxcclxuICAgICAgICBwcm9kdWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0XCIpLFxyXG4gICAgICAgIGFsbFByb2R1Y3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIHVsLnByb2R1Y3RzXCIpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vLWRyb3Bkb3duLWNhdCAucHJvZHVjdC1jYXRlZ29yaWVzXCIpLFxyXG4gICAgICAgIHZlcnRpY2FsVGh1bWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIHRodW1ic1ZlcnRpY2FsTGF5b3V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC10aHVtYnMtbGF5b3V0LXZlcnRpY2FsXCIpLFxyXG4gICAgICAgIGdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1ncmlkLWxpc3QgI29jZWFud3AtZ3JpZFwiKSxcclxuICAgICAgICBsaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWxpc3RcIiksXHJcbiAgICAgICAgcHJvZHVjdFRhYnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXRhYnNcIiksXHJcbiAgICAgICAgcHJvZHVjdENhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC5jYXJ0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RDdXN0b21lclJldmlld0xpbms6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpLFxyXG4gICAgICAgIHF1YW50aXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSxcclxuICAgICAgICBjaGVja291dEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLFxyXG4gICAgICAgIGNoZWNrb3V0TG9naW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfbG9naW5cIiksXHJcbiAgICAgICAgY2hlY2tvdXRDb3Vwb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tvdXRfY291cG9uXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0VGltZWxpbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLWNoZWNrb3V0LXRpbWVsaW5lXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyQmlsbGluZ0RldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfYmlsbGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIGN1c3RvbWVyU2hpcHBpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX3NoaXBwaW5nX2RldGFpbHNcIiksXHJcbiAgICAgICAgb3JkZXJSZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXJfcmV2aWV3XCIpLFxyXG4gICAgICAgIG9yZGVyQ2hlY2tvdXRQYXltZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX2NoZWNrb3V0X3BheW1lbnRcIiksXHJcbiAgICAgICAgcGxhY2VPcmRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZV9vcmRlclwiKSxcclxuICAgICAgICBmb3JtQWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2FjdGlvbnNcIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlTmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1hY2NvdW50LWxpbmtzXCIpLFxyXG4gICAgICAgIGd1ZXN0QWNjb3VudFBhZ2VCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXJfbG9naW5cIiksXHJcbiAgICAgICAgcXVhbnRpdHlJbnB1dHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHk6bm90KC5idXR0b25zX2FkZGVkKSAucXR5XCIpLFxyXG4gICAgICAgIHF1aWNrVmlldzoge1xyXG4gICAgICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtd3JhcFwiKSxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvd3AtcXYtY29udGVudFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01TdHJpbmcgPSB7fTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuXG5jbGFzcyBXb29BamF4QWRkVG9DYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKERPTS53b28ucHJvZHVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9kdWN0LXR5cGUtZ3JvdXBlZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBkZWxlZ2F0ZShcbiAgICAgICAgICAgIERPTS5ib2R5LFxuICAgICAgICAgICAgXCIucHJvZHVjdDpub3QoLnByb2R1Y3QtdHlwZS1leHRlcm5hbCkgLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b246bm90KC5kaXNhYmxlZClcIixcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuI29uQWRkVG9DYXJ0QnRuQ2xpY2tcbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQmVjYXVzZSBXb29jb21tZXJjZSBwbHVnaW4gdXNlcyBqUXVlcnkgY3VzdG9tIGV2ZW50LFxuICAgICAgICAgKiBXZSBhbHNvIGhhdmUgdG8gdXNlIGpRdWVyeSB0byBjdXN0b21pemUgdGhpcyBldmVudC5cbiAgICAgICAgICovXG4gICAgICAgIGpRdWVyeShcImJvZHlcIikub24oXCJhZGRlZF90b19jYXJ0XCIsIHRoaXMuI3VwZGF0ZUNhcnQpO1xuICAgIH07XG5cbiAgICAjb25BZGRUb0NhcnRCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydEJ0biA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuICAgICAgICBjb25zdCBmb3JtID0gYWRkVG9DYXJ0QnRuLmNsb3Nlc3QoXCJmb3JtLmNhcnRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy4jZ2V0Rm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLnNvbWUoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImFkZC10by1jYXJ0XCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBhZGRUb0NhcnRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFkZGVkXCIpO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICAgICAgICBmb3JtRGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbS5uYW1lID09IFwiYWRkLXRvLWNhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhSXRlbS5uYW1lID0gXCJwcm9kdWN0X2lkXCI7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9dmFyaWF0aW9uX2lkXVwiKT8udmFsdWUgfHwgYWRkVG9DYXJ0QnRuLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEJlY2F1c2UgV29vY29tbWVyY2UgcGx1Z2luIHVzZXMgalF1ZXJ5IGN1c3RvbSBldmVudCxcbiAgICAgICAgICAgICAqIFdlIGFsc28gaGF2ZSB0byB1c2UgalF1ZXJ5IHRvIGN1c3RvbWl6ZSB0aGlzIGV2ZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqUXVlcnkoXCJib2R5XCIpLnRyaWdnZXIoXCJhZGRpbmdfdG9fY2FydFwiLCBbalF1ZXJ5KGFkZFRvQ2FydEJ0biksIGZvcm1EYXRhXSk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQmVjYXVzZSBXb29jb21tZXJjZSBwbHVnaW4gdXNlcyBqUXVlcnkgZHluYW1pYyBub25jZSxcbiAgICAgICAgICAgICAqIFdlIGFsc28gaGF2ZSB0byB1c2UgalF1ZXJ5IHRvIGN1c3RvbWl6ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIHVybDogd29vY29tbWVyY2VfcGFyYW1zLndjX2FqYXhfdXJsLnJlcGxhY2UoXCIlJWVuZHBvaW50JSVcIiwgXCJhZGRfdG9fY2FydFwiKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcblxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogQmVjYXVzZSBXb29jb21tZXJjZSBwbHVnaW4gdXNlcyBqUXVlcnkgY3VzdG9tIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgKiBXZSBhbHNvIGhhdmUgdG8gdXNlIGpRdWVyeSB0byBjdXN0b21pemUgdGhpcyBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcImJvZHlcIikudHJpZ2dlcihcImFkZGVkX3RvX2NhcnRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZnJhZ21lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY2FydF9oYXNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGFkZFRvQ2FydEJ0biksXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNhcnRfcmVkaXJlY3RfYWZ0ZXJfYWRkID09PSBcInllc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBvcHRpb25zLmNhcnRfdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICN1cGRhdGVDYXJ0ID0gKGUsIGZyYWdtZW50cywgY2FydF9oYXNoLCAkYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnRCdG4gPSB0eXBlb2YgJGJ1dHRvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogJGJ1dHRvbi5nZXQoMCk7XG5cbiAgICAgICAgaWYgKGNhcnRCdG4pIHtcbiAgICAgICAgICAgIGNhcnRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICBjYXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRlZFwiKTtcblxuICAgICAgICAgICAgLy8gQWRkIHZpZXcgY2FydCB0ZXh0LlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlzX2NhcnQgJiYgIWNhcnRCdG4ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLmFkZGVkX3RvX2NhcnRcIikpIHtcbiAgICAgICAgICAgICAgICBjYXJ0QnRuLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICAgICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiR7b3B0aW9ucy5jYXJ0X3VybH1cIiBjbGFzcz1cImFkZGVkX3RvX2NhcnQgd2MtZm9yd2FyZFwiIHRpdGxlPVwiJHtvcHRpb25zLnZpZXdfY2FydH1cIj4ke29wdGlvbnMudmlld19jYXJ0fTwvYT5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjZ2V0Rm9ybURhdGEgPSAoZm9ybSkgPT4ge1xuICAgICAgICBmb3JtID0gZm9ybSBpbnN0YW5jZW9mIEVsZW1lbnQgPyBmb3JtIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtKTtcbiAgICAgICAgY29uc3QgckNSTEYgPSAvXFxyP1xcbi9nO1xuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50TmFtZSA9IGVsZW1lbnQubmFtZTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnROYW1lID09PSBcInByb2R1Y3RfaWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09IFwiY2hlY2tib3hcIiAmJiBlbGVtZW50LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBlbGVtZW50TmFtZSwgdmFsdWU6IFwiXCIgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJyYWRpb1wiICYmIGVsZW1lbnQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IGVsZW1lbnROYW1lLCB2YWx1ZTogZWxlbWVudC5jaGVja2VkID8gZWxlbWVudFZhbHVlIDogXCJcIiB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShlbGVtZW50VmFsdWUpXG4gICAgICAgICAgICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnRWYWx1ZSkubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogZWxlbWVudE5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZShyQ1JMRiwgXCJcXHJcXG5cIikgfTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiB7IG5hbWU6IGVsZW1lbnROYW1lLCB2YWx1ZTogZWxlbWVudFZhbHVlLnJlcGxhY2UockNSTEYsIFwiXFxyXFxuXCIpIH07XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmpRdWVyeShmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFdvb0FqYXhBZGRUb0NhcnQoKTtcbn0pO1xuIiwidmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuIiwidmFyIGNsb3Nlc3QgPSByZXF1aXJlKCcuL2Nsb3Nlc3QnKTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuIl19
