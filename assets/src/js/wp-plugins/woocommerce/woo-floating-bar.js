import { options } from "../../constants";
import { offset } from "../../lib/utils";
import delegate from "delegate";
import axios from "axios";
import qs from "qs";

class WooFloatingBar {
  #elements = {
    floatingBar: document.querySelector(".owp-floating-bar"),
  };
  #offset;
  #tabsTopOffset;

  constructor() {
    if (!!this.#elements.floatingBar) {
      this.#setElements();
      this.#start();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      header: document.querySelector("#site-header"),
      productTabs: document.querySelector(
        ".woocommerce div.product .woocommerce-tabs"
      ),
      WPAdminbar: document.querySelector("#wpadminbar"),
      productCarts: document.querySelectorAll(".woocommerce div.product .cart"),
      html: document.querySelector("html"),
      quantity: document.querySelector('input[name="quantity"]'),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    document.addEventListener("scroll", this.#onDocumentScroll);

    window.addEventListener("scroll", this.#onWindowScroll);

    this.#elements.floatingBar
      ?.querySelector("button.button.top")
      ?.addEventListener("click", this.#onTopBtnClick);

    delegate(
      document.body,
      ".owp-floating-bar .floating_add_to_cart_button",
      "click",
      this.#onAddToCartBtnClick
    );

    /**
     * Because Woocommerce plugin uses jQuery custom event,
     * We also have to use jQuery to customize this event
     */
    jQuery(document.body).on("added_to_cart", this.#updateCart);
  };

  #onDocumentScroll = (event) => {
    const header = this.#elements.header;
    const stickyTopbarWrapper = document.querySelector(
      "#top-bar-sticky-wrapper"
    );

    this.#offset = 0;
    this.#tabsTopOffset = !!this.#elements.productTabs
      ? offset(this.#elements.productTabs).top
      : 0;

    // Adminbar offset
    if (!!this.#elements.WPAdminbar && window.innerWidth > 600) {
      this.#offset = this.#offset + this.#elements.WPAdminbar.offsetHeight;
    }

    // Sticky topbar offset
    if (!!stickyTopbarWrapper) {
      this.#offset = this.#offset + stickyTopbarWrapper.offsetHeight;
    }

    // Sticky header
    if (!!header) {
      if (header.classList.contains("top-header")) {
        this.#offset =
          this.#offset + header.querySelector(".header-top")?.offsetHeight;
      } else if (header.classList.contains("medium-header")) {
        if (
          header
            .querySelector(".bottom-header-wrap")
            ?.classList.contains("fixed-scroll")
        ) {
          this.#offset =
            this.#offset +
            header.querySelector(".bottom-header-wrap").offsetHeight;
        } else {
          this.#offset =
            this.#offset +
            document.querySelector(".is-sticky #site-header-inner")
              ?.offsetHeight;
        }
      } else if (
        header.classList.contains("center-header") ||
        header.classList.contains("custom-header")
      ) {
        this.#offset = this.#offset + header.offsetHeight;
      } else if (header.classList.contains("fixed-scroll")) {
        this.#offset =
          this.#offset + parseInt(header.getAttribute("data-height"));
      }
    }

    this.#tabsTopOffset =
      this.#tabsTopOffset !== 0 ? this.#tabsTopOffset - this.#offset : 0;

    this.#elements.floatingBar.style.top = `${this.#offset}px`;
  };

  #onWindowScroll = (event) => {
    if (this.#tabsTopOffset !== 0) {
      if (window.pageYOffset > this.#tabsTopOffset) {
        this.#elements.floatingBar.classList.add("show");
      } else {
        this.#elements.floatingBar.classList.remove("show");
      }
    } else {
      if (window.pageYOffset > this.#offset) {
        this.#elements.floatingBar.classList.add("show");
      } else {
        this.#elements.floatingBar.classList.remove("show");
      }
    }
  };

  #onTopBtnClick = (event) => {
    event.preventDefault();

    if (!!this.#elements.productCarts) {
      const scrollPosition =
        offset(this.#elements.productCarts[0]).top - this.#offset;

      this.#elements.html.scrollTo({
        top: Math.round(scrollPosition),
        behavior: "smooth",
      });
    }
  };

  #onAddToCartBtnClick = (event) => {
    event.preventDefault();

    const addToCartBtn = event.delegateTarget;
    const productID = addToCartBtn.value;
    const quantity = this.#elements.quantity.value;

    addToCartBtn.classList.remove("added");
    addToCartBtn.classList.add("loading");

    axios
      .post(
        options.ajax_url,
        qs.stringify({
          action: "oceanwp_add_cart_floating_bar",
          nonce: options.nonce,
          product_id: productID,
          quantity: quantity,
        })
      )
      .then(({ data }) => {
        /**
         * Because Woocommerce plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event
         */
        jQuery(document.body).trigger("wc_fragment_refresh");
        jQuery(document.body).trigger("added_to_cart", [
          null,
          null,
          jQuery(addToCartBtn),
        ]);

        // Redirect to cart option
        if (options.cart_redirect_after_add === "yes") {
          window.location = options.cart_url;
          return;
        }
      });
  };

  #updateCart = (e, fragments, cart_hash, $button) => {
    const cartBtn = typeof $button === "undefined" ? false : $button.get(0);

    if (!!cartBtn) {
      cartBtn.classList.remove("loading");
      cartBtn.classList.add("added");

      // View cart text.
      if (
        !options.is_cart &&
        !cartBtn.parentNode.querySelector(".added_to_cart")
      ) {
        cartBtn.insertAdjacentHTML(
          "afterend",
          `<a href="${options.cart_url}" class="added_to_cart wc-forward" title="${options.view_cart}">${options.view_cart}</a>`
        );
      }
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  new WooFloatingBar();
});
